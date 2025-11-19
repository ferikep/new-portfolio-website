import React from 'react';
import { motion } from 'framer-motion';

interface SpaceshipProps {
    className?: string;
    delay?: number;
    duration?: number;
}

const Spaceship: React.FC<SpaceshipProps> = ({ className = '', delay = 0, duration = 20 }) => {
    return (
        <motion.div
            className={`absolute pointer-events-none z-0 ${className}`}
            initial={{ x: '-10vw', y: '10vh', rotate: 5, opacity: 0 }}
            animate={{
                x: '110vw',
                y: '-10vh',
                opacity: [0, 1, 1, 0],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: 'linear',
                delay: delay,
            }}
        >
            <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white/80 drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]"
            >
                <path
                    d="M12 2L2 22L12 18L22 22L12 2Z"
                    fill="currentColor"
                    stroke="#00f3ff"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M12 18V2"
                    stroke="#00f3ff"
                    strokeWidth="1"
                    strokeLinecap="round"
                />
            </svg>
            {/* Engine Glow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-2 w-2 h-8 bg-cyan-400/50 blur-md rounded-full" />
        </motion.div>
    );
};

export default Spaceship;
