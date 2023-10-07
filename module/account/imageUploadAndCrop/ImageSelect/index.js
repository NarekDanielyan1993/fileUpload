import ImageCropDialog from '@/components/ui/dialog/imageCrop';
import Field from '@/components/ui/field';
import Text from '@/components/ui/text';
import { FILE_ERRORS_MESSAGES } from '@/constant';
import useNotifications from '@/hook/useNotification';
import { validateFile } from '@/utils';
import { useState } from 'react';

const ImageSelect = ({ onImageSelected }) => {
    const [isImageCropOpen, setIsImageCropOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState();
    const { showError } = useNotifications();

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            if (!validateFile(file, 'format')) {
                showError(FILE_ERRORS_MESSAGES.ALLOWED_FORMATS, {
                    position: 'topCenter'
                });
                return;
            }
            if (!validateFile(file, 'size')) {
                showError(FILE_ERRORS_MESSAGES.MAX_SIZE, {
                    position: 'topCenter'
                });
                return;
            }

            const reader = new FileReader();
            reader.onload = (event) => {
                setSelectedImage(event.target.result);
                setIsImageCropOpen(true);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCropComplete = (image) => {
        onImageSelected(image);
        setIsImageCropOpen(false);
    };

    return (
        <div className="w-full md:max-w-lg mx-auto">
            <Text display="block" as="h2" color="secondary" className="mb-8">
                <p>Загрузите файл размером до 5Мб</p>
                <p>По формату: JPG, PNG, GIF</p>
            </Text>
            <Field
                onChange={handleFileChange}
                value="Выбрать файл"
                name="file"
                type="file"
                withIconPrepend={'upload'}
            />
            <ImageCropDialog
                isOpen={isImageCropOpen}
                onClose={() => setIsImageCropOpen(false)}
                imageSrc={selectedImage}
                onCropComplete={handleCropComplete}
            />
        </div>
    );
};

export default ImageSelect;
