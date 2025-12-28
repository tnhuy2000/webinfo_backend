import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServicesService } from './services.service';
import { ServicesResolver } from './services.resolver';
import { Service, ServiceSchema } from './entities/service.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Service.name, schema: ServiceSchema }]),
  ],
  providers: [ServicesResolver, ServicesService],
  exports: [ServicesService],
})
export class ServicesModule {}
