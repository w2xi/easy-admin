const TOEN_KEY = 'Admin-Token'

export function getToken() {
  return localStorage.getItem(TOEN_KEY)
}

export function setToken(value) {
  localStorage.setItem(TOEN_KEY, value)
}

export function removeToken() {
  localStorage.removeItem(TOEN_KEY)
}