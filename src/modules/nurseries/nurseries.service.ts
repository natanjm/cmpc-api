import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNurseryDto } from './dto/create-nursery.dto';
import { UpdateNurseryDto } from './dto/update-nursery.dto';
import { Nursery } from './entities/nursery.entity';

@Injectable()
export class NurseriesService {
  constructor(
    @InjectRepository(Nursery)
    private nurseryRepository: Repository<Nursery>
  ){}

  async create(createNurseryDto: CreateNurseryDto) {
    const nursery = this.nurseryRepository.create(createNurseryDto);
    await this.nurseryRepository.save(nursery)
  }

  async findAll() {
    const allNurseries = await this.nurseryRepository.find({order: {id: 'DESC'}});

    return allNurseries
  }

  async findOne(id: number): Promise<Nursery> {
    const nursery = await this.nurseryRepository.findOne({where: { id }});
    return nursery
  }

  async update(id: number, updateNurseryDto: UpdateNurseryDto) {
    await this.nurseryRepository.update(id, updateNurseryDto)
  }

  async remove(id: number) {
    this.nurseryRepository.delete(id)
  }
}
