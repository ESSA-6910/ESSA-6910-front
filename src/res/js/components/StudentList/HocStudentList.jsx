import React, { Component } from "react";
import { connect } from "react-redux";
import hocList from "../../hocs/hocList";
import StudentCard from "./StudentCard";

const mapStateToProps = state => ({
  students: state.students
});

class connectedHocStudentList extends Component {
  render() {
    return (
      <div>
        {this.props.students
          .filter(st =>
            st.name.toLowerCase().includes(this.props.filter.toLowerCase())
          )
          .map(st => (
            <StudentCard student={st} key={st._id} />
          ))}
      </div>
    );
  }
}

const HocStudentList = connect(mapStateToProps)(connectedHocStudentList);

export default hocList(HocStudentList);
