import * as React from 'react';
import styles from './LinksList.module.scss';
import { ILinksListProps } from './ILinksListProps';
import { ILinksListState } from "./ILinksListState";
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
import {
  FocusZone,
  FocusZoneDirection,
} from "office-ui-fabric-react/lib/FocusZone";
import { List } from "office-ui-fabric-react/lib/List";
import { Link as LinkModel, LinkItem } from "../models/LinkItem";
import { LinkService } from "../services/LinkService";
import { WebPartTitle } from "@pnp/spfx-controls-react/lib/WebPartTitle";
import { DisplayMode } from "@microsoft/sp-core-library";
import { Spinner } from "office-ui-fabric-react/lib/Spinner";
import { Link } from "office-ui-fabric-react/lib/Link";

export default class LinksList extends React.Component<ILinksListProps, ILinksListState>  {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      isLoading: true,
      items: null
    };
  }

  private _onConfigure = () => {
    this.props.context.propertyPane.open();
  }

  public componentDidMount() {
    if (this.props.isConfigured) {
      LinkService.getItems(this.props.lists)
        .then((links: LinkModel) => {
          this.setState({
            isLoading: false,
            items: links.Items,
          });
        })
        .catch((error: any) => {
          console.log(`${error.message}`);
        });
    }
  }

  public async componentDidUpdate(
    prevProps: ILinksListProps,
    prevState: ILinksListState
  ) {
    if (this.props.isConfigured && this.props.lists !== prevProps.lists) {
      this.setState({ isLoading: true });
      LinkService.getItems(this.props.lists)
        .then((links: LinkModel) => {
          this.props.updateProperty(links.Title);
          this.setState({
            isLoading: false,
            title: links.Title,
            items: links.Items,
          });
        })
        .catch((error: any) => {
          console.log(`${error.message}`);
        });
    }
  }

  private onRenderCell(item: LinkItem, index: number | undefined): JSX.Element {
    return (
      <div data-is-focusable={true} className={styles.item}>
        <Link href={item.Link}>{item.Title}</Link>        
      </div>      
    );
  }

  public render(): React.ReactElement<ILinksListProps> {
    if (!this.props.isConfigured) {
      return (
        <Placeholder
          iconName="Edit"
          iconText="Configure your Links List web part"
          description="Please configure the web part."
          buttonLabel="Configure"
          hideButton={this.props.displayMode === DisplayMode.Read}
          onConfigure={this._onConfigure}
        />
      );
    } else if (this.state.isLoading) {
      return (
        <div className={styles.linksList}>
          <Spinner label="Loading Links..." />
        </div>
      );
    } else {
      return (
        <div className={styles.linksList}>
          <WebPartTitle
            displayMode={this.props.displayMode}
            title={this.state.title}
            updateProperty={this.props.updateProperty}
          />
          <FocusZone direction={FocusZoneDirection.vertical}>
            <List items={this.state.items} className={styles.listItems} onRenderCell={this.onRenderCell} />
          </FocusZone>
        </div>
      );
    }
  }
}
