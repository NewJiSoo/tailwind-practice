const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        codeit_purple: "#6500c3",
        text_gray: "#525252",
        title_gray: "#171717",
        select_gray: "#e5e5e5",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to top right, #096BDE, #096BDE 30%, #DDF1FF)'
      },
      boxShadow: {
        // 'custom-shadow': '0 0 #000 ,0.3px 0.8px 1.1px rgba(9, 107, 222, 0.12),1.1px 2.8px 3.9px -0.4px rgba(9, 107, 222, 0.17),2.4px 6.1px 8.6px -0.8px rgba(9, 107, 222, 0.23),5.3px 13.3px 18.8px -1.2px rgba(9, 107, 222,0.29)',
        'custom-shadow': 'var(--joy-shadowRing), 0.3px 0.8px 1.1px rgba(var(--joy-shadowChannel), 0.12), 1.1px 2.8px 3.9px -0.4px rgba(var(--joy-shadowChannel), 0.17), 2.4px 6.1px 8.6px -0.8px rgba(var(--joy-shadowChannel), 0.23), 5.3px 13.3px 18.8px -1.2px rgba(var(--joy-shadowChannel), 0.29)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'slide-down': 'slideDown 10s linear infinite',
        'slide-down-fade-in': 'slideDownFadeIn 10s linear infinite',
        'slide-down-fade-in-delay': 'slideDownFadeIn 10s linear infinite 1.5s',
        "move-top": "move-top 15s linear infinite",
        "fade-in": "fade-in 2s ease-in-out infinite",
        'spin-reverse': 'sprin-reverse 4s linear infinite'
      },

      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' }
        },
        fadeOpacity: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }

        },
        slideDownFadeIn: {
          '0%': { transform: 'translateY(0%)', opacity: '0' },
          '100%': { transform: 'translateY(-100%)', opacity: '1' },
        },
        "move-top": {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-100%)",
          }
        },
        'sprin-reverse': {
          to: {
            transform: 'rotate(-1turn)',
          }
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
