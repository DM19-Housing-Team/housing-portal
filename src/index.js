import React from "react";
import ReactDOM from "react-dom";
import App from "./presentational/App";

import "./styles/index.scss";
import { Route, Router, browserHistory } from "react-router";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import reducers from "./reducers";
// import Home from "./presentational/views/Home";
import Admin from "./presentational/views/Admin";
import Apartment from "./presentational/views/Apartment/Apartment";
// import NavBar from "./presentational/NavBar";
import Student from "./presentational/views/Student";
import StudentView from "./presentational/views/StudentView/StudentView";
// import DropDown from "./containers/DropDownMenu";

 // import ApartmentListFilter from "./containers/ApartmentListFilter";
 // import StudentListFilter from "./containers/StudentListFilter";

// import ApartmentListFilter from "./containers/ApartmentListFilter";
// import StudentListFilter from "./containers/StudentListFilter";
// import CreateNewAdmin from "./presentational/views/Admin/CreateNewAdmin";

// import CreateNewCohort from "./presentational/views/Admin/CreateNewCohort";
// import DatePickerComponent from "./containers/DatePicker";
// import Apartment from "./presentational/views/Apartment/Apartment";
// import ApartmentListFilter from "./containers/ApartmentListFilter";
// import NeedHousingContainer from "./presentational/views/Apartment/NeedHousingContainer";
// import StudentCards from "./presentational/views/StudentList/StudentCards";
// import RoomInfo from "./presentational/views/Apartment/RoomInfo";
// import Student from "./presentational/views/StudentList/Student";





const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(

  <Provider store={ createStoreWithMiddleware(reducers)} >
    <Router history={ browserHistory } >
      {/* <Route path="/" component={ App } /> */}
      <Route path="/" component={Admin} />
      <Route path="/Apartments" component={Apartment} />
      <Route path="/students" component={Student} />
      <Route path="/studentview" component={StudentView} />
    </Router>
  </Provider>,

  document.getElementById('root')
);
