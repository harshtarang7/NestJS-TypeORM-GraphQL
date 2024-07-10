import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserSettings } from './UserSetting';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  userName: string;

  @Column({nullable:true})
  @Field({ nullable: true })
  displayName?: string;

  @OneToOne(() => UserSettings, {
    cascade: true,
  })
  @JoinColumn({ name: 'id' })
  @Field(() => UserSettings, { nullable: true })
  settings?: UserSettings;
}
