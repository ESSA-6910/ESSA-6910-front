import React, { Component } from "react";
import { connect } from "react-redux";
import { resetAlert, getStudents } from "../../actions/studentsActions";
import HocStudentList from "./HocStudentList";

const mapStateToProps = state => ({
  students: state.students,
  alert: state.alert
});

const mapDispatchToProps = dispatch => ({
  getStudents: () => dispatch(getStudents()),
  resetAlert: () => dispatch(resetAlert())
});

class connectedStudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ""
    };
  }
  componentDidMount() {
    this.props.getStudents();
  }
  handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div className="StudentList">
        <label className="input">
          <label className="label"> Name</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="filter"
            value={this.state.filter}
          />
        </label>
        <HocStudentList filter={this.state.filter} alert={this.props.alert} />
      </div>
    );
  }
}

const StudentList = connect(
  mapStateToProps,
  mapDispatchToProps
)(connectedStudentList);

export default StudentList;
