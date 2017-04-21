
import { GET_APARTMENTS,
        CREATE_APARTMENT,
        GET_BUILDINGS,
        CREATE_BUILDING,
        GET_CAMPUSES,
        GET_ROOMS,
        CREATE_ROOM,
        ADD_STUDENT_TO_APT,
        REMOVE_STUDENT_FROM_APT
        }  from "../actions/action_apartments";


const INITIAL_STATE = { all: [],
                        apartment_id: "",
                        rooms: [],
                        apartments: [] };

export function apartmentsReducer(state=INITIAL_STATE, action) {

  switch (action.type) {
    case GET_APARTMENTS:
      return { all: action.payload.data};
      break;
    case CREATE_APARTMENT:
      console.log("creatapart", action.payload.data)
      return {
        all: [...state.all, action.payload.data],
        apartment_id: action.payload.data[0].id
      };
      break;
    default:
      return state;
  }
}

export function buildingReducer(state=INITIAL_STATE, action) {

  switch (action.type) {
    case GET_BUILDINGS:
      return { all: action.payload.data};
      break;
    case CREATE_BUILDING:
      return { all: [...state.all, action.payload.data] };
      break;
    default:
      return state;
  }
}
export function roomReducer(state=INITIAL_STATE, action) {

  switch (action.type) {
    case GET_ROOMS:
      return { rooms: action.payload.data};
      break;
    case CREATE_ROOM:
    console.log(action.payload.data, "create room")
      return { all: [...state.all, action.payload.data[0]] };
      break;
    default:
      return state;
  }
}

export function campusReducer(state=INITIAL_STATE, action) {

  switch (action.type) {
    case GET_CAMPUSES:
      return { all: action.payload.data};
      break;
    default:
      return state;
  }
}
