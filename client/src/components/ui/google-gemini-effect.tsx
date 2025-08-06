
"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const GoogleGeminiEffect = ({
  pathLengths = [0.2, 0.4, 0.6, 0.8, 1.0],
  title,
  description,
  className,
}: {
  pathLengths?: number[];
  title?: string;
  description?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [currentPathLength, setCurrentPathLength] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPathLength((prev) => (prev + 1) % pathLengths.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [pathLengths.length]);

  return (
    <div
      className={`h-96 w-full flex flex-col items-center justify-center relative overflow-hidden ${className}`}
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main orbital ring effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-80 h-80">
          {/* Outer orbital ring */}
          <motion.div
            className="absolute inset-0 border border-blue-500/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {/* Orbital points */}
            <motion.div
              className="absolute w-3 h-3 bg-purple-500 rounded-full"
              style={{ top: "0%", left: "50%", transform: "translate(-50%, -50%)" }}
            />
            <motion.div
              className="absolute w-2 h-2 bg-cyan-400 rounded-full"
              style={{ top: "25%", right: "10%", transform: "translate(50%, -50%)" }}
            />
            <motion.div
              className="absolute w-2 h-2 bg-blue-400 rounded-full"
              style={{ bottom: "25%", left: "15%", transform: "translate(-50%, 50%)" }}
            />
          </motion.div>

          {/* Inner orbital ring */}
          <motion.div
            className="absolute inset-8 border border-purple-500/40 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              className="absolute w-2 h-2 bg-purple-400 rounded-full"
              style={{ top: "0%", left: "50%", transform: "translate(-50%, -50%)" }}
            />
            <motion.div
              className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full"
              style={{ bottom: "20%", right: "20%", transform: "translate(50%, 50%)" }}
            />
          </motion.div>

          {/* Center glow */}
          <div className="absolute inset-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="w-full h-full bg-blue-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>
        </div>
      </div>

      {/* Animated paths/lines */}
      <div className="absolute inset-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 400 400"
          className="absolute inset-0"
        >
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          <motion.path
            d="M100,200 Q200,100 300,200 Q200,300 100,200"
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: pathLengths[currentPathLength] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          />

          <motion.path
            d="M150,150 Q200,100 250,150 Q200,200 150,150"
            fill="none"
            stroke="rgba(139, 92, 246, 0.6)"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: pathLengths[currentPathLength] * 0.8 }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />
        </svg>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 text-center">
        {title && (
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {title.split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.05,
                  ease: "easeOut"
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        )}
        
        {description && (
          <motion.p
            className="text-lg text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {description}
          </motion.p>
        )}
      </div>

      {/* Additional glow effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/10 to-cyan-500/5 animate-pulse" />
    </div>
  );
};

export default GoogleGeminiEffect;
