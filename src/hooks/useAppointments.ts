import { useEffect, useState } from 'react'
import { APPOINTMENTS_ENDPOINT } from '../resources/myApi'
import { Appointment } from '../types/AppointmentTypes'

export function useAllAppointments (): Appointment[] {
  const [appointments, setAppointments] = useState<Appointment[]>([])

  useEffect(() => {
    fetch(APPOINTMENTS_ENDPOINT)
      .then(async res => await res.json())
      .then(res => {
        setAppointments(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return appointments
}
