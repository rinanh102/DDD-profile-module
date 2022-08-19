/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

 const TABLE_NAME = 'profile_attributes';

exports.up = async (knex) => {
    const isHasTable = await knex.schema.hasTable(TABLE_NAME);

    if (isHasTable) return;

    await knex.schema.createTable(TABLE_NAME, (table) => {
        table.string('code').primary().notNullable();
        table.string('label').notNullable();
        table.string('type', 32).notNullable();
        table.string('status', 32).notNullable();
        table.boolean('visibility').notNullable();
        table.integer('sort_order').notNullable();
        table.boolean('system_defined').notNullable();
        table.boolean('is_required').notNullable();
        table.boolean('editable').notNullable();
        table.text('options');
        table.dateTime('created_at').notNullable().defaultTo(knex.fn.now());
        table.dateTime('updated_at');
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
