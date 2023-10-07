import Loader from '@/components/ui/loader';
import { useAccount } from '@/store/user/provider';

const withAvatar = (WrappedComponent) => {
    return (props) => {
        const { useGetAvatar } = useAccount();
        const { data, isLoading } = useGetAvatar();

        return isLoading ? (
            <Loader />
        ) : (
            <WrappedComponent avatarData={data} {...props} />
        );
    };
};

export default withAvatar;
