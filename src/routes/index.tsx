import {Navigate, Route, Routes} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import User from '../pages/User';

const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/user/:id' element={<User />} />
            <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
    );
}

export default RoutesMain;