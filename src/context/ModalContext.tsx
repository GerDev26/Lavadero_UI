import { createContext, ReactNode, useState } from 'react'

interface ModalContextProps {
  modal: boolean
  setModal: (value: boolean) => void
}

export const ModalContext = createContext<ModalContextProps>({
  modal: false,
  setModal: () => {}
})

export function ModalProvider ({ children }: { children: ReactNode }): JSX.Element {
  const [modal, setModal] = useState(false)

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  )
}
