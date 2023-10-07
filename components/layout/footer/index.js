import useFooterItems from '@/hook/useFooterItems';
import FooterItem from './footerItem';

const Footer = () => {
    const items = useFooterItems();
    return (
        <footer className="rounded-t-10 shadow-lg p-4 bg-gradient-white-blue">
            <ul className="grid grid-cols-2 grid-rows-2 place-items-center xs:grid-cols-4 xs:grid-rows-1 gap-2 md:max-w-screen-md mx-auto">
                {items.map((item) => {
                    return (
                        <FooterItem
                            href={item.href}
                            icon={item.icon}
                            text={item.text}
                        />
                    );
                })}
            </ul>
        </footer>
    );
};

export default Footer;
