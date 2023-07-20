import axios from 'axios';
import queryString from 'query-string';
import { JobPostingInterface, JobPostingGetQueryInterface } from 'interfaces/job-posting';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getJobPostings = async (
  query?: JobPostingGetQueryInterface,
): Promise<PaginatedInterface<JobPostingInterface>> => {
  const response = await axios.get('/api/job-postings', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createJobPosting = async (jobPosting: JobPostingInterface) => {
  const response = await axios.post('/api/job-postings', jobPosting);
  return response.data;
};

export const updateJobPostingById = async (id: string, jobPosting: JobPostingInterface) => {
  const response = await axios.put(`/api/job-postings/${id}`, jobPosting);
  return response.data;
};

export const getJobPostingById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/job-postings/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteJobPostingById = async (id: string) => {
  const response = await axios.delete(`/api/job-postings/${id}`);
  return response.data;
};
