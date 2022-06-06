// пример обычной функции
// function PostItem(props) {
//   return (
//     <div className="post-item">
//       <h2>{props.data.title}</h2>
//       <h3>{props.data.aythor}</h3>
//       <p>{props.data.description}</p>
//     </div>
//   );
// }
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// пример стрелочной функции
const PostItem = ({ data:{title, aythor, description} }) => (
    <div
      css={css`
        max-width: 300px;
        padding: 5px;
        margin: 5px;
        border: 1px solid;
        background: #ccc;
        text-align: center;
    `}>
      <h2>{title}</h2>
      <h3>{aythor}</h3>
      <p>{description}</p>
    </div>
);
export default PostItem;