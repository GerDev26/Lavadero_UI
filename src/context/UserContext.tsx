import { createContext, useReducer, ReactNode } from 'react'
import { User, UserStates } from '../types/UserTypes'
import { userReducer } from '../reducers/UserReducer'
import { CreateUser, DeleteUser } from '../services/userServices'

interface UsersContextType {
  users: User[]
  addUser: (newUser: User) => Promise<void>
  setUsers: (newUserlist: User[]) => void
  deleteUser: (selectedUser: User) => Promise<void>
  updateUser: (selectedUser: User, modifyUser: User) => void
}

const initialState: UserStates = {
  users: []
  // inicializaciones de otras propiedades del estado
}

export const UsersContext = createContext<UsersContextType>({
  users: initialState.users,
  addUser: async () => {},
  setUsers: () => {},
  deleteUser: async () => {},
  updateUser: () => {}
})

export const UsersProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [state, dispatch] = useReducer(userReducer, initialState)

  const addUser = async (newUser: User): Promise<void> => {
    dispatch({ type: 'ADD_USER', user: newUser })
    try {
      const modifyUser = await CreateUser(newUser)
      dispatch({ type: 'UPDATE_USER', user: newUser, modifyUser })
    } catch (error) {
      console.error('Error adding user:', error)
      dispatch({ type: 'DELETE_USER', user: newUser })
    }
  }

  const setUsers = (newUserlist: User[]): void => {
    dispatch({ type: 'SET_USERS', userList: newUserlist })
  }

  const deleteUser = async (selectedUser: User): Promise<void> => {
    const prevUserState = [...state.users]
    dispatch({ type: 'DELETE_USER', user: selectedUser })
    try {
      await DeleteUser(selectedUser.id)
    } catch (error) {
      console.error('Error deleting user:', error)
      dispatch({ type: 'SET_USERS', userList: prevUserState })
    }
  }

  const updateUser = (selectedUser: User, modifyUser: User): void => {
    dispatch({ type: 'UPDATE_USER', user: selectedUser, modifyUser })
  }

  return (
    <UsersContext.Provider value={{ users: state.users, addUser, setUsers, deleteUser, updateUser }}>
      {children}
    </UsersContext.Provider>
  )
}
