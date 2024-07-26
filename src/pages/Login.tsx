import { InputEmail, InputPassword } from '../components/Input'

export function Login (): JSX.Element {
  return (

    <main className='relative w-full h-screen flex items-center justify-center'>
      <div className='relative w-[75%] max-w-[800px] z-20 h-[80vh] max-h-[450px] flex rounded-lg overflow-hidden'>
        <div className='relative h-full w-full px-8 flex flex-col items-center'>
          <div className=' relative z-10 text-white mt-14 gap-3 flex flex-col'>
            <h1 className='text-4xl font-bold'>Bienvenido a RFcarwash</h1>
            <p className='text-xl font-medium'>Optimiza cada aspecto de tu lavadero y brinda un servicio impecable a tus clientes.</p>
          </div>
          <div className='z-0 absolute top-0 w-full h-full bg-black opacity-50' />
        </div>
        <form className='w-fit h-full p-8 bg-gray-50 flex flex-col justify-center'>
          <h1 className='text-3xl mb-4 font-medium text-center'>Iniciar Sesion</h1>
          <InputEmail text='Email' />
          <InputPassword text='Contraseña' />
          <button className='transition duration-50 w-full h-10 bg-black font-semibold text-white text-lg mb-4 rounded-sm hover:scale-105'>Iniciar Sesion </button>
          <p>¿Olvidaste tu contraseña? <u className='linear hover:text-blue-600 cursor-pointer'>Recuperala</u></p>
        </form>

      </div>
      <img className='absolute top-0 w-full h-full object-cover blur-[2px]' src='https://www.shutterstock.com/image-photo/woman-washing-her-car-selfservice-600nw-1861269733.jpg' alt='' />
      <div className='absolute top-0 w-full h-full z-10 opacity-25 bg-black' />
    </main>

  )
}
