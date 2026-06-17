import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'Gaurav Saluja',
    role: 'CO-Founder',
    // Replace with your actual image paths
    image: '/gaurav.jpeg', 
  },
  {
    id: 2,
    name: 'Rajat Goyal',
    role: 'CO-Founder',
    image: '/rajat.jpeg',
  },
  {
    id: 3,
    name: 'Ravi Saraswat',
    role: 'CO-Founder',
    image: '/ravi.jpeg',
  },
  {
    id: 4,
    name: 'Akhliesh Jain',
    role: 'CO-Founder',
    image: '/akhilesh.jpeg',
  },
  {
    id: 5,
    name: 'Pahuldeep Singh',
    role: 'Project Manager',
    image: '/pahuldeep.jpeg',
  },
  {
    id: 6,
    name: 'Tanveer Singh',
    role: 'Corporate and Alliance Manager',
    image: '/tanveer.png',
  },
  
  {
    id: 7,
    name: 'Rohit Devani',
    role: 'Digital Marketing Manager',
    image: '/rohit.png',
  },
   
  {
    id: 8,
    name: 'Puneet Sharma',
    role: 'Full Stack Developer',
    image: '/puneet.png',
  },
];

export default function TeamSection() {
  return (
    <section className="max-w-[1600px] mx-auto px-4 py-20 bg-white font-sans">
      {/* Header Section */}
      <div className="text-left sm:text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-3">
          Meet our team
        </h2>
        <p className="text-gray-800 font-medium">
          Experienced minds. Structured solutions. Sustainable results.
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {teamMembers.map((member) => (
          <div 
            key={member.id} 
            // 'group' class is essential here to trigger hover states on children
            className="group relative rounded-[0.5rem] overflow-hidden w-340px sm:w-[300px] h-[400px] cursor-pointer shadow-lg"
          >
            {/* Background Image */}
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            {/* Default state is dark gradient, hover state is lime green gradient */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-800 ease-in-out group-hover:from-lime-500/90 group-hover:via-lime-500/40 group-hover:to-transparent" />

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 text-white transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-gray-300 transition-colors duration-500 group-hover:text-lime-50">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}