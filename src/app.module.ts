import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { APIv1 } from './controllers/api/v1';

@Module({
  imports: [],
  controllers: [AppController, APIv1],
  providers: []
})
export class AppModule {}
