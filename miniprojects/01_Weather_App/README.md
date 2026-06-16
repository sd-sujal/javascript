# 🌤️ Weather App

A simple and responsive Weather App built using **HTML, CSS, and JavaScript** that fetches real-time weather data using the OpenWeather API.

## 🚀 Features

- Search weather by city name
- Display current temperature in Celsius
- Display humidity percentage
- Display wind speed
- Dynamic weather icons based on weather conditions
- Error handling for invalid city names
- Search using button click or Enter key
- Clean and responsive user interface

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- OpenWeather API

## 📂 Project Structure

```text
weather-app/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── images/
    ├── clear.png
    ├── clouds.png
    ├── drizzle.png
    ├── humidity.png
    ├── mist.png
    ├── rain.png
    ├── search.png
    └── wind.png
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/sd-sujal/weather-app.git
```

### 2. Navigate to the Project Folder

```bash
cd weather-app
```

### 3. Get an OpenWeather API Key

1. Create an account at https://openweathermap.org
2. Generate an API key
3. Open `script.js`
4. Replace:

```javascript
const apikey = "YOUR_API_KEY";
```

with your own API key.

### 4. Run the Project

Open `index.html` in your browser or use the VS Code Live Server extension.


## 🔍 How It Works

1. User enters a city name.
2. The application sends a request to the OpenWeather API.
3. Weather data is fetched asynchronously using the Fetch API.
4. Temperature, humidity, and wind speed are displayed.
5. The weather icon changes dynamically based on the current weather condition.

## 📚 What I Learned

Through this project, I learned:

- Working with REST APIs
- Using Fetch API
- Async/Await in JavaScript
- DOM Manipulation
- Event Handling
- Error Handling
- Responsive Web Design
- Dynamic Content Rendering

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a pull request.

## 👨‍💻 Author

**Sujal Dwivedi**

GitHub: https://github.com/sd-sujal

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you found this project helpful, consider giving it a star on GitHub.