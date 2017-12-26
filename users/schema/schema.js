const graphql = require('graphql');
const {

    GraphQLObjectType

} = graphql;

const TeamType = new GraphQLObjectType({
name: 'Team',
fields: {
      "id": {type: GraphQLString},
      "name": {type: GraphQLString},
      "iso2": {type: GraphQLString} 

    }
});


