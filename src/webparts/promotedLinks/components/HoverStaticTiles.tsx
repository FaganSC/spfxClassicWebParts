import * as React from "react";
import styles from "./PromotedLinks.module.scss";
import { PromotedLinksItems } from '../models/PromotedLinksItem';
export interface IHoverStaticTilesProps {
  item: PromotedLinksItems;
  staticBGColor: string;
  staticTXTColor: string;
  hoverBGColor: string;
  hoverTXTColor: string;
}

export interface IHoverStaticTilesState {
  hover: boolean;
}

export class HoverStaticTiles extends React.Component<IHoverStaticTilesProps, IHoverStaticTilesState> {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this._onMouseOver = this._onMouseOver.bind(this);
    this._onMouseOut = this._onMouseOut.bind(this);
  }

  private _onMouseOver = () => {
    this.setState({ hover: true });
  }
  private _onMouseOut = () => {
    this.setState({ hover: false });
  }

  public render(): React.ReactElement<IHoverStaticTilesProps> {
    const { item } = this.props;
    const { hover } = this.state;
    let stylesTile;
    let linkBehavior;
    if (hover) {
      stylesTile = [styles.tile, styles.hover].join(" ");
    } else {
      stylesTile = styles.tile;
    }
    const staticLinkStyle = { backgroundColor: this.props.staticBGColor, color: this.props.staticTXTColor };
    const hoverLinkStyle = { backgroundColor: this.props.hoverBGColor, color: this.props.hoverTXTColor };
    if (item.Launch === "In page navigation") {
      linkBehavior = "_self";
    } else {//New tab
      linkBehavior = "_blank";
    }
    //Dialog
    return (
      <a href={item.Link} className={styles.staticTile} style={hover ? hoverLinkStyle : staticLinkStyle} target={linkBehavior} onMouseOver={this._onMouseOver} onMouseOut={this._onMouseOut}>
        <div>
          <div className={styles.title}>{item.Title}</div>
        </div>
      </a>
    );
  }
}
