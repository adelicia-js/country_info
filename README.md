# 🌍 Country Explorer

A modern, responsive web application for exploring countries around the world with real-time weather data.

[!NOTE] 
This project was originally created as a part of the FullStackOpen course, Part 2. (https://fullstackopen.com/en/part2/adding_styles_to_react_app#exercises-2-18-2-20)

<image src="public/app_screenshot.png" width="85%" height="85%">

## ✨ Features

- **🔍 Smart Search**: Search for any country with intelligent filtering
- **🏛️ Detailed Information**: View capital cities, areas, and languages
- **🌤️ Live Weather**: Real-time weather data for country capitals
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🎨 Modern UI**: Beautiful glassmorphism design with smooth animations
- **⚡ Fast Performance**: Built with Vite for optimal loading times

## 🛠️ Built With

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: styled-components with responsive design
- **APIs**: REST Countries API + OpenWeatherMap API
- **HTTP Client**: Axios
- **Typography**: Inter font family
- **Icons**: React Icons

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/adelicia-js/country_info.git
   cd country_info
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production
```bash
npm run build
npm run preview
```

## 📱 Responsive Design

- **Desktop (>1024px)**: 3-column card layout with full features
- **Tablet (≤1024px)**: Single-column layout with optimized spacing  
- **Mobile (≤768px)**: Mobile-first responsive design with touch-friendly interactions

## 🎨 UI Highlights

- **Glassmorphism Effects**: Beautiful translucent cards with backdrop blur
- **Smooth Animations**: Hover effects and micro-interactions throughout
- **Consistent Theme**: Orange accent color (`#ff6b6b`) with purple gradient background
- **Typography Scale**: Responsive font sizing using CSS `clamp()`
- **Equal Height Cards**: Flexbox layout ensuring consistent card dimensions

## 📂 Project Structure

```
src/
├── components/
│   ├── styled/           # Styled-components definitions
│   ├── Country.tsx       # Individual country display
│   ├── CountryList.tsx   # Search results list
│   ├── Search.tsx        # Search input component
│   ├── Footer.tsx        # App footer with social links
│   └── Loading.tsx       # Loading indicator
├── services/             # API service layer
├── types.ts             # TypeScript interfaces
├── utils.ts             # Utility functions
└── App.tsx              # Main application component
```

## 🌐 API Integration

- **Countries Data**: [REST Countries API](https://restcountries.com/)
- **Weather Data**: [OpenWeatherMap API](https://openweathermap.org/)

## 🔧 Development

```bash
# Run linter
npm run lint

# Type checking
npm run build

# Development server
npm run dev
```

## 📄 License

This project was originally created as part of the [FullStackOpen](https://fullstackopen.com/en/part2/adding_styles_to_react_app#exercises-2-18-2-20) course and has been enhanced with modern UI/UX improvements.

---

**Explore the world, one country at a time** 🗺️
