const fetchRequest = (...args) => fetch(...args)
  .then(res => res.json())
  .catch(err => console.error(err)); // eslint-disable-line no-console

export default {
  fetchRequest,
};
