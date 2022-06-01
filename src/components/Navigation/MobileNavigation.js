import NavLinks from "./NavigationLinks";
import { CgMenuRound } from "react-icons/cg";
import { useState } from "react";

const MobileNavigation = ({ currentPage, handlePageChange }) => {
  const [display, setDisplay] = useState(false);
  
    return (
    <div className="mobile-nav">
      <CgMenuRound className="hamburger" onClick={() => setDisplay(!display)} size="40px" color= "white"/>
      <br></br><br></br>
      {display && <NavLinks currentPage={currentPage} handlePageChange={handlePageChange}/>}
    </div>
  );
};

export default MobileNavigation;
