import mongoose from "mongoose";
const videoSchema = mongoose.Schema({
    url: String,
    channel: String,
    description: String,
    song: String,
    likes: String,
    shares: String,
    messages: String
});
export default mongoose.model("videoschema", videoSchema);