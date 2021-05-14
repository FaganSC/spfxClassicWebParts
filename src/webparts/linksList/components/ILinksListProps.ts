import { DisplayMode } from '@microsoft/sp-core-library';
import { WebPartContext } from '@microsoft/sp-webpart-base';
export interface ILinksListProps {
  title: string;
  context: WebPartContext;
  lists: string;
  displayMode: DisplayMode;
  isConfigured: boolean;
  updateProperty: any;
}
