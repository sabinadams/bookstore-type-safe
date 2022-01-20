import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service'

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getData() {
    return this.prisma.book.findMany()
  }
}