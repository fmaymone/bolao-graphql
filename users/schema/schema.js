



const graphql = require('graphql');
const {

    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema

} = graphql;
//loadash eh pra percorrer o json
//const _ = require('lodash');

const axios = require('axios');




const MatchType = new GraphQLObjectType({
    name: 'Match',
    fields: {

        id: { type: GraphQLString },
        type: { type: GraphQLString },
        home_team: { type: GraphQLString },
        away_team: { type: GraphQLString },
        home_result: { type: GraphQLInt},
        away_result:  { type: GraphQLInt},
        date:  { type: GraphQLString},
        stadium:  { type: GraphQLInt},
        channels: { type: GraphQLString},
        finished: { type: GraphQLString}
      

    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        match: {
            type: MatchType,
            args: { name: { type: GraphQLString } },
            resolve(parentValue, args) {

              //  return _.find(teams, { id: args.id });
              console.log("bora");
            console.log(  args.name );
            console.log("bora");
              return axios.get(`http://localhost:3000/matches/`+ args.name )
                .then(resp => resp.data);


            }

        }

    }


});

module.exports = new GraphQLSchema({
    query: RootQuery

});


