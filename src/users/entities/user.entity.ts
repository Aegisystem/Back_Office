import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  alias: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;
}

