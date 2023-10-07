import Loader from '@/components/ui/loader';
import usePageHeader from '@/hook/usePageHeader';
import { useAccount } from '@/store/user/provider';
import { useState } from 'react';
import PageHeader from '../pageHeader';
import ImageSelect from './ImageSelect';
import AvatarView from './avatarView';

const ImageUploadAndCrop = () => {
    const { useUploadImage, useGetAvatar } = useAccount();
    const { data, mutate } = useGetAvatar();
    const [imagePreview, setImagePreview] = useState(null);
    const { trigger, isMutating: isLoading } = useUploadImage();
    const { pageHeader, pagePath } = usePageHeader();
    const handleImageSelected = (image) => {
        setImagePreview(image);
    };

    const handleSave = async () => {
        await trigger(imagePreview, { revalidate: false });
    };

    const handleCancel = () => {
        mutate(null, { revalidate: false });
        setImagePreview(null);
    };

    return (
        <div className="w-full md:max-w-lg mx-auto">
            {isLoading && <Loader />}
            <PageHeader
                path={pagePath}
                text={
                    data?.image || imagePreview
                        ? 'Фото для аватарки'
                        : pageHeader
                }
            />
            {!(data?.image || imagePreview) ? (
                <ImageSelect
                    setImagePreview={setImagePreview}
                    imagePreview={imagePreview}
                    onImageSelected={handleImageSelected}
                />
            ) : (
                <AvatarView
                    isSubmitDisabled={!!data?.image}
                    avatarImage={data?.image || imagePreview}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
};

export default ImageUploadAndCrop;
