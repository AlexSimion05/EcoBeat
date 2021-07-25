import {GraphQLSchema,GraphQLObjectType}from 'graphql'; 
import { CREATE_CARD } from './Mutations/Card';
// import { GET_USER } from './Queries/User';
// import { GET_TODO } from './Queries/Todo';
import { CREATE_USER } from './Mutations/User';
import { GET_ALL_CARDS } from './Queries/Card';
import { GET_ALL_USERS } from './Queries/User';

const RootQuery= new GraphQLObjectType({
    name:'RootQuery',
    fields:{
        // getUser:GET_USER, //getUser(id:"1"){
        getAllUsers:GET_ALL_USERS,
        // getTodo:GET_TODO
        getAllCards:GET_ALL_CARDS
    }
});



const Mutation= new GraphQLObjectType({
    name:'Mutation',
    fields:{
        createUser:CREATE_USER,
        createCard:CREATE_CARD
    }
});

export const schema=new GraphQLSchema({
    query: RootQuery,
    mutation:Mutation
});