import { DisplayMode } from "@microsoft/sp-core-library";

export interface IPromotedLinksProps {
  context:any;
  title: string;
  list: string;
  isConfigured:boolean;
  displayMode: DisplayMode;
}
