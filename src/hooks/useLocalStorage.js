import { useCallback, useEffect, useState } from 'react';

// Persistent client-side state with a safe fallback when storage is unavailable.
export default function useLocalStorage(key, initialValue) {
  const readValue = useCallback(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  }, [key, initialValue]);

  const [value, setValue] = useState(readValue);

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Storage may be disabled (private mode / quota). Fail silently.
    }
  }, [key, value]);

  return [value, setValue];
}
