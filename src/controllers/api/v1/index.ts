import { Controller, Get } from '@nestjs/common';

@Controller('/api/v1')
export class APIv1 {
  @Get()
  async index() {
    return { message: 'Hello, World!', timestamp: Date.now() };
  }
}
