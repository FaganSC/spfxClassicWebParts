import { AnnouncementItem } from '../models/AnnouncementItem';
export interface IAnnouncementsState {
  isLoading: boolean;
  title: string;
  moreLink: string;
  items: AnnouncementItem[];
}
