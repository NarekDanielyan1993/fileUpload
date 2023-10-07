import Icon from '@/components/image';

const Profile = () => {
    return (
        <div className="flex gap-4 items-end">
            <Icon width={17} height={17} iconName="search" />
            <Icon width={24} height={24} iconName="profile" />
        </div>
    );
};

export default Profile;
