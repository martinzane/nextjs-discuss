const paths = {
  home() {
    return "/";
  },
  topic(topic: string) {
    return `/topics/${topic}`;
  },
  postCreate(topic: string) {
    return `/topics/${topic}/posts/create`;
  },
  post(topic: string, post: string) {
    return `/topics/${topic}/posts/${post}`;
  },
};

export default paths;
