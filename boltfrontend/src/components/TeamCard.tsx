import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { TeamMember } from '../types/team';

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="space-y-4">
      <div className="aspect-w-3 aspect-h-3">
        <img
          className="rounded-lg object-cover shadow-lg w-48 h-48 mx-auto"
          src={member.image}
          alt={member.name}
        />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-medium text-gray-900">{member.name}</h3>
        <p className="text-base font-medium text-blue-600">{member.role}</p>
        <p className="mt-3 text-base text-gray-500">{member.bio}</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href={member.social.github} className="text-gray-400 hover:text-gray-500">
            <Github className="h-5 w-5" />
          </a>
          <a href={member.social.linkedin} className="text-gray-400 hover:text-gray-500">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-gray-500">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};