import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" {...props}>
    <Circle cx={28} cy={28} r={28} fill="#5281AB" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28 17.5C22.201 17.5 17.5 22.201 17.5 28C17.5 33.799 22.201 38.5 28 38.5C33.799 38.5 38.5 33.799 38.5 28C38.5 22.201 33.799 17.5 28 17.5ZM15.1667 28C15.1667 20.9123 20.9124 15.1667 28 15.1667C35.0877 15.1667 40.8334 20.9123 40.8334 28C40.8334 35.0877 35.0877 40.8333 28 40.8333C20.9124 40.8333 15.1667 35.0877 15.1667 28Z"
      fill="#DCF5FF"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.1667 28C22.1667 27.3557 22.689 26.8333 23.3334 26.8333H32.6667C33.311 26.8333 33.8334 27.3557 33.8334 28C33.8334 28.6443 33.311 29.1667 32.6667 29.1667H23.3334C22.689 29.1667 22.1667 28.6443 22.1667 28Z"
      fill="#DCF5FF"
    />
  </Svg>
);
export default SvgComponent;
