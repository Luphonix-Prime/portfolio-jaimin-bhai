import { Tag, Shield, Users, Award } from "lucide-react";
import GlassCard from "@/components/glass-card";
import { Timeline } from "@/components/ui/timeline";

export default function About() {
  const timelineData = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-white/80 text-xs md:text-sm font-normal mb-8">
            Senior Security Consultant - Cyber Defense Solutions Inc.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm">
              ✅ Led penetration testing for 50+ Fortune 500 companies
            </div>
            <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm">
              ✅ Reduced security incidents by 85% through proactive threat hunting
            </div>
            <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm">
              ✅ Established incident response protocols for enterprise clients
            </div>
            <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm">
              ✅ Delivered advanced security training to 500+ professionals
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black p-4 border border-white/20 rounded-lg backdrop-blur-sm">
              <p className="text-white/60 text-sm">Enterprise Security Assessments</p>
              <p className="text-lg font-bold text-white">150+</p>
            </div>
            <div className="bg-black p-4 border border-white/20 rounded-lg backdrop-blur-sm">
              <p className="text-white/60 text-sm">Security Vulnerabilities Identified</p>
              <p className="text-lg font-bold text-white">2,500+</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020-2023",
      content: (
        <div>
          <p className="text-white/80 text-xs md:text-sm font-normal mb-8">
            Security Analyst - SecureNet Technologies
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm">
              ✅ Implemented comprehensive security protocols across multiple industries
            </div>
            <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm">
              ✅ Conducted vulnerability assessments for critical infrastructure
            </div>
            <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm">
              ✅ Developed automated threat detection systems
            </div>
            <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm">
              ✅ Achieved CISSP and CEH certifications
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black p-4 border border-white/20 rounded-lg backdrop-blur-sm">
              <p className="text-white/60 text-sm">Security Incidents Prevented</p>
              <p className="text-lg font-bold text-white">1,200+</p>
            </div>
            <div className="bg-black p-4 border border-white/20 rounded-lg backdrop-blur-sm">
              <p className="text-white/60 text-sm">Training Hours Delivered</p>
              <p className="text-lg font-bold text-white">800+</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2016-2020",
      content: (
        <div>
          <p className="text-white/80 text-xs md:text-sm font-normal mb-8">
            IT Security Specialist - TechGuard Solutions
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm">
              ✅ Managed firewall configurations for enterprise networks
            </div>
            <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm">
              ✅ Established incident response procedures and protocols
            </div>
            <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm">
              ✅ Implemented security monitoring and alerting systems
            </div>
            <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm">
              ✅ Conducted security awareness training programs
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black p-4 border border-white/20 rounded-lg backdrop-blur-sm">
              <p className="text-white/60 text-sm">Networks Secured</p>
              <p className="text-lg font-bold text-white">75+</p>
            </div>
            <div className="bg-black p-4 border border-white/20 rounded-lg backdrop-blur-sm">
              <p className="text-white/60 text-sm">Security Policies Created</p>
              <p className="text-lg font-bold text-white">200+</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const skills = [
    "Penetration Testing",
    "Incident Response",
    "Risk Assessment",
    "Security Auditing",
    "Malware Analysis",
    "Network Security",
    "Vulnerability Management",
    "Compliance & Governance",
  ];

  const certifications = [
    {
      name: "CISSP - Certified Information Systems Security Professional",
      validity: "Valid until 2025",
      icon: <Tag className="w-5 h-5 text-white/70" />,
    },
    {
      name: "CEH - Certified Ethical Hacker",
      validity: "Valid until 2024",
      icon: <Shield className="w-5 h-5 text-white/70" />,
    },
    {
      name: "CISM - Certified Information Security Manager",
      validity: "Valid until 2025",
      icon: <Award className="w-5 h-5 text-white/70" />,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">About Me</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto fade-in">
            Cybersecurity expert with extensive experience in protecting organizations
            from digital threats and training the next generation of security professionals.
          </p>
        </div>

        {/* Aceternity Timeline */}
        <div className="mb-20">
          <Timeline data={timelineData} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Skills */}
          <div className="slide-in">
            <h2 className="text-2xl font-bold mb-8">Core Skills</h2>

            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <GlassCard key={index} className="p-3 text-center text-sm">
                  {skill}
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="slide-in">
            <h2 className="text-2xl font-bold mb-8">Certifications</h2>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <GlassCard key={index} className="p-4 flex items-center">
                  <div className="mr-3">{cert.icon}</div>
                  <div>
                    <div className="font-medium">{cert.name}</div>
                    <div className="text-sm text-white/60">{cert.validity}</div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard className="p-8 text-center fade-in">
            <Users className="w-12 h-12 mx-auto mb-4 text-white/70" />
            <h3 className="text-xl font-semibold mb-2">Training Excellence</h3>
            <p className="text-white/70">
              Delivered comprehensive security training to over 2000+ professionals
              across various industries.
            </p>
          </GlassCard>

          <GlassCard className="p-8 text-center fade-in">
            <Shield className="w-12 h-12 mx-auto mb-4 text-white/70" />
            <h3 className="text-xl font-semibold mb-2">Security Leadership</h3>
            <p className="text-white/70">
              Led security initiatives that reduced incident response time by 70%
              and improved overall security posture.
            </p>
          </GlassCard>

          <GlassCard className="p-8 text-center fade-in">
            <Award className="w-12 h-12 mx-auto mb-4 text-white/70" />
            <h3 className="text-xl font-semibold mb-2">Industry Recognition</h3>
            <p className="text-white/70">
              Recognized as a thought leader in cybersecurity with speaking
              engagements at major industry conferences.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
