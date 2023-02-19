import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Index from '../../Pages';
import School from '../../Pages/school';

const Transision = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Index />} />
                <Route path='/school' element={<School />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Transision