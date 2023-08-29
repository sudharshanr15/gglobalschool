import Image from "next/image";

const Eventcard = ({ title, setgallery, image }: any) => {
    return (
        <div className="w-full h-fit bg-gray-100">
            <div className="relative">
                <div className="aspect-video overflow-hidden">
                    <Image
                        src={image}
                        className="w-full h-auto object-cover"
                        alt={title}
                        placeholder="blur"
                    />
                </div>
                <div className="absolute flex flex-col justify-center items-center bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden opacity-0 transition duration-700 ease-in-out hover:opacity-100 text-center">
                    <div className="h-full w-full bg-gray-900 bg-opacity-60">
                        <div className="flex w-full h-full items-center justify-center">
                            <button
                                onClick={() => setgallery(title)}
                                className="btn-slide"
                            >
                                View Gallery
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <p className="p-md font-bold">{title}</p>
        </div>
    );
};

export default Eventcard;
