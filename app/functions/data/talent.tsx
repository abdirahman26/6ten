import React from "react";

export const getTalentList = async () => {
    
    const randomImage = () => {
        const randomNum = Math.floor(Math.random() * 20);
        return `https://picsum.photos/seed/picsum/200/300`;
    }

    return {
        "talent1": {
            "name": "Talent 1",
            "description": "Details about the first talent go here. This card is on the left side and can contain additional information or an image.",
            "imageUrl": randomImage(),
        },
        "talent2": {
            "name": "Talent 2",
            "description": "Details about the first talent go here. This card is on the left side and can contain additional information or an image.",
            "imageUrl": randomImage(),
        },
        "talent3": {
            "name": "Talent 3",
            "description": "Details about the first talent go here. This card is on the left side and can contain additional information or an image.",
            "imageUrl": randomImage(),
        },
        "talent4": {
            "name": "Talent 4",
            "description": "Details about the first talent go here. This card is on the left side and can contain additional information or an image.",
            "imageUrl": randomImage(),
        },
        "talent5": {
            "name": "Talent 5",
            "description": "Details about the first talent go here. This card is on the left side and can contain additional information or an image.",
            "imageUrl": randomImage(),
        },
        "talent6": {
            "name": "Talent 6",
            "description": "Details about the first talent go here. This card is on the left side and can contain additional information or an image.",
            "imageUrl": randomImage(),
        }
    }
};