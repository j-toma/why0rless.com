import React from 'react';

function Question(props) {
  return (
    <div>
      <p className="text">Tom is a student who works in a cafe after school hours. Tom is usually unhappy when he begins his work at the cafe as he would rather be at home doing his homework and relaxing with friends. Although Tom works hard at the cafe, he never smiles and avoids eye-contact with his customers. His customers often feel that they are causing his unhappiness. When they try to make conversation with Tom to show that they appreciate him, Tom simply shrugs his shoulders and respond in monosyllables without smiling.</p>
      <h2 className="question">{props.content}</h2>
    </div>
  );
}

Question.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default Question;
