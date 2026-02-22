// hooks/useBreakpoint.js
import { useState, useEffect } from "react";

export const useBreakpoint = (breakpoint) => {
  const [matches, setMatches] = useState(window.innerWidth >= breakpoint);

  useEffect(() => {
    const handler = () => setMatches(window.innerWidth >= breakpoint);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [breakpoint]);

  return matches;
};