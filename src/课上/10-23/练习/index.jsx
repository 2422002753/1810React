import React, { Component } from "react";
import axios from "axios";
class Index extends Component {
  componentDidMount() {
    axios.get("http://localhost:3000/form").then(res => {
      console.log(res);
    });
  }
  render() {
    return <div></div>;
  }
}

export default Index;
