import { DisplayMode } from "@microsoft/sp-core-library";

export interface IPromotedLinksProps {
  context:any;
  title: string;
  list: string;
  imageOverride: boolean;
  staticBGColor: string;
  staticTXTColor: string;
  hoverBGColor: string;
  hoverTXTColor: string;
  isConfigured:boolean;
  displayMode: DisplayMode;
}
