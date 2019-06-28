import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne} from "typeorm";
import { Article } from './Article';
import { Image } from './SectionImage';

@Entity()
export class Section {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @ManyToOne(type => Article, article => article.sections)
    article: Article;

    @ManyToOne(type => Image, sectionImage => sectionImage.sections)
    image: Image;

}
