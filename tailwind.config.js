const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{html,js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                mont: ['var(--font-mont)', ...fontFamily.sans]
            },
            colors: {
                primary: '#f6f3ee',
                secondary: '#FFB31C',
                thirdary: '#6b40ea',
                heading: "#292930"
            },
            backgroundImage: {
                linearPrimary: 'linear-gradient(to right, #fdc830 0%, #fe7a00 100%)',
            },
            animation: {
                'sticky-head': 'sticky-head 0.5s forwards',
                'show-dropdown': 'show-dropdown 0.3s forwards',
                'hidden-dropdown': 'hidden-dropdown 0.3s forwards;'
            },
            keyframes: {
                'sticky-head': {
                    '0%': { top: '15px', opacity: 0 },
                    '50%': { top: '-10px', opacity: 1 },
                    '100%': { top: '0', opacity: 1 },
                },
                'show-dropdown': {
                    '0%': { transform: 'translateY(30px) translateX(-50%)', opacity: 0 },
                    '70%': { transform: 'translateY(-15px) translateX(-50%)', opacity: 1 },
                    '100%': { transform: 'translateY(0px) translateX(-50%)', opacity: 1 }
                },
                'hidden-dropdown': {
                    '0%': { transform: 'translateY(0) translateX(-50%)', opacity: 1, },
                    '50%': { transform: 'translateY(-15px) translateX(-50%)', opacity: 1, },
                    '100%': { transform: 'translateY(30px) translateX(-50%)', opacity: 0, }
                },
            }
        },
    },
    plugins: [],
}
