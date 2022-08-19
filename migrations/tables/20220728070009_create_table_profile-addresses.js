/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

 const TABLE_NAME = 'profile_addresses';

exports.up = async (knex) => {
    const tableExists = await knex.schema.hasTable(TABLE_NAME);
    if (!tableExists) {
        return knex.schema.createTable(TABLE_NAME, (table) => {
            table.uuid('id').primary();
            table.uuid('profile_id').unique().notNullable().references('id').inTable('profiles').onDelete('CASCADE');
            table.string('country', 128).nullable();
            table.string('region', 128).nullable();
            table.string('province', 128).nullable();
            table.string('district', 128).nullable();
            table.string('ward', 128).nullable();
            table.string('address', 255).nullable();
            table.string('postal_code', 32).nullable();
            table.double('latitude').nullable();
            table.double('longitude').nullable();
            table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
            table.timestamp('updated_at');
        });
    }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable(TABLE_NAME)
};
