/**
 * Comment
 */
var React = require('react/addons');
var Comment = React.createClass({

  propTypes: {
    author: React.PropTypes.object,
    message: React.PropTypes.string
  },

  render: function () {
    return (
      <div className="row">
        <div className="panel panel-default col-xs-4 col-xs-offset-4">
          <div className="panel-body">
            <div>
              <h3>{this.props.author.name}</h3>
              <p>{this.props.message}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Comment;