export interface ProjectItem {
  id: string;
  banner: string | null;
  description: string | null;
  status: string;
  progress: number;
  countStudents: number;
  level: {
    id: string;
    name: string;
  };
  manager: {
    id: string;
    name: string;
    email: string;
    avatar: string | null;
  };
  department: {
    id: string;
    name: string;
  };
}

export interface StatisticalProjectTable {
  base: string;
  projectCompleted: number;
  projectHappening: number;
  projectUpcoming: number;
  totalStudents: number;
  totalTeachers: number;
  time: string;
  totalProject: number;
}
