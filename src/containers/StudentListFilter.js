import React, { Component } from "react";
import { Button, Panel } from "react-bootstrap";
import "../styles/filter.scss";
import CampusSelector from "./CampusSelector";
import CohortSelector from "./CohortSelector";

class StudentListFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleChecked(type, checked, e) {

      console.log("type: ", type, "checked", checked,"e", e);
      if (type === "age")
        checked ? this.props.handleChecked(type, 21) : this.props.handleChecked(type, 0);
      else
        this.props.handleChecked(type, checked);

    }

    handleChange(e) {
        console.log(e.target.name, e.target.value);
        this.props.handleChecked(e.target.name, e.target.value);
    }

    handleSelect(type, selected, e) {

    }

    render() {
        return (
            <div className="filter-container">
                <ul>
                    <li>Campus <br />
                        <CampusSelector handleChange = {this.handleChange.bind(this)} ></CampusSelector>
                    </li>


                    <li>Cohort <br />
                        <CohortSelector handleChange = {this.handleChange.bind(this)} ></CohortSelector>
                    </li>

                <li>
                        <input type="checkbox" name="housing_eligibility" value={ this.props.housing } onChange={ this.handleChecked.bind(this, "housing", !this.props.housing) } /> Need Housing
                    </li>
                    <li>
                        <input type="checkbox" name="deposit" value={ this.props.deposit_paid} onChange={ this.handleChecked.bind(this, "deposit_paid", !this.props.deposit_paid) } /> Deposit Paid
                    </li>
                    <li>
                        <input type="checkbox" name="age" value={ this.props.age } onChange={ this.handleChecked.bind(this, "age", !this.props.age) } /> 21+
                    </li>
                    <li>
                        <input type="checkbox" name="accomodations" value={ this.props.accomodations } onChange={ this.handleChecked.bind(this, "accomodations", !this.props.accomodations) } /> Accomodations
                    </li>
                    <li>Gender <br />
                        <select name="gender" defaultValue="" onChange={ this.handleChange.bind(this) }>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                            <option value="">Any</option>
                        </select></li>
                 </ul>

            </div>

        )
    }
}

export default StudentListFilter
