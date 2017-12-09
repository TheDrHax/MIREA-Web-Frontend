import React from "react";
import fetch from "node-fetch";
import {withPrefix} from "gatsby-link";

import {Card, CardHeader} from 'material-ui/Card';

import Page from '../components/Page';

class Branch extends React.Component {
	render() {
		return (
			<Card style={{margin: 16}}>
				<CardHeader
					title={this.props.data.name}
					subtitle={
						this.props.data.by_build == "1" ?
							"Сборка #" + this.props.data.build :
							"Версия #" + this.props.data.version
					}
				 	avatar={withPrefix(
						this.props.data.by_build == "1" ?
							"/images/jenkins.png" : "/images/github.png"
					)} />
			</Card>
		)
	}
}

export default class Main extends React.Component {
	state = {
		loaded: false
	}

	updateData(json) {
		var data = []
		for (var branch in json) {
			data.push(json[branch])
		}

		this.setState({
			loaded: true,
			data: data
		})
	}

  renderBanches() {
		return (
			this.state.data.map((data) => (
				<Branch data={data} key={data.name} />
			))
		)
	}

	render() {
		if (!this.state.loaded) {
			fetch("https://mosmetro.duckdns.org/api/v1/branches.php")
				.then(res => res.json())
				.then(json => this.updateData(json))
		}

		return (
			<Page title="Главная страница">
				{this.state.loaded ? this.renderBanches() : "Loading..."}
		  </Page>
		)
	}
}
