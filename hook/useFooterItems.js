const useFooterItems = () => {
    const items = [
        {
            icon: 'home',
            text: 'ראשי',
            href: '/main'
        },
        {
            icon: 'wallet',
            text: 'מפות',
            href: '/'
        },
        {
            icon: 'arrowRight',
            text: 'תרגומים',
            href: '/'
        },
        {
            icon: 'fund',
            text: 'גיוס כספים',
            href: '/'
        }
    ];
    return items;
};

export default useFooterItems;
