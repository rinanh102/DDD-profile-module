/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 const TABLE_NAME = 'profile_relationship_types';

 exports.up = async (knex) => {
     const isHasTable = await knex.schema.hasTable(TABLE_NAME);
 
     if (isHasTable) return;
 
     await knex.schema.createTable(TABLE_NAME, (table) => {
         table.uuid('id').primary();
         table.string('description', 255).unique().notNullable();
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
