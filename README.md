# Stock Tracker - Next.js Assessment

A stock tracking application built with Next.js that allows users to search stocks, view detailed information, and track favorites. Built for the TradebraBrains technical assessment.

## Links
Live Demo: https://stock-ticker-five.vercel.app/
GitHub Repo: https://github.com/Akshaysawant917/stock-ticker

## Features

### Core Requirements
- Stock search with autocomplete functionality
- Dynamic stock detail pages with SEO-optimized meta tags
- Interactive price charts using Recharts
- Server-side rendering for stock data
- Responsive design for all devices
- Error handling for API failures

### Bonus Features
- Favorite stocks saved to localStorage
- Rolling ticker showing market movers
- Loading states throughout the app

## Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: React Icons
- **Ticker**: React Fast Marquee

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/Akshaysawant917/stock-ticker
cd stock-ticker
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open http://localhost:3000

## Project Structure

```
├── components/
│   ├── global/              # Layout components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   └── StockTicker.js
│   ├── home/                # Homepage components
│   │   ├── Hero.js
│   │   └── WhyChooseUs.js
│   ├── details/             # Stock detail components
│   │   ├── StockChart.js
│   │   ├── StockData.js
│   │   └── StockPrice.js
│   └── fav/                 # Favorites components
│       └── FavouritesComp.js
├── pages/
│   ├── index.js             # Homepage
│   ├── stock/[symbol].js    # Dynamic stock pages
│   └── favourites.js        # Saved stocks
├── lib/
│   ├── fetchStock.js        # API functions
│   └── favourites.js        # LocalStorage utilities
```

## API Integration

The app uses TradebraBrains APIs:
- Search API for stock lookup
- Stock prices API for chart data
- Market movers API for ticker

## Key Implementation Details

- **Search**: Debounced autocomplete with 1-second delay
- **Routing**: Dynamic pages at `/stock/[symbol]`
- **SEO**: Dynamic meta tags for each stock page
- **Data Fetching**: Server-side rendering with getServerSideProps
- **Error Handling**: Graceful fallbacks for missing data
- **Favorites**: Persistent storage using localStorage

## Requirements Met

✅ Next.js framework  
✅ Stock search with API integration  
✅ Dynamic routing for stock details  
✅ SEO meta tags using Next.js Head  
✅ Interactive charts with Recharts  
✅ Server-side data fetching  
✅ Error handling for API calls  
✅ Responsive design  

**Bonus features completed:**
✅ Favorite stocks with localStorage  
✅ Loading states  
✅ Rolling ticker bar  

## Build & Deploy

```bash
npm run build    # Build for production
npm run start    # Start production server
```


