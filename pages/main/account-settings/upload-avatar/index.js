import { AUTH_ROUTES, ERROR_ROUTES, PROFILE_API } from '@/constant';
import ImageUploadAndCrop from '@/module/account/imageUploadAndCrop';
import { fetchAvatar } from '@/store/user/api';
import { UserProvider } from '@/store/user/provider';

const UploadAvatar = () => {
    return (
        <UserProvider>
            <ImageUploadAndCrop />
        </UserProvider>
    );
};

export async function getServerSideProps({ req }) {
    const avatarData = await fetchAvatar(
        PROFILE_API.GET_AVATAR,
        req.cookies.token
    );
    if (avatarData.error) {
        if (
            typeof avatarData.error === 'string' &&
            avatarData.error.includes('expired')
        ) {
            return {
                redirect: {
                    destination: AUTH_ROUTES.AUTH,
                    permanent: false
                }
            };
        }
        return {
            redirect: {
                destination: ERROR_ROUTES.MAIN,
                permanent: false
            }
        };
    }
    return {
        props: {
            fallback: {
                [PROFILE_API.GET_AVATAR]: avatarData
            }
        }
    };
}

UploadAvatar.isAuthRequired = true;

export default UploadAvatar;
