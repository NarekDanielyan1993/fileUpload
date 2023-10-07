import Image from 'next/image';

const FormBackdrop = ({ children, isOpen }) => {
    return isOpen ? (
        <div className="fixed top-0 left-0 right-0 bottom-0">
            <div className="absolute z-10 h-full w-full">
                <div className="flex flex-col h-full w-full">
                    <div className="relation p-4 flex-grow bg-secondary ">
                        <Image
                            width={40}
                            height={40}
                            src={'/images/overlay-logo-small.png'}
                        />
                    </div>
                    <div className="relative flex-grow w-full">
                        <Image
                            layout="fill"
                            objectFit="cover"
                            src={'/images/overlay-img-bottom.png'}
                        />
                    </div>
                </div>
            </div>
            <div className="absolute z-30 w-full h-full bg-secondary opacity-90" />
            <div className="relative z-40 w-full h-full pt-8">{children}</div>
        </div>
    ) : null;
};

export default FormBackdrop;
