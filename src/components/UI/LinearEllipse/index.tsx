import Svg, { Defs, Ellipse, LinearGradient, Stop } from 'react-native-svg';

import { GradientStop } from '@/types/gradient';

interface LinearEllipseProps {
  height: number;
  width: number;
  stops: GradientStop[];
}

export const LinearEllipse = ({ height, width, stops }: LinearEllipseProps) => {
  return (
    <Svg height={height} width={width}>
      <Defs>
        <LinearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="100%">
          {stops.map((stop) => (
            <Stop
              key={stop.offset}
              offset={stop.offset}
              stopColor={stop.color}
              stopOpacity={stop.opacity}
            />
          ))}
        </LinearGradient>
      </Defs>
      <Ellipse cx={width / 2} cy={height / 2} rx={width / 2} ry={height / 2} fill="url(#linear)" />
    </Svg>
  );
};
