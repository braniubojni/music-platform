import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { FileModule } from "./file/file.module";
import { TrackModule } from "./track/track.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from "path";

@Module({
  imports: [
    TrackModule,
    FileModule,
    MongooseModule.forRoot(
      "mongodb+srv://admin:44sh5hrQ4gFR9y4@cluster0.siwym.mongodb.net/music-platform?retryWrites=true&w=majority"
    ),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, "static"),
    }),
  ],
})
export class AppModule {}
