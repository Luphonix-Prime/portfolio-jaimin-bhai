import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import GalleryModal from "@/components/gallery-modal";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { CardStack } from "@/components/ui/card-stack";
import type { GalleryItem } from "@shared/schema";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    title: string;
    description: string;
  } | null>(null);

  const { data: galleryItems = [], isLoading } = useQuery<GalleryItem[]>({
    queryKey: ["/api/gallery"],
  });

  const filters = [
    { key: "all", label: "All" },
    { key: "workshops", label: "Workshops" },
    { key: "conferences", label: "Conferences" },
    { key: "training", label: "Training" },
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  const handleImageClick = (item: GalleryItem) => {
    setSelectedImage({
      url: item.imageUrl,
      title: item.title,
      description: item.description,
    });
  };

  const cards = [
    {
      id: 0,
      name: "Manu Arora",
      designation: "Senior Software Engineer",
      content: (
        <p>
          These workshops were incredibly insightful. The hands-on approach and real-world examples made complex concepts easy to understand.
        </p>
      ),
    },
    {
      id: 1,
      name: "Elon Musk",
      designation: "CEO, Tesla",
      content: (
        <p>
          The training sessions provided valuable insights into cutting-edge technologies. Highly recommend for anyone looking to upskill.
        </p>
      ),
    },
    {
      id: 2,
      name: "Tyler Durden",
      designation: "Manager, Project Mayhem",
      content: (
        <p>
          Outstanding conference experience! The networking opportunities and expert speakers made it worthwhile. Looking forward to the next one.
        </p>
      ),
    },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="glass-effect w-12 h-12 rounded-full mx-auto mb-4 animate-pulse"></div>
          <p className="text-white/70">Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">Gallery</h1>
            <p className="text-xl text-white/70 mb-8 fade-in">
              Workshops, conferences, and training sessions
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in">
              {filters.map((filter) => (
                <Button
                  key={filter.key}
                  variant={activeFilter === filter.key ? "default" : "outline"}
                  className={`glass-effect glow-button transition-all duration-300 ${
                    activeFilter === filter.key
                      ? "bg-white/10 text-white"
                      : "border-white/30 text-white/70 hover:bg-white/5"
                  }`}
                  onClick={() => setActiveFilter(filter.key)}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Masonry Gallery Grid with 3D Cards */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6">
            {filteredItems.map((item) => (
              <CardContainer key={item.id} className="inter-var mb-6" containerClassName="py-0">
                <CardBody className="glass-effect rounded-lg overflow-hidden cursor-pointer h-auto w-full">
                  <CardItem
                    translateZ="50"
                    className="w-full"
                    onClick={() => handleImageClick(item)}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-auto rounded-t-lg"
                      loading="lazy"
                    />
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    className="p-4 w-full"
                    onClick={() => handleImageClick(item)}
                  >
                    <CardItem
                      translateZ="80"
                      className="font-semibold mb-2 text-white"
                      as="h4"
                    >
                      {item.title}
                    </CardItem>
                    <CardItem
                      translateZ="70"
                      className="text-sm text-white/60"
                      as="p"
                    >
                      {item.description}
                    </CardItem>
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/70">No items found for the selected filter.</p>
            </div>
          )}

          {/* Testimonials Card Stack */}
          <div className="flex justify-center mt-20 fade-in">
            <CardStack items={cards} />
          </div>
        </div>
      </section>

      <GalleryModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        image={selectedImage}
      />
    </div>
  );
}
