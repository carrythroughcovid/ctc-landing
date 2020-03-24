import { mapValues } from 'lodash';

const breakpoints = {
  xs: 0,
  sm: 30,
  md: 48,
  ml: 56,
  lg: 60,
  xl: 96,
};

export const mediaQueries = mapValues(
  breakpoints,
  point => `(min-width: ${point}rem)`,
);

export const rems = mapValues(
  breakpoints,
  point => `${point}rem`,
);

export default breakpoints;