var React = require('react');
var dragula = require('react-dragula');
var App = React.createClass({
  render: function () {
    return <div className='container'>
      <div>Swap me around</div>
      <div>Swap her around</div>
      <div>Swap him around</div>
      <div>Swap them around</div>
      <div>Swap us around</div>
      <div>Swap things around</div>
      <div>Swap everything around</div>
    </div>;
  },
  componentDidMount: function () {
    var container = React.findDOMNode(this);
    dragula([container]);
  }
});
React.render(<App />, document.getElementById('examples'));
