import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

import {theme} from '@utils/theme';

const SvgComponent = (props: SvgProps) => (
  <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      stroke={theme.colors.lightestFrenchBlue}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 12H5M12 19l-7-7 7-7"
    />
  </Svg>
);
export default SvgComponent;
