import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { FileModule } from "./file/file.module";
import { TrackModule } from "./track/track.module";

@Module({
  imports: [
    TrackModule,
    FileModule,
    MongooseModule.forRoot(
      "mongodb+srv://admin:44sh5hrQ4gFR9y4@cluster0.siwym.mongodb.net/music-platform?retryWrites=true&w=majority"
    ),
  ],
})
export class AppModule {}
