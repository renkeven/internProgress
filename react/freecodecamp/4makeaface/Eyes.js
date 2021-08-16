import React from 'react';

export const Eyes = ({eyeOffsetX, eyeOffsetY, eyeRadius}) => (
    <>
        <circle id='Leye'
            cx={- eyeOffsetX}
            cy={- eyeOffsetY}
            r={eyeRadius}
        />
        <circle id='Reye'
            cx={eyeOffsetX}
            cy={- eyeOffsetY}
            r={eyeRadius}
        />
    </>
);