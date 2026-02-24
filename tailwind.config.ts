
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New Mystic AI Theme
        "primary": "#5b13ec",
        "background-light": "#f6f6f8",
        "background-dark": "#161022",
        "gold-accent": "#FFD700",
        "accent-gold": "#d4af37",
        "tech-cyan": "#00f0ff",
        "card-dark": "#221933",
        "card-glow": "rgba(91, 19, 236, 0.15)",
        "element-wood": "#10b981", // Emerald
        "element-fire": "#ef4444", // Red
        "element-earth": "#d97706", // Amber/Brown
        "element-metal": "#94a3b8", // Slate
        "element-water": "#3b82f6", // Blue
        "text-muted": "#a492c9",
        // Legacy colors (for compatibility)
        midnight: '#191970',
        stardust: '#FFD700',
        silvermoon: '#C0C0C0',
        abyss: '#000000',
        'cosmic-purple': '#2E1A47',
        'gold-leaf': '#DAA520',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],
        'serif-display': ['Georgia', 'serif'],
        'sans-modern': ['Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "full": "9999px"
      },
      boxShadow: {
        "glow": "0 0 10px rgba(236, 182, 19, 0.3)",
        "glow-aura": "0 0 25px 5px rgba(91, 19, 236, 0.4)",
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(91, 19, 236, 0.6)' },
          '50%': { opacity: '.5', boxShadow: '0 0 10px rgba(91, 19, 236, 0.2)' },
        },
        'scan': {
          '0%': { top: '0%', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-150%) skewX(-20deg)' },
          '100%': { transform: 'translateX(150%) skewX(-20deg)' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mystic-gradient': 'linear-gradient(180deg, #161022 0%, #2a1b3d 50%, #161022 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
