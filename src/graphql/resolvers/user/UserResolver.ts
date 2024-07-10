import { Query, Resolver, Args, Int, Mutation } from '@nestjs/graphql';
import { User } from '../../models/User';
import { UserInput } from '../../utils/createUserInput';
import { UserService } from './userService';
import { UserSettingService } from './userSetting.service';

export const incrementId = 3;

@Resolver((of) => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private userSettingService: UserSettingService,
  ) {}

  @Query((returns) => User)
  getUser() {
    return {
      id: 1,
      userName: 'tarang',
      displayName: 'tarang harsh',
    };
  }

  @Query((returns) => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return this.userService.getUserById(id);
  }

  // @ResolveField((returns) => UserSettings, { name: 'settings', nullable: true })
  // getUserSettings(@Parent() user: User) {
  //   return this.userSettingService.getUserSettingById(user.id);
  // }

  @Query(() => [User])
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Mutation((returns) => User)
  createUser(@Args('createUserData') createUserData: UserInput) {
    return this.userService.createUser(createUserData);
  }
}
