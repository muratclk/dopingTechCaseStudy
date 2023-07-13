import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.4714 3.52861C10.7317 3.78896 10.7317 4.21107 10.4714 4.47142L6.9428 8.00001L10.4714 11.5286C10.7317 11.789 10.7317 12.2111 10.4714 12.4714C10.211 12.7318 9.78894 12.7318 9.52859 12.4714L5.52859 8.47142C5.26824 8.21107 5.26824 7.78896 5.52859 7.52861L9.52859 3.52861C9.78894 3.26826 10.211 3.26826 10.4714 3.52861Z"
      fill="#F8FAFC"
    />
  </Svg>
);
export default SvgComponent;
