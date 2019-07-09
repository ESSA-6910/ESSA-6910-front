import React, { Component } from "react";
import HocAddStudentForm from "./HocAddStudentForm";

class AddStudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
  }

  onClickForm = () => {
    this.setState({
      isClicked: true
    });
  };

  render() {
    return (
      <HocAddStudentForm
        isClicked={this.state.isClicked}
        onClickForm={this.onClickForm}
      />
    );
  }
}

export default AddStudentForm;
