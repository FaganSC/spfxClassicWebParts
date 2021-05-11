import { PromotedLinks, PromotedLinksItem } from '../models/PromotedLinksItem';
export const sampleData: PromotedLinks = {
    Title: "UCT Quick Links",
    Link: "https://sharepoint.com",
    Items: [
        {
            Title: "FAQs",
            BGImage: "https://hrsdg.sharepoint.com/sites/IT/SiteAssets/UCT%20FAQ.jpg",
            Description: "Find the answers to your questions here! ",
            Link: "https://hrsdg.sharepoint.com/sites/IT/Lists/FAQs/UCT FAQ.aspx",
            Launch: "In page navigation",
            Order: 1
        },
        {
            Title: "UCT Issues Log",
            BGImage: "https://hrsdg.sharepoint.com/sites/IT/SiteAssets/issuelog.png",
            Description: "Having problems with you Surface Pro? Please log them here. ",
            Link: "https://hrsdg.sharepoint.com/sites/IT/Lists/UCT_IssueLog/AllItems.aspx",
            Launch: "In page navigation",
            Order: 2
        },
        {
            Title: "UCT Scenarios",
            BGImage: "https://hrsdg.sharepoint.com/sites/IT/SiteAssets/Scenarios.jpg",
            Description: "Don't know what applications you should test? These might help you. ",
            Link: "https://hrsdg.sharepoint.com/sites/IT/UCT Scenarios/Forms/AllItems.aspx",
            Launch: "In page navigation",
            Order: 3
        }
    ]
};