import {Dimensions, PixelRatio} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
// based on iphone 11 pro's scale
const scale = SCREEN_WIDTH / 375;
const scaleHeight = SCREEN_HEIGHT / 812;

export const normalize = (size: number, forHeight?: boolean) => {
  const newSize = size * (forHeight ? scaleHeight : scale);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
