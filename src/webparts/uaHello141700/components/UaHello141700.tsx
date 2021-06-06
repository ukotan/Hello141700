import * as React from 'react';
import styles from './UaHello141700.module.scss';
import { IUaHello141700Props } from './IUaHello141700Props';
import { escape } from '@microsoft/sp-lodash-subset';

export default class UaHello141700 extends React.Component<IUaHello141700Props, {}> {
  public render(): React.ReactElement<IUaHello141700Props> {
    return (
      <div className={ styles.uaHello141700 }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
