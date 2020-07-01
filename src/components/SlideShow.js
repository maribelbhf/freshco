import React, { PureComponent } from 'react';
import FreshcoBackground from '../assets/images/background.jpg'

export default class SlideShow extends PureComponent {
  constructor() {
    super();
    this.state = {
      pos: 0,
      lastPos: 0,
    };

  }


  render() {
    const { pos, lastPos } = this.state;
    const { settings } = this.props;

    return (
      <div id="bg">
        {settings.images.map((image, i) => {
          return (
            <div
              key={image['url']}
              style={{
                backgroundPosition: image['position'],
                backgroundImage: `url(${FreshcoBackground})`,
              }}
              className={
                i === pos ? 'visible top' : i === lastPos ? 'visible' : ''
              }
            />
          );
        })}
        ;
      </div>
    );
  }
}
