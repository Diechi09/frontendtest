import React from 'react';
import { TeamCard } from '../components/TeamCard';
import { teamMembers } from '../data/teamMembers';

const TeamPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Our Team</h1>
        <p className="mt-4 text-lg text-gray-500">
          Meet the talented individuals behind our data management solution
        </p>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-3 lg:gap-8">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;