import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() user: CreateUserDto) {
    return user;
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @Query('sort', ParseBoolPipe) sort: boolean,
  ) {
    console.log(typeof id === 'number'); // true
    console.log(typeof sort === 'boolean'); // true
    return 'This action returns a user';
  }
}
