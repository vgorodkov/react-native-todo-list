import React from 'react';
import { Defs, Ellipse, RadialGradient, Stop, Svg } from 'react-native-svg';

import { GradientStop } from '@/types/gradient';

interface RadialEllipseProps {
  height: number;
  width: number;
  stops: GradientStop[];
}

export const RadialEllipse = ({ height, width, stops }: RadialEllipseProps) => {
  return (
    <Svg height={height} width={width}>
      <Defs>
        <RadialGradient
          id="grad"
          cx="100%"
          cy="0%"
          r="150%"
          fx="100%"
          fy="0%"
          gradientUnits="userSpaceOnUse"
        >
          {stops.map((stop) => (
            <Stop
              key={stop.offset}
              offset={stop.offset}
              stopColor={stop.color}
              stopOpacity={stop.opacity}
            />
          ))}
        </RadialGradient>
      </Defs>
      <Ellipse cx="50%" cy="50%" rx="50%" ry="50%" fill="url(#grad)" />
    </Svg>
  );
};
