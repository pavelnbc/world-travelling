import React from 'react';

import MainBanner from './MainBanner';
import Services from './Services';
import Directions from './Directions';
import Advantages from './Advantages';
import ContactForm from './ContactForm';

const MainPage = () => {
   return (
       <div>
           <MainBanner/>
           <Services/>
           <Directions/>
           <Advantages/>
           <ContactForm/>
       </div>
   )
};

export default MainPage