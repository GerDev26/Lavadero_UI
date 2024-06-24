import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { UserTable } from '../components/Table'

export function AdminCrud (): JSX.Element {
  const handleSubmit = (event) => {
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
  }

  return (
    <>
      <Navbar />
      <div className='flex flex-col gap-4 p-4'>
        <div className='w-full flex justify-between'>
          <UserTable />

          <section className='w-full flex flex-col rounded-lg items-end justify-center relative'>
            <div className=' bg-gray-50 p-10 w-fit sticky top-10'>
              <h3 className='text-3xl text-center font-bold uppercase my-4'>Cargar usuario</h3>
              <form onSubmit={handleSubmit} className='grid grid-cols-2 grid-flow-row gap-2 max-w-96'>
                <InputText text='nombre' />
                <InputText text='apellido' />
                <InputNumber text='telefono' />
                <InputEmail text='email' />
                <InputPassword text='contraseña' />
                <button className='w-full bg-green-700 text-white text-xl rounded-lg first:col-span-2 font-semibold'>Nuevo Usuario</button>
              </form>
              <div className='grid grid-cols-2 grid-rows-2 gap-1 h-28 w-full max-w-96'>
                <button role='button' className='w-full bg-red-700 text-white text-xl rounded-lg font-semibold'>Eliminar Usuario</button>
                <button role='button' className='w-full bg-yellow-700 text-white text-xl rounded-lg font-semibold'>Modificar Usuario</button>
              </div>
            </div>

          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}
function InputEmail ({ text }: { text: string }): JSX.Element {
  return (
    <Input text={text} message='Email no valido' type='email' />
  )
}
function InputText ({ text }: { text: string }): JSX.Element {
  return (
    <Input text={text} message='Texto con error' type='text' />
  )
}
function InputNumber ({ text }: { text: string }): JSX.Element {
  return (
    <Input text={text} message='Numero incorrecto' type='number' />
  )
}
function InputPassword ({ text }: { text: string }): JSX.Element {
  return (
    <Input text={text} message='Contraseña no valida' type='password' />
  )
}

function Input ({ text, type, message }: { text: string, type: string, message: string }): JSX.Element {
  return (
    <label className='w-full flex flex-col'>
      <span className='text-lg text-gray-950 font-semibold capitalize'>{text}</span>
      <input className='peer w-full p-2 bg-gray-200 border-b-4 border-gray-400 rounded-sm focus:border-black invalid:border-red-600 correct:border-green-500' placeholder={'Ingrese su ' + text} name={text} type={type} />
      <p className='mt-1 invisible peer-invalid:visible text-red-600 text-sm'>
        {message}.
      </p>
    </label>
  )
}
