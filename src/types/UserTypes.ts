export interface User {
  readonly id: string
  name: string
  surname: string
  phone_number: string
  password: string
  email: string
}
export interface UserStates {
  users: User[]
  // otras propiedades del estado pueden ir aquí
}
