import { useState, useEffect } from "react";
import MdMenuPages from "./pages/MdMenuPages";
import SdMenuPages from "./pages/SdMenuPages";
const MenuPage = () => {
  const [expande, setExpande] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const widthSize = window.innerWidth;
      setExpande(widthSize >= 425);
    };

    handleResize(); // Initial check for screen width
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return <div>{expande ? <MdMenuPages /> : <SdMenuPages />}</div>;
};

export default MenuPage;
