import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import BuildingDropdown from "../BuildingDropdown";
import { createApartment } from "../../actions/action_apartments";

class NewApartmentForm extends Component {
  onSubmit(props) {
    this.props.dispatch(createApartment(props));
    this.props.showRoom();

  }

  render() {
    const { handleSubmit } = this.props;
    return (
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this))} >
        <div className="spacer">
            <h1>New apartments?</h1>
            <p>Please select the campus building.</p>
            <BuildingDropdown name="building_id" />
        </div>
        <div className="spacer">
          <p>Next, add an identifying apartment number.</p>
            <Field name="apartment_number" component="input" type="text" placeholder="Apt. #" />
        </div>
        <div className="spacer">

          <p>Select the type of housing</p>
          <ul className="apt-housing-type">
              <li><Field component="input" type="radio" name="preferred_gender" value="M" className="margin-left"/> Male</li>
              <li><Field component="input" type="radio" name="preferred_gender" value="F" className="margin-left"/> Female</li>
              <li><Field component="input" type="checkbox" name="over_21" className="margin-left" /> 21+</li>
          </ul>

        </div>
        <button type="submit">  Create  </button>
      </form>
    )
  }
}

export default reduxForm({
  form: "NewApartmentForm"
})(NewApartmentForm);
