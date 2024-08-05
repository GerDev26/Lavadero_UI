import { LOGIN, LOGOUT, REGISTER, RESET_PASSWORD, SEND_PASSWORD_TOKEN } from '../resources/myApi'

export async function registerUser (newUser: object): Promise<string> {
  try {
    const res = await fetch(REGISTER, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })

    if (!res.ok) {
      throw new Error('Error al registrar')
    }

    const data = await res.json()
    console.log(data)
    return data.accessToken
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

export async function startSession ({ user }: { user: object }): Promise<string> {
  try {
    const res = await fetch(LOGIN, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    if (!res.ok) {
      throw new Error('Error al iniciar sesion')
    }

    const data = await res.json()
    return data.accessToken
  } catch (error) {
    console.log(error)
    throw error
  }
}
export async function closeSession ({ token }: { token: string }): Promise<void> {
  try {
    const res = await fetch(LOGOUT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })

    if (!res.ok) {
      const errorText = await res.text()
      throw new Error(`Error ${res.status}: ${errorText}`)
    }

    console.log('Sesion cerrada')
  } catch (error) {
    console.error('Failed to close session:', error)
    throw error
  }
}

export async function sendPasswordToken ({ email }: { email: string }): Promise<void> {
  try {
    const res = await fetch(SEND_PASSWORD_TOKEN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(email)
    })

    if (!res.ok) {
      throw new Error('Error al enviar la contraseña')
    }
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
export async function resetPassword ({ token, password }: { token: string, password: string }): Promise<void> {
  try {
    const res = await fetch(RESET_PASSWORD, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ token, password })
    })

    if (!res.ok) {
      throw new Error('Error al enviar la contraseña')
    }
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
