import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entity/Users.entity';
import { UserDto } from '../dto/users.dto';
import { hashSync } from 'bcryptjs'


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private users: Repository<Users>
  ) {}

  async findByEmail(email: string): Promise<UserDto | undefined> {
    return await this.users.findOne({ where: { email } })
  }

  async findAll(): Promise<UserDto | undefined> {
    return await this.users.findOne({ where: { email:'dkkdkdk23d@gmail.com' } })
  }

  async findOne(id: string): Promise<UserDto | undefined> {
    return await this.users.findOne(id)
  }

  async create(user: UserDto): Promise<UserDto | undefined> {
    user.password = hashSync(user.password)
    return await this.users.save(user)
  }

}