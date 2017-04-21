
const INITIAL_STATE = {
  all: []
}

import {
  EDIT_STUDENT, 
  GET_STUDENTS,
  ADD_STUDENT_TO_APT,
  REMOVE_STUDENT_FROM_APT
} from "../actions/action_student"

export function studentReducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case GET_STUDENTS:
    console.log("Reducer:", action.payload.data)
      return {all: action.payload.data}
      break;
    case EDIT_STUDENT :
    console.log("data", action.payload.data)
      // let newStudent = state.all.filter( student => student.id !== action.payload.data.id)
      return {all: action.payload.data}
      break;
    case ADD_STUDENT_TO_APT :
    console.log("reducer_student", action.payload.data)
      return { all : action.payload.data  }
      break;
    case REMOVE_STUDENT_FROM_APT :
    console.log("reducer_student", action.payload.data)
      return { all : action.payload.data }
      break;
  }
  return state;
}
