import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('cliente')
export class ClienteController {
  @Post()
  public create(): any {
    return { data: 'CREATE' };
  }

  @Get(':id')
  public getOne(): any {
    return { data: 'GET ONE' };
  }

  @Get()
  public getAll(): any {
    return { data: 'GET ALL' };
  }

  @Put(':id')
  public update(): any {
    return { data: 'UPDATE' };
  }

  @Delete(':id')
  public delete(): any {
    return { data: 'DELETE' };
  }
}
