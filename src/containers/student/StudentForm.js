import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import CohortDropdown from "../CohortDropdown";
import CampusDropdown from "../CampusDropdown";
import { editStudent } from "../../actions/action_student";
import { Modal, Button, Popover, Tooltip, OverlayTrigger } from "react-bootstrap";
import "../../styles/StudentModal.scss"

class StudentForm extends Component {
  onSubmit(props) {
    props.id = this.props.student_id
    console.log("submit", props)
    this.props.dispatch(editStudent(props));
  }

  render() {
    const { handleSubmit } = this.props;
    // const { apt_num, num_room, student_id } = this.props.fields;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        {/* <CampusDropdown name="campus_id" /> */}
        <ul className="form-list">
          <li>First name</li>
          <li>Last name</li>
        </ul>
        <ul className="form-list">
          <li><Field type="text" component="input" name="first_name" placeholder="First" /></li>
          <li><Field type="text" component="input" name="last_name" placeholder="Last" /></li>
        </ul>
        <ul className="form-list">
          <li>DOB</li>
          <li>E-mail</li>
        </ul>
        <ul className="form-list">
          <li><Field type="date" component="input" name="dob" placeholder="Date of birth" /></li>
          <li><Field type="text" component="input" name="email" placeholder="Email" /></li>
        </ul>
        <ul className="form-list">
          <li>Slack</li>
          <li>Gender</li>
          <li>Phone</li>
        </ul>
        <ul className="form-list">
          <li><Field type="text" component="select" name="gender" placeholder="Gender" >
            <option value="M">Male</option>
            <option value="F">Female</option>
          </Field></li>
          <li><Field type="text" component="input" name="slack" placeholder="Slack" /></li>
          <li><Field type="text" component="input" name="phone" placeholder="Phone" /></li>
        </ul>

        <ul className="form-list">
          <li>Street</li>
          <li>City</li>
        </ul>
        <ul className="form-list">
          <li><Field type="text" component="input" name="street_address" placeholder="Address" /></li>
          <li><Field type="text" component="input" name="city" placeholder="City" /></li>
        </ul>
        <ul className="form-list">
          <li>State</li>
          <li>County</li>
          <li>Zip</li>
        </ul>
        <ul className="form-list">
          <li><Field type="text" component="input" name="state" placeholder="State" size="2"/></li>
          <li><Field type="text" component="input" name="country" placeholder="Country" /></li>
          <li><Field type="text" component="input" name="post_code" placeholder="Zip" size="6"/></li>
        </ul>
        <ul className="form-list">
          <li>Arrives</li>
          <li>Leaves</li>
        </ul>
        <ul className="form-list">
          <li><Field type="date" component="input" name="arrive_date" placeholder="Arrives" /></li>
          <li><Field type="date" component="input" name="leave_date" placeholder="Leaves" /></li>
        </ul>
        <ul className="form-list">
          <li>Cohort</li>
        </ul>
        <ul className="form-list">
          <li><CohortDropdown name="cohort_id" /></li>
        </ul>
        <Modal.Footer>
          <Button onClick={this.props.close} type="submit">Save Changes</Button>
          <Button onClick={this.props.close}>Close</Button>
        </Modal.Footer>
      </form>
    )
  }
}

export default reduxForm({
  // form: "StudentForm"
})(StudentForm)
