import Button from '@/components/ui/button';
import FormDialog from '@/components/ui/dialog/form';
import useForm from '@/hook/useForm';
import { useAuth } from '@/store/auth/provider';
import { signUpValidationSchema } from '@/utils';
import { useState } from 'react';
import FormEula from './formEula';

const SignUpForm = () => {
    const { useSignUp } = useAuth();
    const { trigger, isMutating } = useSignUp();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const defaultValues = {
        email: '',
        password: '',
        eula: false,
        confirmPassword: ''
    };

    const { FormField, resetFields, handleSubmit } = useForm({
        defaultValues,
        validationSchema: signUpValidationSchema
    });

    const closeDialogHandler = () => {
        setIsDialogOpen(false);
        resetFields();
    };

    const formSubmitHandler = async (formData) => {
        try {
            const result = await trigger({
                email: formData.email,
                password: formData.password
            });
            if (result.ok) {
                closeDialogHandler();
            }
        } catch (error) {}
    };

    return (
        <div>
            <Button
                onClick={() => setIsDialogOpen(true)}
                variant="secondary"
                actionButtonText="Зарегистрироваться">
                registration
            </Button>
            <FormDialog
                isLoading={isMutating}
                onClose={() => setIsDialogOpen(false)}
                isOpen={isDialogOpen}
                title="Регистрация"
                actionButtonText={'Зарегистрироваться'}>
                <form
                    id="authForm"
                    className="flex flex-col gap-4 px-3 mb-4"
                    onSubmit={handleSubmit(formSubmitHandler)}>
                    {FormField({
                        name: 'email',
                        type: 'email',
                        label: 'Email'
                    })}
                    {FormField({
                        name: 'password',
                        type: 'password',
                        label: 'Пароль',
                        iconPrepend: 'lock'
                    })}
                    {FormField({
                        name: 'confirmPassword',
                        type: 'password',
                        label: 'Подтвердите пароль',
                        iconPrepend: 'lock'
                    })}
                    <div className="flex items-start gap-3 pr-3">
                        {FormField({
                            name: 'eula',
                            type: 'checkbox'
                        })}
                        <FormEula />
                    </div>
                </form>
            </FormDialog>
        </div>
    );
};

export default SignUpForm;
