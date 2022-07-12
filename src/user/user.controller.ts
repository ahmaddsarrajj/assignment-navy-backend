import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { GetUser } from '../auth/decorator';
import { User } from '@prisma/client';

// @UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UserController {
  constructor(private userService: UserService) { }

  @Get('me')                   //http request 201
  getMe(@GetUser() user: User){
    return user
  }

  @Get('all')
  async getUser(){
    const result = await this.userService.getUser()
    return result;
  }  

  // @Post()
  // async insertUser(
  //   @Body('email') userEmail:string,
  //   @Body('password') userPassword:string,
  //   @Body('isAdmin') userisAdmin:boolean = false,
  // ) {
  //   const generatedId =await this.userService.insertUser(
  //       userEmail,
  //       userPassword,
  //       userisAdmin,
  //   )
  //   return { id: generatedId };
  // }



  // @Get(':id')
  // async getSingleUser(@Param('id') userId: string){
  //   const result = await this.userService.getSingleUser(userId)
  //   return result;
  // }

  // @Patch(':id')
  // async updateUser(
  //   @Param('id') userId:string,
  //   @Body('email') userEmail:string,
  //   @Body('password') userPassword: string,
  //   @Body('isAdmin') userIsAdmin: boolean
  //   ){
  //   await this.userService.UpdateUser(userId, userEmail, userPassword, userIsAdmin);
  //   return null;
  // }

  // @Delete(':id')
  // async removeUser(@Param('id') userId: string){
  //   await this.userService.deleteUser(userId);
  //   return null;
  // }
}
