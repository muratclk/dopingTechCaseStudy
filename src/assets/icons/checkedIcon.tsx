import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
      stroke="#BCDCFA"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.33334 12C5.33334 8.31811 8.31811 5.33334 12 5.33334C15.6819 5.33334 18.6667 8.31811 18.6667 12C18.6667 15.6819 15.6819 18.6667 12 18.6667C8.31811 18.6667 5.33334 15.6819 5.33334 12Z"
      fill="#BCDCFA"
    />
  </Svg>
);
export default SvgComponent;
