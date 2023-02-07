import { PromotedLinksItems } from '../models/PromotedLinksItem';
export interface IPromotedLinksState {
    title: string;
    isLoading: boolean;
    items: PromotedLinksItems[];
}
