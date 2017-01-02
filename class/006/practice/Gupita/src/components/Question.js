import React from 'react';

function Question(props) {
  return (
    <div>
      <div className="text">
        <p>A new student has joined you class this term. THe teacher introduces Gupita and explains that he has recently arrived from Nepal. She asks the class to make him feel at home. Gupita is very timid and speaks with a strong accent. Some of the boys in the class start to make fun of him and tell everyone that he is actually an 'alian' from another planet.</p>
        <p>Before long, Gupita feels afraid of the boys and avoids being near them. The girls in the class are kinder to Gupita and tell the boys to stop bullying Gupita or they will inform the school principal about what they are doing. They boys have now started to spread rumours that Gupita is actually a 'girl' in disguise.</p>
      </div>
      <h2 className="question">{props.content}</h2>
    </div>
  );
}

Question.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default Question;
