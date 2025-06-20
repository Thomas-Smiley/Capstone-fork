/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,svelte,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'active-text':        'var(--active-text)',
        'button-face':        'var(--button-face)',
        'button-text':        'var(--button-text)',
        'canvas':             'var(--canvas)',
        'canvas-text':        'var(--canvas-text)',
        'field':              'var(--field)',
        'field-text':         'var(--field-text)',
        'gray-text':          'var(--gray-text)',
        'highlight':          'var(--highlight)',
        'highlight-text':     'var(--highlight-text)',
        'link-text':          'var(--link-text)',
        'mark':               'var(--mark)',
        'mark-text':          'var(--mark-text)',
        'selected-item':      'var(--selected-item)',
        'selected-item-text': 'var(--selected-item-text)',
        'visited-text':       'var(--visited-text)',
        'cc': {
          red:                '#D70010',
          black:              '#1E1D1C',
          white:              '#FFFFFF',
          grey:               '#63666A',
          lightgrey:          '#B0B2B4',
          blue:               '#003158',
          lightblue:          '#3684C0',
          green:              '#004B4B',
          lightgreen:         '#00847E',
          orange:             '#E66300',
          yellow:             '#FFAB18',
        },
      },
    },
  },
  safelist: [
    'bg-active-text',
    'bg-button-face',
    'bg-button-text',
    'bg-canvas',
    'bg-canvas-text',
    'bg-field',
    'bg-field-text',
    'bg-gray-text',
    'bg-highlight',
    'bg-highlight-text',
    'bg-link-text',
    'bg-mark',
    'bg-mark-text',
    'bg-selected-item',
    'bg-selected-item-text',
    'bg-visited-text',
    'bg-cc-red',
    'bg-cc-black',
    'bg-cc-white',
    'bg-cc-grey',
    'bg-cc-lightgrey',
    'bg-cc-blue',
    'bg-cc-lightblue',
    'bg-cc-green',
    'bg-cc-lightgreen',
    'bg-cc-orange',
    'bg-cc-yellow',
  ],
  // plugins: [require('@tailwindcss/typography')],
}
