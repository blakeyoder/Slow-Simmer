import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany} from "typeorm";
import { Section } from './Section';

@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @OneToMany(type => Section, section => section.image)
    sections: Section[];
}
