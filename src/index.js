/**
 * React Comments
 * -----------------------------------------------------------
 * Components
 * -----------------------------------------------------------
 * - CommentBox
 *   - CommentList
 *     - Comment
 *   - CommentForm
 */
var React = require('react/addons');
var CommentBox = require('./CommentBox');


// Blast off...
React.render(<CommentBox url="../comments.json" />, document.querySelector('#js-react'));
