import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './users.service';
import { compareSync } from 'bcryptjs'
import { UserDto } from '../dto/users.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<UserDto> {
    const user = await this.usersService.findByEmail(email);
    
    if (user && compareSync(pass,user.password)) {
      // const { password, ...result } = user;
      return user;
    }

    return null;
  }

  async login(user: UserDto) {
    console.log(user)
    const payload = { email: user.email, sub: user.firstName };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
