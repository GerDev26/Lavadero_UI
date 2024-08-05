
export function mapFields ({ formFields, newStructure }: { formFields: object, newStructure: object }): object {
  const mappedFields = Object.fromEntries(
    Object.entries(formFields).map(([key, value]) => {
      return [newStructure[key], value]
    })
  )
  return mappedFields
}

export function getFormFields ({ formEvent }: { formEvent: React.FormEvent<HTMLFormElement> }): object {
  formEvent.preventDefault()
  return Object.fromEntries(
    new window.FormData(formEvent.currentTarget)
  )
}
