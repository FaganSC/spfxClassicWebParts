import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneToggle
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';
import { sp } from "@pnp/sp";
import * as strings from 'PromotedLinksWebPartStrings';
import PromotedLinks from './components/PromotedLinks';
import { IPromotedLinksProps } from './components/IPromotedLinksProps';

export interface IPromotedLinksWebPartProps {
  title: string;
  list: string;
  imageOverride: boolean;
  staticBGColor: string;
  staticTXTColor: string;
  hoverBGColor: string;
  hoverTXTColor: string;
}

export default class PromotedLinksWebPart extends BaseClientSideWebPart<IPromotedLinksWebPartProps> {
  public onInit(): Promise<void> {
    return super.onInit().then(_ => {
      sp.setup({
        spfxContext: this.context
      });
    });
  }

  private isConfigured(): boolean {
    return this.properties.list === undefined ? false : true;
  }

  public render(): void {
    const element: React.ReactElement<IPromotedLinksProps> = React.createElement(
      PromotedLinks,
      {
        title: this.properties.title,
        context: this.context,
        list: this.properties.list,
        displayMode: this.displayMode,
        imageOverride: this.properties.imageOverride,
        staticBGColor: this.properties.staticBGColor,
        staticTXTColor: this.properties.staticTXTColor,
        hoverBGColor: this.properties.hoverBGColor,
        hoverTXTColor: this.properties.hoverTXTColor,
        isConfigured: this.isConfigured(),
        updateProperty: (value: string) => {
          this.properties.title = value;
        },
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyFieldListPicker('list', {
                  label: strings.SelectListFieldLabel,
                  baseTemplate: 170,
                  selectedList: this.properties.list,
                  includeHidden: false,
                  orderBy: PropertyFieldListPickerOrderBy.Title,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  context: this.context as any,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'listPickerFieldId'
                }),
                PropertyPaneToggle('imageOverride',{
                  label: 'Display only Text',
                  onText:"Text Only",
                  offText:"Images from list",
                  checked:this.properties.imageOverride
                }),
                PropertyFieldColorPicker('staticBGColor', {
                  label: 'Static Background Color',
                  selectedColor: this.properties.staticBGColor,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: false,
                  isHidden: false,
                  alphaSliderHidden: false,
                  style: PropertyFieldColorPickerStyle.Inline,
                  iconName: 'Precipitation',
                  key: 'colorFieldId'
                }),
                PropertyFieldColorPicker('staticTXTColor', {
                  label: 'Static Text Color',
                  selectedColor: this.properties.staticTXTColor,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: false,
                  isHidden: false,
                  alphaSliderHidden: false,
                  style: PropertyFieldColorPickerStyle.Inline,
                  iconName: 'Precipitation',
                  key: 'colorFieldId'
                }),
                PropertyFieldColorPicker('hoverBGColor', {
                  label: 'Hover Background Color',
                  selectedColor: this.properties.hoverBGColor,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: false,
                  isHidden: false,
                  alphaSliderHidden: false,
                  style: PropertyFieldColorPickerStyle.Inline,
                  iconName: 'Precipitation',
                  key: 'colorFieldId'
                }),
                PropertyFieldColorPicker('hoverTXTColor', {
                  label: 'Hover Text Color',
                  selectedColor: this.properties.hoverTXTColor,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: false,
                  isHidden: false,
                  alphaSliderHidden: false,
                  style: PropertyFieldColorPickerStyle.Inline,
                  iconName: 'Precipitation',
                  key: 'colorFieldId'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
