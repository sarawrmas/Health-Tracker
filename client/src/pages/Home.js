import React from 'react';
import { Slider, Slide, Caption } from 'react-materialize';

const Home = () => {
  return (
    <div>
      <Slider
        options={{
          duration: 300,
          height: 900,
          indicators: false
        }}
      >
        <Slide image={<img alt="Fruits and vegetables" src="images/produce.jpg" />}>
          <Caption placement="left">
            <h1 className="slider-caption">Sustenance</h1>
          </Caption>
        </Slide>
        <Slide image={<img alt="Yoga class" src="images/yoga.jpg" />}>
          <Caption placement="left">
            <h1 className="slider-caption">Flexibility</h1>
          </Caption>
        </Slide>
        <Slide image={<img alt="Walking up stairs" src="images/steps.jpg" />}>
          <Caption placement="left">
            <h1 className="slider-caption">Movement</h1>
          </Caption>
        </Slide>
        <Slide image={<img alt="Meditation by water" src="images/meditate.jpg" />}>
          <Caption placement="left">
            <h1 className="slider-caption">Breath</h1>
          </Caption>
        </Slide>
      </Slider>
    </div>
  )
}

export default Home;