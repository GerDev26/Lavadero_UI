import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { UserTable } from '../components/CRUD/Table'
import { PlusCircleIcon } from '@heroicons/react/20/solid'
import { UsersContext, UsersProvider } from '../context/UserContext'
import { useContext, useId } from 'react'
import { Modal } from '../components/CRUD/Modal'

export function AdminCrud (): JSX.Element {
  /*   const handleSubmit = (event: any): void => {
    event.preventDefault()
    const query = Object.fromEntries(new window.FormData(event.target))
    const formattedQuery = {
      name: query.nombre,
      surname: query.apellido,
      phone_number: query.telefono,
      password: query.contraseña,
      email: query.email
    }
    console.log(formattedQuery)
  } */

  return (
    <UsersProvider>
      <Navbar />
      {/* <Modal /> */}

      <div className='m-auto w-fit'>
        <AddUserBtn />
        <UserTable />
      </div>
      <Footer />
    </UsersProvider>
  )
}

function AddUserBtn (): JSX.Element {
  const { addUser } = useContext(UsersContext)
  const userId = useId()

  const user = {
    id: userId,
    name: 'German',
    surname: 'Canteros',
    phone_number: '423123123123',
    password: '222wekgnwekngewkjgn2',
    email: 'erjnweijgj@aasasdsdw.com'
  }

  return (
    <button onClick={async () => await addUser(user)} className='p-2 text-white rounded-s bg-green-700 flex gap-2'>
      <p>Añadir usuario</p>
      <PlusCircleIcon className='w-6' />
    </button>
  )
}
