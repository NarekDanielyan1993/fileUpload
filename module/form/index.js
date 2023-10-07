import LoginForm from './login';
import SignUpForm from './signUp';

const AuthForm = () => {
    return (
        <div className="sm:max-w-lg sm:w-full sm:mx-auto">
            <h1 className="text-secondary first-letter:capitalize mb-20 text-lg font-bold">
                выбрать действие
            </h1>
            <div className="flex flex-col gap-4">
                <LoginForm />
                <SignUpForm />
            </div>
        </div>
    );
};

export default AuthForm;
