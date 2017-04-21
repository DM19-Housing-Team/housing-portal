import axios from "axios"

export const GET_STUDENTS = "GET_STUDENTS"
export const EDIT_STUDENT = "EDIT_STUDENT"

export function getStudents() {
  const url = "/api/student"
  const request = axios.get(url)
  console.log(request)
  return {
    type: GET_STUDENTS,
    payload: request
  }
}

export function editStudent(studentObj) {
  console.log("obj", studentObj)
  const url = "/api/student";
  const request = axios.put(url, studentObj)
  return {
    type: EDIT_STUDENT,
    payload: request
  }
}

///////////////////////////////
// Actions for adding and removing apartments
///////////////////////////////
export const ADD_STUDENT_TO_APT = 'ADD_STUDENT_TO_APT'
export const REMOVE_STUDENT_FROM_APT = 'REMOVE_STUDENT_FROM_APT'

export function addStudentToApt(studentObj) {
  const url = "/api/room/student";
  const request = axios.put(url, studentObj)
  console.log("addStudent(studentObj): ", studentObj)
  return {
    type: ADD_STUDENT_TO_APT,
    payload: request
  }
}

export function removeStudentFromApt(studentObj) {
  const url = "/api/room/clear";
  const request = axios.put(url, studentObj)
  console.log("removeStudent(studentObj): ", studentObj)
  console.log('request', request)
  return {
    type: REMOVE_STUDENT_FROM_APT,
    payload: request
  }
}