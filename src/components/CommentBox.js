import React, { useState } from 'react';
import { addCommentAction } from '../actions/actions';
import { connect } from 'react-redux';

const _CommentBox = ({ comments, addCommentAction }) => {
  const [comment, setComment] = useState('');

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addCommentAction(comment);
    setComment('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <textarea onChange={handleChange} value={comment}></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  let { comments } = state;
  return { comments };
};

export const CommentBox = connect(mapStateToProps, {
  addCommentAction,
})(_CommentBox);

// export class CommentBox extends React.Component {
//   state = {
//     comment: '',
//   };

//   handleChange = (event) => {
//     this.setState({ comment: event.target.value });
//   };

//   render() {
//     return (
//       <div>
//         <form>
//           <div>
//             <textarea
//               onChange={this.handleChange}
//               value={this.state.comment}
//             ></textarea>
//           </div>
//           <div>
//             <button>Submit</button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
