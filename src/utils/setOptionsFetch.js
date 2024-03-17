function setOptionsFetch (method = 'POST', body = null) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  return options
}

export default setOptionsFetch
