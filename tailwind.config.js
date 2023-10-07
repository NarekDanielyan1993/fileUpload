/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './module/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
            '50%': '50%',
            16: '4rem'
        },
        fontSize: {
            xs: ['0.625rem', '0.761875rem'],
            sm: ['0.75rem', '0.914375rem'],
            DEFAULT: ['0.875rem', '1.067875rem'],
            lg: ['1.5rem', '2rem'],
            xl: ['1.625rem', '1.980625rem'],
            '2xl': ['2rem', '2.25rem'],
            '3xl': ['2.8125rem', '2.8125rem'],
            '4xl': ['3.5625rem', '3.125rem'],
            '5xl': ['4.375rem', '1rem'],
            '6xl': ['5.46875rem', '1rem'],
            '7xl': ['6.25rem', '1rem'],
            '8xl': ['8rem', '1rem']
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'rgba(72, 53, 212, 1)',
                    lighten: 'rgba(77, 106, 228, 1)'
                },
                secondary: {
                    DEFAULT: 'rgba(30, 30, 46, 1)',
                    opacity: 'rgba(30, 30, 46, 0.5)'
                },
                tertiary: {
                    DEFAULT: 'rgba(255, 197, 67, 1)',
                    lighten: 'rgba(134, 191, 235, 1)'
                },
                white: 'rgba(255, 255, 255, 1)',
                'white-darken': 'rgba(243, 245, 245, 1)'
            },
            fontSize: {
                xs: ['0.625rem', '0.761875rem']
            },
            borderRadius: {
                10: '0.6rem',
                22.5: '1.4rem',
                35: '2.2rem',
                50: '3.125rem'
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif']
            },
            lineHeight: {
                12: '0.761875rem',
                17: '1.067875rem',
                29: '1.829rem',
                31: '1.980625rem'
            },
            borderWidth: {
                2: '2px'
            },
            boxShadow: {
                sm: '0px 4px 8px 0px rgba(67, 41, 124, 0.25)',
                md: '0px 4px 20px 0px rgba(104, 109, 224, 0.5)',
                lg: '0px -5px 20px 0px rgba(0, 0, 0, 0.1)'
            },
            backgroundImage: {
                'gradient-blue-white':
                    'linear-gradient(272.88deg, #EDEBFB 4.95%, #F0F0FC 93.62%)',
                'gradient-white-blue':
                    'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #E5F1FB 100%)',
                'gradient-blue-purple':
                    'linear-gradient(90deg, rgba(104, 109, 224, 1), rgba(72, 52, 212, 1))',
                'gradient-orange-purple':
                    'linear-gradient(180deg, rgba(255, 197, 67, 1) 0%, rgba(255, 132, 18, 1) 100%)',
                'form-popup':
                    'url("/images/popup-image.png"), linear-gradient(90deg, rgba(104, 109, 224, 1), rgba(72, 52, 212, 1))'
            },
            screens: {
                xs: '300px',
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px'
            }
        }
    },

    plugins: [require('@tailwindcss/typography')]
};
