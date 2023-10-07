import Image from 'next/image';

const Icon = ({ iconName, alt, width, height, className }) => {
    const icon = {
        search: '/images/search.png',
        profile: '/images/profile.png',
        logo: '/images/logo.png',
        home: '/images/home.png',
        wallet: '/images/wallet.png',
        arrowRight: '/images/arrowRight.png',
        fund: '/images/fund.png'
    };
    return (
        <Image
            className={className}
            width={width}
            height={height}
            src={icon[iconName]}
            alt={alt}
        />
    );
};

export default Icon;
