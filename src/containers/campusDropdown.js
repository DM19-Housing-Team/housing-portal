import React, { Component } from "react";
import { Field } from "redux-form";
import { getCampuses } from "../actions/action_apartments";
import { connect } from "react-redux";

class CampusDropdown extends Component {
  componentWillMount() {
    this.props.dispatch(getCampuses())
  }
  render() {
    let campuses = this.props.campuses.map( campus => {
      // let val = 0;
      // switch (campus.location_name) {
      //   case "Provo":
      //     val = 1;
      //     break;
      //   case "Salt Lake":
      //     val = 2;
      //     break;
      //   case "Dallas":
      //     val = 3;
      //     break;
      //   default:
      //     val = 0;
      // }
      return ( <option value={ campus.location_name } key={ campus.id} >{ campus.location_name }</option>)
    })
    console.log(this.props.campuses);
    return (
      <select name="campus">
          <option selected value="">Any</option>
        { campuses }
          {/* <option value="Dallas">Dallas</option>
          <option value="Provo">Provo</option>
          <option value="SaltLake">Salt Lake</option> */}
      </select>
    )
  }
}

function mapStateToProps(state) {
  return { campuses: state.campus.all }
}

export default connect(mapStateToProps)(CampusDropdown);
