import { MigrationInterface, QueryRunner } from 'typeorm';

export class NewMigrations1727510224581 implements MigrationInterface {
  name = 'NewMigrations1727510224581';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "cities" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" text, "active" boolean NOT NULL, CONSTRAINT "UQ_a0ae8d83b7d32359578c486e7f6" UNIQUE ("name"), CONSTRAINT "PK_4762ffb6e5d198cfec5606bc11e" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "cities"`);
  }
}
