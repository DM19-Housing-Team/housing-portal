import React, { Component } from "react";
import { Panel, Button, DropdownButton, MenuItem } from "react-bootstrap";
// import "../../../styles/admin.scss";
import "../../../styles/roompanel.scss";
import ApartmentsList from "../../../containers/Apartments/index";
//import Container from '../../../containers/Multiple Targets/Container'
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class RoomInfo extends Component {
    constructor(...args) {
        super(...args)

        this.state = {
            open: false
        };
    }
    
    render() {
        
        return (
        <DragDropContextProvider backend={HTML5Backend}>
            <div className="walls">
              {/*<Container />*/}
              <ApartmentsList />
            </div>
        </DragDropContextProvider>
        );
    }
}

export default RoomInfo;