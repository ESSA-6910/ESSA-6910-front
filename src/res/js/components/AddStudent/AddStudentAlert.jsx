import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { resetAlert } from "../../actions/studentsActions";

const mapStateToProps = state => ({
  alert: state.alert
});

const mapDispatchToProps = dispatch => ({
  resetAlert: () => dispatch(resetAlert())
});

class connectedAddStudentAlert extends Component {
  render() {
    return (
      <div className="AddStudent">
        <h3 className="">
          <div>Student has been added successfully !</div>
        </h3>
        <Link to={"/"} onClick={this.props.resetAlert}>
          <h1 className="">Back to adding form.</h1>
        </Link>
      </div>
    );
  }
}
const AddStudentAlert = connect(
  mapStateToProps,
  mapDispatchToProps
)(connectedAddStudentAlert);

export default AddStudentAlert;
