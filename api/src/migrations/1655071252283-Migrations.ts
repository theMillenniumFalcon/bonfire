import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1655071252283 implements MigrationInterface {
    name = 'Migrations1655071252283'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "displayName"
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "displayName" character varying NOT NULL
        `);
    }

}
