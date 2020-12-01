import React from 'react';
import Header1 from './Header1';
import Footer from './Footer';
import VisitTable from './VisitTable';
import {useSelector} from 'react-redux';
import RestaurantContainer from './RestaurantContainer';


function RestoApp()  {
    const switchpage=useSelector(status => status.switchpage);
    return (  
      <div className="RestoApp">
          <Header1/>
          {switchpage ? <RestaurantContainer/> : <VisitTable/> } 
          <Footer/>
      </div>
    )
  }
export default RestoApp



