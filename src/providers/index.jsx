import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ThemeProvider from '@provider/theme.provider';
import AntdProvider from '@provider/antd.provider';
import { DarkModeProvider } from '@minology/context/darkMode.context';
import GlobalStyled from '@config/global.styled';
import ErrorBoundary from '@provider/error.provider';

const Provider = ({ children }) => {
  const [dark, setDark] = React.useState(true);
  const darkToggler = () => {
    setDark(!dark);
  };
  return (
    <ErrorBoundary>
      <DarkModeProvider value={{ dark, darkToggler }}>
        <ThemeProvider dark={dark}>
          <AntdProvider dark={dark}>
            <BrowserRouter>
              <GlobalStyled />
              {children}
            </BrowserRouter>
          </AntdProvider>
        </ThemeProvider>
      </DarkModeProvider>
    </ErrorBoundary>
  );
};

export default Provider;
