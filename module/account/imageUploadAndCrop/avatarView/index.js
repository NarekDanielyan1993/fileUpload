import Button from '@/components/ui/button';
import ButtonGroup from '@/components/ui/buttonGroup';
import 'react-image-crop/dist/ReactCrop.css';

const AvatarView = ({ avatarImage, onSave, isSubmitDisabled, onCancel }) => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-center overflow-hidden w-full h-[198px] py-2 rounded-xl bg-white-darken">
                <img
                    style={{
                        width: 'auto',
                        height: '100%',
                        aspectRatio: '1 / 1',
                        borderRadius: '50%'
                    }}
                    src={avatarImage}
                />
            </div>
            <ButtonGroup gap={4} direction="col">
                <Button
                    disabled={isSubmitDisabled}
                    variant="secondary"
                    onClick={onSave}>
                    Сохранить
                </Button>
                <Button variant="cancel" onClick={onCancel}>
                    Отменить
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default AvatarView;
