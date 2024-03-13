import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      
        <Routes>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/Home' element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
