/**
 * CommentForm
 */
var React = require('react/addons');
var CommentForm = React.createClass({

  propTypes: {
    onCommentSubmit: React.PropTypes.func
  },

  commentWillSubmit: function (e) {

    e.preventDefault();

    // 1. DOM cache
    var name = React.findDOMNode(this.refs.author).value;
    var message = React.findDOMNode(this.refs.message).value;
    // 2. State changes
    // --> Loading icons...
    // 3. Prep work
    var payload = {
      author: {
        name: name
      },
      message: message
    };
    // 4. Trigger parent callbacks
    this.props.onCommentSubmit(e, payload);
    // 5. Clean ups & State Changes
    React.findDOMNode(this.refs['comment-form']).reset();

  },

  render: function () {
    return (
        <div className="row">
          <form ref="comment-form" onSubmit={this.commentWillSubmit} className="col-xs-4 col-xs-offset-4">
            <div className="form-group">
              <input ref="author" type="text" name="author" className="form-control" placeholder="Name" />
            </div>
            <div className="form-group">
              <textarea ref="message" name="message" placeholder="Comment" rows="5" cols="5" className="form-control"></textarea>
            </div>
            <button className="btn btn-primary">Submit Comment</button>
          </form>
        </div>
      );
  }

});

module.exports = CommentForm;