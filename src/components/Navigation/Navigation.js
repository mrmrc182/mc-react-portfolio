import NavLinks from "./NavigationLinks";

const Navigation = ({ currentPage, handlePageChange }) => {
  return (
    <div className="reg-nav">
      <NavLinks currentPage={currentPage} handlePageChange={handlePageChange}/>
    </div>
  );
};

export default Navigation;
