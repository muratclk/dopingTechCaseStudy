import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width="100%" height="100%" viewBox="0 0 22 22" fill="none" {...props}>
    <Path
      d="M10.0833 17.4167C14.1334 17.4167 17.4167 14.1335 17.4167 10.0834C17.4167 6.03331 14.1334 2.75006 10.0833 2.75006C6.03325 2.75006 2.75 6.03331 2.75 10.0834C2.75 14.1335 6.03325 17.4167 10.0833 17.4167Z"
      stroke="#BCDCFA"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.25 19.2501L15.2625 15.2626"
      stroke="#BCDCFA"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.0833 7.3334V12.8334"
      stroke="#BCDCFA"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.33331 10.0834H12.8333"
      stroke="#BCDCFA"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgComponent;
