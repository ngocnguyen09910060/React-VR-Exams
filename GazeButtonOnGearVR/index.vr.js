import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  NativeModules,
} from 'react-vr';
import GazeButton from 'react-vr-gaze-button';

const isViewInVR = false;

export default class GazeButtonOnGearVR extends React.Component {
		constructor() {
			super()
			this.state = {
				buttonIsClicked: false
			}
			this.onMainWindowMessage = this.onMainWindowMessage.bind(this);
		}

		componentWillMount() {
			window.addEventListener('message', this.onMainWindowMessage);
		}

		onMainWindowMessage(e) {
			switch (e.data.type) {
				case 'viewInVR':
					{
						isViewInVR = !isViewInVR;
					}
					break;
				default:
					return;
			}
		}
		
	handleClick() {
		if(isViewInVR) {
			this.setState({buttonIsClicked: true});
		}
	}
	  
	render() {
		const {buttonIsClicked} = this.state;
		return (
		  <View>
			<Pano source={asset('chess-world.jpg')}/>
			<GazeButton onClick={() => this.handleClick()} duration={2000}>
				{time => (
					<Text style={{
						backgroundColor: '#777879',
						fontSize: 0.4,
						fontWeight: '400',
						layoutOrigin: [0.5, 0.5],
						paddingLeft: 0.2,
						paddingRight: 0.2,
						textAlign: 'center',
						textAlignVertical: 'center',
						transform: [{translate: [0, 0, -3]}],
					}}>
						{buttonIsClicked ? 'You have clicked me' : `Gaze me for ${time} milliseconds`}
					</Text>
				)}
			</GazeButton>
		  </View>
		);
	}
};

AppRegistry.registerComponent('GazeButtonOnGearVR', () => GazeButtonOnGearVR);
