import { PromotedLinksItems } from '../models/PromotedLinksItem';
export interface IPromotedLinksState {
    isLoading: boolean;
    items: PromotedLinksItems[];
}
