import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';
import { sp } from "@pnp/sp";
import * as strings from 'PromotedLinksWebPartStrings';
import PromotedLinks from './components/PromotedLinks';
import { IPromotedLinksProps } from './components/IPromotedLinksProps';

export interface IPromotedLinksWebPartProps {
  title: string;
  list: string;
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
        isConfigured: this.isConfigured()
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
              ]
            }
          ]
        }
      ]
    };
  }
}
