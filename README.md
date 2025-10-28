# 🌊 **Streamline – News That Flows to You**

Streamline is a modern web app that keeps users updated with the latest 📰 **news** from around the world — all in **real time**.
It offers a clean, dynamic, and interactive interface where you can:

📰 **Explore News by Categories** – Stay updated with sections like Business, Sports, Technology, Science, Health, and more.  
🌦️ **Check Live Weather Updates** – Get real-time weather details for your city, including temperature and conditions.  
🕒 **View Current Date & Time** – Always stay in sync with live time displayed beautifully at the top.  
🔍 **Search for Topics** – Instantly find news on any topic with a smart search feature.  
🌗 **Toggle Dark/Light Mode** – Choose the mode that fits your mood and lighting.  
♾️ **Infinite Scrolling** – Keep reading without interruption as more articles load automatically.

Streamline delivers a **seamless reading experience** where news, weather, and time come together — all in one flow 🌍✨

---

# Deployment

https://stream-line.onrender.com

---

## ✨ **Features**

- ⚡ **Real-time News** – Latest headlines from multiple categories (Top, Business, Entertainment, Sports, Technology, Science, Health, Environment, World)  
- 🌦️ **Live Weather** – Current weather conditions for major Indian cities  
- 🕓 **Live Clock** – Real-time date and time display  
- 🔎 **Smart Search** – Search for news articles by keywords  
- 🌗 **Dark/Light Mode** – Toggle between light and dark themes  
- 🔄 **Infinite Scrolling** – Automatically loads more news as you scroll  
- 📱 **Responsive Design** – Works beautifully on desktop and mobile  
- ⚙️ **Fast & Modern UI** – Clean, intuitive interface built with React  

---

## 🛠️ **Tech Stack**

- ⚛️ **React** – 19.2.0 (Frontend Framework)  
- 💛 **JavaScript (ES6+)** – Modern syntax and modular structure  
- 🎨 **CSS3** – Custom styling with theme support  
- 📰 **NewsData.io API** – Fetching live news articles  
- 🌤️ **OpenWeatherMap API** – Weather updates  
- 🚀 **React Scripts** – For development and builds  

---

## 📁 **Project Structure**

```
streamline-news/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   └── SL.jpg                 # Logo
├── src/
│   ├── App.js                 # Main application component
│   ├── App.css                # Application styles
│   ├── App.test.js            # App tests
│   ├── index.js               # React DOM entry point
│   ├── index.css              # Global styles
│   ├── logo.svg               # React logo
│   ├── reportWebVitals.js     # Performance monitoring
│   └── setupTests.js          # Test configuration
├── package.json               # Dependencies and scripts
├── package-lock.json          # Dependency lock file
└── README.md                  # Project documentation
```

---

## 🚀 **Getting Started**

### ✅ **Prerequisites**
- 🟢 Node.js (v14 or higher)  
- 📦 npm or yarn  
- 🔑 API keys for:
  - [NewsData.io](https://newsdata.io/)  
  - [OpenWeatherMap](https://openweathermap.org/)

### 📥 **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/streamline-news.git
   cd streamline-news
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_NEWSDATA_API_KEY=your_newsdata_api_key
   REACT_APP_WEATHER_API_KEY=your_openweather_api_key
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📖 **Usage**

1. 🗂️ **Browse categories** – Click any category button to filter news
2. 🔍 **Search news** – Type in the search bar and press Enter
3. 🌤️ **Change weather location** – Select a city from the dropdown
4. 🌗 **Toggle theme** – Click the moon/sun icon for dark/light mode
5. 📖 **Read articles** – Click "Read more →" to view full article
6. 🔄 **Infinite scroll** – Keep scrolling to load more articles automatically!

---

## 🎨 **Features in Detail**

### 📰 **News Categories**
- Stay informed with: Top, Business, Entertainment, Sports, Technology, Science, Health, Environment, and World
- Dynamic filtering with instant updates

### 🌦️ **Weather Information**
- Covers 9 major Indian cities: Hyderabad, Delhi, Mumbai, Bengaluru, Chennai, Kolkata, Pune, Jaipur, Ahmedabad
- Shows 🌡️ temperature (°C) + condition icons

### 🔍 **Search Functionality**
- Smart, real-time news search
- Updates instantly as you type
- Clears category filter when searching

### ♾️ **Infinite Scrolling**
- Automatic pagination as you scroll
- Loading indicator while fetching
- Smooth, uninterrupted reading experience

### 🌗 **Dark/Light Mode**
- Persistent theme preference
- Toggle button in the header
- Beautiful UI adaptations for both modes 🌞🌚

---

## 🌐 **API Configuration**

The app uses two external APIs:

### 📰 **NewsData.io**
- Get your free API key at [newsdata.io](https://newsdata.io/)
- Fetches latest headlines from global sources
- Supports search & category filters

### 🌤️ **OpenWeatherMap**
- Get your free API key at [openweathermap.org](https://openweathermap.org/api)
- Real-time weather data with icons
- Free tier includes current weather and 5-day forecast

---

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

---

