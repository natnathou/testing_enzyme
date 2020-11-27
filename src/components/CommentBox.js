import React, { useState } from 'react';

export const CommentBox = () => {
  const [comment, setComment] = useState('');

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div>
      <form>
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
