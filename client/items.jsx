var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

Items = React.createClass({
	mixins: [ReactMeteorData],
	
	getMeteorData: function() {
		return {
			items: ItemsCollection.find({}).fetch().reverse()
		};
	},

	getInitialState: function() {
		return {};
	},

	addItem: function(e) {
		e.preventDefault();
		var item = React.findDOMNode(this.refs.input).value;
		
		ItemsCollection.insert({'content': item});
		React.findDOMNode(this.refs.input).value = "";
	},

	render: function() {

		const styles = {
			ul: {
				listStyle: "none",
				padding: 0,
				margin: 0,
				li: {
					padding: '0px 10px',
					backgroundColor: '#f9f9f9',
					margin: 5,
					height: 45,
					lineHeight: '45px'
				}
			}
		}


		const items = this.data.items.map((item) => {
			return <li style={styles.ul.li} key={item._id}>{item.content}</li>;
		});
		
		


		return (
			<div>
				
				<form onSubmit={this.addItem}>
					<input type="text" ref="input"/>
					<button type="submit">Add Item</button>
				</form>

				<ReactCSSTransitionGroup component="ul" style={styles.ul} transitionName="example">
					{items}
				</ReactCSSTransitionGroup>				

			</div>
		);
	}
});
