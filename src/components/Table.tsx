import { useAllUsers } from '../hooks/useUsers'
import { useAllAppointments } from '../hooks/useAppointments'
import { DeleteUser } from '../services/userServices'
function TableCol ({ children }: { children: React.ReactNode }): JSX.Element {
  return <td className='p-3 uppercase font-bold'>{children}</td>
}
function TableRow ({ children }: { children: React.ReactNode }): JSX.Element {
  return <th className='p-3 font-normal border-b-2 border-gray-400'>{children}</th>
}

export function Table ({ cols, children }: { cols: string[], children: React.ReactNode }): JSX.Element {
  return (
    <table className='text-l w-fit h-fit bg-gray-50 rounded-lg overflow-hidden'>
      <thead>
        <tr className='bg-black text-white font-black text-center opacity-90'>
          {cols.map((col, index) => <TableCol key={index}>{col}</TableCol>)}
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  )
}

export function AppointmentTable (): JSX.Element {
  const appointments = useAllAppointments()
  return (
    <Table cols={['Precio']}>
      {appointments.map(appointment => <TableRow key={appointment.id}>{appointment.price}</TableRow>)}
    </Table>
  )
}

export function UserTable (): JSX.Element {
  const users = useAllUsers()

  const handleSelect = (id: string): void => {
    console.log(id)
    const ok = DeleteUser(id)
    ok ? console.log(id + ' Se elimino con exito') : console.log('Error al eliminar ' + id)
  }

  return (
    <Table cols={['id', 'nombre', 'apellido', 'Telefono', 'E-mail', 'llave', 'check']}>
      {(users != null)
        ? users.map(user => (
          <tr key={user.id}>
            <TableRow>{user.id}</TableRow>
            <TableRow>{user.name}</TableRow>
            <TableRow>{user.surname}</TableRow>
            <TableRow>{user.phone_number}</TableRow>
            <TableRow>{user.email}</TableRow>
            <TableRow>{user.key}</TableRow>
            <TableRow><input onChange={() => handleSelect(user.id)} name='selectedUser' value={user.id} type='radio' /></TableRow>
          </tr>
        ))
        : (
          <tr>
            <TableRow>Cargando</TableRow>
          </tr>
          )}
    </Table>
  )
}
