import axios from "axios"

//problema preciso da dessas variaveis para acessar as APIs conforme o ambiente
const { BACK_BASE_URL, MOVIMENTACAO_URL, ESCRITURACAO_URL } = process.env

const api = axios.create({
  baseURL: BACK_BASE_URL,
  withCredentials: true
})

const apiMovimentacao = axios.create({
  baseURL: MOVIMENTACAO_URL,
  withCredentials: true
})

const apiEscrituracao = axios.create({
  baseURL: ESCRITURACAO_URL,
  withCredentials: true
})

export { api, apiMovimentacao, apiEscrituracao }
