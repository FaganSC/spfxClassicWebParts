import * as React from "react";
import styles from "./PromotedLinks.module.scss";
import { PromotedLinks, PromotedLinksItem } from '../models/PromotedLinksItem';
export interface ITilesProps {
  item: PromotedLinksItem;
}

export interface ITilesState {
  hover: boolean;
 }

export class Tiles extends React.Component<ITilesProps, ITilesState> {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this._onMouseOver = this._onMouseOver.bind(this);
    this._onMouseOut = this._onMouseOut.bind(this);
  }

  private _onMouseOver = () =>{
    this.setState({hover: true});
  }
  private _onMouseOut = () =>{
    this.setState({hover: false});
  }

  public render(): React.ReactElement<ITilesProps> {
    const { item } = this.props;
    const { hover } = this.state;
    let stylesTile;
    let linkBehavior;
    if (hover){
      stylesTile = [styles.tile,styles.hover].join(" ");
    } else {
      stylesTile = styles.tile;
    }
    const inlineStyle = { backgroundImage: `url(${item.BGImage})` };
    if (item.Launch === "In page navigation"){
      linkBehavior = "_self"
    } else {//New tab
      linkBehavior = "_blank"
    }
    //Dialog
    return (
      <div className={stylesTile} onMouseOver={this._onMouseOver} onMouseOut={this._onMouseOut}>
        <div className={styles.container} style={inlineStyle}>
          <a href={item.Link} target={linkBehavior}>
            <div className={styles.detailsBox}>
                <div className={styles.title}>{item.Title}</div>
                <div className={styles.description}>{item.Description}</div>
            </div>
            </a>
        </div>
      </div>
      );
  }
}
