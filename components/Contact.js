var Contact = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired
	},

	render: function() {
		return (
			<div className={'contactItem'}>
				<img className={'contactImage'} src={'https://image.flaticon.com/icons/svg/14/14206.svg'}/>
				<p className={'contactLabel'}>
					First Name: {this.props.item.firstName}
				</p>
				<p className={'contactLabel'}>
					Last Name: {this.props.item.lastName}
				</p>
				<a href={'mailto:' + this.props.item.email}>
					{this.props.item.email}
				</a>
			</div>
		)
	}
});