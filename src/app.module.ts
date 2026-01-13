import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ShiftsModule } from './shifts/shifts.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './roles/roles.guard';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),AuthModule, UsersModule, ShiftsModule, AssignmentsModule],
  controllers: [AppController],
  providers: [AppService,{
    provide: APP_GUARD,
    useValue: RolesGuard,
  }

  ],
})
export class AppModule {}
