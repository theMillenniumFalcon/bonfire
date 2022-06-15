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
    @Column({ nullable: true })
    displayName: string;

    @Field()
    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @Field()
    @Column({ nullable: true })
    bio: string;

    @Field(() => Number)
    @Column({ nullable: true })
    numFollowing: number;

    @Field(() => Number)
    @Column({ nullable: true })
    numFollowers: number;

    @Field()
    @Column({ nullable: true })
    avatarUrl: string;

    @Field()
    @Column({ nullable: true })
    bannerUrl: string;

    @Field()
    @Column({ nullable: true })
    online: boolean;

    @Field(() => String)
    @Column({ nullable: true })
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