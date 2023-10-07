import Button from '@/components/ui/button';
import FormDialog from '@/components/ui/dialog/form';
import { ACCOUNT_ROUTES, AUTH_ROUTES } from '@/constant';
import useForm from '@/hook/useForm';
import { useAuth } from '@/store/auth/provider';
import { loginValidationSchema } from '@/utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import FormEula from '../signUp/formEula';

const LoginForm = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { useLogin } = useAuth();
    const router = useRouter();
    const { trigger, isMutating } = useLogin();
    const defaultValues = {
        email: '',
        password: '',
        eula: false
    };

    const { FormField, handleSubmit, resetFields } = useForm({
        defaultValues,
        validationSchema: loginValidationSchema
    });

    const formSubmitHandler = useCallback(async (formData) => {
        const result = await trigger({
            email: formData.email,
            password: formData.password
        });
        if (result.ok) {
            router.push(
                `${ACCOUNT_ROUTES.MAIN}/${ACCOUNT_ROUTES.SETTINGS}/${ACCOUNT_ROUTES.UPLOAD_IMAGE}`
            );
        }
    }, []);

    const closeDialogHandler = () => {
        setIsDialogOpen(false);
        resetFields();
    };

    return (
        <div>
            <Button onClick={() => setIsDialogOpen(true)} variant="primary">
                login
            </Button>
            <FormDialog
                isLoading={isMutating}
                onClose={closeDialogHandler}
                isOpen={isDialogOpen}
                title="Логин"
                actionButtonText="Войти">
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
                        label: 'Password',
                        iconPrepend: 'lock'
                    })}
                    <Link
                        href={AUTH_ROUTES.AUTH}
                        className="text-tertiary-lighten text-sm underline">
                        Забыли пароль
                    </Link>
                    <div className="flex items-start gap-3 pr-3 con">
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

export default LoginForm;
