import React from 'react';

function Question(props) {
  return (
    <div>
      <div className="text">
        <p>Andy's parents have inherited a successful family business from his grandparents. His parents would like him to continue in the family professional tradition and in due course manage the family business. They believe that the family business would provide him with financial security while preserving a family heritage. However, Andy has a secret wish to become a musician. He resents the pressure his family has put on him and has no desire to become the manager of his family business. He wants to sing and play the piano.</p>
        <p>Andy entered a Talent Competition at university and won a top prize for his performance. He has been offered the opportunity to study music and a contract to work with a famous music company.</p>
      </div>
      <h2 className="question">{props.content}</h2>
    </div>
  );
}

Question.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default Question;
