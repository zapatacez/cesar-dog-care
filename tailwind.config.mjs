/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                fairfield: {
                    blue: {
                        50: '#f0f7ff',
                        100: '#e0effe',
                        200: '#bae0fd',
                        300: '#7cc7fb',
                        400: '#36aff8',
                        500: '#0c94eb',
                        600: '#0171c6',
                        700: '#025aa2',
                        800: '#064d85',
                        900: '#0b416f',
                        950: '#072949', // Deep Sea Blue
                    },
                    sand: {
                        50: '#f7f7f6',
                        100: '#eef0ef',
                        200: '#d9dad9',
                        300: '#b6b8b7',
                        400: '#8e9190',
                        500: '#717574',
                        600: '#5a5d5d',
                        700: '#4b4d4d',
                        800: '#414242',
                        900: '#393a3a',
                        950: '#252626', // Sandy Grey
                    },
                    sky: '#7cc7fb',
                },
                warm: {
                    white: '#F9F8F7',
                    beige: '#F1EFE9',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            }
        },
    },
    plugins: [],
};
