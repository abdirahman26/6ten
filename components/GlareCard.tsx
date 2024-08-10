import React from 'react';
import { GlareCard } from './ui/glare-card';

interface Talent {
    name: string;
    description: string;
    imageUrl: string;
}

export function GlareCardComponent({ key, talent }: { key: number; talent: Talent }) {
    return (
        <div className="relative w-full h-full">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
                <GlareCard className="relative flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
                    <img
                        className="w-full h-full object-cover rounded-lg"
                        src={talent.imageUrl}
                        alt={talent.name}
                    />
                </GlareCard>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <GlareCard className="flex flex-col items-start justify-end py-8 px-6 bg-blue-500 text-white rounded-lg">
                        <div className="flex flex-col items-center mb-auto">
                            <p className="font-bold text-lg">{talent.name}</p>
                        </div>
                        <div className="flex flex-col items-center mt-auto">
                            <p className="font-normal text-base text-center">
                                {talent.description}
                            </p>
                        </div>
                    </GlareCard>
                </div>
            </div>
        </div>
    );
}
