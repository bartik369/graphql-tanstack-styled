import { ApolloServer, gql } from 'apollo-server';

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

// Начальные данные
const todos: Todo[] = [
  { id: '1', title: 'Купить хлеб', completed: false },
  { id: '2', title: 'Выучить GraphQL', completed: false },
  { id: '3', title: 'Выучить Styles component', completed: false },
];

// GraphQL схема
const typeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    completed: Boolean!
  }

  type Query {
    todos: [Todo!]!
  }

  type Mutation {
    toggleTodo(id: ID!): Todo
    deleteTodo(id: ID!): Todo
    addTodo(title: String!): Todo
  }
`;


const resolvers = {
  Query: {
    todos: (): Todo[] => todos,
  },
  Mutation: {
    toggleTodo: (_: unknown, { id }: { id: string }): Todo | undefined => {
      const todo = todos.find((t) => t.id === id);
      if (todo) todo.completed = !todo.completed;
      return todo;
    },
    addTodo: (_: unknown, { title }: { title: string }): Todo => {
      const newTodo: Todo = {
        id: Date.now().toString(),
        title,
        completed: false,
      };
      todos.push(newTodo);
      return newTodo;
    },
    deleteTodo:  (_: unknown, { id }: { id: string }): Todo => {
      const index = todos.findIndex((item) => item.id === id);
      if (index === -1) throw new Error('Todo not found');
      const removed = todos.splice(index, 1);
      return removed[0];
    }
  },
};

// Создание и запуск сервера
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

// npx ts-node src/index.ts