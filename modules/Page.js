import React from "react";

import {AppBar, Drawer} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Page extends React.Component {
  state = {
    drawer: true
  };

  toggleDrawer = () => this.setState({drawer: !this.state.drawer});

  render() {
    return (
      <MuiThemeProvider>
        <div>

          <AppBar
            title={this.props.title}
            style={{position: 'fixed'}}
            onLeftIconButtonTouchTap={this.toggleDrawer} />

          <Drawer
            open={this.state.drawer}
            containerStyle={{
              height: 'calc(100% - 64px)',
              top: 64
            }} />

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

export { Page };
