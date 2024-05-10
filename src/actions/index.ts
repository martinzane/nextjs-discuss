import { signIn } from "./sign-in";
import { signOut } from "./sign-out";
import { createComment } from "./create-comment";
import { createPost } from "./create-post";
import { createTopic } from "./create-topic";
import { search } from "./search";

const actions = {
  signIn,
  signOut,
  createComment,
  createPost,
  createTopic,
  search,
};

export default actions;
