import axios from 'axios'

const http = axios.create({
  baseURL: 'http://integracao.fagoc.br/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})

export default http
