// Particles.js Configuration
// Check if particlesJS is defined, if not, you might need to include the particles.js library
if (typeof particlesJS !== "undefined") {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#6c63ff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#6c63ff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  })
} else {
  console.error("particlesJS is not defined. Make sure to include the particles.js library.")
}

// Preloader
document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector(".preloader")
  const counter = document.querySelector(".counter")
  let count = 0

  const interval = setInterval(() => {
    if (count < 100) {
      count++
      counter.textContent = count
    } else {
      clearInterval(interval)
      preloader.style.opacity = "0"
      setTimeout(() => {
        preloader.style.display = "none"
      }, 500)
    }
  }, 20)
})

// Custom Cursor
document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".cursor")
  const cursorFollower = document.querySelector(".cursor-follower")

  cursor.style.left = e.clientX + "px"
  cursor.style.top = e.clientY + "px"

  setTimeout(() => {
    cursorFollower.style.left = e.clientX + "px"
    cursorFollower.style.top = e.clientY + "px"
  }, 100)
})

document.addEventListener("mousedown", () => {
  const cursor = document.querySelector(".cursor")
  const cursorFollower = document.querySelector(".cursor-follower")

  cursor.style.width = "15px"
  cursor.style.height = "15px"
  cursorFollower.style.width = "40px"
  cursorFollower.style.height = "40px"
})

document.addEventListener("mouseup", () => {
  const cursor = document.querySelector(".cursor")
  const cursorFollower = document.querySelector(".cursor-follower")

  cursor.style.width = "10px"
  cursor.style.height = "10px"
  cursorFollower.style.width = "30px"
  cursorFollower.style.height = "30px"
})

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  const backToTop = document.querySelector(".back-to-top")

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
    backToTop.classList.add("active")
  } else {
    navbar.classList.remove("scrolled")
    backToTop.classList.remove("active")
  }
})

// Mobile Menu Toggle
const navbarToggle = document.querySelector(".navbar-toggle")
const mobileMenu = document.querySelector(".mobile-menu")

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active")
  mobileMenu.classList.toggle("active")

  if (navbarToggle.classList.contains("active")) {
    navbarToggle.children[0].style.transform = "translateY(7px) rotate(45deg)"
    navbarToggle.children[1].style.opacity = "0"
    navbarToggle.children[2].style.transform = "translateY(-7px) rotate(-45deg)"
  } else {
    navbarToggle.children[0].style.transform = "none"
    navbarToggle.children[1].style.opacity = "1"
    navbarToggle.children[2].style.transform = "none"
  }
})

// Close Mobile Menu on Link Click
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
    navbarToggle.classList.remove("active")
    navbarToggle.children[0].style.transform = "none"
    navbarToggle.children[1].style.opacity = "1"
    navbarToggle.children[2].style.transform = "none"
  })
})

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
})

// Initialize Skill Progress Bars
const progressBars = document.querySelectorAll(".progress-bar")

progressBars.forEach((bar) => {
  const width = bar.getAttribute("data-width")
  bar.style.width = width
})

// Project Filtering
const filterBtns = document.querySelectorAll(".filter-btn")
const projectCards = document.querySelectorAll(".project-card")

filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Remove active class from all buttons
    filterBtns.forEach((btn) => btn.classList.remove("active"))

    // Add active class to clicked button
    this.classList.add("active")

    // Get filter value
    const filterValue = this.getAttribute("data-filter")

    // Filter projects
    projectCards.forEach((card) => {
      if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
        card.style.display = "block"
      } else {
        card.style.display = "none"
      }
    })
  })
})

// Close message
const closeButtons = document.querySelectorAll(".close-message")
closeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    this.parentElement.style.display = "none"
  })
})

// Auto-hide messages after 5 seconds
const messages = document.querySelectorAll(".message")
messages.forEach((message) => {
  setTimeout(() => {
    message.style.opacity = "0"
    message.style.transform = "translateX(100%)"
    setTimeout(() => {
      message.style.display = "none"
    }, 300)
  }, 5000)
})

