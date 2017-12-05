import React from "react";
import {Helmet} from "react-helmet";

import {navigateTo, withPrefix} from "gatsby-link";

import {AppBar, Drawer, MenuItem} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Page extends React.Component {
  state = {
    drawer: true
  };

  toggleDrawer = () => this.setState({drawer: !this.state.drawer});

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{this.props.title}</title>
            <link rel="stylesheet" href={withPrefix("/static/styles.css")} />
          </Helmet>

          <AppBar
            title={this.props.title}
            style={{position: 'fixed'}}
            onLeftIconButtonTouchTap={this.toggleDrawer} />

          <Drawer
            open={this.state.drawer}
            containerStyle={{marginTop: 64}}>

            <MenuItem onClick={ () => navigateTo('/')}>
              Главная страница
            </MenuItem>
            <MenuItem onClick={ () => navigateTo('/doge')}>
              Doge
            </MenuItem>

          </Drawer>

          <div
            style={{
              position: 'absolute',
              top: 64,
              marginLeft: this.state.drawer ? 256 : 0
            }}>

            {this.props.children}

          </div>

        </div>
      </MuiThemeProvider>
    );
  }
}
