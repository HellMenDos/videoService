import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './users.controller';

import { UsersService } from '../services/users.service';
import { AuthService } from '../services/auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { LocalStrategy } from '../strategies/local.strategy';
import { JwtStrategy } from '../strategies/jwt.strategy';
import { Users } from 'src/entity/Users.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Users])
  ],
  controllers: [
    UsersController
  ],
  providers: [
    LocalStrategy,
    JwtService,
    JwtStrategy,
    UsersService,
    AuthService,
  ],
  exports: [
    LocalStrategy,
    JwtService,
    JwtStrategy,
    UsersService,
    AuthService,
  ]
})
export class UsersModule {}
