import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z"
      stroke="#BCDCFA"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgComponent;
