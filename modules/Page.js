import React from "react";

import {AppBar, Drawer} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Page extends React.Component {
  state = {
    drawer: false
  };

  toggleDrawer = () => this.setState({drawer: !this.state.drawer});

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Drawer
            open={this.state.drawer}
            containerStyle={{height: 'calc(100% - 64px)', top: 64}} />
          <AppBar
            title="Such AppBar, Wow"
            onLeftIconButtonTouchTap={this.toggleDrawer} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export { Page };
