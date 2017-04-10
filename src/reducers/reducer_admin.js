//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////// Reducer for Admin Page
//////////////////////////////////////////////////////////////////////////////////////////////////


import {combineReducers} from 'redux'

const INITIAL_STATE = { all: [], 
                        admin: {}, 
                        cohort: {},
                        campuses: [],
                        };



/////////////////////////////////////////////////
// Reducer for New Admin Panel
/////////////////////////////////////////////////
import {GET_ADMINS, CREATE_ADMIN, DELETE_ADMIN, EDIT_ADMIN} from "../actions/action_admin"


export function adminReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ADMINS:
      return { all: action.payload.data }
      break;
    case CREATE_ADMIN:
    console.log("create user", action.payload.data)
      return { all: action.payload.data }
      break;
    case DELETE_ADMIN:
    console.log("actions", action.payload, state.all)
      return { all: state.all.filter( admin =>  admin.id !== action.payload.data.id ) }
      break;
    case EDIT_ADMIN:
    let newAdmin = state.all.filter( admin => admin.id !== action.payload.data.id )
      return { all: [...newAdmin, action.payload.data] }
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
      return { all: state.all.filter( cohort => { cohort.id !== action.payload.data.id}) }
      break;
    case EDIT_COHORT:
      let newCohort = state.all.filter( cohort => {cohort.id !== action.payload.data.id})
      return { all: [...newCohort, action.payload.data] }
      break;
    case GET_CAMPUSES:
      console.log("CAMPUS DATA", action.payload.data)
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
import { GET_STUDENT } from '../actions/action_admin'


export function studentReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case GET_STUDENT:
      console.log(action.payload.data)
      return Object.assign({}, state, {student: action.payload.data})
      break;
    default:
      return state;
  }
}