export const likePost = (id) => ({
  type: 'LIKE_POST',
  payload: id
});

export const dislikePost = (id) => ({
  type: 'DISLIKE_POST',
  payload: id
});
