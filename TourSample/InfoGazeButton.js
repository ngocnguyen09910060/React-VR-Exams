/**
 * The examples provided by Oculus are for non-commercial testing and
 * evaluation purposes only.
 *
 * Oculus reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * OCULUS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */
'use strict';

import React from 'react';
import {Animated, Image, View, VrButton} from 'react-vr';

import Tooltip from './Tooltip';
import GazeButton from './GazeButton';

/**
 * On hover the InfoButton fades in a Tooltip component, and then fades it out
 * when the cursor leaves both the button and the Tooltip.
 * 
 * When using with CylinderLayer, set pixelsPerMeter to convert units, otherise
 * set translateZ to specify distance between camera and button. 
 */
class InfoButton extends React.Component {
  static defaultProps = {
    fadeIn: 500,
    fadeOut: 500,
    height: 0.3,
    onInput: null,
    pixelsPerMeter: 1,
    rotateY: 0,
    translateX: 0,
    translateZ: 0,
    width: 0.3,
  };

  constructor(props) {
    super();
    this.state = {
      hasFocus: false,
      opacityAnim: new Animated.Value(0),
    };
  }

  _fadeIn() {
    Animated.timing(this.state.opacityAnim, {
      toValue: 1,
      duration: this.props.fadeIn,
    }).start();
  }

  _fadeOut() {
    Animated.timing(this.state.opacityAnim, {
      toValue: 0,
      duration: this.props.fadeOut,
    }).start();
  }

  render() {
    const PPM = this.props.pixelsPerMeter;

    return (
      <View
        style={{
          layoutOrigin: [0.5, 0.5, 0],
          position: 'absolute',
          transform: [
            {rotateY: this.props.rotateY},
            {translateX: this.props.translateX},
            {translateZ: this.props.translateZ},
          ],
        }}
      >
      <GazeButton onClick={() => this._fadeIn()} duration={2000}>
        {time => (
        <Image
          style={{
            height: 0.3 * PPM,
            width: 0.3 * PPM,
            flexDirection: 'row',
          }}
          source={this.props.source}>
          <Animated.View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              opacity: this.state.opacityAnim,
              paddingLeft: 0.4 * PPM,
            }}
            billboarding={'on'}>
            <Tooltip pixelsPerMeter={PPM} tooltip={this.props.tooltip} />
          </Animated.View>
        </Image>
        )}
      </GazeButton>
      </View>
    );
  }
}

module.exports = InfoButton;
