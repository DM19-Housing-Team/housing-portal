import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import {MenuItem, DropdownButton} from 'react-bootstrap'
import { editAdmin, deleteAdmin } from "../../actions/action_admin";
import "../../styles/admin.scss"


class AdminForm extends Component {

  onSubmit(props) {
    props.id = this.props.id;
    this.props.dispatch(editAdmin(props))
  }

  handleDelete() {
    this.props.dispatch(deleteAdmin(this.props.id))
  }



  render() {

    const { handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>

        <ul className="admin-user-list">
        <li><Field name="first_name" component="input" type="text" className="admin-input-text"/></li>
        <li><Field name="last_name" component="input" type="text"  className="admin-input-text"/></li>
        <li><Field name="email" component="input" type="text" value="addddd" className="admin-input-text"/></li>
        <li><Field name="campus_id" component="select" className="admin-input-text">
            <option value="1">Provo</option>
            <option value="2">Salt Lake City</option>
            <option value="3">Dallas</option>
          </Field></li>

          <input type="image" src={require("../../styles/icons/save.svg")} name="submit" className="edit-icon"/>
          <img src={require("../../styles/icons/garbage.svg")} onClick={ this.handleDelete.bind(this) } className="admin-icon" />



        </ul>
      </form>
    )
  }
}

export default reduxForm({
  // initialValues: data
})(AdminForm)
