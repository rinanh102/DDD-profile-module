const createTableProfileRelationshipTypes = require('./tables/20220728070000_create_table_profile-relationship-types');
const createTableProfileAttributes = require('./tables/20220728070005_create_table_profile-attributes');
const createTableProfiles = require('./tables/20220728070007_create_table_profiles');
const createTableProfileAttributeValues = require('./tables/20220728070008_create_table_profile-attribute-values');
const createTableProfileAddress = require('./tables/20220728070009_create_table_profile-addresses');

exports.upAll = async (knex) => {
    await createTableProfileRelationshipTypes.up(knex);
    await createTableProfileAttributes.up(knex);
    await createTableProfiles.up(knex);
    await createTableProfileAttributeValues.up(knex);
    await createTableProfileAddress.up(knex);
};

exports.downAll = async (knex) => {
    await createTableProfileAddress.down(knex);
    await createTableProfileAttributeValues.down(knex);
    await createTableProfiles.down(knex);
    await createTableProfileAttributes.down(knex);
    await createTableProfileRelationshipTypes.down(knex);
};
