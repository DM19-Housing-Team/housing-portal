import React, { Component } from "react";
import { Panel, button } from "react-bootstrap";
import "../../styles/newapartment.scss";
import { Field, reduxForm } from "redux-form";
import Room from "../../presentational/views/Room";
import Apartment from "./NewApartmentForm";
import NewAddressForm from "./NewAddressForm";
import { createRoom } from "../../actions/action_apartments";
import { connect } from "react-redux";


class CreateNewApartment extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            open: false,
            rooms: [],
            showAddressForm: false,
            showApartmentForm: true,
            addressbutton: true,
            apartmentbutton: false,
            showRoomForm: false
        };
    }

    reset() {
      this.setState({
        rooms: [],
        showAddressForm: false,
        showApartmentForm: true,
        addressbutton: true,
        apartmentbutton: false,
        showRoomForm: false
      })
    }


    onSubmit(props) {
      props.apartment_id = this.props.apartment_id;
      for (let i=0; i<this.state.rooms.length; i++) {
        this.props.dispatch(createRoom({apartment_id: props.apartment_id, number_of_beds: props[i+""]}));
      }
      this.reset();
      alert("You created a new apartment");
    }

    showRoom() {
      this.setState({ showRoomForm: true })
    }

    render() {
        const Rooms = this.state.rooms;
        const { handleSubmit } = this.props;
        return (
            <div className="new-apartment-container">
                <div onClick={ ()=> this.setState({ open: !this.state.open }) }>
                    <h3>Property Management</h3>
                </div>
                <Panel className="apartment-panel" collapsible expanded={ this.state.open }>
                    { this.state.showApartmentForm && (
                      <div className="min-height">
                        <h1>New campus?</h1> <p>To add a building address, click Add New Address below. </p><br />
                        <button onClick={ () => this.setState({ showAddressForm: !this.state.showAddressForm, showApartmentForm: !this.state.showApartmentForm, addressbutton: false, apartmentbutton: true, showRoomForm: false }) }>Add New Address</button>
                        <hr />
                        <Apartment showRoom={ this.showRoom.bind(this) } initialValues={{ building_id: 1, over_21: false }} />
                      </div>
                    ) }
                    { this.state.showAddressForm && (
                      <div>
                      <button onClick={ () => this.setState({ showAddressForm: !this.state.showAddressForm, showApartmentForm: !this.state.showApartmentForm, addressbutton: true, apartmentbutton: false }) }>Add Apartment</button>
                      <NewAddressForm initialValues={{ campus_id: 1 }} />
                    </div>)}
                    { this.state.showRoomForm && (<form onSubmit={ handleSubmit(this.onSubmit.bind(this)) } >
                      <div className="room-controls-container">
                        <h1>Apartment added!</h1>
                        <p>Now let's throw some bedrooms in there.</p>
                        <button className="margin-left" type="button" onClick={ () => this.setState({ rooms: [...Rooms, <Room beds={Rooms.length + ""} key={Rooms.length} /> ]})}>Add New Room</button>
                        <button className="margin-left" type="submit">  Save  </button>
                        <button className="margin-left" type="button" onClick={ () => this.setState({ rooms: Rooms.slice(0, Rooms.length-1)})}>Delete Room</button>
                      </div>
                      { Rooms }
                    </form>)}
                </Panel>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    apartment_id: state.apartments.apartment_id,
    all: state.apartments.all
   }
}

CreateNewApartment = reduxForm({
  form: "roomForm"
})(CreateNewApartment)


export default connect(mapStateToProps)(CreateNewApartment);
