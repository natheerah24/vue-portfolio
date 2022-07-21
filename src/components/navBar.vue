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
<style>
/* .nav-logo img {
  height: 350px;
} */
ul.menu-items {
  display: contents;
  list-style: none;
}
nav.navbar {
  height: 14rem;
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
  height: 13rem;
}
@media only screen and (max-width: 300px) {
  .nav-logo img {
    height: 350px;
    width: 100%;
  }
}
@media (max-width: 768px) {
  .navbar {
    opacity: 0.95;
  }

  .navbar-container input[type="checkbox"],
  .navbar-container .hamburger-lines {
    display: block;
  }

  .navbar-container {
    display: block;
    position: relative;
    height: 64px;
  }

  .navbar-container input[type="checkbox"] {
    position: absolute;
    display: block;
    height: 32px;
    width: 30px;
    top: 20px;
    left: 20px;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }

  .navbar-container .hamburger-lines {
    display: block;
    height: 28px;
    width: 35px;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .navbar-container .hamburger-lines .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: #333;
  }

  .navbar-container .hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.3s ease-in-out;
  }

  .navbar-container .hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out;
  }

  .navbar-container .hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.3s ease-in-out;
  }

  .navbar .menu-items {
    padding-top: 100px;
    background: #fff;
    height: 100vh;
    max-width: 300px;
    transform: translate(-150%);
    display: flex;
    flex-direction: column;
    margin-left: -40px;
    padding-left: 40px;
    transition: transform 0.5s ease-in-out;
    /* box-shadow: 5px 0px 10px 0px #aaa; */
    overflow: scroll;
  }

  .navbar .menu-items li {
    margin-bottom: 1.8rem;
    font-size: 1.1rem;
    font-weight: 500;
  }

  .logo {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 2.5rem;
  }

  .navbar-container input[type="checkbox"]:checked ~ .menu-items {
    transform: translateX(0);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
    transform: rotate(45deg);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
    transform: scaleY(0);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
    transform: rotate(-45deg);
  }
}

@media (max-width: 500px) {
  .navbar-container input[type="checkbox"]:checked ~ .logo {
    display: none;
  }
}
</style>
