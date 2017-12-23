import React from "react";
import {Helmet} from "react-helmet";

import {navigateTo, withPrefix} from "gatsby-link";

import {AppBar, Drawer, MenuItem, IconButton} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export default class Page extends React.Component {
  state = {
    drawer: false
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

          <Drawer open={this.state.drawer}>

            <AppBar
              title="Меню"
              style={{position: 'fixed'}}
              iconElementLeft={<IconButton><NavigationClose /></IconButton>}
              onLeftIconButtonTouchTap={this.toggleDrawer} />

            <div style={{paddingTop: 64}}>
              <MenuItem onClick={ () => navigateTo('/')}>
                Главная страница
              </MenuItem>
              <MenuItem onClick={ () => navigateTo('/doge')}>
                Doge
              </MenuItem>
            </div>

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
