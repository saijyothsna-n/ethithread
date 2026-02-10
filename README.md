# EthiThread

AI-Powered Sustainable Textile Sourcing Platform

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Demo Accounts

- **Student**: leo@fashion.edu / demo123
- **Boutique Owner**: sarah@boutique.com / demo123

## Project Structure

```
ethithread/
├── src/
│   ├── components/       # React components
│   │   ├── FabricCard.jsx
│   │   ├── SupplierCard.jsx
│   │   ├── SwatchModal.jsx
│   │   ├── LoginScreen.jsx
│   │   ├── Header.jsx
│   │   ├── UploadSection.jsx
│   │   ├── ComparisonSection.jsx
│   │   └── Footer.jsx
│   ├── data/            # Data files
│   │   ├── fabricDatabase.js
│   │   └── mockUsers.js
│   ├── utils/           # Utility functions
│   │   └── badgeColors.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Features

- AI-powered fabric matching based on mood board images
- Sustainability metrics (water usage, CO₂ impact)
- Supplier verification and ratings
- Fabric comparison tool
- Save favorite fabrics
- Request swatches from suppliers
- Filter fabrics by sustainability criteria

## Technologies

- React 18
- Vite
- Tailwind CSS
- Lucide React (icons)
