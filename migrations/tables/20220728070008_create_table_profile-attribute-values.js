/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const TABLE_NAME = 'profile_attribute_values';

exports.up = async (knex) => {
    const isHasTable = await knex.schema.hasTable(TABLE_NAME);

    if (isHasTable) return;

    await knex.schema.createTable(TABLE_NAME, (table) => {
        table.uuid('id').primary();
        table.text('value').notNullable();
        table.uuid('entity_id').references('id').inTable('profiles').notNullable().onDelete('CASCADE');
        table.string('attribute_code').references('code').inTable('profile_attributes').notNullable().onDelete('CASCADE');
        table.dateTime('created_at').notNullable().defaultTo(knex.fn.now());
        table.dateTime('updated_at');
        table.unique(['entity_id', 'attribute_code']);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable(TABLE_NAME)
};
