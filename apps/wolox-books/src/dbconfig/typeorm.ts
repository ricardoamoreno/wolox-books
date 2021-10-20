import { createConnection } from 'typeorm';
import { User } from '../entity/User';

export const connection = async () => {
  await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'postgres',
    entities: ['./entity/**/*.ts', User],
  });
};
