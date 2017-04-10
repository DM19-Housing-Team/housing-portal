import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import {MenuItem, DropdownButton} from 'react-bootstrap'
import { editAdmin, deleteAdmin } from "../../actions/action_admin";
import "../../styles/admin.scss"
import edit from "../../styles/icons/edit.svg"


class AdminForm extends Component {

  onSubmit(props) {
    props.id = this.props.id;
    console.log("adminform props", props)
    this.props.dispatch(editAdmin(props))
  }

  handleDelete() {

    console.log(this.props.id)
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
            <option value="2">Salt Lake city</option>
            <option value="3">Dallas</option>
          </Field></li>

         
          <input type="button" src={require("../../styles/icons/save.svg")} className="edit-button" name="submit" value="Save"/> 
          <img src={require("../../styles/icons/garbage.svg")} onClick={ this.handleDelete.bind(this, {id: this.props.id}) } className="admin-icon" />

        </ul>
      </form>
    )
  }
}

export default reduxForm({
  // initialValues: data
})(AdminForm)
