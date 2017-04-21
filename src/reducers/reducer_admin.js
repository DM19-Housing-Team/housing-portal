//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////// Reducer for Admin Page
//////////////////////////////////////////////////////////////////////////////////////////////////


import {combineReducers} from 'redux'

const INITIAL_STATE = { all: [],
                        admin: {},
                        cohort: [],
                        campuses: [],
                        studentLocation: {}
                        };



/////////////////////////////////////////////////
// Reducer for New Admin Panel
/////////////////////////////////////////////////
import {GET_ADMINS, CREATE_ADMIN, DELETE_ADMIN, EDIT_ADMIN, GET_ELIGIBILITY} from "../actions/action_admin"


export function adminReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ADMINS:
      return { ...state, all: action.payload.data }
      break;
    case CREATE_ADMIN:
    console.log("create user", action.payload.data)
      return { ...state, all: action.payload.data }
      break;
    case DELETE_ADMIN:
      return { ...state, all: state.all.filter( all =>  all.id !== action.payload.data ) }
      break;
    case EDIT_ADMIN:
      return { ...state, all: action.payload.data }
      break;
    case GET_ELIGIBILITY:
      return { ...state, studentLocation: action.payload.data.results[0].geometry.location }
      break;
    default:
      return state;
      break;
  }
}


/////////////////////////////////////////////////
// Reducer for New Cohort Panel
/////////////////////////////////////////////////
import { GET_COHORTS, CREATE_COHORT, DELETE_COHORT, EDIT_COHORT, GET_CAMPUSES } from '../actions/action_admin'


export function cohortReducer(state=INITIAL_STATE, action) {
  
  switch(action.type) {
    case GET_COHORTS:
      return { all: action.payload.data }
      break;
    case CREATE_COHORT:
      return { all: [...state.all, action.payload.data[0]] }
      break;
    case DELETE_COHORT:
      console.log(action.payload.data[0].id, ":::", state.all);
      return { all: state.all.filter( all =>  all.id != action.payload.data[0].id) }
      break;
    case EDIT_COHORT:
      let newCohort = state.all.filter( all => all.id !== action.payload.data[0].id)
      return { all: [...newCohort, action.payload.data] }
      break;
    case GET_CAMPUSES:
      //return { campuses: [...action.payload.data] }
      return Object.assign({}, state, {campuses: action.payload.data})
      break;
    default:
      return state;
  }
}

/////////////////////////////////////////////////
// Reducer for New Student Panel
/////////////////////////////////////////////////
// import { GET_STUDENT } from '../actions/action_admin'


// export function studentReducer(state=INITIAL_STATE, action) {
//   switch (action.type) {
//     case GET_STUDENT:
//     console.log("lkajsdklj");
//       return Object.assign({}, state, {student: action.payload.data})
//       break;
//     default:
//       return state;
//   }
// }
