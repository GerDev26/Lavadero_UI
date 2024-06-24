import { useEffect, useState } from 'react'
import { SERVICE_ENDPOINT } from '../resources/myApi'
import { Service } from '../types/ServiceTypes'

export function useAllServices (): Service[] {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch(SERVICE_ENDPOINT)
      .then(async res => await res.json())
      .then(data => {
        setServices(data)
      })
      .catch(error => {
        console.log(error)
        setServices([])
      })
  }, [])

  return services
}
