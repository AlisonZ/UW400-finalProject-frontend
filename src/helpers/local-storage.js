const APPLICATION_LOCAL_STORAGE_KEY = 'assignment-app'
export const setToken = ( token ) => {
  window.localStorage.setItem(APPLICATION_LOCAL_STORAGE_KEY, token)
}

export const getToken = () => {
  return window.localStorage.getItem(APPLICATION_LOCAL_STORAGE_KEY)
}

export const clearToken = () => {
console.log('in the clear')
  window.localStorage.clear(APPLICATION_LOCAL_STORAGE_KEY)
}