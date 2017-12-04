import React from "react";

import Columns from 'react-columns';
import {
  Card, CardHeader, CardMedia, CardTitle
} from 'material-ui/Card';

import Page from './Page';

const CardA = (
  <Card style={{margin: 16}}>
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
)

const CardB = (
  <Card style={{margin: 16}}>
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
)

export default class Doge extends React.Component {
  render() {
    return (
      <Page title="Doge Unlimited">
        <Columns columns={2}>
          {CardA}
          {CardB}
          {CardB}
          {CardA}
        </Columns>
      </Page>
    )
  }
}
