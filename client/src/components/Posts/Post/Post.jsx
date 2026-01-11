import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";

import { likePost, deletePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <Card sx={{ position: "relative", borderRadius: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        alt={post.title}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
          color: "white",
        }}
      >
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </Box>

      {/* More button */}
      <Box sx={{ position: "absolute", top: 16, right: 16 }}>
        <Button
          size="small"
          sx={{ color: "white" }}
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon />
        </Button>
      </Box>

      <Box sx={{ p: 2 }}>
        <Typography variant="body2" color="text.secondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>

        <Typography gutterBottom variant="h5">
          {post.title}
        </Typography>

        <CardContent sx={{ p: 0 }}>
          <Typography variant="body2" color="text.secondary">
            {post.message}
          </Typography>
        </CardContent>
      </Box>

      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button
          size="small"
          onClick={() => dispatch(likePost(post._id))}
        >
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;Like&nbsp;{post.likeCount}
        </Button>

        <Button
          size="small"
          color="error"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" />
          &nbsp;Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
