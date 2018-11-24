const fetchRequest = (...args) => 
  fetch(...args)
  .then(res => res.json())
  .catch(err => console.error(err))

export default {
  fetchRequest,
}
