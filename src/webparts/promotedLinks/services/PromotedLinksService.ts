import * as React from 'react';
import "@pnp/polyfill-ie11";
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { PromotedLinksItems } from '../models/PromotedLinksItem';
export class PromotedLinksService {
    public static getItems(listId: string): Promise<PromotedLinksItems[]> {
        return new Promise<PromotedLinksItems[]>((resolve, reject) => {
            sp.web.lists.getById(listId)
                .items
                .select("Title,BackgroundImageLocation,Description,LinkLocation,LaunchBehavior,TileOrder")
                .orderBy("TileOrder", true)
                .get()
                .then((items: any[]) => {
                    const returnData: PromotedLinksItems[] = items.map((item: any) => {
                        const newItem: PromotedLinksItems = {
                            Title: item.Title,
                            BGImage: item.BackgroundImageLocation !== null ? item.BackgroundImageLocation.Url : null,
                            Description: item.Description,
                            Link: item.LinkLocation !== null ? item.LinkLocation.Url : null,
                            Launch: item.LaunchBehavior,
                            Order: item.TileOrder
                        };
                        return newItem;
                    });
                    resolve(returnData);
                })
                .catch((error: any) => {
                    reject(error);
                });
        });
    }
}