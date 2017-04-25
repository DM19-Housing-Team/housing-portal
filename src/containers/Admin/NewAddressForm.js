import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { createBuilding } from "../../actions/action_apartments";
import CampusDropdown from "../CampusDropdown";

class NewAddressForm extends Component {
  onSubmit(props) {
    this.props.dispatch(createBuilding(props));
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="new-address-form">
        <h1>New Building Address</h1>
        <p>This is the address of the building or apartment complex where the student apartments are located.</p>
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) } >
        <CampusDropdown name="campus_id"/>
        <Field name="property_name" component="input" type="text" placeholder="Building Name" />
        <Field name="street_address" component="input" type="text" placeholder="Street" />
        <Field name="city" component="input" type="text" placeholder="City" />
        <Field name="state" component="input" type="text" placeholder="State" />
        <Field name="post_code" component="input" type="text" placeholder="Zip Code" />
        <button type="submit" >Save</button>
      </form>
      </div>
    )
  }
}

export default reduxForm({
  form: "newAddressForm"
})(NewAddressForm)
