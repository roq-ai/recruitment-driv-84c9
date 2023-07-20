import { ApplicationInterface } from 'interfaces/application';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface JobPostingInterface {
  id?: string;
  title: string;
  description: string;
  technical_requirements?: string;
  hr_manager_id?: string;
  engineering_manager_id?: string;
  marketing_manager_id?: string;
  created_at?: any;
  updated_at?: any;
  application?: ApplicationInterface[];
  user_job_posting_hr_manager_idTouser?: UserInterface;
  user_job_posting_engineering_manager_idTouser?: UserInterface;
  user_job_posting_marketing_manager_idTouser?: UserInterface;
  _count?: {
    application?: number;
  };
}

export interface JobPostingGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  technical_requirements?: string;
  hr_manager_id?: string;
  engineering_manager_id?: string;
  marketing_manager_id?: string;
}
