const setUserToLocalStorage = (key: string, token: string) => {
  if (!key || typeof window === undefined) return;
  else return localStorage.setItem(key, token);
};

export { setUserToLocalStorage };
