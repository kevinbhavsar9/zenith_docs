import React, { Component } from "react";
import "../Styles/ContentsNav.scss";
import Array from "../assets/RightBAr";

class ContentsNav extends Component {
  render() {
    // console.log(content);
    const { page } = this.props;
    let content = Array.filter((item) => {
      if (item.url === window.location.pathname) {
        return item;
      }
    });
    console.log(content);
    return (
      <div className="right-nav-cont px-2">
        <h3 className="content">{content[0].mainHead}</h3>
        <ul className="top-ul">
          {content[0].subContent.map((item) => (
            <li className="subCol">
              <a href={item.ida}>{item.subHead}</a>
              <ul className="py-1">
                {item.subTopic.map((itemp) => (
                  <>
                    <li className="content">{itemp}</li>
                  </>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContentsNav;
