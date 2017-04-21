import axios from "axios";

export const GET_APARTMENTS = "GET_APARTMENTS";
export const CREATE_APARTMENT = "CREATE_APARTMENT";
export const GET_ROOMS = "GET_ROOMS";
export const GET_ROOMS_BY_APARTMENT = "GET_ROOMS_BY_APARTMENT";
export const CREATE_ROOM = "CREATE_ROOM";
export const CREATE_BUILDING = "CREATE_BUILDING";
export const GET_BUILDINGS = "GET_BUILDINGS";
export const GET_CAMPUSES = "GET_CAMPUSES";
export const GET_COHORTS = "GET_COHORTS";

export function getApartments() {
  const url = "api/apartment";
  const request = axios.get(url);
  return {
    type: GET_APARTMENTS,
    payload: request
  }
}

export function createApartment(props) {
  console.log(props)
  const url = "/api/apartment";
  const request = axios.post(url, props)
  return {
    type: CREATE_APARTMENT,
    payload: request
  }
}

// export function getRoomsByApartment(id) {
//   const url = "/api/apartment/" + id;
//   const request = axios.get(url)
//   return {
//     TYPE: GET_ROOMS_BY_APARTMENT,
//     payload: request
//   }
// }

export function getBuildings(props) {
  const url = "/api/building";
  const request = axios.get(url, props)
  console.log("ADDRESS",request);

  return {
    type: GET_BUILDINGS,
    payload: request
  }
}
export function createBuilding(props) {

  const url = "/api/building";
  const request = axios.post(url, props)
  return {
    type: CREATE_BUILDING,
    payload: request
  }
}


export function getRooms() {
  const url = "/api/room"
  const request = axios.get(url)
  return {
    type: GET_ROOMS,
    payload: request
  }
}
export function createRoom(props) {
  console.log("RR",props);
  const url = "/api/room";
  const request = axios.post(url, props)

  return {
    type: CREATE_ROOM,
    payload: request
  }
}

export function getCampuses() {
  const url = "api/campus";
  const request = axios.get(url);
  console.log("request", request);
  return {
    type: GET_CAMPUSES,
    payload: request
  }
}

export function getCohorts() {
  const url = "api/cohort";
  const request = axios.get(url);
  console.log("request", request);
  return {
    type: GET_COHORTS,
    payload: request
  }
}
