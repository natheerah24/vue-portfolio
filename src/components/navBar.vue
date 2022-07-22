<template>
  <div>
    <div class="nav">
      <nav class="navbar">
        <div class="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <div class="logo"><img src="../../assets/logo.png" alt="" /></div>
          <ul class="menu-items">
            <li><router-link to="/Home">Home</router-link></li>
            <li><router-link to="/About">About</router-link></li>
            <li><router-link to="/Resume">Resume</router-link></li>
            <li><router-link to="/Projects">Projects</router-link></li>
            <li><router-link to="/Testimonials">Testimonials</router-link></li>
            <li><router-link to="/Contact">Contact</router-link></li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
/* .nav-logo img {
  height: 350px;
} */
ul.menu-items {
  display: contents;
  list-style: none;
}
nav.navbar {
  height: 9rem;
  position: fixed;
  z-index: 1000;
}
.navbar input[type="checkbox"],
.navbar .hamburger-lines {
  display: none;
}
.navbar-container.container {
  height: 20rem;
  align-items: baseline;
}
nav .nav-links {
  position: sticky;
}
/* nav a {
  padding: 20px;
} */
nav {
  padding-bottom: 30px;
  /* position: fixed; */
  height: fit-content;
  background-color: white;
  width: 100%;
  top: 0%;
  display: flex;
  flex-direction: column;
}
nav a {
  font-weight: bold;
  color: #aaaaaa;
  text-decoration: none;
  font-family: "Cormorant", serif;
  font-weight: lighter;
}
nav a:hover {
  color: seagreen;
}
nav a.router-link-exact-active :hover {
  color: darkseagreen;
  text-decoration: none;
}
.nav {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
img {
  height: 7rem;
}
@media only screen and (max-width: 300px) {
  .nav-logo img {
    height: 350px !important;
    width: 100% !important;
  }
}
@media (max-width: 768px) {
  .navbar {
    opacity: 0.95 !important;
  }

  .navbar-container input[type="checkbox"],
  .navbar-container .hamburger-lines {
    display: block !important;
  }

  .navbar-container {
    display: block !important;
    position: relative !important;
    height: 64px !important;
  }

  .navbar-container input[type="checkbox"] {
    position: absolute !important;
    display: block !important;
    height: 32px !important;
    width: 30px !important;
    top: 20px !important;
    left: 20px !important;
    z-index: 5 !important;
    opacity: 0 !important;
    cursor: pointer !important;
  }

  .navbar-container .hamburger-lines {
    display: block !important;
    height: 28px !important;
    width: 35px !important;
    position: absolute !important;
    top: 20px !important;
    left: 20px !important;
    z-index: 2 !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
  }

  .navbar-container .hamburger-lines .line {
    display: block;
    height: 4px !important;
    width: 100% !important;
    border-radius: 10px !important;
    background: #333 !important;
  }

  .navbar-container .hamburger-lines .line1 {
    transform-origin: 0% 0% !important;
    transition: transform 0.3s ease-in-out !important;
  }

  .navbar-container .hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out !important;
  }

  .navbar-container .hamburger-lines .line3 {
    transform-origin: 0% 100% !important;
    transition: transform 0.3s ease-in-out !important;
  }

  .navbar .menu-items {
    padding-top: 100px !important;
    background: #fff !important;
    height: 100vh !important;
    max-width: 300px !important;
    transform: translate(-150%) !important;
    display: flex !important;
    flex-direction: column !important;
    margin-left: -40px !important;
    padding-left: 40px !important;
    transition: transform 0.5s ease-in-out !important;
    /* box-shadow: 5px 0px 10px 0px #aaa; */
    overflow: scroll !important;
  }

  .navbar .menu-items li {
    margin-bottom: 1.8rem !important;
    font-size: 1.1rem !important;
    font-weight: 500 !important;
  }

  .logo {
    position: absolute !important;
    top: 10px !important;
    right: 15px !important;
    font-size: 2.5rem !important;
  }

  .navbar-container input[type="checkbox"]:checked ~ .menu-items {
    transform: translateX(0) !important;
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
    transform: rotate(45deg) !important;
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
    transform: scaleY(0) !important;
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
    transform: rotate(-45deg) !important;
  }
}

@media (max-width: 500px) {
  .navbar-container input[type="checkbox"]:checked ~ .logo {
    display: none !important;
  }
}
@media (max-width: 300px) {
  nav.navbar[data-v-68781400] {
    height: 10rem !important;
    width: 110% !important;
  }
}
</style>
