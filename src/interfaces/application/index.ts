import { JobPostingInterface } from 'interfaces/job-posting';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ApplicationInterface {
  id?: string;
  status: string;
  job_posting_id?: string;
  job_applicant_id?: string;
  created_at?: any;
  updated_at?: any;

  job_posting?: JobPostingInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  job_posting_id?: string;
  job_applicant_id?: string;
}
