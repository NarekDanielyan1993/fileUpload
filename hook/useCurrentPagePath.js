const useCurrentPagePath = (path) => {
    const paths = {
        '/main/account-settings/upload-avatar': ` / Настройки аккаунта / Загрузка аватара`
    };
    return paths[path] ?? '';
};

export default useCurrentPagePath;
