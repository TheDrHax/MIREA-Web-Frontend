import React from "react";

import {
  Card, CardHeader, CardMedia, CardTitle
} from 'material-ui/Card';

import {Page} from './Page';

class Home extends Page {
  render() {
    return (
      <Page title="Doge Unlimited">
        <Card style={{margin: 16, width: 400}}>
          <CardHeader
            title="Doge"
            subtitle="App maintainer"
            avatar="images/doge_avatar.jpg"
          />
          <CardMedia>
            <img src="images/doge.jpg" alt="" />
          </CardMedia>
          <CardTitle title="Wow" subtitle="Such design" />
        </Card>
        <Card style={{margin: 16, width: 400}}>
          <CardHeader
            title="Doge"
            subtitle="App maintainer"
            avatar="images/doge_avatar.jpg"
          />
          <CardMedia
            overlay={<CardTitle title="Big overlay" subtitle="Woah" />}>
            <img src="images/doge.jpg" style={{transform: 'scale(-1, 1)'}} />
          </CardMedia>
        </Card>
      </Page>
    )
  }
}

export { Home };
