import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { NurseriesModule } from './modules/nurseries/nurseries.module';
import { SensorsModule } from './modules/sensors/sensors.module';

@Module({
  imports: [UsersModule, NurseriesModule, SensorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
