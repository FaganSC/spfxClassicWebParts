import { PromotedLinks, PromotedLinksItem } from '../models/PromotedLinksItem';
export interface IPromotedLinksState {
    isLoading: boolean;
    items: PromotedLinksItem[];
}
