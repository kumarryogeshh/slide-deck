import React, { Component } from "react";
import { Button, Icon, Grid, Segment, Transition } from "semantic-ui-react";

import slides from "../../utils/slides.json";
import Slide from "./slide";

// *******  Slide animation options *****
// set as state in constructor
//   'jiggle',
//   'flash',
//   'shake',
//   'pulse',
//   'tada',
//   'bounce',
//   'glow',
//
//******************************

class Slides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      duration: 500,
      visible: true,
      animation: "pulse"
    };
  }

  onSlideForward = () => {
    let slideCount = this.state.counter;
    if (slideCount === slides.length - 1) {
      slideCount = slides.length - 1;
    } else {
      slideCount = slideCount + 1;
      this.toggleVisibility();
    }
    this.setState({ counter: slideCount });
  };

  onSlideBack = () => {
    let slideCount = this.state.counter;
    if (slideCount === 0) {
      slideCount = 0;
    } else {
      slideCount = slideCount - 1;
      this.toggleVisibility();
    }
    this.setState({ counter: slideCount });
  };

  toggleVisibility = () =>
    this.setState(prevState => ({ visible: !prevState.visible }));

  render() {
    const { animation, duration, visible } = this.state;
    return (
      <div className="ui container">
        <Grid columns="equal" verticalAlign="middle" centered>
          <Grid.Column>
            <div>
              <Button
                animated
                onClick={this.onSlideBack}
                inverted
                color="blue"
                floated="left"
              >
                <Button.Content visible>Back</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow left" />
                </Button.Content>
              </Button>
            </div>
          </Grid.Column>

          <Grid.Column width={12}>
            <Transition
              animation={animation}
              duration={duration}
              visible={visible}
            >
              <Segment raised>
                <Slide slide={slides[this.state.counter]} />
              </Segment>
            </Transition>
          </Grid.Column>

          <Grid.Column>
            <Button
              animated
              onClick={this.onSlideForward}
              inverted
              color="blue"
              floated="right"
            >
              <Button.Content visible>Next</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Slides;
