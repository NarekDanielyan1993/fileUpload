import { useRouter } from 'next/router';

const usePageHeader = () => {
    const router = useRouter();
    const pagePaths = {
        '/main/account-settings/upload-avatar': ` / Настройки аккаунта / Загрузка аватара`
    };
    const pageHeaders = {
        '/main/account-settings/upload-avatar': 'Загрузка аватара'
    };
    const pagePath = pagePaths[router.pathname] || '';
    const pageHeader = pageHeaders[router.pathname] || '';

    return { pageHeader, pagePath };
};

export default usePageHeader;
