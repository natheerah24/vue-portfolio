<template>
  <div id="About">
    <p class="about-head">About</p>
    <div class="row">
      <div class="col-md-6 my-auto">
        <div class="flipcard">
          <div class="text-effect">
            Hover Me
          </div>
          <div class="flip-card-inner">
            <div class="cardfront">
              <div id="about-img">
                <img src="../../assets/about.img.jpg" alt="" />
                
              </div>
            </div>
            <div class="cardback">
              <ul class="info">
                <li>Full name: Natheerah Abrahams</li>

                <li>Date of birth:24/4/2002</li>

                <li>Gender: Female</li>

                <li>Location: Cape Town</li>

                <li>Cell Phone number: 0678635117</li>

                <li>Email Address: natheerah24@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h2>Biography</h2>
        <p>
          As a person, I have several traits and behaviors that make me a decent
          person. My fundamental good habits include honoring my elders,
          greeting people when I meet them, and wishing them well when I leave.
          Another facet of my personality is honour. In today's world, honour is
          needed practically in everything we do. Honour helps an individual
          treat others with the utmost respect and keeps deception at bay.
        </p>
        <p>
          Social networking is something I try to keep moderate. Through these
          aspects, I believe I will be able to achieve my life goals and become
          a better person with each passing day.
        </p>
      </div>
    </div>
    <div class="skils">
      <div class="sk-style">
        <p class="about-head">Skills</p>
        <div class="skills-container" data-aos="zoom-out-up">
          <div class="card12">
            <i class="skills fa-brands fa-html5"></i>
          </div>
          <div class="card12">
            <i class="skills fa-brands fa-css3"></i>
          </div>
          <div class="card12">
            <i class="fa-solid fa-database"></i>
          </div>
          <div class="card12">
            <i class="fa-brands fa-vuejs"></i>
          </div>
          <div class="card12">
            <i class="fa-brands fa-js"></i>
          </div>
          <div class="card12">
            <i class="fa-brands fa-github"></i>
          </div>
          <div class="card12">
            <i class="fa-brands fa-wordpress"></i>
          </div>
          <div class="card12">
            <i class="fa-brands fa-node-js"></i>
          </div>
          <div class="card12">
            <i class="fa-brands fa-node"></i>
          </div>
          <div class="card12">
            <i class="fa-brands fa-figma"></i>
          </div>
          <div class="card12">
            <i class="fa-brands fa-bootstrap"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AOS from "aos";

export default {
  mounted() {
    AOS.init();
  },
};
</script>
<style scoped>
.about-head {
  font-family: "Playfair Display", serif;
  color: #aaaaaa;
  font-weight: lighter !important;
  font-size: 100px;
  padding-top: 8rem;
}
h1,
h2 {
  font-family: "Playfair Display", serif;
}
ul {
  margin-right: 27px;
  margin-top: 60px;
  list-style-type: none;
  font-family: "Cormorant", serif;
  font-size: 16px;
  text-shadow: 1px 1px 1px rgb(70, 70, 70);
}
img {
  width: 15rem;
  border-radius: 50px;
  height: 23rem;
}
#About {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(../../assets/landing-2.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  padding-left: 20rem;
  padding-right: 20rem;
  padding-bottom: 100px;
  height: fit-content;
}
#about-img {
  display: flex;
  flex-wrap: wrap;
}

.row {
  justify-content: center;
}
p {
  font-family: "Cormorant", serif;
  font-size: 20px;
  text-shadow: 1px 1px 1px rgb(70, 70, 70);
}
.flipcard {
  background-color: transparent;
  /* width: 100px; */
  height: 360px;
  /* border: 1px solid #f1f1f1; */
  perspective: 1000px; 
  /* height: 500px; */
  margin-right: 12rem;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
}

.flipcard:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.cardfront,
.cardback {
  position: absolute;
  width: 100%;
  height: 360px;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  width: 15rem;
  border-radius: 50px;
}

.cardfront {
  background-color: #bbb;
  color: black;
}


.cardback {
  background-color: darkseagreen;
  color: white;
  transform: rotateY(180deg);
}
#Skills {
  min-height: 100vh;
  padding: 5% 10%;
  background-color: #000000;
  background-size: cover;
  background-position: center;
  color: darkseagreen;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: stretch;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  width: 100%;
}
.card12 {
  box-shadow: 10px 4px 11px rgb(0, 0, 0, 1.5);
  width: 150px;
  height: 100px;
  text-align: center;
  /* background-color: #aaaaaa; */
}
.card12 > i {
  font-size: 60px;
  padding-top: 20px;
}
.sk-style {
  position: relative;
}
.skills-container .card12:hover {
  background-color: darkseagreen;
  color: white;
}
.skills {
  width: 60px;
  height: 50px;
  margin: auto;
  padding-top: 20px;
}
@media only screen and (max-width: 370px) {
  /* img[data-v-737ce6c4] {
    padding-left: 1rem;
  } */
  .cardfront {
    background-color: #bbb !important;
    color: black !important;
    width: 7rem !important;
    height: 12rem !important;
  }
  .about-head {
    font-family: "Playfair Display", serif !important;
    color: #aaaaaa !important;
    font-weight: lighter !important;
    font-size: 50px !important;
    padding-top: 70px !important;
  }
  #About {
    padding-left: 0rem !important;
    padding-right: 0rem !important;
    padding-top: 100px !important;
    width: 100% !important;
    overflow-x: hidden !important;
  }
  h2 {
    padding-top: 2rem !important;
  }
  .my-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
    margin-left: 4rem !important;
  }
}
@media only screen and (max-width: 680px) {
  .cardfront[data-v-737ce6c4] {
    background-color: #bbb !important;
    color: black !important;
    width: 7rem !important;
    height: 12rem !important;
  }
  .about-head[data-v-737ce6c4] {
    font-family: "Playfair Display", serif !important;
    color: #aaaaaa !important;
    font-weight: lighter !important;
    font-size: 50px !important;
    padding-top: 5rem !important;
  }
  #About {
    padding-left: 0rem !important;
    padding-right: 0rem !important;
    padding-top: 45px !important;
    width: 100% !important;
    overflow-x: hidden !important;
  }
  h2 {
    padding-top: 10rem !important;
  }
  .my-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
    margin-left: 12rem !important;
  }
}
@media only screen and (max-width: 400px){
.my-auto[data-v-3eb36c29] {
    margin-top: auto!important;
    margin-bottom: auto!important;
    margin-left: 12rem!important;
}
}
.text-effect{
    color: #aaaaaa;
    font-family: "Playfair Display", serif;
    font-size: 30px;
    text-align: center;
    text-transform: capitalize;
    animation: swing 1s linear infinite alternate;
}
@keyframes swing{
    0%{
        color: #aaaaaa;
        transform: rotate(5deg);
    }
    100%{
        color: #8fbc8f;
        transform: rotate(-5deg);
    }
}
@media only screen and (max-width: 990px){
    .text-effect{ font-size: 90px; }
}
@media only screen and (max-width: 767px){
    .text-effect{ font-size: 70px; }
}
@media only screen and (max-width: 576px){
    .text-effect{ font-size: 55px; }
}
@media only screen and (max-width: 479px){
    .text-effect{ font-size: 40px; }
}
</style>
