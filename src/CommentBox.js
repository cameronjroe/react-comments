/**
 * CommentBox
 */
var $ = require('jquery');
var React = require('react/addons');
var CommentList = require('./CommentList');
var Comment = require('./CommentForm');
var CommentForm = require('./CommentForm');

var CommentBox = React.createClass({

  propTypes: {
    url: React.PropTypes.string
  },

  getInitialState: function () {
    return {
      data: []
    }
  },

  loadComments: function () {

    $.ajax({
      url: this.props.url,
      type: 'GET',
      dataType: 'json',
      success: function (data, status, xhr) {
        this.setState({
          data: data
        });
      }.bind(this),
      error: function (data, status, err) {
        console.error(status);
      }.bind(this)
    });

  },

  handleCommentSubmit: function (e, data) {
    var comments = this.state.data;
    this.setState({
      data: comments.concat([data])
    });
  },

  componentDidMount: function () {
    this.loadComments();
  },

  render: function () {
    return (
        <div>
          <CommentList data={this.state.data} />
          <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        </div>
      );
  }

});

module.exports = CommentBox;