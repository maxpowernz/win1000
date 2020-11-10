import React, { useEffect, useState } from "react";

type ReturnType<T> = [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>];

export const useLocalStorage = <T,>(key: string, initialValue?: T): ReturnType<T> => {
  const [userState, setUserState] = useState<T | undefined>(() => {
    // if (!initialValue) {
    //   return;
    // }

    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    if (userState) {
      try {
        localStorage.setItem(key, JSON.stringify(userState));
      } catch (error) {
        console.log(error);
      }
    }
  }, [userState, key]);

  return [userState, setUserState];
};

export default useLocalStorage;
