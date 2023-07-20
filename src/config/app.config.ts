interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Job Applicant'],
  tenantRoles: [
    'Business Owner',
    'HR Manager',
    'Recruiter',
    'System Administrator',
    'Engineering Manager',
    'Marketing Manager',
  ],
  tenantName: 'Organization',
  applicationName: 'Recruitment Drive',
  addOns: ['chat', 'file'],
};
