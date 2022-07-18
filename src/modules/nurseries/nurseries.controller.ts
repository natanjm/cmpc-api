import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NurseriesService } from './nurseries.service';
import { CreateNurseryDto } from './dto/create-nursery.dto';
import { UpdateNurseryDto } from './dto/update-nursery.dto';

@Controller('nurseries')
export class NurseriesController {
  constructor(private readonly nurseriesService: NurseriesService) {}

  @Post()
  create(@Body() createNurseryDto: CreateNurseryDto) {
    return this.nurseriesService.create(createNurseryDto);
  }

  @Get()
  findAll() {
    return this.nurseriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nurseriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNurseryDto: UpdateNurseryDto) {
    return this.nurseriesService.update(+id, updateNurseryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nurseriesService.remove(+id);
  }
}
