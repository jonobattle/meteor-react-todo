App = React.createClass({
	getInitialState: function() {
		return {};
	},

	render: function() {
		return (
			<div>
				<h1>React Demo</h1>
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
});
