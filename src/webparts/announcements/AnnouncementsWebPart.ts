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
import * as strings from 'AnnouncementsWebPartStrings';
import Announcements from './components/Announcements';
import { IAnnouncementsProps } from './components/IAnnouncementsProps';

export interface IAnnouncementsWebPartProps {
  title: string;
  lists: string;
}

export default class AnnouncementsWebPart extends BaseClientSideWebPart<IAnnouncementsWebPartProps> {
  public onInit(): Promise<void> {
    return super.onInit().then(_ => {
      sp.setup({
        spfxContext: this.context
      });
    });
  }

  private isConfigured(): boolean {
    return this.properties.lists === undefined ? false : true;
  }

  public render(): void {
    const element: React.ReactElement<IAnnouncementsProps> = React.createElement(
      Announcements,
      {
        title: this.properties.title,
        context: this.context,
        lists: this.properties.lists,
        displayMode: this.displayMode,
        isConfigured: this.isConfigured(),
        updateProperty: (value: string) => {
          this.properties.title = value;
        }
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
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
                PropertyFieldListPicker('lists', {
                  label: strings.SelectListFieldLabel,
                  baseTemplate: 104,
                  selectedList: this.properties.lists,
                  includeHidden: false,
                  orderBy: PropertyFieldListPickerOrderBy.Title,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  context: this.context,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'listPickerFieldId'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
