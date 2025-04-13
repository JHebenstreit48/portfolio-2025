import { useLocation } from "react-router-dom";
import Navigation from "@/components/HeaderAndNav/Navigation";

export default function PageHeader() {
  const location = useLocation();
  const currentPath = location.pathname;

  const getHeaderText = (path: string) => {
    switch (path) {
      case "/":
        return "About";
      case "/contact":
        return "Contact";
      case "/portfolio":
        return "Portfolio";
      case "/resume":
        return "Resume";
      default:
        return "Page";
    }
  };

  const headerText = getHeaderText(currentPath);

  return (
    <>
      <Navigation />
      <div className="pageHeaderContainer">
        <h1 className='pageHeader'>{headerText}</h1>
      </div>


    </>
  )
}
