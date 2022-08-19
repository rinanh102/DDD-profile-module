/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

 const TABLE_NAME = 'profiles';

exports.up = async (knex) => {
    const tableExists = await knex.schema.hasTable(TABLE_NAME);
    if (!tableExists) {
        return knex.schema.createTable(TABLE_NAME, (table) => {
            table.uuid('id').primary();
            table.uuid('user_id').nullable();
            table.uuid('target_id').nullable();
            table.string('code').unique().nullable();
            table.string('first_name', 255).nullable();
            table.string('last_name', 255).nullable();
            table.string('email', 255).nullable();
            table.string('gender', 20).nullable();
            table.date('dob').nullable();
            table.string('phone', 20).nullable();
            table.string('identity_num', 20).nullable();
            table.string('avatar', 2048).nullable();
            table.string('profession').nullable();
            table.enum('status', ['activate', 'deactivate']).defaultTo('activate').notNullable();
            table.uuid('type_id').references('id').inTable('profile_relationship_types').nullable();
            table.uuid('parent_id').references('id').inTable('profiles').nullable();
            table.dateTime('created_at').notNullable().defaultTo(knex.fn.now());
            table.dateTime('updated_at');
            table.dateTime('deleted_at');
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
