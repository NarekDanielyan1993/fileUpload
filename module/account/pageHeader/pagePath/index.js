import Text from '@/components/ui/text';

const PagePath = ({ children }) => {
    return (
        <div className="mb-10">
            <Text
                size="10"
                as="span"
                color="secondary-opacity"
                className="underline">
                Главная
            </Text>
            <Text
                className={'mx-1'}
                as="span"
                size="10"
                color="secondary-opacity">
                {children}
            </Text>
        </div>
    );
};

export default PagePath;
