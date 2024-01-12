const formatClientDataObject = (submitFormData) => {
  let formData = {}
  Object.keys(submitFormData).map((key) => {
    formData = {
      ...formData,
      [key]: submitFormData[key].value
    }
  })
  if (formData) return formData
}

export { formatClientDataObject }
