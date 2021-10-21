import {
  createUser,
  getUserById,
  getUsers,
  updateUser,
  deleteUser,
} from './command';

// Provide resolver functions for your schema fields
export const resolvers = {
  Query: {
    getUser: async (_, args) => {
      const { id } = args;
      return await getUserById(id);
    },
    getUsers: async () => {
      return await getUsers();
    },
  },
  Mutation: {
    addUser: async (_, args: any) => {
      try {
        await createUser(args);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    updateUser: async (_, args: any) => {
      try {
        await updateUser(args);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    deleteUser: async (_, args: any) => {
      const { id } = args;
      try {
        await deleteUser(id);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
