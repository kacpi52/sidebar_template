import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import UserPage from './pages/UserPage';
import React from 'react'
import Menu from './Components/SidebarMenu/indexMenu';






function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' component={Menu} exact />
        
        <Route path='/UserPage' component={UserPage} exact /> 
      </Routes>
    </Router>
      <Menu />
    </>
  );
}

export default App;
