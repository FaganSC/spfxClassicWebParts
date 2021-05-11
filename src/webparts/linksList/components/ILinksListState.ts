import { LinkItem } from '../models/LinkItem';
export interface ILinksListState {
  isLoading: boolean;
  title: string;
  items: LinkItem[];
}
