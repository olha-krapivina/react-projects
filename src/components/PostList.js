/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import PostItem from "./PostItem";

function PostList({ posts }) {
  return (
    <div
        css={css`
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        `}
    >
        {posts.map( (item) => <PostItem key={item.id} data={item} />)}
    </div>
  );
}
export default PostList;