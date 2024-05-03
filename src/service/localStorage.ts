export const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value)
}

export const getLocalStorage = (key: string) => {
  const item = localStorage.getItem(key)
  return item ? item : null
}

export const removeItemFromLocal = (key: string) => {
  localStorage.removeItem(key)
}
