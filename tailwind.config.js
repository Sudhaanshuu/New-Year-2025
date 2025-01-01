/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite',
                'rotate3d': 'rotate3d 15s linear infinite',
            },
            transformStyle: {
                '3d': 'preserve-3d',
            },
            perspective: {
                '1000': '1000px',
            },
        },
    },
    plugins: [],
};