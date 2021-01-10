import React from 'react'

export const Slider = () => {
  return (
    <div>
      <div class="slider">
        {/* <ul class="case-study-wrapper">
          {/* <li class="case-study-name">
            <a href="#" class="hover-target">light</a>
          </li>
          <li class="case-study-name">
            <a href="#" class="hover-target">flare</a>
          </li>
          <li class="case-study-name">
            <a href="#" class="hover-target">nature</a>
          </li>
          <li class="case-study-name">
            <a href="#" class="hover-target">fire</a>
          </li>
        </ul> */}
        <ul class="case-study-images">
          <li>
            <div class="img-hero-background">
              <img src="http://www.ivang-design.com/svg-load/parallax/light.jpg" alt=""/>
            </div>
            {/* <div class="hero-number-back">01</div>
            <div class="hero-number">01</div>
            <div class="hero-number-fixed">04</div>
            <div class="case-study-title">graphic design, interaction</div> */}
          </li>
          <li>
            <div class="img-hero-background">
              <img src="http://www.ivang-design.com/svg-load/parallax/flare.jpg" alt=""/>
            </div>
            {/* <div class="hero-number-back">02</div>
            <div class="hero-number">02</div>
            <div class="case-study-title">advertising, art direction</div> */}
          </li>
          <li>
            <div class="img-hero-background">
              <img src="http://www.ivang-design.com/svg-load/parallax/nature.jpg" alt=""/>
            </div>
            {/* <div class="hero-number-back">03</div>
            <div class="hero-number">03</div>
            <div class="case-study-title">photography, retouching</div> */}
          </li>
          <li>
            <div class="img-hero-background">
              <img src="http://www.ivang-design.com/svg-load/parallax/fire.jpg" alt=""/>
            </div>
            {/* <div class="hero-number-back">04</div>
            <div class="hero-number">04</div>
            <div class="case-study-title">photography, advertising</div> */}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Slider;
