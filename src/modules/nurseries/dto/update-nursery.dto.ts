import { PartialType } from '@nestjs/mapped-types';
import { CreateNurseryDto } from './create-nursery.dto';

export class UpdateNurseryDto extends PartialType(CreateNurseryDto) {}
