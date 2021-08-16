import React from 'react';
import { BackgroundCircle } from './BackgroundCircle';
import { Mouth } from './Mouth.js'
import { FaceContainer } from './FaceContainer';
import { Eyes } from './Eyes';

export const Face = ({
    width, 
    height, 
    centerX, 
    centerY, 
    strokeWidth, 
    eyeOffsetX, 
    eyeOffsetY, 
    eyeRadius, 
    mouthRadius, 
    mouthWidth
}) => (
    <FaceContainer 
        width={width}
        height={height}
        centerX={centerX}
        centerY={centerY}
>
            <BackgroundCircle
                radius={centerY - strokeWidth / 2}
                strokeWidth={strokeWidth}/>
            <Eyes
                eyeOffsetX={eyeOffsetX}
                eyeOffsetY={eyeOffsetY}
                eyeRadius={eyeRadius}
            />
            <Mouth 
                mouthRadius={mouthRadius}
                mouthWidth={mouthWidth}
            />
    </FaceContainer>
);