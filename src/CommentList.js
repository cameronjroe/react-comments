/**
 * CommentList
 */
var React = require('react/addons');
var Comment = require('./Comment');

var CommentList = React.createClass({

  propTypes: {
    data: React.PropTypes.array
  },

  render: function () {
    var comments = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author} message={comment.message} />
      );
    });

    return (
        <div className="comment-list" style={{padding: '2em'}}>
          {comments}
        </div>
      );
  }

});

module.exports = CommentList;