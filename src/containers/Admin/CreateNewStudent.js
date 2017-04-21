import React, { Component } from "react"
import { Panel, Button, DropdownButton, MenuItem } from "react-bootstrap";
import {getStudent, createStudent, getCohorts, getCampuses, getEligibility} from "../../actions/action_admin"
import {connect} from "react-redux"
import "../../styles/CreateNewStudent.scss"
import moment from 'moment'
import ListCampuses from "../../presentational/ListCampuses"




class CreateNewStudent extends Component {
  constructor(...args) {
    super(...args)

    this.state = {
      open: false,
      first_name: "",     //
      last_name: "",      //
      street_address: "",  //
      city: "",           //
      state: "",          //
      country: "",        //
      post_code: "",      //
      phone: "",        //
      email: "",        //
      slack: "",        //
      dob: "",          //
      gender: "",       //
      cohort: "",       //
      car_info: "",
      arrive_date: "",    //
      leave_date: "",     //
      housing_eligibility: "",
      deposit_paid: "",   //
      accomodations: "",
      notes: "",
      room_id: 0,
      studentLocation: "",
    }




    this.handleInputChange = this.handleInputChange.bind(this)
    this.clearData = this.clearData.bind(this)
  }

  clearData() {
    this.refs.first_name.value="",
    this.refs.last_name.value="",
    this.refs.dob.value="",
    this.refs.arrive_date.value="",
    this.refs.leave_date.value="",
    this.refs.email.value="",
    this.refs.slack.value="",
    this.refs.phone.value="",
    this.refs.street_address.value="",
    this.refs.city.value="",
    this.refs.state.value="",
    this.refs.country.value="",
    this.refs.post_code.value="",
    this.refs.notes.value="",
    this.refs.accomodations.value="",
    this.refs.car_info.value=""
    this.setState({
      gender: null,
      campus: null,
      cohort: null,
      deposit: null,
    })
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name] : value
    })
  }

  componentDidMount() {
        this.props.dispatch(getCohorts())
        this.props.dispatch(getCampuses())
    }


  render() {
        const campusLocationInfo = [{
          id: 0,
          campus: "Provo",
          lat: 40.2262087,
          lng: -111.6609474
        },
        {
          id: 1,
          campus: "Salt Lake City",
          lat: 40.7618227,
          lng: -111.890594
        },
        {
          id: 2,
          campus: "Dallas",
          lat: 32.7775249,
          lng: -96.7956188
        }];

        const schoolLat = campusLocationInfo[0].lat;
        const schoolLng = campusLocationInfo[0].lng;

        const lat2 = this.props.studentLocation.lat;
        const lng2 = this.props.studentLocation.lng;

        function distanceLatAndLng(schoolLat,schoolLng,lat2,lng2) {
          const R = 3959; // Radius of the earth in mi
          const dLat = deg2rad(lat2-schoolLat);  // deg2rad below
          const dLon = deg2rad(lng2-schoolLng);
          const a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(schoolLat)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2)
            ;
          const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
          const d = R * c; // Distance in mi
          if (d >= 50) {
           this.state.housing_eligibility = true

          } else {
            this.state.housing_eligibility = false
          }
          return d;
        }

        function deg2rad(deg) {
          return deg * (Math.PI/180)
        }

        distanceLatAndLng.call(this, schoolLat, schoolLng, lat2, lng2);

        const cohorts = this.props.all.map( (cohort, i) => (
          <MenuItem name="cohort" id={cohort.id} key={i} eventKey={cohort.name}
            onSelect={ () => {
              let start_date = moment(cohort.start_date).format("YYYY-MM-DD")
              let end_date = moment(cohort.end_date).format("YYYY-MM-DD")
              this.setState({
              arrive_date: start_date,
              leave_date: end_date
            })}}
          > {cohort.name} </MenuItem>
        ))
        const campuses = this.props.campuses.map((campus,i) => (
          <MenuItem name="campus" id={campus.id} key={campus.id} eventKey={campus.city}> {campus.city} </MenuItem>
        ))

    return (
    <div className="new-student-container">
        <div onClick={ () => this.setState({ open: !this.state.open}) }>
          <h3>New Student</h3>
        </div>
        <Panel collapsible expanded={ this.state.open }>
        <form ref="new_student_form">
          <div className="students-panel">
            <div className="row">
                <div className="col-sm-6">
                  <h1>General</h1>
                <ul className="student-ul">

                  <li><input type="text" placeholder="First Name" name="first_name" ref="first_name" className="student-40" onChange={this.handleInputChange}/></li>
                  <li><input type="text" placeholder="Last Name" name="last_name" ref="last_name" className="student-40" onChange={this.handleInputChange}/></li>
                  <li>DOB <br/> <input type="date" name="dob" ref="dob" className="student-20" onChange={this.handleInputChange}/> </li>
                  <li>
                    <div className="item-container">
                      <div className="item-left">
                        <DropdownButton title="Gender" ref="gender" onSelect={ evt => { this.setState({ gender: evt }) }}  className="student-20">
                          <MenuItem eventKey="M">Male</MenuItem>
                          <MenuItem eventKey="F">Female</MenuItem>
                        </DropdownButton>
                      </div>
                        <div className="item-right">{this.state.gender}</div>
                    </div>
                  </li>
                 <li>
                    <div className="item-container">
                      <div className="item-left">
                    <DropdownButton title="Campus" onSelect={ evt => this.setState({ campus: evt }) } className="student-20">
                      {campuses}
                    </DropdownButton>
                      </div>
                        <div className="item-right">
                    {this.state.campus}</div>
                    </div>
                  </li>
                  <li>
                    <div className="item-container">
                      <div className="item-left">
                        <DropdownButton title="Cohort" onSelect={ evt => {this.setState({cohort: evt }) }}  className="student-20">
                          {cohorts}
                        </DropdownButton>
                      </div>
                        <div className="item-right">{this.state.cohort}</div>
                    </div>
                </li>
                  <li>
                    <div className="item-container">
                      <div className="item-left">
                        <DropdownButton title="Deposit Paid" onSelect={ evt => { this.setState({ deposit_paid : evt }) }}  className="student-20">
                          <MenuItem eventKey="Yes">Yes</MenuItem>
                          <MenuItem eventKey="No">No</MenuItem>
                        </DropdownButton>
                      </div>
                        <div className="item-right">{this.state.deposit_paid}</div>
                    </div>
                  </li>
                  <li>Arrives:<input type="date" name="arrive_date" ref="arrive_date" className="student-20"
                                          value={this.state.arrive_date}
                                          onChange={ evt => {this.setState({ arrive_date: evt.target.value})}}
                                          /></li>
                  <li>Leaves: <input type="date" name="leave_date" ref="leave_date" className="student-20"
                                          value={this.state.leave_date}
                                          onChange={ evt => { this.setState({ leave_date: evt.target.value})}}
                                          /></li>
                </ul>
               </div>

               <div className="col-sm-6">

                <h1>Contact</h1>
                <ul className="student-ul">
                  <li><input type="text" placeholder="Email" name="email" ref="email" className="student-40" onChange={this.handleInputChange}/></li>
                  <li><input type="text" placeholder="Slack" name="slack" ref="slack" className="student-40" onChange={this.handleInputChange}/></li>
                  <li><input type="text" placeholder="Phone" name="phone" ref="phone" className="student-40" onChange={this.handleInputChange}/></li>
                  <li><input type="text" placeholder="Address" name="street_address" ref="street_address" className="student-40" onChange={this.handleInputChange}/></li>
                  <li><input type="text" placeholder="City" name="city" ref="city" className="student-30" onChange={this.handleInputChange}/>
                      <input type="text" placeholder="State" name="state" ref="state" className="student-10" onChange={this.handleInputChange}/> </li>
                  <li><input type="text" placeholder="Country" name="country" ref="country" className="student-30" onChange={this.handleInputChange}/>
                      <input type="text" placeholder="Zip" name="post_code" ref="post_code" className="student-10" onChange={this.handleInputChange}/></li>
                  <ul className="student-ul">
                    <li><Button onClick={ () =>
                      { this.props.dispatch(getEligibility(`${this.state.street_address} ${this.state.city} ${this.state.state}`))
                        this.props.dispatch(createStudent(this.state))
                        this.clearData()
                        this.setState({open: false})
                        alert(this.state.first_name + this.state.last_name + " added.")
                      }}>     Add Student     </Button></li>
                    <li><Button onClick={ () =>
                      { this.clearData() }}>Clear</Button>
                    </li>

                  </ul>

                </ul>

              </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                <h1>Misc</h1>
                <ul className="student-ul">
                  <li><input type="text" placeholder="Notes" name="notes" ref="notes"  className="student-80" onChange={this.handleInputChange}/></li>
                  <li><input type="text" placeholder="Accommodations" name="accomodations" ref="accomodations"  className="student-80" onChange={this.handleInputChange}/></li>
                </ul>
                <ul className="student-ul">
                  <li><input type="text" placeholder="Car Info" name="car_info" ref="car_info" className="student-80" onChange={this.handleInputChange}/></li>
                </ul>
                <ul className="student-ul">
                  <li><Button onClick={ () => {this.props.dispatch(createStudent(this.state))}}>     Add Student     </Button></li>
                </ul>
                </div>
              </div>
          </div>
        </form>
        </Panel>
    </div>

    )
  }

}
function mapStateToProps(state) {
  return {
    all: state.cohort.all,
    campuses: state.campus.all,
    studentLocation: state.studentLocation.studentLocation
  }
}
export default connect(mapStateToProps)(CreateNewStudent)
