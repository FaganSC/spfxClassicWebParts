import { Announcement, AnnouncementItem } from '../models/AnnouncementItem';
export const sampleData: Announcement = {
    Title: "Announcements",
    Link: "https://sharepoint.com",
    Items: [
        {
            Link: "",
            Title: "Test1",
            Body: "<h1>Test</h1>",
            Author: "Shawn Fagan",
            Created: "2020-10-31"
        },
        {
            Link: "",
            Title: "Test2",
            Body: "<h1>Test</h1>",
            Author: "Shawn Fagan",
            Created: "2020-10-31"
        }
    ]
};