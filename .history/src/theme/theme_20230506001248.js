import colors from './colors'
// import typography from './typogarphy'
export const defaultTheme = {
  primaryBackground: colors.primaryBg,
  offSetBg: colors.offSetBg,
  textOnPrimary: colors.textOnPrimary,
  textOnOffSet: colors.textOnOffSet,
  primaryColor: colors.primary,

  textColor: colors.textColor,
  textMuted: colors.textMuted,
}
export const darkTheme = {
  primaryColor: colors.textOnPrimary,
  textOnPrimary: colors.primaryHeavy,
  primaryBackground: colors.darkColor,
  textColor: colors.textColor,
  textMuted: colors.textMuted,
  footer: colors.footer,
}
