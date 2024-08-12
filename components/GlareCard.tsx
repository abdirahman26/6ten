import React from 'react';
import { GlareCard } from './ui/glare-card';

interface Talent {
    name: string;
    description: string;
    imageUrl: string;
}

export function GlareCardComponent({ talent }: { talent: Talent }) {
    return (
        <div className="relative w-full h-full">
            <GlareCard className="relative overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <img
                    className="w-full h-full object-cover"
                    src={talent.imageUrl}
                    alt={talent.name}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-500 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 p-6">
                    <div className="flex flex-col items-center mb-auto">
                        <p className="font-bold text-lg">{talent.name}</p>
                    </div>
                    <div className="flex flex-col items-center mt-auto">
                        <p className="font-normal text-base text-center">
                            test
                            {talent.description}
                        </p>
                    </div>
                </div>
            </GlareCard>
        </div>
    );
}
