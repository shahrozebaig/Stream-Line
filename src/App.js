import React, { useState, useEffect, useCallback } from "react";
import "./App.css";

const NEWS_API_KEY = process.env.REACT_APP_NEWSDATA_API_KEY;
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("top");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState("");
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Hyderabad");
  const [nextPage, setNextPage] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const categories = [
    "Top",
    "Business",
    "Entertainment",
    "Sports",
    "Technology",
    "Science",
    "Health",
    "Environment",
    "World",
  ];

  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date) =>
    date.toLocaleString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

  // ✅ Fetch News
  const fetchNews = useCallback(
    async (reset = false, token = null) => {
      setLoading(true);
      setError("");

      try {
        let url = `https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&language=en`;

        if (query.trim()) {
          url += `&q=${encodeURIComponent(query)}`;
        } else if (category) {
          url += `&category=${category.toLowerCase()}`;
        } else {
          url += `&category=top`;
        }

        if (token) url += `&page=${token}`;

        const res = await fetch(url);
        const data = await res.json();

        if (data.status === "success" && data.results?.length > 0) {
          setArticles((prev) =>
            reset ? data.results : [...prev, ...data.results]
          );
          setNextPage(data.nextPage || null);
          setHasMore(!!data.nextPage);
        } else {
          if (reset) setArticles([]);
          setHasMore(false);
          setError("No news found. Try a different category or search term.");
        }
      } catch (err) {
        console.error("News fetch error:", err);
        setError("Failed to load news.");
      } finally {
        setLoading(false);
      }
    },
    [category, query]
  );

  // 🔁 Load when category or search changes
  useEffect(() => {
    setNextPage(null);
    fetchNews(true);
  }, [category, query, fetchNews]);

  // 🌦️ Weather
  const fetchWeather = useCallback(async (cityName) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeather({
          city: data.name,
          temp: data.main.temp,
          condition: data.weather[0].main,
          icon: data.weather[0].icon,
        });
      }
    } catch {
      console.log("Weather fetch error");
    }
  }, []);

  useEffect(() => {
    fetchWeather(city);
  }, [city, fetchWeather]);

  // ♾️ Infinite Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 200 &&
        hasMore &&
        !loading
      ) {
        fetchNews(false, nextPage);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading, nextPage, fetchNews]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchNews(true);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className={`app ${darkMode ? "dark" : "light"}`}>
        {/* 🌊 Header */}
        <header className="header">
          <div className="title-section">
            <h1 className="title">🌊 Streamline –</h1>
            <p className="subtitle">
              🗞️ <span className="flow-text">News that flows to you</span>
            </p>
          </div>

          <div className="search-section">
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Search news..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>
            <button
              className="toggle-btn"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </header>

        {/* 🕒 Time + Weather */}
        <div className="time-weather">
          <p className="time">🕒 {formatDateTime(currentTime)}</p>
          <div className="weather-container">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="state-dropdown"
            >
              {[
                "Hyderabad",
                "Delhi",
                "Mumbai",
                "Bengaluru",
                "Chennai",
                "Kolkata",
                "Pune",
                "Jaipur",
                "Ahmedabad",
              ].map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {weather && (
              <div className="weather-card">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
                  alt="weather"
                />
                <div>
                  <h4>{weather.city}</h4>
                  <p>
                    {weather.temp}°C, {weather.condition}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 🧭 Categories */}
        <div className="categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${
                category === cat.toLowerCase() ? "active" : ""
              }`}
              onClick={() => {
                setCategory(cat.toLowerCase());
                setQuery("");
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 📰 News Section */}
        <main className="news-section">
          {loading && articles.length === 0 ? (
            <div className="spinner"></div>
          ) : error ? (
            <p className="error">{error}</p>
          ) : (
            articles.map((a, i) => (
              <div key={i} className="news-card">
                {a.image_url && <img src={a.image_url} alt={a.title} />}
                <div className="news-content">
                  <h3>{a.title}</h3>
                  <p>{a.description || "No description available"}</p>
                  <a href={a.link} target="_blank" rel="noreferrer">
                    Read more →
                  </a>
                </div>
              </div>
            ))
          )}
          {loading && articles.length > 0 && (
            <div className="spinner small"></div>
          )}
        </main>

        {/* 👣 Footer */}
        <footer className="footer">
          © {new Date().getFullYear()} Streamline – News that flows to you
        </footer>
      </div>
    </div>
  );
}
