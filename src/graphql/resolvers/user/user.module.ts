import { Module } from '@nestjs/common';
import { UserResolver } from './UserResolver';
import { UserSettingResolver } from './userSettingResolver';
import { UserService } from './userService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../models/User';
import { UserSettings } from '../../models/UserSetting';
import { UserSettingService } from './userSetting.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSettings])],
  providers: [
    UserResolver,
    UserService,
    UserSettingService,
    UserSettingResolver,
  ],
  exports: [UserSettingService],
  controllers: [],
})
export class userModule {}
