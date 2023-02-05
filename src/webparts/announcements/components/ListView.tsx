import * as React from "react";
import styles from "./Announcements.module.scss";
import { AnnouncementItem } from "../models/AnnouncementItem";
import * as moment from "moment";

interface IListViewProps {
    MoreLink: string;
    Items: AnnouncementItem[];
}

interface IListViewState {
}

export default class ListView extends React.Component<
    IListViewProps,
    IListViewState
> {
    constructor(props) {
        super(props);
    }

    public render(): React.ReactElement<IListViewProps> {
        const { Items, MoreLink } = this.props;
        return (
            <>
                <DetailsList
                    items={Items}
                    columns={this._columns}
                    setKey="set"
                    layoutMode={DetailsListLayoutMode.justified}
                    selection={this._selection}
                    selectionPreservedOnEmptyClick={true}
                    ariaLabelForSelectionColumn="Toggle selection"
                    ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                    checkButtonAriaLabel="select row"
                    onItemInvoked={this._onItemInvoked}
                />
                <a href={MoreLink} className={styles.moreLink}>(More Announcements...)</a>
            </>
        );
    }
}
