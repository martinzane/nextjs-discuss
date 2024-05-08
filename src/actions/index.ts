import { signIn } from "./sign-in";
import { signOut } from "./sign-out";
import { createComment } from "./create-comment";
import { createPost } from "./create-post";
import { createTopic } from "./create-topic";

const actions = {
  signIn,
  signOut,
  createComment,
  createPost,
  createTopic,
};

export default actions;
