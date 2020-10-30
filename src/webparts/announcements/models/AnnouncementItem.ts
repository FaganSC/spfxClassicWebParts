export class Announcement {
    public Title: string;
    public Link: string;
    public Items: AnnouncementItem[];
}
export class AnnouncementItem {
    public Link: string;
    public Title: string;
    public Body: string;
    public Author: string; 
    public Created: string;
}
