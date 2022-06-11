import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1654957605070 implements MigrationInterface {
    name = 'Migrations1654957605070'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "room" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "description" character varying NOT NULL,
                "numPeopleInside" integer NOT NULL,
                "isPrivate" boolean NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "UQ_535c742a3606d2e3122f441b26c" UNIQUE ("name"),
                CONSTRAINT "PK_c6d46db005d623e691b2fbcba23" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" SERIAL NOT NULL,
                "username" character varying NOT NULL,
                "displayName" character varying NOT NULL,
                "email" character varying NOT NULL,
                "password" character varying NOT NULL,
                "bio" character varying NOT NULL,
                "numFollowing" integer NOT NULL,
                "numFollowers" integer NOT NULL,
                "avatarUrl" character varying NOT NULL,
                "bannerUrl" character varying NOT NULL,
                "online" boolean NOT NULL,
                "lastOnline" TIMESTAMP NOT NULL,
                "youAreFollowing" boolean,
                "followsYou" boolean,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"),
                CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"),
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "user"
        `);
        await queryRunner.query(`
            DROP TABLE "room"
        `);
    }

}
