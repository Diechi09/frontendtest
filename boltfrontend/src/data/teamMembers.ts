import { TeamMember } from '../types/team';

export const teamMembers: TeamMember[] = [
  {
    name: 'Sarah Johnson',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    bio: 'Full-stack developer with 8 years of experience in database management and system architecture.',
    social: {
      github: '#',
      linkedin: '#',
      email: 'sarah@example.com'
    }
  },
  {
    name: 'Michael Chen',
    role: 'Database Architect',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    bio: 'Specialized in database optimization and query performance. 6 years of experience with large-scale systems.',
    social: {
      github: '#',
      linkedin: '#',
      email: 'michael@example.com'
    }
  },
  {
    name: 'Emily Rodriguez',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
    bio: 'Creative designer focused on creating intuitive and beautiful user interfaces. 5 years of experience in web design.',
    social: {
      github: '#',
      linkedin: '#',
      email: 'emily@example.com'
    }
  }
];