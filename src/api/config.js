import * as apis from "./index"

const { APP_URL } = process.env

const checkAutorization = restService => {
  restService.interceptors.request.use(
    config => {
      config.credentials = true
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  restService.interceptors.response.use(undefined, err => {
    let res = err.response
    if (res.status === 401) {
      window.location.href = APP_URL
    }
    return Promise.reject(err.response)
  })
}

for (let key in apis) {
  checkAutorization(apis[key])
}
