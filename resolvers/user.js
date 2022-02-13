export const resolvers = {
  User: {
    firstname: (parent) => {
      return parent.email[0];
    },
  },

  Query: {
    hello: () => {
      const data = {
        email: "abc@gmail.com",
      };
      return data;
    },
  },
  Mutation: {
    addUser: async (parent, args, { userModel }, info) => {
      const user = await userModel.find({ email: args.data.email });
      if (user && user.length > 0) {
        throw new Error("User already exist");
      }
      const userCreate = new userModel({
        email: args.data.email,
        password: args.data.password,
      });
      const addedUser = await userCreate.save();
      return true;
    },
  },
};
