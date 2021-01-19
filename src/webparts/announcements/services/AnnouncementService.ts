import * as React from 'react';
import "@pnp/polyfill-ie11";
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { Announcement, AnnouncementItem } from '../models/AnnouncementItem';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import { sampleData } from './AnnouncementServiceData';
import * as moment from 'moment';
export class AnnouncementService {
    public static getItems(listId: string): Promise<Announcement> {
        var announcementItem: Announcement;
        if (Environment.type === EnvironmentType.Local) {
            return new Promise<Announcement>((resolve, reject) => {
                resolve(sampleData);
            });
        } else {
            return new Promise<Announcement>((resolve, reject) => {
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
        return new Promise<AnnouncementItem[]>((resolve, reject) => {
            sp.web.lists.getById(listId)
                .items
                .select("Id,Title,Body,Author/Title,Modified")
                .filter("Expires eq null or Expires ge '" + filterDate + "'")
                .expand("Author")
                .get()
                .then((items: any[]) => {
                    resolve(items);
                })
                .catch((error: any) => {
                    reject(error);
                });
        });
    }

    private static convertItems(items: any[], serverRelativeUrl: string): AnnouncementItem[] {
        var initalData: AnnouncementItem[] = items.map((item: any) => {
            var newItem = {
                Link: serverRelativeUrl + "/DispForm.aspx?ID=" + item.Id,
                Title: item.Title,
                Body: item.Body,
                Author: item.Author.Title,
                Modified: item.Modified,
            };
            return newItem;
        });
        var retVal: AnnouncementItem[] = [];
        for (let c of initalData) {
            if (c !== undefined) {
                retVal.push(c);
            }
        }
        return retVal;
    }
}