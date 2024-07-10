import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserSettings } from '../../models/UserSetting';
import { Repository } from 'typeorm';
import { CreateUserSetting } from '../../utils/createUserSeting';
import { User } from '../../models/User';

@Injectable()
export class UserSettingService {
  constructor(
    @InjectRepository(UserSettings)
    private UserSettingRepository: Repository<UserSettings>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  getUserSetting() {
    try {
      return this.UserSettingRepository.find();
    } catch (error) {
      throw error;
    }
  }

  getUserSettingById(userId: number) {
    try {
      return this.UserSettingRepository.findOneBy({ userId });
    } catch (error) {
      throw error;
    }
  }

  async createUserSettings(CreateUserSetting: CreateUserSetting) {
    try {
      const findUser = await this.userRepository.findOneBy({
        id: CreateUserSetting.userId,
      });
      if (!findUser) {
        throw new Error('user not found');
      }

      const newUserSetting =
        this.UserSettingRepository.create(CreateUserSetting);
      const savedSettings =
        await this.UserSettingRepository.save(newUserSetting);

      findUser.settings = savedSettings;
      await this.userRepository.save(findUser);

      return savedSettings;
    } catch (error) {
      throw error;
    }
  }
}
