import Footer from './footer';
import Header from './header';

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col flex-grow">
            <Header />
            <main className="flex flex-col flex-grow px-8 mb-[12vh] ">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
