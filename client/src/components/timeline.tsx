import { ReactNode } from "react";

interface TimelineItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px timeline-line"></div>
      
      {items.map((item, index) => (
        <div key={index} className="relative flex items-start mb-8">
          <div className="absolute left-0 w-8 h-8 bg-white rounded-full border-4 border-black flex items-center justify-center">
            <div className="w-2 h-2 bg-black rounded-full"></div>
          </div>
          <div className="ml-12 glass-effect p-6 rounded-lg fade-in">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <span className="text-sm text-white/60">{item.period}</span>
            </div>
            <p className="text-white/70 mb-2">{item.company}</p>
            <p className="text-sm text-white/60">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
