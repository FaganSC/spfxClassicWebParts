import * as React from 'react';
import "@pnp/polyfill-ie11";
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { PromotedLinks, PromotedLinksItem } from '../models/PromotedLinksItem';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import { sampleData } from './PromotedLinksServiceData';
export class PromotedLinksService {
    public static getItems(listId: string): Promise<PromotedLinks> {
        var promotedlinksItem: PromotedLinks;
        if (Environment.type === EnvironmentType.Local) {
            return new Promise<PromotedLinks>((resolve, reject) => {
                resolve(sampleData);
            });
        } else {
            return new Promise<PromotedLinks>((resolve, reject) => {
                var itemsPromise = this.getSPItems(listId);
                var listPromise = this.getSPList(listId);
                Promise.all([itemsPromise, listPromise]).then((results: any[]) => {
                    let serverRelativeUrl: string = results[1].RootFolder.ServerRelativeUrl;
                    promotedlinksItem = {
                        Title: results[1].Title,
                        Link: serverRelativeUrl,
                        Items: this.convertItems(results[0], serverRelativeUrl)
                    };
                    resolve(promotedlinksItem);
                });
            });
        }
    }

    private static getSPList(listId: string){
        return new Promise<string>((resolve, reject) => {
            sp.web.lists.getById(listId)
                .select("Title","RootFolder/ServerRelativeUrl")
                .expand("RootFolder")
                .get()
                .then((list: any) => {
                    resolve(list);
                })
                .catch((error: any) => {
                    reject(error);
                });
        });
    }

    private static getSPItems(listId: string) {
        return new Promise<PromotedLinksItem[]>((resolve, reject) => {
            sp.web.lists.getById(listId)
                .items
                .select("Title,BackgroundImageLocation,Description,LinkLocation,LaunchBehavior,TileOrder")
                .orderBy("TileOrder", true)
                .get()
                .then((items: any[]) => {
                    resolve(items);
                })
                .catch((error: any) => {
                    reject(error);
                });
        });
    }

    private static convertItems(items: any[], serverRelativeUrl: string): PromotedLinksItem[] {
        var initalData: PromotedLinksItem[] = items.map((item: any) => {
            var newItem = {
                Title: item.Title,
                BGImage: item.BackgroundImageLocation !== null ? item.BackgroundImageLocation.Url : null,
                Description: item.Description,
                Link: item.LinkLocation !== null ? item.LinkLocation.Url : null,
                Launch: item.LaunchBehavior,
                Order: item.TileOrder
            };
            return newItem;
        });
        var retVal: PromotedLinksItem[] = [];
        for (let c of initalData) {
            if (c !== undefined) {
                retVal.push(c);
            }
        }
        return retVal;
    }
}