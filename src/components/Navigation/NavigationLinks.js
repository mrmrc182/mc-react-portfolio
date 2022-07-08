const NavLinks = ({ currentPage, handlePageChange }) => {
  return (
    <div>
      <ul className="nav-bar">
        <li className="nav-tab">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "active" : "not-active"}
          >
            About
          </a>
        </li>
        <li className="nav-tab">
          <a
            href="/portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={currentPage === "Portfolio" ? "active" : "not-active"}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-tab">
          <a
            href="/resume"
            onClick={() => handlePageChange("Resume")}
            className={currentPage === "Resume" ? "active" : "not-active"}
          >
            Resume
          </a>
        </li>
        <li className="nav-tab">
          <a
            href="/contact"
            onClick={() => handlePageChange("Contact")}
            className={currentPage === "Contact" ? "active" : "not-active"}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
