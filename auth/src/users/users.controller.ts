import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from 'src/services/auth.service';
import { UsersService } from 'src/services/users.service';
import { UserDto } from '../dto/users.dto';

@Controller()
export class UsersController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService) {}

  @Post('auth/signup')
  async registration(@Body() data: UserDto): Promise<UserDto> {
    console.log(2)
    return await this.usersService.create(data);
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/signin')
  async login(@Request() req) {
    console.log(2)
    return this.authService.login(req.user);
  }

  @UseGuards()
  @Get('profile')
  async logprofilein() {
    return { data: true }
  }

  @Get('users')
  async users() {
    return await this.usersService.findAll()
  }
}
