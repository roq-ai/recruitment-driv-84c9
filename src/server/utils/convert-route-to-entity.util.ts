const mapping: Record<string, string> = {
  applications: 'application',
  'job-postings': 'job_posting',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
