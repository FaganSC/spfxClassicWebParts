import { DisplayMode } from '@microsoft/sp-core-library';
import { AnnouncementItem } from "../models/AnnouncementItem";
export interface IAnnouncementsProps {
  isConfigured: boolean;
  announcementItems:AnnouncementItem[];
  title: string;
  displayMode: DisplayMode;
  updateProperty: any;
  context: any;
  lists: string;
  textDisplayLayout: string;
}
