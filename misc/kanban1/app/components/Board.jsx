import AltContainer from 'alt-container';
import React from 'react';
import Lanes from './Lanes.jsx';
import LaneActions from '../actions/LaneActions';
import LaneStore from '../stores/LaneStore';
import BoardActions from '../actions/BoardActions';
import Editable from './Editable.jsx';
import {DragSource, DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';


const boardSource = {
  beginDrag(props) {
    return {
      id: props.board.id,
      className: props.className
    };
  }
};

const boardTarget = {
  hover(targetProps, monitor) {
    const targetId = targetProps.board.id;
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;
    const sourceType = sourceProps.className;

    if(sourceType === "board") {
      if(sourceId !== targetId) {
        targetProps.onMove({sourceId, targetId});
      }
    }

    if(sourceType === "lane") {
      if(!targetProps.board.lanes.length) {
        BoardActions.attachToBoard({
          boardId: targetProps.board.id,
          laneId: sourceId
        });
      }
    }
  }
};


@DragSource(ItemTypes.BOARD, boardSource, (connect) => ({
  connectDragSource: connect.dragSource()
}))
@DropTarget([ItemTypes.BOARD, ItemTypes.LANE], boardTarget, (connect) => ({
  connectDropTarget: connect.dropTarget()
}))
export default class Board extends React.Component {
  render() {
    const {connectDragSource, connectDropTarget, board, onMove, id, ...props} = this.props;

    return connectDragSource(connectDropTarget(
      <div {...props}>
        <div className="board-header" onClick={this.activateBoardEdit}>
          <div className="board-add-lane">
            <button onClick={this.addLane}>+</button>
          </div>
          <Editable
            className="board-name"
            editing={board.editing}
            value={board.name}
            onEdit={this.editName} />
          <div className="board-delete">
            <button onClick={this.deleteBoard}>x</button>
          </div>
        </div>
        <AltContainer
          stores={[LaneStore]}
          inject={{
            lanes: () => LaneStore.getLanesByIds(board.lanes)
          }}
        >
          <Lanes />
        </AltContainer>
      </div>
    ));
  }
  addLane = (e) => {
    e.stopPropagation();
    const boardId = this.props.board.id; 
    const lane = LaneActions.create({name: 'Lane'});
    BoardActions.attachToBoard({
      laneId: lane.id,
      boardId
    });
  };
  editName = (name) => {
    const boardId = this.props.board.id;
    if(!name.trim()) {
      BoardActions.update({id: boardId, editing: false});
      return;
    }
    BoardActions.update({id: boardId, name, editing: false});
  };
  deleteBoard = () => {
    const boardId = this.props.board.id;
    BoardActions.delete(boardId);
  };
  activateBoardEdit = () => {
    const boardId = this.props.board.id;
    BoardActions.update({id: boardId, editing: true});
  };
}