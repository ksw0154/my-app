// 클래스 컴포넌트

import React, { Component, useRef } from "react";

class MyComponent extends Component {
  id = 1;
  setId = (n) => {
    this.id = n;
  };

  prindId = () => {
    console.log(this.id);
  };

  render() {
    return <div>MyComponent</div>;
  }
}

export default MyComponent;

// 함수형 컴포넌트

// import React, { useRef } from "react";

const RefSample = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };

  const printId = () => {
    console.log(id.current);
  };

  return <div>RefSample</div>;
};
