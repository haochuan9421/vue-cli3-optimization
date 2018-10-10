import axios from 'axios'

export function getContactsList () {
  return axios.get('http://jsonplaceholder.typicode.com/users')
}
