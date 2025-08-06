import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: {
    url: string;
    title: string;
    description: string;
  } | null;
}

export default function GalleryModal({ isOpen, onClose, image }: GalleryModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      
      // Optional: Scroll to top of page when modal opens
      // window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Restore body scroll when modal closes
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!image) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] max-w-5xl max-h-[95vh] bg-black/98 border-cyan-500/20 backdrop-blur-xl p-0 overflow-hidden z-50">
        <DialogClose asChild>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 text-cyan-400 hover:text-white hover:bg-cyan-500/20 z-20 rounded-full border border-cyan-500/30"
          >
            <X size={20} />
          </Button>
        </DialogClose>
        
        <div className="flex flex-col h-full">
          <div className="flex-1 flex items-center justify-center p-4">
            <img
              src={image.url}
              alt={image.title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl shadow-cyan-500/20"
            />
          </div>
          
          <div className="bg-gradient-to-t from-black/95 to-transparent p-6 border-t border-cyan-500/20">
            <div className="glass-effect p-4 rounded-lg border border-cyan-500/30">
              <h3 className="text-xl font-semibold mb-2 text-cyan-400 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
                {image.title}
              </h3>
              <p className="text-white/80 leading-relaxed">{image.description}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
