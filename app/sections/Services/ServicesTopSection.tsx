import React from "react";

const ServicesTopSection = () => {
    return (
        <div>
            {/* Full-Screen Image Section */}
            <div className="relative h-screen w-full">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <h1 className="text-white text-4xl md:text-6xl font-bold text-[var(--textPrimary)]">Empowering Creators to Shine</h1>
                    <p className="text-white text-lg md:text-2xl mt-4 text-[var(--textSecondary)]">Your success is our mission. Let us handle the strategy while you focus on creating.</p>
                </div>
            </div>
        </div>
    );
}

export default ServicesTopSection;
