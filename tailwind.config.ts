
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
        // Fresh and Cute AI Theme
        "primary": "#a78bfa", // Soft purple
        "primary-light": "#ddd6fe",
        "primary-dark": "#7c3aed",
        "background-light": "#fcfcfd", // Very light, almost white background
        "background-dark": "#1e1b4b", // Kept just in case, but heavily deemphasized
        "accent-pink": "#fda4af",
        "accent-mint": "#6ee7b7",
        "accent-yellow": "#fde047",
        "card-light": "#ffffff",
        "card-dark": "#312e81",
        "element-wood": "#10b981",
        "element-fire": "#ef4444",
        "element-earth": "#f59e0b",
        "element-metal": "#94a3b8",
        "element-water": "#3b82f6",
        "text-main": "#334155", // Slate-700
        "text-muted": "#94a3b8", // Slate-400
        // Legacy colors (for compatibility, consider removing later)
        midnight: '#191970',
        stardust: '#FFD700',
        silvermoon: '#C0C0C0',
        abyss: '#000000',
        'cosmic-purple': '#2E1A47',
        'gold-leaf': '#DAA520',
        'gold-accent': '#FFD700',
        'tech-cyan': '#00f0ff',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],
        'serif-display': ['Georgia', 'serif'],
        'sans-modern': ['Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "md": "0.75rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "2xl": "2rem",
        "full": "9999px"
      },
      boxShadow: {
        "soft": "0 8px 30px rgba(0, 0, 0, 0.04)",
        "soft-hover": "0 10px 40px rgba(167, 139, 250, 0.15)", // faint primary shadow
        "glow": "0 0 10px rgba(236, 182, 19, 0.3)",
        "glow-aura": "0 0 25px 5px rgba(91, 19, 236, 0.4)",
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(167, 139, 250, 0.4)' },
          '50%': { opacity: '.5', boxShadow: '0 0 10px rgba(167, 139, 250, 0.1)' },
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
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(-5%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        }
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'bounce-soft': 'bounce-soft 2s infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mystic-gradient': 'linear-gradient(180deg, #fcfcfd 0%, #fdf2f8 50%, #fcfcfd 100%)', // light gradient
      },
    },
  },
  plugins: [],
};

export default config;
