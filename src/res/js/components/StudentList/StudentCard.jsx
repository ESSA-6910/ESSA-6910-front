import React, { Component } from "react";
import { connect } from "react-redux";
import { removeStudent, markStudent } from "../../actions/studentsActions";

const mapDispatchToProps = dispatch => ({
  markStudent: id => dispatch(markStudent(id)),
  removeStudent: id => dispatch(removeStudent(id))
});

class connectedStudentCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card">
          <img src={this.props.student.photo} />
          <p>{this.props.student.enrNb}</p>
          <p>{this.props.student.email}</p>
          <p>{this.props.student.Number}</p>
          <p>{this.props.student.presence.toString()}</p>
        </div>
        <div className="card">
          <button
            onClick={() =>
              this.props.markStudent(
                this.props.student._id,
                !this.props.student.presence
              )
            }
          >
            Mark present
          </button>
          <button
            onClick={() => this.props.removeStudent(this.props.student._id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
const StudentCard = connect(
  null,
  mapDispatchToProps
)(connectedStudentCard);

export default StudentCard;
