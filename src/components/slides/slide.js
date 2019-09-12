import React from "react";
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

const Slide = ({ slide }) => {
  return (
    <div className="ui container">
      <LazyLoad placeholder={<Loading />}>
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
          <Image src={slide.imageUrl} size="big" centered></Image>
        </div>
        <br />
        <br />
      </LazyLoad>
    </div>
  );
};
export default Slide;
