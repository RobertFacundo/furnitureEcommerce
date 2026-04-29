import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Esto hace que se haga scroll al top
  }, [pathname]); // Solo se ejecuta cuando el pathname cambia
};

export default useScrollToTop;