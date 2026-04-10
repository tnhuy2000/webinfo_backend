import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Navigation, NavigationDocument } from './schemas/navigation.schema';
import {
  CreateNavigationInput,
  UpdateNavigationInput,
} from '../../graphql.schema';

@Injectable()
export class NavigationService {
  constructor(
    @InjectModel(Navigation.name)
    private readonly navigationModel: Model<NavigationDocument>,
  ) {}

  async create(input: CreateNavigationInput): Promise<Navigation> {
    const navigation = new this.navigationModel(input);
    return navigation.save();
  }

  async findAll(isActive?: boolean): Promise<Navigation[]> {
    const filter = isActive !== undefined ? { isActive } : {};
    return this.navigationModel.find(filter).sort({ order: 1 }).exec();
  }

  async findById(id: string): Promise<Navigation> {
    const navigation = await this.navigationModel.findById(id).exec();
    if (!navigation) {
      throw new NotFoundException(`Navigation with ID ${id} not found`);
    }
    return navigation;
  }

  async update(id: string, input: UpdateNavigationInput): Promise<Navigation> {
    const navigation = await this.navigationModel
      .findByIdAndUpdate(id, input, { new: true })
      .exec();
    if (!navigation) {
      throw new NotFoundException(`Navigation with ID ${id} not found`);
    }
    return navigation;
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.navigationModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Navigation with ID ${id} not found`);
    }
    return true;
  }
}
