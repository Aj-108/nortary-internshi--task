import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom' ;

import '../node_modules/bootstrap/dist/css/bootstrap.min.css' ;
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home fetchUrl={'https://demo2211087.mockable.io/mock'}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
