export class CreateJobDto {
  title: string;
  company: string;
  location: string;
  deadlineDate: Date;
  description: string;
}

export class UpdateJobDto {
  title?: string;
  company?: string;
  location?: string;
  deadlineDate?: Date;
  description?: string;
  isActive?: boolean;
}
