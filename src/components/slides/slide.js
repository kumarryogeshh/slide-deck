import React, { Component } from "react";
import { Header, Image, Message, Placeholder } from "semantic-ui-react";
import LazyLoad from "react-lazyload";

const Loading = () => (
  <Placeholder>
    <Placeholder.Header image>
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Header>
    <Placeholder.Paragraph>
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Paragraph>
  </Placeholder>
);

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: -1,
      points: []
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.slide.title !== prevProps.slide.title) {
      this.setState({
        points: [],
        counter: -1
      });
    }
  }

  nextPoint = () => {
    let bulletPtr = this.state.counter;
    const { slide } = this.props;
    if (bulletPtr === slide.description.length - 1) {
      bulletPtr = slide.description.length - 1;
    } else {
      bulletPtr = bulletPtr + 1;
    }

    this.setState({
      counter: bulletPtr
    });

    this.setState(previousState => {
      if (previousState.points.length !== slide.description.length) {
        return {
          points: [...previousState.points, slide.description[bulletPtr]]
        };
      }
    });
  };

  render() {
    const { slide } = this.props;
    const { points } = this.state;

    return (
      <div className="ui container" onClick={this.nextPoint}>
        <LazyLoad placeholder={<Loading />}>
          <div>
            <Header
              as="h2"
              dividing
              content={slide.title}
              subheader={slide.tagline}
            />
            <Message.List>
              {points &&
                points.map((msg, i) => (
                  <Message.Item key={i}>{msg}</Message.Item>
                ))}
            </Message.List>
            {slide.imageUrl && (
              <Image src={slide.imageUrl} size="big" centered></Image>
            )}
          </div>
          <br />
          <br />
        </LazyLoad>
      </div>
    );
  }
}
export default Slide;
