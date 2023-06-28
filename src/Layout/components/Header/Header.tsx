import { Link } from 'react-router-dom';
import logoFPT from 'assets/logo/logo-fpt.png';

const Header = () => {
    return (
        <header className="supports-backdrop-blur:bg-white/95 sticky top-0 z-[70] max-h-20 w-full  border-b border-[#e5e7eb] bg-white/80 py-3 backdrop-blur transition-all duration-300 lg:z-50">
            <h1>Header</h1>
        </header>
    );
};

export default Header;
