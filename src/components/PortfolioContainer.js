/* eslint-disable default-case */
import React, { useState } from 'react';
import NavBar from './Navigation/NavBar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'Contact':
        return <Contact />;
      case 'Portfolio':
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      case "About":
        return <About />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}