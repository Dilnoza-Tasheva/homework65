import NavBar from './Components/NavBar/NavBar.tsx';
import { Route, Routes } from 'react-router-dom';
import Pages from './Containers/Pages/Pages.tsx';
import EditPage from './Components/EditPage/EditPage.tsx';

const App = () => {

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main className="container mt-4">
        <div className="row">
          <Routes>
            <Route path="/pages/:pageName" element={<Pages/>}/>
            <Route path="/pages/admin" element={<EditPage/>}/>
            <Route path="/" element={<p>Welcome to the main page</p>}/>
            <Route path="*" element={<h4>Not found</h4>}/>
          </Routes>
        </div>
      </main>

    </>
  );
};

export default App;
