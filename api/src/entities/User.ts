import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm";
import { Field, ObjectType } from "type-graphql";

@ObjectType() // * to convert the class to a graphql type
@Entity()
export class User extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column({ unique: true })
    username!: string;

    @Field()
    @Column()
    displayName: string;

    @Field()
    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @Field()
    @Column()
    bio: string;

    @Field(() => Number)
    @Column()
    numFollowing: number;

    @Field(() => Number)
    @Column()
    numFollowers: number;

    @Field()
    @Column()
    avatarUrl: string;

    @Field()
    @Column()
    bannerUrl: string;

    @Field()
    @Column()
    online: boolean;

    @Field(() => String)
    @Column()
    lastOnline: Date;

    @Field()
    @Column({ nullable: true})
    youAreFollowing: boolean;

    @Field()
    @Column({ nullable: true})
    followsYou: boolean;

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;
}