"use strict";

var express = require('express');

var _require = require('express-graphql'),
    graphqlHTTP = _require.graphqlHTTP; // const cors = require('cors')({ origin: true })


var cors = require('cors');

var _require2 = require('graphql'),
    GraphQLSchema = _require2.GraphQLSchema,
    GraphQLObjectType = _require2.GraphQLObjectType,
    GraphQLString = _require2.GraphQLString,
    GraphQLList = _require2.GraphQLList,
    GraphQLInt = _require2.GraphQLInt,
    GraphQLNonNull = _require2.GraphQLNonNull;

var app = express();
var authors = [{
  id: 1,
  name: 'J. K. Rowling'
}, {
  id: 2,
  name: 'J. R. R. Tolkien'
}, {
  id: 3,
  name: 'Brent Weeks'
}];
var books = [{
  id: 1,
  name: 'Harry Potter and the Chamber of Secrets',
  authorId: 1
}, {
  id: 2,
  name: 'Harry Potter and the Prisoner of Azkaban',
  authorId: 1
}, {
  id: 3,
  name: 'Harry Potter and the Goblet of Fire',
  authorId: 1
}, {
  id: 4,
  name: 'The Fellowship of the Ring',
  authorId: 2
}, {
  id: 5,
  name: 'The Two Towers',
  authorId: 2
}, {
  id: 6,
  name: 'The Return of the King',
  authorId: 2
}, {
  id: 7,
  name: 'The Way of Shadows',
  authorId: 3
}, {
  id: 8,
  name: 'Beyond the Shadows',
  authorId: 3
}];
var BookType = new GraphQLObjectType({
  name: 'Book',
  description: 'This represents a book written by an author',
  fields: function fields() {
    return {
      id: {
        type: GraphQLNonNull(GraphQLInt)
      },
      name: {
        type: GraphQLNonNull(GraphQLString)
      },
      authorId: {
        type: GraphQLNonNull(GraphQLInt)
      },
      author: {
        type: AuthorType,
        resolve: function resolve(book) {
          return authors.find(function (author) {
            return author.id === book.authorId;
          });
        }
      }
    };
  }
});
var AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'This represents a author of a book',
  fields: function fields() {
    return {
      id: {
        type: GraphQLNonNull(GraphQLInt)
      },
      name: {
        type: GraphQLNonNull(GraphQLString)
      },
      books: {
        type: GraphQLList(BookType),
        resolve: function resolve(author) {
          return books.filter(function (book) {
            return book.authorId === author.id;
          });
        }
      }
    };
  }
});
var RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: function fields() {
    return {
      books: {
        type: new GraphQLList(BookType),
        description: 'List of All Books',
        resolve: function resolve() {
          return books;
        }
      },
      book: {
        type: BookType,
        description: 'A Single Book',
        args: {
          id: {
            type: GraphQLInt
          }
        },
        resolve: function resolve(parent, args) {
          return books.find(function (book) {
            return book.id === args.id;
          });
        }
      },
      authors: {
        type: new GraphQLList(AuthorType),
        description: 'List of All Authors',
        resolve: function resolve() {
          return authors;
        }
      },
      author: {
        type: AuthorType,
        description: 'A Single Author',
        args: {
          id: {
            type: GraphQLInt
          }
        },
        resolve: function resolve(parent, args) {
          return authors.find(function (author) {
            return author.id === args.id;
          });
        }
      }
    };
  }
});
var RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: function fields() {
    return {
      addBook: {
        type: BookType,
        description: 'Add a book',
        args: {
          name: {
            type: GraphQLNonNull(GraphQLString)
          },
          authorId: {
            type: GraphQLNonNull(GraphQLInt)
          }
        },
        resolve: function resolve(parent, args) {
          var book = {
            id: books.length + 1,
            name: args.name,
            authorId: args.authorId
          };
          books.push(book);
          return book;
        }
      },
      addAuthor: {
        type: AuthorType,
        description: 'Add an author',
        args: {
          name: {
            type: GraphQLNonNull(GraphQLString)
          }
        },
        resolve: function resolve(parent, args) {
          var author = {
            id: authors.length + 1,
            name: args.name
          };
          authors.push(author);
          return author;
        }
      }
    };
  }
});
var schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
});
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));
app.listen(5000., function () {
  return console.log('Server Running');
});