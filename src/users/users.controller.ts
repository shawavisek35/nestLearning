import { Body, Controller, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto  } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-users.dto';

@Controller('users')
export class UsersController {

  //const userService = new UserService(); //always create a new instance of the service
  constructor(private readonly usersService: UsersService) {} //treated as a singleton class, same instance is shared

  //the route follows the waterfall model so we need to cautious about the order of the rotes declared 
  
  @Get() // /users
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.findAll(role);
  }


  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Post() //POST /users
  create(@Body(ValidationPipe) user: CreateUserDto) {
    return this.usersService.create(user);
  }

  @Patch(':id') //Patch /users
  update(@Param('id', ParseIntPipe) id: number, @Body() user: UpdateUserDto) {
    return user;
  }

}
