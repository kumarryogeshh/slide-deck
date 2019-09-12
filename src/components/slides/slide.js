import React from "react";
import { Header, Image, Message } from "semantic-ui-react";

const Slide = ({ slide }) => {
  return (
    <div className="ui container">
      <div>
        <Header
          as="h2"
          dividing
          content={slide.title}
          subheader={slide.tagline}
        />
        <Message.List>
          {slide.description &&
            slide.description.map((msg, i) => (
              <Message.Item key={i}>{msg}</Message.Item>
            ))}
        </Message.List>
        <p></p>
        <Image src={slide.imageUrl} size="big" centered></Image>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Slide;
