import { Icons, widthProp } from '@/constant/ui';
import clsx from 'clsx';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import InputErrorMessage from '../errorMessage';
import Text from '../text';

function Field({
    type,
    label,
    width = 'full',
    placeholder,
    onChange,
    onFocus,
    value,
    name,
    errorMessage,
    withIconPrepend,
    onBlur,
    className
}) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePasswordHandler = useCallback(() => {
        setIsPasswordVisible((prev) => !prev);
    }, []);

    switch (type) {
        case 'checkbox': {
            return (
                <div className="relative inline-block w-4 h-4 pr-4">
                    <input
                        type={type}
                        className="hidden"
                        onChange={onChange}
                        checked={value}
                        name={name}
                        id={name}
                    />
                    <label
                        htmlFor={name}
                        className="absolute top-0 left-0 w-4 h-4 border-2 border-white rounded-sm cursor-pointer">
                        {value && (
                            <div className="w-[6px] h-[9px] bg-transparent border-white border-b-2 border-r-2 transform rotate-45 absolute top-[1px] left-[3px]"></div>
                        )}
                    </label>
                </div>
            );
        }
        case 'password': {
            return (
                <div className="relative">
                    <label
                        className="ml-1 inline-block font-bold text-white text-left"
                        for={name}>
                        {label}
                    </label>
                    <div className="relative">
                        {withIconPrepend && (
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <Image
                                    src={Icons[withIconPrepend].path}
                                    height={Icons[withIconPrepend].height}
                                    width={Icons[withIconPrepend].width}
                                />
                            </div>
                        )}
                        <input
                            onFocus={onFocus}
                            onBlur={onBlur}
                            id={name}
                            className={`w-full py-3 rounded-22.5 bg-white text-secondary, ${clsx(
                                widthProp[width],
                                withIconPrepend ? 'pl-12' : 'pl-4'
                            )}`}
                            placeholder={placeholder}
                            value={value}
                            name={name}
                            type={isPasswordVisible ? 'text' : type}
                            onChange={onChange}
                        />
                        <div
                            onClick={togglePasswordHandler}
                            className="cursor-pointer absolute inset-y-0 right-4 flex items-center">
                            <Image
                                src={'/images/passwordToggle.png'}
                                height={12}
                                width={15}
                            />
                        </div>
                    </div>
                    {errorMessage && (
                        <InputErrorMessage message={errorMessage} />
                    )}
                </div>
            );
        }
        case 'file': {
            return (
                <label
                    htmlFor={name}
                    className="w-full flex justify-center py-6 font-bold rounded-50 bg-primary text-white cursor-pointer">
                    <div className="inline-flex gap-2">
                        {withIconPrepend && (
                            <Image
                                src={Icons[withIconPrepend].path}
                                height={Icons[withIconPrepend].height}
                                width={Icons[withIconPrepend].width}
                            />
                        )}
                        <Text as="p" weight="bold" color="white">
                            {value}
                        </Text>
                        <input
                            id={name}
                            className="hidden"
                            name={name}
                            type={type}
                            onChange={onChange}
                        />
                    </div>
                    {errorMessage && (
                        <InputErrorMessage message={errorMessage} />
                    )}
                </label>
            );
        }
        default: {
            return (
                <div className="relative">
                    <label
                        className="ml-1 inline-block font-bold text-white text-left"
                        htmlFor={name}>
                        {label}
                    </label>

                    <div className="relative">
                        {withIconPrepend && (
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <Image
                                    src={Icons[withIconPrepend].path}
                                    height={Icons[withIconPrepend].height}
                                    width={Icons[withIconPrepend].width}
                                />
                            </div>
                        )}
                        <input
                            onFocus={onFocus}
                            onBlur={onBlur}
                            id={name}
                            className={`w-full pl-4 py-3 rounded-22.5 bg-white text-secondary, ${clsx(
                                widthProp[width],
                                withIconPrepend && 'pl-12'
                            )}`}
                            placeholder={placeholder}
                            value={value}
                            name={name}
                            type={type}
                            onChange={onChange}
                        />
                    </div>
                    {errorMessage && (
                        <InputErrorMessage message={errorMessage} />
                    )}
                </div>
            );
        }
    }
}

export default Field;
