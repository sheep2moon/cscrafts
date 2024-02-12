import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config = {
    darkMode: ["class"],
    content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px"
            }
        },
        extend: {
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" }
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" }
                }
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out"
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
            },
            colors: {
                primary: {
                    DEFAULT: colors.zinc[50],
                    dark: colors.zinc[900],
                    ...colors.zinc
                },
                secondary: {
                    DEFAULT: colors.teal[600],
                    ...colors.teal
                },
                info: {
                    DEFAULT: colors.sky[500],
                    dark: colors.sky[800],
                    ...colors.sky
                },
                danger: {
                    DEFAULT: colors.rose[500],
                    ...colors.rose
                },
                accent: {
                    DEFAULT: colors.amber[400],
                    ...colors.amber
                }
            }
        }
    },
    plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")]
} satisfies Config;

export default config;
