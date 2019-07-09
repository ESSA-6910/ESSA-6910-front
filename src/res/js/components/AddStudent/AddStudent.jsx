import React, { Component } from "react";
import { connect } from "react-redux";
import { resetAlert } from "../../actions/studentsActions";
import AddStudentAlert from "./AddStudentAlert";
import AddStudentForm from "./AddStudentForm";

const mapStateToProps = state => ({
  alert: state.alert
});

const mapDispatchToProps = dispatch => ({
  resetAlert: () => dispatch(resetAlert())
});

class connectedAddStudent extends Component {
  componentDidMount() {
    this.props.resetAlert();
  }
  render() {
    return this.props.alert === "add" ? (
      <AddStudentAlert />
    ) : (
      <AddStudentForm />
    );
  }
}
const AddStudent = connect(
  mapStateToProps,
  mapDispatchToProps
)(connectedAddStudent);

export default AddStudent;
