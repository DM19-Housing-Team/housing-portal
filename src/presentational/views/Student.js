import React, { Component } from "react";
import StudentListFilter from "../../containers/StudentListFilter";
import StudentCards from "./StudentList/StudentCards";
import "../../styles/student.scss";
import "../../styles/teststudent.scss";
import NavBar from "../NavBar";
import {getStudents} from "../../actions/action_student"
import {connect} from 'react-redux'
import moment from "moment"

class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      housing_eligibility: false,
      deposit_paid: false,
      age: 0,
      accomodations: false
      }
  }
    handleChecked(type, val) {
      console.log(type, val);
      this.setState({
        [type]: val
      });
    }

    componentWillMount() {
      this.props.dispatch(getStudents())
    }


    render() {

        let students = this.props.all;
        console.log("stydt",students);
         if (students[0]) {
          let state = this.state;
          ["housing_eligibility", "deposit_paid", "age", "accomodations", "campus_id", "cohort_id", "gender"].forEach(function(filterBy) {
            let filterValue = state[filterBy];
            if (filterValue) {
              if (filterBy === "age" && state[filterBy] >= 21) {
                students = students.filter(function(student) {

                  return moment().diff(student.dob, 'years', false) >= 21;
                })
              } else if (filterBy === "gender" || filterBy === "campus_id" || filterBy === "cohort_id") {
                  students = students.filter(function(student) {
                    return student[filterBy] == filterValue;
                })
              } else {
                students = students.filter(function(student) {
                  return student[filterBy];
                })
              }
            }
          })
         }

        const StudentList = students.map((students) => (
                <li key={students.id}> <StudentCards
                image={students.image}
                name={`${students.first_name} ${students.last_name}`}
                first_name={ students.first_name }
                last_name={ students.last_name }
                age={moment().diff(students.dob, 'years', false)}
                gender={students.gender}
                cohort_id={students.cohort_id}
                room={students.room}
                address={`${students.street_address} in ${students.city}, ${students.state}, ${students.country}`}
                housing_eligibility={students.housing_eligibility}
                accomodations={students.accomodations}
                deposit_paid={students.deposit_paid}
                student_id={students.id}
                dob={ students.dob }
                email={ students.email }
                slack={ students.slack }
                phone={ students.phone }
                city={ students.city }
                state={ students.state }
                country={ students.country }
                post_code={ students.post_code }
                arrive_date={ students.arrive_date }
                leave_date={ students.leave_date }
                /></li>
        ))
        return (
            <div>
            <NavBar />
                <div>
                    <StudentListFilter housing_eligibility={ this.state.housing_eligibility }
                                      deposit_paid={ this.state.deposit_paid }
                                      age={ this.state.age }
                                      accomodations={ this.state.accomodations }
                                      handleChecked={ this.handleChecked.bind(this) }/>
                </div>

                <div className="student-cards">
                    <ul className="card-container">
                        {StudentList}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    all: state.students.all
  }
}
export default connect(mapStateToProps)(Student)
