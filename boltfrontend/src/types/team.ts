export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
}