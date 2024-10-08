import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScroolToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0; // For Safari
    document.body.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }, [pathname]);
  

  return null;
}

