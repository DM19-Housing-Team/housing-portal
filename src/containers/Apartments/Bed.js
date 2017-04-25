import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import {connect, monitor} from 'react'
import "../../styles/dndbed.scss";

class Bed extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    allowedDropEffect: PropTypes.string.isRequired,
  };
  componentDidMount() {
       //console.log("Bed props", this.props)
        let roomID = this.props.roomID
     
  }
  

  render() {
    ///////////////////////////////////
    // setting of styles:
    // this is where Students will display in beds
    ////////////////////////////////////
    const { canDrop, isOver, allowedDropEffect, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = '#363636';
    if (isActive) {
      
      backgroundColor = 'red';
    } else if (canDrop) {
      backgroundColor = 'blue';
     
    }

    //return connectDropTarget(
      return connectDropTarget(
      /////////////////////////////////
      // display X button here
      // add dispatch to remove student from bed
      /////////////////////////

      <div className="dnd-bed">

       {this.props.children}
        {/*{ isActive ?
          'Release to place student' :
          'Drag a student here'}*/}
      </div>
    );
  }
}
const StudentTarget = {
    drop({ allowedDropEffect, roomID }) {
      return {
        name: `${allowedDropEffect} Apartment`,
        allowedDropEffect,
        roomID: `${roomID}`
      };
    },
  }; 

export default DropTarget(ItemTypes.Student, StudentTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))(Bed)
