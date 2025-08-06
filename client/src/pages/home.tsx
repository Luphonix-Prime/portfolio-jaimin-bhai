import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/glass-card";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { WorldMap } from "@/components/ui/world-map";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { FeaturesSectionDemo } from "@/components/ui/features-section";

export default function Home() {
  // Cybersecurity threat intelligence connection points
  const connectionDots = [
    {
      start: { lat: 40.7128, lng: -74.0060 }, // New York
      end: { lat: 51.5074, lng: -0.1278 },   // London
    },
    {
      start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
      end: { lat: 35.6762, lng: 139.6503 },   // Tokyo
    },
    {
      start: { lat: 52.5200, lng: 13.4050 },  // Berlin
      end: { lat: -33.8688, lng: 151.2093 },  // Sydney
    },
    {
      start: { lat: 55.7558, lng: 37.6176 },  // Moscow
      end: { lat: 1.3521, lng: 103.8198 },    // Singapore
    },
    {
      start: { lat: 28.6139, lng: 77.2090 },  // Delhi
      end: { lat: -23.5505, lng: -46.6333 },  // São Paulo
    },
  ];

  const stats = [
    { number: "8+", label: "Years Experience" },
    { number: "500+", label: "Clients Served" },
    { number: "150+", label: "Training Sessions" },
  ];

  const cybersecurityImages = [
    // Security Technology
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",

    // Digital Security & Hacking
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",

    // Network & Infrastructure
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",

    // Data Protection & Privacy
    "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1592659762303-90081d34b277?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",

    // Cyber Warfare & Threats
    "https://images.unsplash.com/photo-1590212151175-e58edd96185b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",

    // Security Operations Center
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",

    // Digital Forensics & Analysis
    "https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CISO, TechCorp Industries",
      content: "Jaimin's expertise in cybersecurity is unmatched. His penetration testing revealed critical vulnerabilities we never knew existed. Highly recommend his services.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "IT Director, FinanceFirst",
      content: "The security training provided by Jaimin transformed our team's approach to cybersecurity. Professional, knowledgeable, and engaging throughout.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Security Manager, DataSecure",
      content: "Outstanding consultant who helped us achieve compliance and significantly improve our security posture. Results exceeded expectations.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen scroll-smooth gpu-accelerated">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 gpu-accelerated">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 px-6 max-w-7xl mx-auto w-full">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6 fade-in">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
                Jaimin<br />
                <span className="text-white/80">Somani</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/70 mb-8">
                Cybersecurity Professional & Trainer
              </p>
              <p className="text-lg text-white/60 mb-8 max-w-lg">
                Protecting organizations worldwide with advanced cybersecurity solutions, 
                threat intelligence, and comprehensive security training programs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 fade-in">
              <Link href="/gallery">
                <div className="relative">
                  <Button className="glass-effect glow-button bg-white/5 border border-white/20 hover:bg-white/10 text-white px-8 py-3">
                    View Portfolio
                  </Button>
                  <GlowingEffect
                    disabled={false}
                    proximity={100}
                    spread={30}
                    movementDuration={1.5}
                    blur={2}
                    variant="default"
                  />
                </div>
              </Link>
              <div className="relative">
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/5 glow-button px-8 py-3"
                >
                  Download CV
                </Button>
                <GlowingEffect
                  disabled={false}
                  proximity={100}
                  spread={25}
                  movementDuration={1.8}
                  blur={1}
                  variant="white"
                />
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 fade-in">
              {stats.map((stat, index) => (
                <div key={index} className="relative">
                  <GlassCard className="p-4 text-center">
                    <div className="text-2xl md:text-3xl font-bold mb-1">{stat.number}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </GlassCard>
                  <GlowingEffect
                    disabled={false}
                    proximity={80}
                    spread={20}
                    movementDuration={2}
                    blur={1}
                    variant="default"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Cyber Threat Map */}
          <div className="flex justify-center w-full">
            <div className="w-full max-w-4xl">
              <WorldMap 
                dots={connectionDots}
                lineColor="#00ff88"
              />
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 grid-pattern"></div>
      </section>

      {/* 3D Marquee Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900/50 gpu-accelerated">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
              Cybersecurity<br />
              <span className="text-white/80">Excellence</span>
            </h2>
            <p className="text-xl text-white/70 fade-in">
              Protecting digital assets through advanced security methodologies
            </p>
          </div>

          <div className="relative">
            <ThreeDMarquee 
              images={cybersecurityImages} 
              className="fade-in"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-gray-900/50 to-black gpu-accelerated">
        <FeaturesSectionDemo />
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black gpu-accelerated">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h2>
            <p className="text-xl text-white/70">What industry leaders say about my work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative">
                <GlassCard className="p-8 fade-in">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                      <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/80 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </GlassCard>
                <GlowingEffect
                  disabled={false}
                  proximity={120}
                  spread={25}
                  movementDuration={2.5}
                  blur={2}
                  variant="default"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}