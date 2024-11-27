import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mfuraimelyse:tasYIvekKpocBmrc@heriwork.lgysl.mongodb.net/?retryWrites=true&w=majority&appName=heriwork',
    ),
  ],
})
export class DatabaseModule {}
