import React from 'react'
import { Routes, Route} from 'react-router-dom'

//<Route path="/" element={<Dashboard/>}/> 
import MyProfile from '../Pages/MyProfile';
import AccountantInfo from '../Pages/AccountantInfo';
import Dashboard from '../Pages/Dashboard';
import Header from './Header'

import "./styles.css";

const MainPage = () => {
  return (
   <React.Fragment>   
   <section>
       <div>
           <Header />
       </div>
   </section>
   
   
   <section>
   <div className='home'>
       
        <div className='mainContainer'>
          <Routes>  
          
          <Route path="/" element={<Dashboard/>}/>    
          <Route path="/myprofile" element={<MyProfile/>}/>    
          <Route path="/accountinfo" element={<AccountantInfo/>}/>    
         </Routes>
          </div>
        </div>
      
   </section>
   </React.Fragment>
  )
}

export default MainPage