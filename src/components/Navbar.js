import React from 'react';

export const Navbar = () => {

    return (

        // Stciky Navbar
        <nav className='sticky top-0 z-30 w-full'>
            <div class="bg-green-700">
                <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div class="relative flex items-center justify-between">
                        <a
                            href="/"
                            aria-label="Company"
                            title="Company"
                            class="inline-flex items-center"
                        >

                            <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                                Strasbourg waste sorter
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>

    )
}

