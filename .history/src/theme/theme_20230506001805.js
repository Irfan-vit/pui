import colors from './defaultThemeColors'
// import typography from './typogarphy'
export const defaultTheme = {
  primaryBg: default.primaryBg,
  offSetBg: default.offSetBg,
  textOnPrimary: default.textOnPrimary,
  textOnOffSet: default.textOnOffSet,
  action: default.action,

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
