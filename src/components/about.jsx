import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-1"></div>
        <div className="col-4 m-3 ps-4">
          <img
            src="images/mypicture.jpg"
            alt=""
            className="rounded float-start w-75"
          />
        </div>
        <div className="col text-warning fs-5">
          <br />
          <br />
          <p>
            I'm Logan Chew, I Went To Ogden-Weber Technical College,
            <br /> where I delved into the world of web development.
            <br /> Armed with a solid foundation in the intricacies of coding,
            <br /> I embark on a continuous journey of learning and growth
            <br />
            within the dynamic field of web development.
            <br />
            Each day presents an opportunity to expand my skill set,
            <br /> honing my expertise and staying abreast of the latest trends
            and technologies.
          </p>
          <br />
          <p>
            I come from the beautiful state of Utah, where the scenic landscapes
            <br />
            provide a stunning backdrop to my endeavors. When I'm not immersed
            <br />
            in the world of web development, you'll often find me indulging in
            <br />
            my favorite pastimes. I'm an avid gamer, navigating virtual realms
            <br />
            and conquering challenges in the gaming universe. Additionally, my
            <br />
            love for anime takes me on captivating journeys through imaginative
            <br />
            worlds and compelling storylines. Beyond the digital realm,
            <br /> I cherish moments with my lovely girlfriend, creating shared
            memories
            <br />
            and enjoying the simple pleasures of life.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
