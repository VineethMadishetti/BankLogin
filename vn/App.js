
import './App.css';
import {BrowserRouter} from 'react-router-dom'
//import Header from './Components/Header';<Header/>
//import Sidebar from './Components/Sidebar';<Sidebar/>
//import Dashboard from './Pages/Dashboard';
//<Route path="/" element={<Dashboard/>}/> 
//import MyProfile from './Pages/MyProfile';
//import AccountantInfo from './Pages/AccountantInfo';
import MainPage from './Components/MainPage';



function App() {
  

  

  return (
    <BrowserRouter>
    <div>
      <MainPage/>
     </div>
    
</BrowserRouter>
  );
}

export default App;
