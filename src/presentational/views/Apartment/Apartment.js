import React, { Component } from "react";
import RoomInfo from "./RoomInfo";
import NavBar from "../../NavBar";
import NeedHousingContainer from "./NeedHousingContainer";
import ApartmentListFilter from "../../../containers/ApartmentListFilter";
import { DragDropContextProvider } from 'react-dnd';

class Apartment extends Component {
    render() {
        return (
            
            <div>
                <div>
                    <NavBar />
                </div>
                <div>
                    {/*<ApartmentListFilter />*/}
                </div>
            
                <div>
                    <RoomInfo />
                </div>
                {/*<div>
                    <NeedHousingContainer />
                </div>*/}
            
            </div>
            
        )
    }
}

export default Apartment