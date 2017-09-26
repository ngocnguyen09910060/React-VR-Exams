import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      RotateX: 0,
      RotateY: 0,
      RotateZ: 0,
    };
  }
  
  rotateX(isPlus) {
    if(isPlus) {
      this.setState({
        RotateX: this.state.RotateX + 1,
      });
    } else {
      this.setState({
        RotateX: this.state.RotateX - 1,
      });
    }
  }

  rotateY(isPlus) {
    if(isPlus) {
      this.setState({
        RotateY: this.state.RotateY + 1,
      });
    } else {
      this.setState({
        RotateY: this.state.RotateY - 1,
      });
    }
  }

  rotateZ(isPlus) {
    if(isPlus) {
      this.setState({
        RotateZ: this.state.RotateZ + 1,
      });
    } else {
      this.setState({
        RotateZ: this.state.RotateZ - 1,
      });
    }
  }

  handleInput(event){
    //console.log(event.nativeEvent.inputEvent.eventType);
  }

  render() {
    //https://github.com/facebook/react-vr/issues/112
    return (
      <View onInput={this.handleInput}>
        <Pano source={asset('chess-world.jpg')}/>
        <View style={{
          transform: [
            {rotateY: 100},
            {translateX: 0},
            {translateY: 0},
            {translateZ: -3},
          ],
        }}>
          <Text
            style={{
              backgroundColor: '#777879',
              fontSize: 0.8,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [
                {rotateX: this.state.RotateX},
                {rotateY: this.state.RotateY},
                {rotateZ: this.state.RotateZ},
                ],
            }}>
            hello
          </Text>
        </View>
        <View style={{flexDirection: 'row', 
          transform: [
            {rotateY: 100},
            {translateX: 0},
            {translateY: -1},
            {translateZ: -3},
          ]
        }}>
          <VrButton onClick={()=>this.rotateX(true)}>
            <Text style={{backgroundColor: '#777879', fontSize: 0.1, layoutOrigin: [0.5, 0.5], textAlign: 'center', textAlignVertical: 'center', transform: [{translate: [0, 0, -3]}], width: 0.2, height: 0.2}}>
              +
            </Text>
          </VrButton>
          <VrButton onClick={()=>this.rotateX(false)}>
            <Text style={{backgroundColor: '#777879', fontSize: 0.1, layoutOrigin: [0.5, 0.5], textAlign: 'center', textAlignVertical: 'center', transform: [{translate: [0, 0, -3]}], width: 0.2, height: 0.2}}>
              -
            </Text>
          </VrButton>
          <VrButton onClick={()=>this.rotateY(true)}>
            <Text style={{backgroundColor: '#777879', fontSize: 0.1, layoutOrigin: [0.5, 0.5], textAlign: 'center', textAlignVertical: 'center', transform: [{translate: [0, 0, -3]}], width: 0.2, height: 0.2}}>
              +
            </Text>
          </VrButton>
          <VrButton onClick={()=>this.rotateY(false)}>
            <Text style={{backgroundColor: '#777879', fontSize: 0.1, layoutOrigin: [0.5, 0.5], textAlign: 'center', textAlignVertical: 'center', transform: [{translate: [0, 0, -3]}], width: 0.2, height: 0.2}}>
              -
            </Text>
          </VrButton>
          <VrButton onClick={()=>this.rotateZ(true)}>
            <Text style={{backgroundColor: '#777879', fontSize: 0.1, layoutOrigin: [0.5, 0.5], textAlign: 'center', textAlignVertical: 'center', transform: [{translate: [0, 0, -3]}], width: 0.2, height: 0.2}}>
              +
            </Text>
          </VrButton>
          <VrButton onClick={()=>this.rotateZ(false)}>
            <Text style={{backgroundColor: '#777879', fontSize: 0.1, layoutOrigin: [0.5, 0.5], textAlign: 'center', textAlignVertical: 'center', transform: [{translate: [0, 0, -3]}], width: 0.2, height: 0.2}}>
              -
            </Text>
          </VrButton>
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
