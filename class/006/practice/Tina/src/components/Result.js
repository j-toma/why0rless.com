import React from 'react';
import Wrong from '../components/Wrong';
import renderIf from 'render-if';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


function Result(props) {
  // const donkey = {props.result};
  return (
    <ReactCSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div className="result">
        <p><b>{props.result}%</b> of your answers were correct.</p>
        {renderIf(props.result!==100) (
          <div>
            <p>You answered the following questions incorrectly:</p>
            <div className="falselyAnswered">
              <ul>
                {props.falselyAnswered.map((questionNumber) =>
                  <Wrong
                    key={questionNumber}
                    value={questionNumber}
                  />
                )}
              </ul>
            </div>
          </div>
        )}
        <ul className="endButtons">
          <li className="endButton"><a href="../../public/index.html">Restart</a></li>
          <li className="endButton"><a href="../../../practice.html">Go back</a></li>
        </ul>
      </div>
    </ReactCSSTransitionGroup>
  );
}

Result.propTypes = {
  falselyAnswered: React.PropTypes.array.isRequired,
  result: React.PropTypes.number.isRequired
};

export default Result;
