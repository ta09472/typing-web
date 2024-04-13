export function setLocalStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key: string) {
  if (localStorage.getItem(key)) return JSON.parse(localStorage.getItem(key));
  return null;
}

export function removeLocalStorage(key: string) {
  localStorage.removeItem(key);
}
