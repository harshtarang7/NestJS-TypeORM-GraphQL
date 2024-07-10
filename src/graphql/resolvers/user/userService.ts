import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../models/User';
import { Repository } from 'typeorm';
import { UserInput } from '../../utils/createUserInput';
import { UserSettings } from '../../models/UserSetting';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(UserSettings)
    private readonly userSettingsRepository: Repository<User>,
  ) {}

  getAllUsers() {
    return this.userRepository.find({
      relations: ['settings'],
    });
  }

  createUser(createUserData: UserInput) {
    try {
      const newUser = this.userRepository.create(createUserData);
      return this.userRepository.save(newUser);
    } catch (error) {
      throw error;
    }
  }

  getUserById(id: number) {
    try {
      return this.userRepository.findOneBy({ id });
    } catch (error) {
      throw error;
    }
  }
}
