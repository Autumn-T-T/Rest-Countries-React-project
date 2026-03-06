This is a React app that shows country information using the REST Countries API.  
It has a search bar, a region filter, and a light/dark theme inspired by cottagecore (light green and forest green).

## Features
- Fetches country data from the REST Countries API
- Search countries by name
- Filter countries by region
- Light/dark theme toggle
- Responsive layout for mobile, tablet, and desktop

## Setup
1. Clone the repo: `git clone https://github.com/yourusername/rest-countries-project.git`
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev`
4. Open `http://localhost:5173/` in your browser

## Deployment
Deployed on Vercel: [Live Demo](https://your-vercel-url.vercel.app)

## Reflection
This project was a good way to practice React components, hooks, and context API.  
I learned how to fetch data with a custom hook (`useCountries`) and manage a global theme.  
One tricky part was making the country cards consistent in height and making sure the flags didn’t get huge when searching.  
Overall, it was a fun way to combine interactivity with a nice visual theme.