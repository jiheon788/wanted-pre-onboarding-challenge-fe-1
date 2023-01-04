import './assets/css/App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
