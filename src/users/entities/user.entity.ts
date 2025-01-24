import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
    password: string;

  @BeforeInsert()
  async hashPassword() {
      this.password = await bcrypt.hash(this.password, 10);
  }

}

