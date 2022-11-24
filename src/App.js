// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//Importamos los campos creados
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';

import ItemListContainer from './components/itemListContainer';
import NavBarExample from './layouts/navbar';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <NavBarExample /> }>
            {/* <ItemListContainer /> */}


            <Route index element={ <Home /> } />
            <Route path='about' element={ <About /> } />
            <Route path='contact' element={ <Contact /> } />
            <Route path='contact' element={ <ItemListContainer /> } />

            <Route path='*' element={ <Navigate replace to="/"/> } />
            

          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
