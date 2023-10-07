import Text from '@/components/ui/text';

const FormEula = ({ text }) => {
    return (
        <Text color="white">
            {text ||
                `Нажимая кнопку, вы подтверждаете, что ознакомились и соглашаетесь
              с Условиями Соглашения! Правилами и политикой конфиденциальности
              компании`}
        </Text>
    );
};

export default FormEula;
