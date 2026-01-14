import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ShiftsModule } from './shifts/shifts.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: "12345678",
      database: "nest_app",
      autoLoadModels: true,
      synchronize: true,
    }),
    AuthModule, UsersModule, ShiftsModule, AssignmentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule { }
