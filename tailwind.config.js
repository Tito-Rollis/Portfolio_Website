module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                majorColor: '#FFE100',
            },
            fontFamily: {
                tungsten: ['Tungsten'],
                oswald: ['Oswald'],
                montserrat: ['Montserrat'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
