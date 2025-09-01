import mongoose, { Schema, models } from "mongoose";

export interface IMessage extends mongoose.Document {
  name: string;
  email: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const messageSchema = new Schema<IMessage>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const Message =
  models.Message || mongoose.model<IMessage>("Message", messageSchema);
export default Message;
