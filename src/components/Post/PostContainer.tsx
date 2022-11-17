import React from 'react';

import { IPost } from '../../models/IPost';
import { postAPI } from '../../services/PostService';
import PostItem from './PostItem';

const PostContainer = () => {
  const [limit, setLimit] = React.useState(100);
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(limit);
  const [createPost, { error: createError, isLoading: isCreateLoading }] =
    postAPI.useCreatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const handleRemove = async (post: IPost) => {
    deletePost(post);
  };
  const handleUpdate = async (post: IPost) => {
    updatePost(post);
  };

  return (
    <div>
      {isLoading && <h1>Идёт загрузка ...</h1>}
      {error && <h1>Произошла ошибка при загрузке ...</h1>}
      <button onClick={handleCreate}>Add new post</button>
      {posts &&
        posts.map((post: IPost) => (
          <PostItem remove={handleRemove} update={handleUpdate} post={post} key={post.id} />
        ))}
    </div>
  );
};

export default PostContainer;
