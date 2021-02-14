import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import dao from './entities/report.entity';
import { mock_reports } from './entities/report.mock';

@Injectable()
export class ReportService {
  constructor() {
    
  }
  async create(createReportDto: CreateReportDto) {
    const saved = await dao.create(createReportDto);
    return saved;
  }

  async findAll() {
    // const retrived = await dao.find();
    return mock_reports;
  }

  async findOne(id: string) {
    const retrived = await dao.findById(id);
    return retrived;
  }

  async update(id: string, updateReportDto: UpdateReportDto) {
    const updated = await dao.findByIdAndUpdate(id,updateReportDto);
    return updated;
  }

  async remove(id: string) {
    const removed  = await dao.findByIdAndDelete(id);
    return removed;
  }
}
