/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        borderRadius: {
            md: '7px',
            lg: '10px'
        },
        extend: {},
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                bright: {
                    primary: '#ff1493', //pink
                    'primary-content': '#100114',
                    secondary: '#119da4', // teal
                    'secondary-content': '#100114',
                    accent: '#5e2bff', //purple
                    'accent-content': '#f2ffff', //white
                    neutral: '#e4e4e4', //panelBG
                    'base-100': '#f2ffff', //white
                    'base-200': '#c2c1c2', //silver
                    'base-300': '#100114', //black
                    info: '#2DC8EB',
                    success: '#23C88D',
                    warning: '#ffc857',
                    error: '#FA4C76',
                },
            },
        ],
    },
}
