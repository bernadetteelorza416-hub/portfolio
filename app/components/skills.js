
import portfolioData from "../data";

import {
  FaJava,
  FaPhp,
  FaPython,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGlobe,
  FaLayerGroup,
  FaNetworkWired,
  FaRoute,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaSitemap,
  FaWrench,
} from "react-icons/fa";

import {
  SiDjango,
  SiTailwindcss,
  SiFlutter,
  SiCisco,
  SiWireshark,
  SiMysql,
  SiFirebase,
  SiBootstrap,
} from "react-icons/si";

// Icon mapping
const skillIcons = {
  Java: FaJava,
  PHP: FaPhp,
  Python: FaPython,
  JavaScript: FaJs,

  Django: SiDjango,
  "Node.js": FaNodeJs,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  "Tailwind CSS": SiTailwindcss,
  Flutter: SiFlutter,

  "OSI Model": FaLayerGroup,
  "IPv4/IPv6": FaGlobe,
  "TCP/IP": FaNetworkWired,
  Subnetting: FaSitemap,
  "Cisco Packet Tracer": SiCisco,
  Traceroute: FaRoute,
  Wireshark: SiWireshark,
  Troubleshooting: FaWrench,

  Git: FaGitAlt,
  GitHub: FaGithub,
  "VS Code": FaCode,
  MySQL: SiMysql,
  Firebase: SiFirebase,
  Bootstrap: SiBootstrap,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#3B2523] dark:bg-[#1E1413] text-[#FFF9F3] py-28 px-6 md:px-12 scroll-mt-20 transition-colors duration-300"
    >
      <div className="max-w-[1400px] mx-auto">

        {/* Section Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">

          <div className="lg:col-span-7">
           

            <h2 className="text-6xl md:text-8xl font-bold tracking-[-0.05em] leading-[0.95]">
              Things I
              <span className="block font-serif italic font-normal text-[#D6B9AE] ml-10 md:ml-24 mt-3">
                work with.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-[#D8C2B6] text-base md:text-lg leading-8 max-w-md">
             A collection of design tools, creative technologies, and UI/UX skills I have explored and developed throughout my journey in creating intuitive, engaging, and user-friendly digital experiences.
            </p>

         
          </div>
        </div>

        {/* Skills List */}
        <div className="border-t border-[#70534B]">

          {portfolioData.skills.map((skill, index) => (
            <div
              key={skill.category}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 border-b border-[#70534B] hover:bg-[#493431]/30 transition-colors duration-300"
            >

              {/* Category Number */}
             

              {/* Category Name */}
              <div className="md:col-span-4">
                

                <h3 className="text-2xl md:text-3xl font-semibold group-hover:text-[#D6B9AE] transition-colors">
                  {skill.category}
                </h3>
              </div>

              {/* Skill Items */}
              <div className="md:col-span-7">
                <div className="flex flex-wrap gap-3">

                  {skill.items.map((item) => {
                    const Icon = skillIcons[item] || FaCode;

                    return (
                      <div
                        key={item}
                        className="flex items-center gap-2.5 border border-[#70534B] bg-[#493431]/40 px-4 py-3 hover:bg-[#702F3D] hover:border-[#A66B76] transition-all duration-300"
                      >
                        <Icon className="text-lg text-[#D6B9AE]" />

                        <span className="text-sm text-[#F3E8DC]">
                          {item}
                        </span>
                      </div>
                    );
                  })}

                </div>

               
              </div>

            </div>
          ))}

        </div>

        {/* Bottom Statement */}
        <div className="mt-16 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">

          <p className="font-serif italic text-xl md:text-2xl text-[#D6B9AE]">
            Always curious. Always improving.
          </p>

         

        </div>

      </div>
    </section>
  );
}
