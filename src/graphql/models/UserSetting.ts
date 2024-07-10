import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';

@Entity({ name: 'user_settings' })
@ObjectType()
export class UserSettings {
  @PrimaryColumn()
  @Field((type) => Int)
  userId: number;

  @OneToOne(() => User, (user) => user.settings)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  @Field({ defaultValue: false })
  receiveNotifications: boolean;

  @Column()
  @Field({ defaultValue: false })
  receiveEmails: boolean;

}
