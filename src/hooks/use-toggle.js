import { useState } from 'react';

export default function useToggle(initialToogle = false) {
  const [isStateToogle, setToggle] = useState(initialToogle);

  const setFalse = () => setToggle(false);
  const setTrue = () => setToggle(true);
  const toggle = () => setToggle(!isStateToogle);

  return { isStateToogle, toggle, setTrue, setFalse };
}
