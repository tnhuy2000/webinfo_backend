import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NavigationService } from './navigation.service';
import { NavigationResolver } from './navigation.resolver';
import { Navigation, NavigationSchema } from './schemas/navigation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Navigation.name, schema: NavigationSchema },
    ]),
  ],
  providers: [NavigationResolver, NavigationService],
  exports: [NavigationService],
})
export class NavigationModule {}
