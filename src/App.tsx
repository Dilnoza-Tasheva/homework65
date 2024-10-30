import NavBar from './Components/NavBar/NavBar.tsx';
import { Route, Routes } from 'react-router-dom';
import Home from './Containers/Home/Home.tsx';
import About from './Containers/About/About.tsx';
import Contacts from './Containers/Contacts/Contacts.tsx';
import Services from './Containers/Services/Services.tsx';
import Membership from './Containers/Membership/Membership.tsx';
import Login from './Containers/Login/Login.tsx';

const App = () => {

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main className="container mt-4">
        <div className="row">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pages/services" element={<Services/>}/>
            <Route path="/pages/membership" element={<Membership/>}/>
            <Route path="/pages/login" element={<Login/>}/>
            <Route path="/pages/about" element={<About/>}/>
            <Route path="*" element={<h4>Not found</h4>}/>
            <Route path="/pages/contacts" element={<Contacts/>}>
            </Route>
          </Routes>
        </div>
      </main>

    </>
  );
};

export default App;
