export default value => {
  const date = new Date(value)
  return date.toLocaleDateString(['en-Us'], {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  })
}
