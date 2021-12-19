import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mangoose from "mongoose";
import { Track } from "./track.schema";

export type CommentDocument = Comment & mangoose.Document;

@Schema()
export class Comment {
  @Prop()
  username: string;

  @Prop()
  text: string;

  @Prop({ type: mangoose.Schema.Types.ObjectId, ref: "Track" })
  track: Track;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
