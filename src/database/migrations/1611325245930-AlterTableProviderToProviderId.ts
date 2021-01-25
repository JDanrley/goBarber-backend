import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterTableProviderToProviderId1611325245930 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('appointments', 'provider');
        await queryRunner.addColumn('appointments', new TableColumn({
            name: 'provider_id',
            type: 'uuid',
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('appointments', 'provider_id');
        await queryRunner.addColumn('appointments', new TableColumn({
            name: 'provider',
            type: 'string',
            isNullable: false
        }))
    }
}
