import type { Config } from "tailwindcss";

const channel = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
  		colors: {
  			background: channel('background'),
  			foreground: channel('foreground'),
  			surface: {
  				DEFAULT: channel('surface'),
  				'2': channel('surface-2')
  			},
  			subtle: channel('subtle'),
  			faint: channel('faint'),
  			brand: {
  				DEFAULT: channel('brand'),
  				bright: channel('brand-bright')
  			},
  			card: {
  				DEFAULT: channel('card'),
  				foreground: channel('card-foreground')
  			},
  			popover: {
  				DEFAULT: channel('popover'),
  				foreground: channel('popover-foreground')
  			},
  			primary: {
  				DEFAULT: channel('primary'),
  				foreground: channel('primary-foreground')
  			},
  			secondary: {
  				DEFAULT: channel('secondary'),
  				foreground: channel('secondary-foreground')
  			},
  			muted: {
  				DEFAULT: channel('muted'),
  				foreground: channel('muted-foreground')
  			},
  			accent: {
  				DEFAULT: channel('accent'),
  				foreground: channel('accent-foreground')
  			},
  			destructive: {
  				DEFAULT: channel('destructive'),
  				foreground: channel('destructive-foreground')
  			},
  			border: 'var(--border)',
  			input: 'var(--input)',
  			ring: channel('ring')
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
