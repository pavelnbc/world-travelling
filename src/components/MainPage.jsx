import React from 'react';

import MainBanner from './MainBanner';
import AboutUs from './AboutUs';
import Directions from './Directions';
import Advantages from './Advantages';
import ContactForm from './ContactForm';

const MainPage = () => {
   return (
       <div>
           <MainBanner/>
           <AboutUs/>
           <Directions/>
           <Advantages/>
           <ContactForm/>
       </div>
   )
};

export default MainPage