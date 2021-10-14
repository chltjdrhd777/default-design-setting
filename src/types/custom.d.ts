import "styled-components";
import { ThemeType } from "globalCSS/theme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

declare module "fonts" {
  declare module "*.woff";
  declare module "*.woff2";
}
