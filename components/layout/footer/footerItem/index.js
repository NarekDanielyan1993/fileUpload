import Icon from '@/components/image';
import Text from '@/components/ui/text';
import Link from 'next/link';

const FooterItem = ({ icon, text, isActive = false }) => {
    return (
        <li
            className={`flex items-center flex-col text-secondary-opacity ' 
                ${isActive && 'text-primary'} `}>
            <Link href={'/'}>
                <Icon width={26} height={24} iconName={icon} className="mb-1" />
            </Link>
            <Text display="block" as="p" size="sm" color="secondary-opacity">
                {text}
            </Text>
        </li>
    );
};

export default FooterItem;
