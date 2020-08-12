import { primary, neutral } from './colors.js';
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
    textColorDisabledSecondary: neutral[400]
};