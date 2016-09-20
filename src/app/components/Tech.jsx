import React from 'react';

class Tech extends React.Component {
	render() {
		const techSrc = this.props.tech.icon.indexOf('://') === -1 ?
							`http://svgporn.com/logos/${this.props.tech.icon}.svg` : 
							this.props.tech.icon;
		const techName = this.props.tech.name;
		const techHref = `http://www.google.com/search?q=${this.props.tech.name}&btnI`;
		return (
			<div className='paddHori20 tech'>
				<a href={techHref}>
					<img className='techLogo' src={techSrc} alt={techName} />
				</a>
				<div className='m margAbove5'>{techName}</div>
			</div>
		);
	}
}

export default Tech;