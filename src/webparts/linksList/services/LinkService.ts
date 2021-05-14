import * as React from 'react';
import "@pnp/polyfill-ie11";
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { Link, LinkItem } from '../models/LinkItem';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import { sampleData } from './LinkServiceData';
import * as moment from 'moment';
export class LinkService {
    public static getItems(listId: string): Promise<Link> {
        var announcementItem: Link;
        if (Environment.type === EnvironmentType.Local) {
            return new Promise<Link>((resolve, reject) => {
                resolve(sampleData);
            });
        } else {
            return new Promise<Link>((resolve, reject) => {
                var itemsPromise = this.getSPItems(listId);
                var listPromise = this.getSPList(listId);
                Promise.all([itemsPromise, listPromise]).then((results: any[]) => {
                    let serverRelativeUrl: string = results[1].RootFolder.ServerRelativeUrl;
                    announcementItem = {
                        Title: results[1].Title,
                        Link: serverRelativeUrl,
                        Items: this.convertItems(results[0], serverRelativeUrl)
                    };
                    resolve(announcementItem);
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
        var filterDate = moment().format("YYYY-MM-DD");
        return new Promise<LinkItem[]>((resolve, reject) => {
            sp.web.lists.getById(listId)
                .items
                .select("URL,Comments")
                .orderBy("Id", true)
                .get()
                .then((items: any[]) => {
                    resolve(items);
                })
                .catch((error: any) => {
                    reject(error);
                });
        });
    }

    private static convertItems(items: any[], serverRelativeUrl: string): LinkItem[] {
        var initalData: LinkItem[] = items.map((item: any) => {
            var newItem = {
                Link: item.URL.Url,
                Title: item.URL.Description
            };
            return newItem;
        });
        var retVal: LinkItem[] = [];
        for (let c of initalData) {
            if (c !== undefined) {
                retVal.push(c);
            }
        }
        return retVal;
    }
}