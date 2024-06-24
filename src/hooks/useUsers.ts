import { useEffect, useState } from 'react'
import { USERS_ENDPOINT } from '../resources/myApi'
import { User } from '../types/UserTypes'

export function useAllUsers (): User[] {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch(USERS_ENDPOINT)
      .then(async res => await res.json())
      .then(data => {
        setUsers(data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return users
}
