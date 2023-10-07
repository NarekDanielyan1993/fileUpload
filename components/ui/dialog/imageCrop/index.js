import BaseBackdrop from '@/components/backdrop/base';
import { FILE_ERRORS_MESSAGES } from '@/constant';
import useNotifications from '@/hook/useNotification';
import { imageToBase64 } from '@/utils';
import { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import Button from '../../button';
import ButtonGroup from '../../buttonGroup';

const ImageCropDialog = ({ isOpen, onClose, imageSrc, onCropComplete }) => {
    const [crop, setCrop] = useState({
        unit: '%',
        x: 25,
        y: 25,
        width: 50,
        height: 50,
        aspect: 1
    });
    const [cropAreaInPx, setCropAreaInPx] = useState(crop);
    const { showError } = useNotifications();
    const handleCropChange = (pixelCrop, percentCrop) => {
        setCrop(percentCrop);
    };

    const handleCropComplete = async () => {
        try {
            const croppedBase64 = await imageToBase64(imageSrc, cropAreaInPx);
            onCropComplete(croppedBase64);
        } catch (error) {
            showError(FILE_ERRORS_MESSAGES.IMAGE_CROP, {
                position: 'topCenter'
            });
            onClose();
        }
    };

    const handleCrop = (croppedArea, croppedAreaPixels) => {
        setCropAreaInPx(croppedAreaPixels);
    };

    return (
        <BaseBackdrop isOpen={isOpen}>
            <dialog
                className="p-4 w-full md:max-w-screen-md max-h-[500px] rounded-md overflow-y-auto mx-auto bg-white-darken"
                open={isOpen}>
                <ReactCrop
                    keepSelection
                    src={imageSrc}
                    crop={crop}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    onChange={handleCropChange}
                    onComplete={handleCrop}>
                    <div className="flex justify-center">
                        <img src={imageSrc} />
                    </div>
                </ReactCrop>
                <div className="flex justify-end p-2">
                    <ButtonGroup>
                        <Button variant="text" onClick={handleCropComplete}>
                            Apply
                        </Button>
                        <Button variant="text" onClick={onClose}>
                            Close
                        </Button>
                    </ButtonGroup>
                </div>
            </dialog>
        </BaseBackdrop>
    );
};

export default ImageCropDialog;
