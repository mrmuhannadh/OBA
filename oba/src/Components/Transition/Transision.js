import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Index from '../../Pages';
import School from '../../Pages/school';
import Oba_media from '../../Pages/oba_media';
import Commite from '../../Pages/commite';
import Events from '../../Pages/events';

const Transision = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Index />} />
                <Route path='/school' element={<School />} />
                <Route path='/media' element={<Oba_media />} />
                <Route path='/commitee' element={<Commite />} />
                <Route path='/events' element={<Events />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Transision