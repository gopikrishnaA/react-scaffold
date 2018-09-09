import React from 'react';
import PropTypes from 'prop-types';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
  jssPreset
} from '@material-ui/core/styles';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { lightTheme, darkTheme } from 'gos-theme';
import { ThemeProvider } from 'styled-components';

const styleNode = document.createComment('jss-insertion-point');
document.head.insertBefore(styleNode, document.head.firstChild);
const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = 'jss-insertion-point';

const CncThemeProvider = ({ children, dark }) => {
  if (dark) {
    const theme = createMuiTheme(darkTheme);
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
        </MuiThemeProvider>
      </JssProvider>
    );
  } else {
    const theme = createMuiTheme(lightTheme);
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </MuiThemeProvider>
      </JssProvider>
    );
  }
};

CncThemeProvider.propTypes = {
  children: PropTypes.any,
  dark: PropTypes.bool
};
// ships with light theme for default
CncThemeProvider.defaultProps = {
  theme: lightTheme
};
export default CncThemeProvider;
