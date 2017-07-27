import React, { Component }  from 'react';
import { View, Animated, PanResponder } from 'react-native';


class Deck extends Component {
	constructor(props) {
		super(props);

		const position = new Animated.ValueXY();
		const panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: (event, gesture) => {
				position.setValue({ x: gesture.dx , y: gesture.dy })
			},
			onPandResponderRelease: () => {}
		});
			this.position = position
			this.state = { panResponder }
	}


	renderCards() {
		return this.props.data.map((item, index) => {
			if ( index === 0 ) {
				return (
					<Animated.View
						key={item.id}
						style={this.position.getLayout()}
						 {...this.state.panResponder.panHandlers}
					>
				 		{this.props.renderCard(item)}
					</Animated.View>
				);
			}

		});
	}

	render() {
		return (
			<View>
				{this.renderCards()}
			</View>
		);
	}
}

export default Deck;
