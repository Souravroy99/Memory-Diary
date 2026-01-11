import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    message: {
      type: String,
      required: true
    },
    creator: {
      type: String,
      required: true
    },
    tags: {
      type: [String],
      default: []
    },
    selectedFile: {
      type: String
    },
    likeCount: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
export default Post;