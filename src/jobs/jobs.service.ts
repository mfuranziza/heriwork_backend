import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateJobDto, UpdateJobDto } from './dto/create-job.dto';
import { Job, JobDocument } from './entities/job.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectModel(Job.name) private readonly jobModel: Model<JobDocument>,
  ) {}

  async create(createJobDto: CreateJobDto): Promise<Job> {
    const newJob = new this.jobModel(createJobDto);
    return newJob.save();
  }

  async findAll(): Promise<Job[]> {
    return this.jobModel.find().exec();
  }

  async findOne(id: string): Promise<Job> {
    const job = await this.jobModel.findById(id).exec();
    if (!job) {
      throw new NotFoundException(`Job with ID "${id}" not found`);
    }
    return job;
  }

  async update(id: string, updateJobDto: UpdateJobDto): Promise<Job> {
    const updatedJob = await this.jobModel
      .findByIdAndUpdate(id, updateJobDto, {
        new: true,
        runValidators: true,
      })
      .exec();

    if (!updatedJob) {
      throw new NotFoundException(`Job with ID "${id}" not found`);
    }
    return updatedJob;
  }

  async delete(id: string): Promise<void> {
    const result = await this.jobModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Job with ID "${id}" not found`);
    }
  }
}
