import { CheckBadgeIcon } from '@heroicons/react/16/solid'
import data from '../mocks/TurnsTable.json'

export function TurnsTable (): JSX.Element {
  const rowBackground = (number: number): string => {
    if (number % 2 === 0) {
      return 'bg-white text-black'
    }
    return 'bg-gray-500 text-white'
  }

  return (
    <table className='border-4 border-gray-500 text-lg'>
      <thead>
        <tr>
          <th className='p-3 uppercase font-semibold'>ID</th>
          <th className='p-3 uppercase font-semibold'>FECHA</th>
          <th className='p-3 uppercase font-semibold'>HORA</th>
          <th className='p-3 uppercase font-semibold'>USUARIO</th>
          <th className='p-3 uppercase font-semibold'>SERVICIO</th>
          <th className='p-3 uppercase font-semibold'>VEHICULO</th>
          <th className='p-3 uppercase font-semibold'>PRECIO</th>
          <th className='p-3 uppercase font-semibold'>check</th>
        </tr>
      </thead>
      <tbody>
        {data.map(d => (
          <tr key={d.id} className={rowBackground(d.id)}>
            <td className='p-3'>{d.id}</td>
            <td className='p-3'>{d.fecha}</td>
            <td className='p-3'>{d.hora}</td>
            <td className='p-3'>{d.usuario}</td>
            <td className='p-3'>{d.servicio}</td>
            <td className='p-3'>{d.vehiculo}</td>
            <td className='p-3'>${d.precio}</td>
            <td><CheckBadgeIcon className='m-auto w-6 h-6' /></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
