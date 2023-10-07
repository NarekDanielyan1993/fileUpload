import Icon from '@/components/image';

const Logo = () => {
    return (
        <div className="flex items-end">
            <Icon width={30} height={47} iconName="logo" />
            <span className="ml-1 text-primary-lighten text-sm font-bold">
                CoinsFill
            </span>
        </div>
    );
};

export default Logo;
