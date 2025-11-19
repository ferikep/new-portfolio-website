/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#050505', // Deep inky black
        nebula: '#1a1a2e',   // Dark blue-purple
        starlight: '#e2e8f0', // Bright white-blue
        aurora: '#7B61FF',   // Purple accent
        comet: '#00f3ff',    // Cyan accent
        dusk: '#16213e',     // Darker blue
        moon: '#f8fafc',     // Off-white
        void: '#000000',     // Absolute black
      },
      backgroundImage: {
        'space-gradient': 'radial-gradient(circle at 50% 50%, #1a1a2e 0%, #050505 100%)',
      },
      boxShadow: {
        glow: '0 0 20px rgba(123, 97, 255, 0.15)',
        'glow-strong': '0 0 30px rgba(0, 243, 255, 0.2)',
        'neon': '0 0 10px rgba(0, 243, 255, 0.5), 0 0 20px rgba(0, 243, 255, 0.3)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        orbit: 'orbit 12s linear infinite',
        twinkle: 'twinkle 4s ease-in-out infinite',
        fly: 'fly 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(123, 97, 255, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 243, 255, 0.4)' }
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(0)' },
          '50%': { transform: 'rotate(180deg) translateX(4px)' },
          '100%': { transform: 'rotate(360deg) translateX(0)' }
        },
        twinkle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.3, transform: 'scale(0.8)' }
        },
        fly: {
          '0%': { transform: 'translateX(-10%) translateY(10%) rotate(5deg)' },
          '100%': { transform: 'translateX(110%) translateY(-10%) rotate(5deg)' }
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif']
      }
    }
  },
  plugins: []
}
