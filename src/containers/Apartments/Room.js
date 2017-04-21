import React, { Component } from 'react';
import Bed from './Bed';
import "../../styles/dndbed.scss";
import {removeStudentFromApt} from '../../actions/action_student'
import {connect} from "react-redux"

class Room extends Component {
 
  constructor(props) {
    super(props)
    
    this.removeStudent = this.removeStudent.bind(this)
    
  }

  removeStudent(name, id) {
    alert(`${name} removed.`)
  }

  render() {
    
  let listBeds = []
  //console.log("all_student_info", this.props.all_student_info)
  const props = this.props
    for (var i = 0; i < this.props.all_student_info.length; i++) {
      
      (function(i, props) {
      if (props.all_student_info[i].room_id == props.room_id) {
          let studentObj = {
            student_id : props.all_student_info[i].id,
            room_id : props.room_id
          }
              listBeds.push(
                <div className="bed-holder">
                  <img src={require("../../styles/icons/error.svg")} 
                        className="remove-icon"
                        onClick= { () => props.dispatch(removeStudentFromApt(studentObj)) }/>
                  <Bed key={i} 
                    allowedDropEffect='move' 
                    roomID={props.room_id}
                    studentID={props}>
                    {props.all_student_info[i].first_name}
                  </Bed>
              </div>
              ) 
             
      } 
       })(i, props)
      
    }
     for (var i = listBeds.length; i < this.props.number_of_beds; i++)    {
       
      listBeds.push(<Bed key={i} 
                          allowedDropEffect='move' 
                          roomID={this.props.room_id}
                          studentID={this.props}>
                          Empty
                          </Bed>
                          )}

    return (
      <div className="dnd-room">
        Room 
         {listBeds}
      </div>
    );
  }
}

export default connect()(Room);