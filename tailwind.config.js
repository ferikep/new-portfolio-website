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
        midnight: '#0B1026',
        nebula: '#1F1A48',
        starlight: '#9FA9FF',
        aurora: '#7B61FF',
        comet: '#39D0FF',
        dusk: '#2B2D42',
        moon: '#E2E8F0'
      },
      backgroundImage: {
        'starfield': 'radial-gradient(circle at 20% 20%, rgba(123, 97, 255, 0.25), transparent 55%), radial-gradient(circle at 80% 10%, rgba(57, 208, 255, 0.2), transparent 50%), radial-gradient(circle at 50% 80%, rgba(159, 169, 255, 0.2), transparent 60%)'
      },
      boxShadow: {
        glow: '0 0 30px rgba(123, 97, 255, 0.3)',
        'glow-strong': '0 0 50px rgba(57, 208, 255, 0.35)'
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        orbit: 'orbit 12s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(123, 97, 255, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(57, 208, 255, 0.6)' }
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(0)' },
          '50%': { transform: 'rotate(180deg) translateX(4px)' },
          '100%': { transform: 'rotate(360deg) translateX(0)' }
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
