import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TrackModule } from "./track/track.module";

@Module({
  imports: [
    TrackModule,
    MongooseModule.forRoot(
      "mongodb+srv://admin:44sh5hrQ4gFR9y4@cluster0.siwym.mongodb.net/music-platform?retryWrites=true&w=majority"
    ),
  ],
})
export class AppModule {}
