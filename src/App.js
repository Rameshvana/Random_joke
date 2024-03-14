import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/Home' element={<Home></Home>}></Route>
          <Route path='/Login' element={<Login></Login>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
