import React from 'react';
import { ThemeProvider } from 'styled-components';

import darkStyle from '@config/dark.theme';
import lightStyle from '@config/light.theme';

const colors = {
  primary: '#3454D1',
  danger: '#D63230',
  warning: '#F9C22E',
  success: '#499F68',
  info: '#00CECB',
};

const Theme = ({ children, dark }) => {
  const theme = {
    dark,
    ...(dark ? darkStyle : lightStyle),
    colors,
    contrast: '#fefefe',
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
