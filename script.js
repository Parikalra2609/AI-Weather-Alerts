// Scroll to section on homepage
function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Animate accuracy meter in forecasting.html
function animateAccuracy() {
  const fill = document.getElementById("accuracyFill");
  const text = document.getElementById("accuracyText");
  let width = 0;
  const target = 95; // target % accuracy
  const interval = setInterval(() => {
    if (width >= target) {
      clearInterval(interval);
    } else {
      width++;
      fill.style.width = width + "%";
      text.textContent = width + "%";
    }
  }, 20);
}

// Animate forecast data cards
function animateCard(card) {
  card.classList.add("animate-card");
  setTimeout(() => {
    card.classList.remove("animate-card");
  }, 800);
}

// Expand/collapse future tech cards
function expandTech(card) {
  const details = card.querySelector(".tech-details");
  details.classList.toggle("expanded");
}

// Timeline interaction in future.html
const slider = document.getElementById("timelineSlider");
const yearDisplay = document.getElementById("yearDisplay");
const timelineContent = document.getElementById("timelineContent");

if (slider) {
  const futureData = {
    2025: {
      title: "Enhanced Neural Networks",
      desc: "Advanced machine learning models begin providing more accurate long-term weather forecasts with reduced false alarm rates."
    },
    2030: {
      title: "Quantum Weather Models",
      desc: "Quantum computing transforms how AI simulates complex climate systems in seconds."
    },
    2035: {
      title: "Autonomous Emergency Systems",
      desc: "AI coordinates disaster response without human input, improving safety and response time."
    },
    2040: {
      title: "Global AI Weather Grid",
      desc: "A worldwide AI network provides seamless, real-time forecasts and coordinated alerting."
    }
  };

  slider.addEventListener("input", () => {
    const year = slider.value;
    yearDisplay.textContent = year;
    if (futureData[year]) {
      timelineContent.innerHTML = `
        <h3>${futureData[year].title}</h3>
        <p>${futureData[year].desc}</p>
      `;
    } else {
      timelineContent.innerHTML = "<p>No data available for this year.</p>";
    }
  });
}

// Modal for opportunities
function showOpportunities() {
  const modal = document.getElementById("opportunitiesModal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("opportunitiesModal");
  modal.style.display = "none";
}

// Close modal on outside click
window.addEventListener("click", (event) => {
  const modal = document.getElementById("opportunitiesModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
// Simulate an AI emergency alert in the demo phone
function triggerDemoAlert() {
  const alerts = [
    {
      title: "Tornado Warning",
      message: "Take cover immediately. Stay away from windows and move to the lowest floor.",
    },
    {
      title: "Wildfire Evacuation",
      message: "Evacuate now. Follow local emergency instructions and avoid smoke-affected areas.",
    },
    {
      title: "Flash Flood Alert",
      message: "Move to higher ground. Do not attempt to drive through flooded areas.",
    },
    {
      title: "Extreme Heat Advisory",
      message: "Stay hydrated and indoors. Avoid strenuous outdoor activity between 11 AM and 5 PM.",
    },
  ];

  // Pick a random alert
  const randomIndex = Math.floor(Math.random() * alerts.length);
  const selected = alerts[randomIndex];

  // Update alert content
  const alertContent = document.getElementById("alertContent");
  alertContent.innerHTML = `
    <div class="alert-title">${selected.title}</div>
    <div class="alert-message">${selected.message}</div>
  `;

  // Add current time
  const now = new Date();
  const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  document.getElementById("alertTime").textContent = formattedTime;

  // Optional: flash animation
  const screen = document.getElementById("phoneScreen");
  screen.classList.add("flash");
  setTimeout(() => screen.classList.remove("flash"), 800);
}
// Simulate an AI emergency alert in the demo phone
function triggerDemoAlert() {
  const alerts = [
    {
      title: "Tornado Warning",
      message: "Take cover immediately. Stay away from windows and move to the lowest floor.",
    },
    {
      title: "Wildfire Evacuation",
      message: "Evacuate now. Follow local emergency instructions and avoid smoke-affected areas.",
    },
    {
      title: "Flash Flood Alert",
      message: "Move to higher ground. Do not attempt to drive through flooded areas.",
    },
    {
      title: "Extreme Heat Advisory",
      message: "Stay hydrated and indoors. Avoid strenuous outdoor activity between 11 AM and 5 PM.",
    },
  ];

  // Pick a random alert
  const randomIndex = Math.floor(Math.random() * alerts.length);
  const selected = alerts[randomIndex];

  // Update alert content
  const alertContent = document.getElementById("alertContent");
  alertContent.innerHTML = `
    <div class="alert-title">${selected.title}</div>
    <div class="alert-message">${selected.message}</div>
  `;

  // Add current time
  const now = new Date();
  const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  document.getElementById("alertTime").textContent = formattedTime;

  // Optional: flash animation
  const screen = document.getElementById("phoneScreen");
  screen.classList.add("flash");
  setTimeout(() => screen.classList.remove("flash"), 800);
}

// Video functionality
function playVideo() {
  const video = document.getElementById('featuredVideo');
  const overlay = document.getElementById('videoOverlay');
  
  overlay.style.display = 'none';
  video.play();
}

function changeVideo(type) {
  const video = document.getElementById('featuredVideo');
  const overlay = document.getElementById('videoOverlay');
  
  // Video sources for different types
  const videoSources = {
    demo: {
      mp4: 'https://youtu.be/C8I-1dFxJTI',
      webm: 'https://youtu.be/C8I-1dFxJTI',
      poster: 'images/video-poster-demo.jpg'
    },
    forecast: {
      mp4: 'https://youtu.be/C8I-1dFxJTI',
      webm: 'https://youtu.be/C8I-1dFxJTI',
      poster: 'images/video-poster-forecast.jpg'
    },
    alerts: {
      mp4: 'https://youtu.be/C8I-1dFxJTI',
      webm: 'https://youtu.be/C8I-1dFxJTI',
      poster: 'images/video-poster-alerts.jpg'
    }
  };
  
  if (videoSources[type]) {
    video.pause();
    video.innerHTML = `
      <source src="${videoSources[type].mp4}" type="video/mp4">
      <source src="${videoSources[type].webm}" type="video/webm">
      Your browser does not support the video tag.
    `;
    video.poster = videoSources[type].poster;
    video.load();
    overlay.style.display = 'flex';
    
    // Update active button
    document.querySelectorAll('.video-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
  }
}

// Video event listeners
document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('featuredVideo');
  const overlay = document.getElementById('videoOverlay');
  
  if (video && overlay) {
    video.addEventListener('play', function() {
      overlay.style.display = 'none';
    });
    
    video.addEventListener('pause', function() {
      overlay.style.display = 'flex';
    });
    
    video.addEventListener('ended', function() {
      overlay.style.display = 'flex';
    });
  }
});