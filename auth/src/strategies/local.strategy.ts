import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException,ForbiddenException } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(email: string, password: string): Promise<any> {
    console.log('Hello')
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new ForbiddenException();
    }
    return user;
  }
}