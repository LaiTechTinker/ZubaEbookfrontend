import React from 'react';
import DashNavbar from '../components/layout/DashNav';
import BooksCards from '../components/layout/BookCards';


function DashBoard() {
  return (
    <div className="Main-con">
     <DashNavbar/>
     <BooksCards/>
     

    </div>
  );
}

export default DashBoard;
