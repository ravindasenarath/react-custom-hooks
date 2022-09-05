import { useCallback, useState } from "react";

export const useToggle = (init: boolean = false) => {
  const [toggle, setToggle] = useState(init);

  const toggler = useCallback(() => setToggle((state) => !state), []);

  return { toggle, toggler };
};

export const useToggle2 = (init: boolean = false) => {
  const [toggle, setToggle] = useState(init);

  const toggler = useCallback(() => setToggle((state) => !state), []);

  return { toggle, toggler };
};
