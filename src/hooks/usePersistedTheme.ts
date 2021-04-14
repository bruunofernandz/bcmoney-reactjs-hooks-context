import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>,
]

function usePersistedTheme<T>(key: string, initialState: T) : Response<T> {
  const [state, setState] = useState(() => {
    const localState = localStorage.getItem(key);

    if(localState) {
      return JSON.parse(localState);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedTheme;