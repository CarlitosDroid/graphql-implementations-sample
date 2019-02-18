const {
    GraphQLString,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLInputObjectType
} = require('graphql');

const BookType = new GraphQLObjectType({
    name: 'BookType',
    description: 'Book list',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        author: { type: GraphQLString }
    }
});

module.exports = { BookType }