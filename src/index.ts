import { AppDataSource } from './data-source';
import { Product } from './entity/Product';
AppDataSource.initialize()
  .then(async () => {
    console.log('Inserting a new user into the database...');
    const product = new Product();
    product.name = 'Timber';
    product.id = 25;
    product.quantity = 25;
    await AppDataSource.manager.save(product);
    console.log('Saved a new user with id: ' + product.id);

    console.log('Loading users from the database...');
    const users = await AppDataSource.manager.find(Product);
    console.log('Loaded users: ', users);

    console.log(
      'Here you can setup and run express / fastify / any other framework.',
    );
  })
  .catch((error) => console.log(error));
