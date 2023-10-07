import Text from '@/components/ui/text';
import PagePath from './pagePath';

const PageHeader = ({ text, path }) => {
    return (
        <>
            <PagePath>{path}</PagePath>
            <Text
                as="h2"
                className="mb-16"
                weight="bold"
                size="lg"
                color="secondary">
                {text}
            </Text>
        </>
    );
};

export default PageHeader;
