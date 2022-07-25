import './App.css';
import Header from './Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Banner from './Pages/Banner/Banner';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import Jobs from './Pages/Jobs/Jobs';
import RequireAuth from './Pages/Login/RequireAuth';
import AddJob from './Pages/AddJob/AddJob';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Banner/>}></Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
        <Route path='jobs' element={
          <RequireAuth>
            <Jobs />
            </RequireAuth>
        } 
        />
        <Route path='addjob' element={
          <RequireAuth>
            <AddJob />
            </RequireAuth>
        } 
        />
      </Routes>
    </div>
  );
}

export default App;
