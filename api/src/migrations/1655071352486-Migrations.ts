import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1655071352486 implements MigrationInterface {
    name = 'Migrations1655071352486'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "displayName" character varying
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "bio" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "numFollowing" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "numFollowers" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "avatarUrl" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "bannerUrl" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "online" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "lastOnline" DROP NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "lastOnline"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "online"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "bannerUrl"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "avatarUrl"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "numFollowers"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "numFollowing"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "bio"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "displayName"
        `);
    }

}
