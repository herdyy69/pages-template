import fontConfig from "./font";

export function fontPlugin({ addUtilities, theme, variants }: any) {
  const fontFamilies = theme("fontFamily", {});

  const { fontTypes, fontWeights } = fontConfig;

  const utilities: any = {};

  fontWeights.forEach((fontWeight) => {
    fontTypes.forEach((fontType) => {
      fontType.sizes.forEach((fontSize) => {
        let className = `.t-${fontType.name}-${fontWeight.name}-${
          fontSize.size * 16
        }`;
        const utility = {
          fontSize: fontSize.size + fontType.unit,
          lineHeight: fontSize.lineHeight + fontType.unit,
          fontWeight: fontWeight.weight,
          fontFamily: fontFamilies[fontType.family].join(","),
        };
        utilities[className] = utility;
      });
    });
  });

  addUtilities(utilities, variants("fontSize", []));
}
