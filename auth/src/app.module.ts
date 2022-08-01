import { User } from './entity/User.entity';
import { Module } from '@nestjs/common';
import { AppController } from './users/app.controller';
import { AppService } from './services/app.service';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
