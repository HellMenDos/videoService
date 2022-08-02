import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  public firstName: string;

  @IsString()
  @IsNotEmpty()
  public lastName: string;

  @IsString()
  @IsNotEmpty()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public phone: string;

  @IsString()
  @IsOptional()
  public password?: string;
}

export class UserExtendsDto extends UserDto {
  @IsString()
  @IsNotEmpty()
  public id: string;
}