import { USERS_ENDPOINT } from '../resources/myApi'
import { User } from '../types/UserTypes'

export function DeleteUser (id: string): boolean {
  fetch(USERS_ENDPOINT + id, { method: 'DELETE' })
    .then(async res => await res.json())
    .then(() => { return true })
    .catch(() => { return false })

  return false
}

export function CreateUser (user: User[]): void {
  fetch(USERS_ENDPOINT + user, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
}
