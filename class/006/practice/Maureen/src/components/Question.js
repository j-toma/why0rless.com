import React from 'react';

function Question(props) {
  return (
    <div>
      <p className="text">Maureen shares her university accomodation with five other students. Each evening when she returns from her classes, her housemates are cooking, eating, drinking, chatting, watching Tv and listening to loud music. This continues until very late at night. Not only is there no privacy or quiet time for study in the evenings, but the house is messy and smelly due to dirty dishes and clothes piling up in the house.

      Maureen has become very unhappy with her housemates and shares her frustrations with a student who is a senior at the university. The senior suggested that Maureen organises a house meeting with alll her housemates. He says that, at the meeting, they could discuss how to improve the living arrangements for all of them.</p>
      <h2 className="question">{props.content}</h2>
    </div>
  );
}

Question.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default Question;
