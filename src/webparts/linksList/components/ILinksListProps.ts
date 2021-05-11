import { DisplayMode } from '@microsoft/sp-core-library';
import { LinkItem } from "../models/LinkItem";
export interface ILinksListProps {
  title: string;
  context: any;
  lists: string;
  displayMode: DisplayMode;
  isConfigured: boolean;
  updateProperty: any;
}
