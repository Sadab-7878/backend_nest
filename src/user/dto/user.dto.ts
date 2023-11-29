import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class userCredDTO {
  @ApiProperty({
    name: 'email',
    description: 'Email of the user',
    type: String,
    example: 'dev@example.com',
  })
  readonly email: string;

  @ApiProperty({
    name: 'password',
    description: 'Password of the user',
    type: String,
    example: 'abc1234',
  })
  readonly password: string;


}

export class CreateUserDTO {

  @ApiProperty({
    name: 'first_name',
    description: 'first name of the user',
    type: String,
    example: 'xyz',
  })
   first_name: string;

  @ApiProperty({
    name: 'middle_name',
    description: 'middle name of the user',
    type: String,
    example: 'xyz',
  })
  @IsOptional()
   middle_name?: string;

  @ApiProperty({
    name: 'last_name',
    description: 'last name of the user',
    type: String,
    example: 'xyz',
  })
   last_name: string;

  @ApiProperty({
    name: 'email',
    description: 'Email of the user',
    type: String,
    example: 'dev@example.com',
  })
  @IsString()
  email: string;

  @ApiProperty({
    name: 'password',
    description: 'Password of the user',
    type: String,
    example: 'abc1234',
  })
  @IsString()
   password: string;

}
