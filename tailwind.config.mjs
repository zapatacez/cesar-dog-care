/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                sage: {
                    50: '#f4f7f2',
                    100: '#e3ebe0',
                    200: '#c5d6bf',
                    300: '#9eb895',
                    400: '#8A9A5B',
                    500: '#6d7f45',
                    600: '#546336',
                    700: '#44502d',
                },
                stone: {
                    50: '#fafaf9',
                    100: '#f5f5f4',
                    200: '#e7e5e4',
                    300: '#d6d3d1',
                    400: '#a8a29e',
                    500: '#78716c',
                    600: '#57534e',
                    700: '#44403c',
                    800: '#292524',
                    900: '#1c1917',
                },
                warm: {
                    white: '#F9F8F6',
                    beige: '#E8E6E1',
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
