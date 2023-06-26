import { React } from "react";
import img from './waste_sorting_strasbourg.png'
import UploadImage from "./UploadImage";

export const Header = () => {
    return (
        // Text content
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        v0.1.0
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="679d5905-e08c-4b91-a66c-84aefbb9d2f5"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#679d5905-e08c-4b91-a66c-84aefbb9d2f5)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">SELECT</span>
                    </span>{' '}
                    IMAGE OF TRASH ITEM TO UPLOAD
                </h2>
                <UploadImage />
                <p className="text-base text-gray-700 md:text-lg m-2">
                    this is an early demo, so the model may be wrong a lot of times
                </p>

                {/* Description */}
                <div className="m-3 font-sans text-xl">A waste sorter is a machine or system designed to separate different types of waste materials based on their characteristics or composition. Its main purpose is to automate the process of sorting waste, making it more efficient and effective than manual sorting.</div>

                {/* waste_sorter_image */}
            </div>
            <div className="mx-auto lg:max-w-2xl">
                <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                        src={img}
                        alt=""
                    />
                </div>
            </div>
        </div >
    );
};