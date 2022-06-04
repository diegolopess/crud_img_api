import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './cliente/cliente.module';
import entities from './cliente';

@Module({
  imports: [
    ClienteModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'lopes123321',
      database: 'crud_api',
      entities,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
