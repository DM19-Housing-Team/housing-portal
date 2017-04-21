import React, { Component } from "react";
import { Panel } from "react-bootstrap";
// import StudentModal from "./StudentModal";
import StudentModal from "./StudentModal";
import "../../../styles/studentcard.scss";

class StudentCards extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            open: false
        };
    }

    render() {
        // console.log("studentcard", this.props)

        const title = {
            image: this.props.image,
            name: this.props.name,
            age: this.props.age,
            gender: this.props.gender,
            cohort: this.props.cohort
        }
        const heading = {
            image: this.props.image,
            name: this.props.name,
            age: this.props.age,
            gender: this.props.gender,
            cohort: this.props.cohort
        }
        const body = {
            room: this.props.room,
            address: this.props.address,
            eligibility: this.props.eligibility,
            deposit_paid: this.props.deposit_paid
        }
        return (
            <div>
                <StudentModal
                    title={title}
                    heading={heading}
                    body={body}
                    className="student-modal"
                    image={this.props.image}
                    first_name={ this.props.first_name }
                    last_name={ this.props.last_name }
                    age={ this.props.age }
                    gender={this.props.gender}
                    cohort={this.props.cohort}
                    room={this.props.room}
                    address={`${this.props.street_address} in ${this.props.city}, ${this.props.state}, ${this.props.country}`}
                    street_address={this.props.street_address}
                    eligibility={this.props.eligibility}
                    deposit_paid={this.props.deposit_paid}
                    student_id={this.props.student_id}
                    dob={ this.props.dob }
                    email={ this.props.email }
                    cohort_id={ this.props.cohort_id }
                    slack={ this.props.slack }
                    phone={ this.props.phone }
                    city={ this.props.city }
                    state={ this.props.state }
                    country={ this.props.country }
                    post_code={ this.props.post_code }
                    arrive_date={ this.props.arrive_date }
                    leave_date={ this.props.leave_date }
                    >
                </StudentModal>
            </div>
        )
    }
}

export default StudentCards
