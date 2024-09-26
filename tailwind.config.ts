import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        lb2s: "url('/images/bg-lb2s.svg')",
        lb2ss: "url('/images/bg-lb2s-abricot.svg')",
        "gradient-to-180": "linear-gradient(180deg, #181e26, #121820)",
        map: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/map.png')",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        "color-1": {
          DEFAULT: "#A6AAB0",
        },
        "color-2": {
          DEFAULT: "#2A5686",
        },
        "color-3": {
          DEFAULT: "#5B7B95",
        },
        "color-4": {
          DEFAULT: "#4E5157",
        },
        "color-5": {
          DEFAULT: "#545A5C",
        },
        abricot: {
          DEFAULT: "#E9806E",
        },
        "nevada-blue": {
          DEFAULT: "#646C74",
        },
        "picton-blue": {
          DEFAULT: "#34C9EB",
        },
        heather: {
          DEFAULT: "##B4C1CD",
        },
        madison: {
          DEFAULT: "#0C3464",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "custom-pulse": "custom-pulse 1s linear infinite",
      },
      keyframes: {
        "custom-pulse": {
          "0%": {
            transform: "scale(1)",
            "box-shadow": "0 0 0 0 rgba(255, 255, 255, 1)",
          },
          "70%": {
            transform: "scale(1)",
            "box-shadow": "0 0 0 20px rgba(255, 255, 255, 0)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
