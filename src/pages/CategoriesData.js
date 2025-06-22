import { sentiments } from './OccasionSuggestions'; // adjust path if needed

export const categoryData = {
  'same-day': [
    ...sentiments['congrats'].slice(0, 3),
    ...sentiments['thank-you'].slice(0, 2),
    ...sentiments['best-wishes'].slice(0, 5),
    ...sentiments['baby-shower'].slice(2, 4),
  ],
  'birthday': [
    ...sentiments['host'].slice(3, 6),
    ...sentiments['congrats'].slice(6, 9),
    ...sentiments['best-wishes'].slice(0, 6)
  ],
  'anniversary': [
    ...sentiments['congrats'].slice(4, 7),
    ...sentiments['baby-shower'].slice(2, 5),
    ...sentiments['best-wishes'].slice(6, 9)
  ],
  'grand': [
    ...sentiments['congrats'].slice(6, 9),
    ...sentiments['host'].slice(0, 3),
    ...sentiments['thank-you'].slice(0, 3),
  ],
  'fathers-day': [
    ...sentiments['host'].slice(3, 7),
    ...sentiments['thank-you'].slice(6, 8),
     ...sentiments['congrats']
  ],
  'congrats': [
    ...sentiments['congrats']
  ],
  'hampers': [
    ...sentiments['host'].slice(5, 9),
    ...sentiments['best-wishes'].slice(6, 9),
    ...sentiments['thank-you'].slice(0, 2),

  ],
  'concierge': [
    ...sentiments['thank-you'].slice(0, 3),
    ...sentiments['best-wishes'].slice(6, 9)
  ]
};
