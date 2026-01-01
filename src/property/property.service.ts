import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertyService {
  findAll() {
    return 'This action returns all properties';
  }

  create() {
    return {
      message: 'This action adds a new property',
    };
  }

  update() {
    return {
      message: 'This action updates a property',
    };
  }

  findOne() {
    return {
      message: `This action returns a property`,
    };
  }
}
