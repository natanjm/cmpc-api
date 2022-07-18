import { MiddlewareConsumer, Module } from '@nestjs/common';
import { NurseriesService } from './nurseries.service';
import { NurseriesController } from './nurseries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nursery } from './entities/nursery.entity';
import { EnsureAuthenticatedMiddleware } from '../users/middlewares/ensure-authenticated.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([Nursery])],
  exports: [TypeOrmModule],
  controllers: [NurseriesController],
  providers: [NurseriesService],
})
export class ProjectsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(EnsureAuthenticatedMiddleware).forRoutes(NurseriesController);
  }
}
