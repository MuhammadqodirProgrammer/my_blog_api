
import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img_url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model("News", schema);
