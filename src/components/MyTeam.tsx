import Image from "next/image";
import TeamMemberCard from "./member";


interface TeamMemberCard{
    name:string;
    designation:string;
    bio:string;
    image:string;
}

const teamMembers:TeamMemberCard[] = [
    {
      name: "Sophia Anderson",
      designation: "Software Engineer",
      bio: "Passionate about designing scalable and efficient software applications.",
      image: "/team4.jpg",
    },
    {
      name: "Ethan Carter",
      designation: "Cloud Architect",
      bio: "Specializes in building secure and reliable cloud solutions for modern businesses.",
      image: "/team1.jpg",
    },
    {
      name: "Olivia Bennett",
      designation: "UI/UX Designer",
      bio: "Focused on crafting intuitive and visually engaging user experiences.",
      image: "/team3.jpg",
    },
    {
      name: "Liam Parker",
      designation: "DevOps Engineer",
      bio: "Expert in optimizing development workflows and automating infrastructure.",
      image: "/team2.jpg",
    },
  ];

export default function Team() {
  
    return (
      <section className="pb-10 px-4 md:px-8 lg:px-8 mx-auto max-w-screen-2xl">
        {/* Section Heading */}
        <h5 className="text-lg lg:text-3xl font-semibold text-cyan-600 dark:text-cyan-500 text-center md:text-left flex gap-1 justify-center items-center">
          <Image src="/logo.png" alt="logo" width="40" height="40" className="object-cover" /> My Team
        </h5>
        <h2 className="text-2xl text-center sm:text-3xl md:text-2xl lg:text-4xl font-bold dark:text-[#f2f2f4] text-black mt-4 mx-auto max-w-screen-2xl">
          Meet With My Expert Team
        </h2>
  
        {/* Team Member Cards */}
        <div className="flex flex-wrap lg:flex-nowrap gap-8 mt-8">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              designation={member.designation}
              bio={member.bio}
              image={member.image}
            />
          ))}
        </div>
      </section>
    );
  }