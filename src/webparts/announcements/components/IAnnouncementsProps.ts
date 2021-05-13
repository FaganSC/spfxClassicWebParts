import { DisplayMode } from '@microsoft/sp-core-library';
import { AnnouncementItem } from "../models/AnnouncementItem";
import { WebPartContext } from '@microsoft/sp-webpart-base';
export interface IAnnouncementsProps {
  isConfigured: boolean;
  announcementItems:AnnouncementItem[];
  title: string;
  displayMode: DisplayMode;
  updateProperty: any;
  context: WebPartContext;
  lists: string;
  textDisplayLayout: string;
}
