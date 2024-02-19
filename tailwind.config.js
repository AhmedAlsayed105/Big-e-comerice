/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        // center: true, // توسيط المحتوى داخل الـ container
        padding: {
          DEFAULT: '15px', // padding الافتراضي للـ container
          sm: '18px', // padding عند شاشات الهواتف الصغيرة
          md: '10px', // padding عند شاشات الهواتف الصغيرة
          lg: '8px', // padding عند شاشات الحواسيب المكتبية
          // xl: '5rem', // padding عند شاشات الحواسيب الكبيرة
        },
      },
    },
    screens: {
    sm:  '576px',
    md:  '768px',
    lg:  '992px',
    xl:  '1200px',
    "2xl":  '1400px',
    
  },
},
  plugins: [],
}