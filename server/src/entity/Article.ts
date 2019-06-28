import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany} from "typeorm";
import { Section } from './Section';

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    subtitle: string;

    @OneToMany(type => Section, section => section.article)
    sections: Section[];
}
