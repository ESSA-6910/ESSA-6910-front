import React, { Component } from "react";
import { connect } from "react-redux";
import { addStudent } from "../../actions/studentsActions";
import withLoadingAddStudent from "../../hocs/withLoadingAddStudent";

const mapDispatchToProps = dispatch => ({
  addStudent: student => dispatch(addStudent(student))
});

class connectedHocAddStudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      photo: "",
      enrNb: ""
    };
  }

  handleClick = () => {
    this.props.onClickForm();
    this.props.addStudent({
      name: this.state.name,
      email: this.state.email,
      photo: this.state.photo,
      enrNb: this.state.enrNb
    });
    this.setState({
      name: "",
      email: "",
      photo: "",
      enrNb: ""
    });
  };

  handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="AddStudent">
        <label className="input">
          <label className="label"> Name</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
          />
        </label>
        <label className="input">
          <label className="label"> Email address</label>
          <input
            onChange={this.handleChange}
            type="email"
            name="email"
            value={this.state.email}
          />
        </label>
        <label className="input">
          <label className="label"> Photo</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="photo"
            value={this.state.photo}
          />
        </label>
        <label className="input">
          <label className="label"> Enrollment number</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="enrNb"
            value={this.state.enrNb}
          />
        </label>
        <label className="">
          <button className="btn-u" onClick={this.handleClick}>
            Add Student
          </button>
        </label>
      </div>
    );
  }
}
const HocAddStudentForm = connect(
  null,
  mapDispatchToProps
)(connectedHocAddStudentForm);

export default withLoadingAddStudent(HocAddStudentForm);
