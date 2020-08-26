import { primary, neutral, green, yellow, red } from './colors.js';
import { PrimaryFont } from './typography';

export const DefaultTheme = {
    primaryColor: primary[100],
    secondaryColor: primary[200],
    tertiaryColor: primary[400],
    textColorOnPrimary: neutral[100],
    textColor: neutral[600],
    textColorInverted: neutral[100],
    fontFamily: PrimaryFont,
    disabledPrimary: neutral[400],
    disabledSecondary: neutral[200],
    disabledTertiary: neutral[100],
    textColorDisabledSecondary: neutral[400],
    formElementBackground: neutral[100],
    textOnFormElementBackground: neutral[600],
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        errorColor: red[100],
        errorColorHover: red[200],
        successColor: green[100],
        successColorHover: green[200],
      }
};

export const DarkTheme = {
    primaryColor: neutral[100],
    primaryHoverColor: neutral[200],
    primaryActiveColor: neutral[300],
    textColorOnPrimary: primary[500],
    textColor: primary[500],
    textColorInverted: neutral[100],
    primaryFont: PrimaryFont,
    disabled: neutral[400],
    textOnDisabled: neutral[300],
    formElementBackground: neutral[600],
    textOnFormElementBackground: neutral[100],
    status: {
      warningColor: yellow[100],
      warningColorHover: yellow[200],
      warningColorActive: yellow[300],
      errorColor: red[100],
      errorColorHover: red[200],
      errorColorActive: red[300],
      successColor: green[100],
      successColorHover: green[200],
      successColorActive: green[300]
    }
  };