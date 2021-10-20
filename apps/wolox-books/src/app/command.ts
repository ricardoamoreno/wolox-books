import { User } from '../entity/User';
import { connection } from '../dbconfig/typeorm';

export const getUserById = async (id: any) => {
  await connection();
  const user = await User.findOne({ where: { id: id } });
  return user;
};
export const getUsers = async () => {
  await connection();
  const users = await User.find();
  return users;
};

export const createUser = async (userData) => {
  await connection();
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
  await connection();
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
  await connection();
  const user = User.delete({ id });
  return user;
};
