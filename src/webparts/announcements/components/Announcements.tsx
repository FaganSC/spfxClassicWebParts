import * as React from "react";
import styles from "./Announcements.module.scss";
import { IAnnouncementsProps } from "./IAnnouncementsProps";
import { IAnnouncementsState } from "./IAnnouncementsState";
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
import { FocusZone, FocusZoneDirection } from "office-ui-fabric-react/lib/FocusZone";
import { List } from "office-ui-fabric-react/lib/List";
import { Announcement, AnnouncementItem } from "../models/AnnouncementItem";
import { AnnouncementService } from "../services/AnnouncementService";
import ReactHtmlParser from "react-html-parser";
import * as moment from "moment";
import { WebPartTitle } from "@pnp/spfx-controls-react/lib/WebPartTitle";
import { DisplayMode } from "@microsoft/sp-core-library";
import { Spinner } from "office-ui-fabric-react/lib/Spinner";
import NewsView from "./newsView";
import ListView from "./ListView";

export default class Announcements extends React.Component<
  IAnnouncementsProps,
  IAnnouncementsState
> {
  constructor(props) {
    super(props);
    this.onRenderCell = this.onRenderCell.bind(this);
    this.state = {
      title: this.props.title,
      isLoading: true,
      moreLink: null,
      items: null,
      textDisplayLayout: this.props.textDisplayLayout
    };
  }

  private _onConfigure = () => {
    this.props.context.propertyPane.open();
  }

  public componentDidMount() {
    if (this.props.isConfigured) {
      AnnouncementService.getItems(this.props.lists)
        .then((announcement: Announcement) => {
          this.setState({
            isLoading: false,
            moreLink: announcement.Link,
            items: announcement.Items,
          });
        })
        .catch((error: any) => {
          console.log(`${error.message}`);
        });
    }
  }

  public async componentDidUpdate(
    prevProps: IAnnouncementsProps,
    prevState: IAnnouncementsState
  ) {
    if (this.props.isConfigured && this.props.lists !== prevProps.lists) {
      this.setState({ isLoading: true });
      AnnouncementService.getItems(this.props.lists)
        .then((announcement: Announcement) => {
          this.props.updateProperty(announcement.Title);
          this.setState({
            isLoading: false,
            title: announcement.Title,
            moreLink: announcement.Link,
            items: announcement.Items,
          });
        })
        .catch((error: any) => {
          console.log(`${error.message}`);
        });
    }

    if (this.props.textDisplayLayout !== prevProps.textDisplayLayout) {
      this.setState({ textDisplayLayout: this.props.textDisplayLayout });
    }
  }

  public render(): React.ReactElement<IAnnouncementsProps> {
    const { isLoading, title, textDisplayLayout, items, moreLink } = this.state;
    const { isConfigured, displayMode, updateProperty } = this.props;
    if (!isConfigured) {
      return (
        <Placeholder
          iconName="Edit"
          iconText="Configure your Announcements web part"
          description="Please configure the web part."
          buttonLabel="Configure"
          hideButton={displayMode === DisplayMode.Read}
          onConfigure={this._onConfigure}
        />
      );
    } else if (isLoading) {
      return (
        <div className={styles.announcements}>
          <Spinner label="Loading Announcements..." />
        </div>
      );
    } else {
      return (
        <div className={textDisplayLayout === "full" ? styles.announcements : [styles.announcements, styles.previewText].join(' ')}>
          <WebPartTitle
            displayMode={displayMode}
            title={title}
            updateProperty={updateProperty}
          />
          {displayMode === "preview" || displayMode === "full" && <NewsView MoreLink={moreLink} Items={items} />}
          {displayMode === "list"  && <ListView MoreLink={moreLink} Items={items} />}
        </div>
      );
    }
  }
}
