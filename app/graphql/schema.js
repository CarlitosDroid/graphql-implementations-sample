const { GraphQLSchema } = require('graphql');

const BookQueryType = require('./queries.js');

const BooksSchema = new GraphQLSchema({
    query: BookQueryType
});

module.exports = BooksSchema;