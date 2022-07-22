<template>
  <div>
    <div class="landing">
      <div class="text-effect">
        <span>Na</span><span>th</span><span>ee</span><span>ra</span>
        <span>h</span><span></span><span>Ab</span><span>ra</span><span>ha</span
        ><span>ms</span>
      </div>
      <div class="sub-head">
        <p>Aspiring full stack developer</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Karla:wght@300;400&family=Playfair+Display:wght@800&display=swap");
.name p {
  font-family: "Playfair Display", serif;
  color: #aaaaaa;
  font-weight: lighter !important;
  font-size: 60px;
}

.sub-head {
  color: #aaaaaa;
  font-weight: lighter;
  font-family: "Cormorant", serif;
  font-size: 30px;
}
.landing {
  display: flex;
  flex-direction: column;
  padding-top: 12rem;
  height: 100vh;
}
.text-effect {
  color: #ffffff1a;
  font-family: "Libre Baskerville", serif;
  font-size: 100px;
  font-weight: 400;
  text-align: center;
  padding-top: 12rem;
}
.text-effect span {
  display: inline-block;
  animation: animate 2s infinite;
}
.text-effect span:nth-child(1) {
  animation-delay: 0.1s;
}
.text-effect span:nth-child(2) {
  animation-delay: 0.2s;
}
.text-effect span:nth-child(3) {
  animation-delay: 0.3s;
}
.text-effect span:nth-child(4) {
  animation-delay: 0.4s;
}
.text-effect span:nth-child(5) {
  animation-delay: 0.5s;
}
.text-effect span:nth-child(6) {
  animation-delay: 0.6s;
}
.text-effect span:nth-child(7) {
  animation-delay: 0.7s;
}
.text-effect span:nth-child(8) {
  animation-delay: 0.8s;
}
.text-effect span:nth-child(9) {
  animation-delay: 0.9s;
}
.text-effect span:nth-child(10) {
  animation-delay: 1s;
}
@keyframes animate {
  0%,
  100% {
    color: rgba(255, 255, 255, 0.1);
    margin-left: 0;
    transform: translateY(0);
  }
  25% {
    color: darkseagreen;
    margin-left: 10px;
    text-shadow: 0 30px 10px rgba(0, 0, 0, 1);
    transform: translateY(-15);
  }
}
@media only screen and (max-width: 990px) {
  .text-effect {
    font-size: 90px;
  }
}
@media only screen and (max-width: 767px) {
  .text-effect {
    font-size: 70px;
  }
}
@media only screen and (max-width: 576px) {
  .text-effect {
    font-size: 50px;
  }
}
@media only screen and (max-width: 479px) {
  .text-effect {
    font-size: 27px;
    line-height: 35px;
  }
  p {
    font-size: 22px;
  }
  .landing[data-v-d3e5d7c0] {
    display: flex;
    flex-direction: column;
    padding-top: 21rem;
    height: 600px;
  }
}
</style>
