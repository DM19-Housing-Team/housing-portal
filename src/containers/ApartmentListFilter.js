import React, { Component } from "react";
import { Button, Panel } from "react-bootstrap";
import "../styles/filter.scss";
import CampusSelector from "./CampusSelector";

class ApartmentListFilter extends Component {
        constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleChange(change, e) {
      console.log("type", e.target.name, e.target.value);
      if (e.target.name === "preferred_gender" || e.target.name === "campus_id")
        this.props.handleChange(e.target.name, e.target.value)
      else
        this.props.handleChange(e.target.name, change)
    }

    render() {
        return (
       
            <div className="filter-container">
                <ul>
                    <li>Campus <br /><CampusSelector handleChange={ this.handleChange.bind(this, this.props.campus_id)} /></li> 
                    <li><input type="checkbox" name="over_21" value={ this.props.over_21 } onChange={ this.handleChange.bind(this, !this.props.over_21) } /> 21+ </li>
                    <li><input type="checkbox" name="open" value={ this.props.open } onChange={ this.handleChange.bind(this, !this.props.open)} /> Open </li>
                    <li><select name="preferred_gender" defaultValue="" onChange={ this.handleChange.bind(this, this.props.preferred_gender) }>
                    <option value="M">Male</option>
                            <option value="F">Female</option>
                            <option value="">Any</option>
                    </select></li>
                
                </ul>
            </div>


        )
    }
}

export default ApartmentListFilter
