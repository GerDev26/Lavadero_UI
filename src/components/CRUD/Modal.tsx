import { XMarkIcon } from '@heroicons/react/20/solid'
import { InputEmail, InputPassword, InputText } from '../Input'
import { useContext, useId } from 'react'
import { ModalContext } from '../../context/ModalContext'
import { UsersContext } from '../../context/UserContext'

export function Modal (): JSX.Element {
  const userId = useId()
  const { addUser } = useContext(UsersContext)
  const { modal, setModal } = useContext(ModalContext)

  const handleClose = (): void => {
    setModal(false)
  }
  const handleSubmit = (event: any): void => {
    event.preventDefault()
    const query = Object.fromEntries(new window.FormData(event.target))
    const formattedQuery = {
      id: userId,
      name: query.nombre,
      surname: query.apellido,
      phone_number: query.telefono,
      password: query.contraseña,
      email: query.email,
      rol: query.rol
    }
    addUser(formattedQuery)
    console.log(formattedQuery)
  }
  const className = modal ? 'flex' : 'hidden'
  return (
    <div className={`fixed top-0 left-0 w-screen h-screen z-40 items-center justify-center ${className}`}>
      <div className='absolute w-full h-full bg-black opacity-55' />
      <form onSubmit={handleSubmit} className='relative m-auto w-fit px-24 py-10 bg-white'>
        <button type='button' onClick={handleClose} className='transition duration-150 group w-8 h-6 absolute top-0 right-0 hover:bg-red-700'><XMarkIcon className='w-6 text-red-600 m-auto group-hover:text-white' /></button>
        <h1 className='mb-2 uppercase text-3xl font-semibold'>Crear usuario</h1>
        <div className='grid grid-cols-2 grid-rows-3 w-fit gap-4'>
          <InputEmail text='email' />
          <InputPassword text='contraseña' />
          <InputText text='nombre' />
          <InputText text='apellido' />
          <InputText text='telefono' />
          <InputText text='rol' />
        </div>
        <button className='absolute bottom-2 right-2 uppercase bg-green-600 text-white p-2 rounded-md font-semibold'> Crear usuario </button>
      </form>
    </div>
  )
}
