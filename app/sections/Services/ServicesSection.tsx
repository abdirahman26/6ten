import React from "react";
import Image from 'next/image';

const ServicesSection = () => {
    return (
        <div>
            <div className="py-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto">
                <div className="space-y-16">
                    <div className="space-y-8">
                        <div className="flex flex-col md:flex-row md:space-x-16 md:justify-center md:items-center">
                            <div className="w-full md:w-1/3 space-y-4 text-center md:text-left">
                                <h3 className="font-medium text-3xl text-[var(--textPrimary)]">Advanced Facial Recognition</h3>
                                <p className="text-[var(--textSecondary)] text-lg">
                                    The product is equipped with an advanced facial recognition system that can accurately identify and authenticate individuals based on their unique facial features. This feature provides enhanced security by allowing access only to authorized users.
                                </p>
                            </div>
                            <div className="mx-auto w-1/2 md:w-1/3">
                                <Image
                                    src="https://images.ctfassets.net/ihx0a8chifpc/pkPsn4xvlsW7rV74rsMhW/9b749af2555183d91e84b9879422c180/placehold-1280x720.jpg?w=1280&q=60&fm=webp"
                                    alt="Right Image"
                                    className="rounded-lg"
                                    width={1280}
                                    height={720}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row-reverse md:space-x-reverse md:space-x-16 md:justify-center md:items-center">
                            <div className="w-full md:w-1/3 space-y-4 text-center md:text-left">
                                <h3 className="font-medium text-3xl text-[var(--textPrimary)]">Multi-Device Synchronization</h3>
                                <p className="text-[var(--textSecondary)] text-lg">
                                This product offers seamless synchronization across multiple devices. Users can easily sync their data, settings, and preferences across devices such as smartphones, tablets, and computers.
                                </p>
                            </div>
                            <div className="mx-auto w-1/2 md:w-1/3">
                                <Image
                                    src="https://images.ctfassets.net/ihx0a8chifpc/pkPsn4xvlsW7rV74rsMhW/9b749af2555183d91e84b9879422c180/placehold-1280x720.jpg?w=1280&q=60&fm=webp"
                                    alt="Right Image"
                                    className="rounded-lg"
                                    width={1280}
                                    height={720}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesSection;
