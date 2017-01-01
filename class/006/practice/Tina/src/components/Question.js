import React from 'react';

function Question(props) {
  return (
    <div>
      <p className="text">Tina is a member of a project team at work. Her team leader claims that contriubtions from all members on the team are valued equally and that responsibilities are shared. However, Tina notices that her team leader rarely listens to the ideas offered by team members and makes important decisions alone. Everyone on the team begins to lose interest in the project.</p>
      <h2 className="question">{props.content}</h2>
    </div>
  );
}

Question.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default Question;
