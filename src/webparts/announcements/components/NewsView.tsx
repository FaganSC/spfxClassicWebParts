import * as React from "react";
import styles from "./Announcements.module.scss";
import { FocusZone, FocusZoneDirection } from "office-ui-fabric-react/lib/FocusZone";
import { List } from "office-ui-fabric-react/lib/List";
import { AnnouncementItem } from "../models/AnnouncementItem";
import ReactHtmlParser from "react-html-parser";
import * as moment from "moment";

interface INewsViewProps {
    MoreLink: string;
    Items: AnnouncementItem[];
}

interface INewsViewState {
}

export default class NewsView extends React.Component<
    INewsViewProps,
    INewsViewState
> {
    constructor(props) {
        super(props);
        this.onRenderCell = this.onRenderCell.bind(this);
    }

    private onRenderCell(item: AnnouncementItem, index: number | undefined): JSX.Element {
        return (
            <div data-is-focusable={true} className={styles.item}>
                <div className={styles.createdDate}>
                    {moment(item.Modified).format("M/D/YYYY h:mm A")}
                </div>
                <a className={styles.title} href={item.Link}>
                    {item.Title}
                </a>
                <div className={styles.author}>by {item.Author}</div>
                {ReactHtmlParser(item.Body)}
            </div>
        );
    }


    public render(): React.ReactElement<INewsViewProps> {
        const { Items, MoreLink } = this.props;
        return (
            <FocusZone direction={FocusZoneDirection.vertical}>
                <List items={Items} className={styles.listItems} onRenderCell={this.onRenderCell} />
                <a href={MoreLink} className={styles.moreLink}>(More Announcements...)</a>
            </FocusZone>
        );
    }
}
