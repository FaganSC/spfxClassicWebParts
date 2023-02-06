import * as React from 'react';
import styles from './PromotedLinks.module.scss';
import { IPromotedLinksProps } from './IPromotedLinksProps';
import { IPromotedLinksState } from './IPromotedLinksState';
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";

import { DisplayMode } from "@microsoft/sp-core-library";
import { PromotedLinksService } from '../services/PromotedLinksService';
import { PromotedLinksItems } from '../models/PromotedLinksItem';
import { Tiles } from '../components/Tiles';
import { Spinner } from "office-ui-fabric-react/lib/Spinner";
import { HoverStaticTiles } from './HoverStaticTiles';

export default class PromotedLinks extends React.Component<IPromotedLinksProps, IPromotedLinksState> {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      items: null
    };
  }

  private _onConfigure = () => {
    this.props.context.propertyPane.open();
  }

  public componentDidMount() {
    if (this.props.isConfigured) {
      PromotedLinksService.getItems(this.props.list)
        .then((promotedLinks: PromotedLinksItems[]) => {
          this.setState({
            isLoading: false,
            items: promotedLinks,
          });
        })
        .catch((error: any) => {
          console.log(`${error.message}`);
        });
    }
  }

  public async componentDidUpdate(
    prevProps: IPromotedLinksProps,
    prevState: IPromotedLinksState
  ) {
    if (this.props.isConfigured && this.props.list !== prevProps.list) {
      this.setState({ isLoading: true });
      PromotedLinksService.getItems(this.props.list)
        .then((promotedLinks: PromotedLinksItems[]) => {
          this.setState({
            isLoading: false,
            items: promotedLinks,
          });
        })
        .catch((error: any) => {
          console.log(`${error.message}`);
        });
    }
  }
  public render(): React.ReactElement<IPromotedLinksProps> {
    const { items } = this.state;
    const clearStyle: React.CSSProperties = {
      clear: 'both'
    };
    if (!this.props.isConfigured) {
      return (
        <Placeholder
          iconName="Edit"
          iconText="Configure your Promoted Links web part"
          description="Please configure the web part."
          buttonLabel="Configure"
          hideButton={this.props.displayMode === DisplayMode.Read}
          onConfigure={this._onConfigure}
        />
      );
    } else if (this.state.isLoading) {
      return (
        <div className={styles.promotedLinks}>
          <Spinner label="Loading Promoted Links..." />
        </div>
      );
    } else {
      let tileItems = items.map((item: PromotedLinksItems, index: number) => {
        if (this.props.imageOverride) {
          return(<HoverStaticTiles key={index} item={item} staticBGColor={this.props.staticBGColor} staticTXTColor={this.props.staticTXTColor} hoverBGColor={this.props.hoverBGColor} hoverTXTColor={this.props.hoverTXTColor} />);
        } else {
          return(<Tiles key={index} item={item} />);
        }
      }
      );
      return (
        <div className={styles.promotedLinks}>
          {tileItems}
          <div style={clearStyle}></div>
        </div>
      );
    }
  }
}
