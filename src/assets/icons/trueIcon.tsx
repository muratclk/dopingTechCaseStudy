import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" {...props}>
    <Circle cx={28} cy={28} r={28} fill="#499D8D" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.1667 28C15.1667 20.9122 20.9122 15.1667 28 15.1667C35.0879 15.1667 40.8334 20.9122 40.8334 28C40.8334 35.0878 35.0879 40.8333 28 40.8333C20.9122 40.8333 15.1667 35.0878 15.1667 28ZM28 17.5C22.2009 17.5 17.5 22.2008 17.5 28C17.5 33.7992 22.2009 38.5 28 38.5C33.7992 38.5 38.5 33.7992 38.5 28C38.5 22.2008 33.7992 17.5 28 17.5Z"
      fill="#DCF5FF"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32.3249 24.8417C32.7805 25.2973 32.7805 26.036 32.3249 26.4916L27.6583 31.1583C27.2027 31.6139 26.464 31.6139 26.0084 31.1583L23.675 28.825C23.2194 28.3693 23.2194 27.6307 23.675 27.175C24.1306 26.7194 24.8693 26.7194 25.3249 27.175L26.8333 28.6834L30.675 24.8417C31.1306 24.3861 31.8693 24.3861 32.3249 24.8417Z"
      fill="#DCF5FF"
    />
  </Svg>
);
export default SvgComponent;
