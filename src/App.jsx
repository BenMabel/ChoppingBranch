import './styles/style.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LogInPage from './pages/LogInPage';
import OurServices from './pages/OurServices';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Verification from './pages/Verification'
import Donation from './pages/Donations'
import DonateCrypto from './pages/DonateCrypto';
import DonateCash from './pages/DonateCash';
const App = () => {
  return (
    <>
      <Routes >
        <Route element={<LandingPage />} path='/'>
        </Route>
        <Route element={<LogInPage />} path='/login'>
        </Route>
        <Route element={<OurServices />} path='/our-services'>
        </Route>
        <Route element={<Home />} path='/home'>
        </Route>
        <Route element={<SignUp />} path='/signup'>
        </Route>
        <Route element={<Verification />} path='/auth'>
        </Route>
        <Route element={<Donation />} path='/donations'>
        </Route>
        <Route element={<DonateCrypto />} path='/donatecrypto'>
        </Route>
        <Route element={<DonateCash />} path='/donatecash'>
        </Route>
      </Routes>
    </>
  );
}

export default App;
