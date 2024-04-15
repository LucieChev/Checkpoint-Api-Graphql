import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
class Country extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  countryId!: number;

  @Field()
  @Column()
  code!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  emoji!: string;

  @Field()
  @Column()
  continent!: string;
}

export default Country