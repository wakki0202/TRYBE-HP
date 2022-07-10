// tailwind.config.js
module.exports = {
  // 追記
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      
      backgroundColor: {
        main: ["#4a9ed8"]
        }
      ,
      fontFamily: {
        NSJ: ["Noto Sans JP"] ,
        gothic: [
          'YuGothic',
          'Yu Gothic'],
        Inter: ["Inter"],
        body: [

          'YuGothic',
          'Yu Gothic',
          'Avenir',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'Hiragino Sans',
          'ヒラギノ角ゴシック',
          'メイリオ',
          'Meiryo',
          'ＭＳ Ｐゴシック',
          'MS PGothic',
          'sans-serif'
        ]

      },
      animation: {
        slideIn: "slideIn 1s ease-in forwards",
      },
      keyframes: {
        slideIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(60px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};