import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service, ServiceDocument } from './entities/service.entity';
import { CreateServiceInput, UpdateServiceInput } from '../../graphql.schema';

@Injectable()
export class ServicesService {
  constructor(
    @InjectModel(Service.name)
    private readonly serviceModel: Model<ServiceDocument>,
  ) {}

  async create(createServiceInput: CreateServiceInput): Promise<Service> {
    const service = new this.serviceModel(createServiceInput);
    return service.save();
  }

  async findAll(isActive?: boolean): Promise<Service[]> {
    const filter = isActive !== undefined ? { isActive } : {};
    return this.serviceModel.find(filter).exec();
  }

  async findOne(id: string): Promise<Service> {
    const service = await this.serviceModel.findById(id).exec();
    if (!service) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
    return service;
  }

  async update(
    id: string,
    updateServiceInput: UpdateServiceInput,
  ): Promise<Service> {
    const service = await this.serviceModel
      .findByIdAndUpdate(id, updateServiceInput, { new: true })
      .exec();
    if (!service) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
    return service;
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.serviceModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
    return true;
  }
}
