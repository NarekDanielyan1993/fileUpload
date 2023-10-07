import Logo from './logo';
import Profile from './profile';

const Header = () => {
    return (
        <header className="p-8 mb-6 flex justify-between items-end">
            <Logo />
            <Profile />
        </header>
    );
};

export default Header;
