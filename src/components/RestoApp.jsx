import React from 'react';
import Header1 from './Header1';
import Footer from './Footer';
import {useSelector} from 'react-redux';
import VisitContainer from './VisitContainer';
import RestaurantContainer from './RestaurantContainer';

function RestoApp()  {
    const switchpage=useSelector(status => status.switchpage);
    return (  
      <div className="RestoApp">
          <Header1/>
          {switchpage ? <RestaurantContainer/> : <VisitContainer/> } 
          <Footer/>
      </div>
    )
  }
export default RestoApp



