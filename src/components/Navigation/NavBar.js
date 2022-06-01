import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const NavBar = ({ currentPage, handlePageChange }) => {
  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
      <MobileNavigation currentPage={currentPage} handlePageChange={handlePageChange}/>
    </div>
  );
}

export default NavBar;