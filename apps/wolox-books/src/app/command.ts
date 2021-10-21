import { User } from '../entity/User';

export const getUserById = async (id: any) => {
  const user = await User.findOne({ where: { id: id } });
  return user;
};

export const getUsers = async () => {
  const users = await User.find();
  return users;
};

export const createUser = async (userData) => {
  const { firstName, lastName, email, password } = userData;
  const user = User.create({
    firstName,
    lastName,
    email,
    password,
  });
  await user.save();
  return user;
};

export const updateUser = async (userData) => {
  const { id } = userData;
  const user = User.update(
    { id },
    {
      ...userData,
    }
  );
  return user;
};

export const deleteUser = async (id) => {
  const user = User.delete({ id });
  return user;
};
