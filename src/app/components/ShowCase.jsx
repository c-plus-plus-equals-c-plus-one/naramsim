import React from 'react';

import Tech from './Tech.jsx';

class Repo extends React.Component {
	render() {
		const techs = this.props.info.techs.map((tech) => {
			return (
				<Tech tech={tech} key={tech.name} />
			);
		});
		return (
			<div className='showcase mid'>
				<div className='l'>
					<a href={this.props.info.link}>{this.props.info.name}</a>
				</div>
				<div className='grayed margAbove20'>
					{this.props.info.description}
				</div>
				<div className='techRow margAbove20 inline'>
					{techs}
				</div>
			</div>
		);
	}
}

class ShowCase extends React.Component {
	render() {
		let repos = [];
		if (this.props.repos) {
			repos = this.props.repos.map((repo) => {
				return (
					<Repo info={repo} key={repo.name} />
				);
			});
		}
		return (
			<div className='rect'>
				{repos}
			</div>
		);
	}
};

export default ShowCase;