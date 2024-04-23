import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import LoginHome from './pages/Home/LoginHome';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import HomePage from './pages/Home/HomePage';
import Notifs from './pages/Notifs/Notifs';

export default function App() {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path='/' element={<LoginHome/>}/>
                <Route path='/home-page' element={<HomePage/>}/>
                <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/sign-in' element={<SignIn/>}/>
                <Route path='/notifs' element={<Notifs/>}/>
            </Routes>
        </>
    )
}