/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Pillar colors - intensity, not brightness
                faith: {
                    DEFAULT: '#4F46E5', // Deep indigo
                    dark: '#3730A3',
                    light: '#6366F1',
                    bg: '#1e1b4b'
                },
                wealth: {
                    DEFAULT: '#DC2626', // Red
                    dark: '#991B1B',
                    light: '#EF4444',
                    bg: '#450a0a'
                },
                impact: {
                    DEFAULT: '#D97706', // Amber
                    dark: '#92400E',
                    light: '#F59E0B',
                    bg: '#451a03'
                },
                growth: {
                    DEFAULT: '#059669', // Muted green
                    dark: '#065F46',
                    light: '#10B981',
                    bg: '#022c22'
                },
                relationships: {
                    DEFAULT: '#DB2777', // Rose
                    dark: '#9D174D',
                    light: '#EC4899',
                    bg: '#500724'
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif']
            }
        },
    },
    plugins: [],
}
