import FormBackdrop from '@/components/backdrop/formBackdrop';
import Image from 'next/image';
import Button from '../../button';
import Loader from '../../loader';

const FormDialog = ({
    title,
    isValid,
    actionButtonText,
    onClose,
    children,
    isOpen,
    isLoading
}) => {
    return (
        <FormBackdrop isOpen={isOpen}>
            <dialog
                open={isOpen}
                className="bg-form-popup bg-center bg-no-repeat py-14 px-4 w-80 md:w-full md:max-w-screen-sm mx-auto rounded-35">
                {isLoading && <Loader />}
                <h2
                    aria-label="form-dialog-header"
                    className="mb-8 text-white text-xl font-bold text-center">
                    {title}
                </h2>
                <div id="auth-form" aria-label="form-dialog-description px-6">
                    {children}
                </div>
                <div aria-label="form-dialog-actions" className="">
                    <Button
                        disabled={isValid}
                        form="authForm"
                        className="primary">
                        {actionButtonText}
                    </Button>
                    <button
                        onClick={onClose}
                        className="absolute flex justify-center items-center -translate-y-[19%] p-2 top-0 right-0 rounded-full bg-tertiary">
                        <Image
                            width={17}
                            height={17}
                            src={'/images/close.png'}
                        />
                    </button>
                </div>
            </dialog>
        </FormBackdrop>
    );
};

export default FormDialog;
