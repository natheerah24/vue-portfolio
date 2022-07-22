<template>
  <div id="Resume">
    <p class="resume-head">Resume</p>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="main-timeline">
            <div class="timeline">
              <span class="timeline-icon"></span>
              <span class="year">2022</span>
              <div class="timeline-content">
                <h3 class="title">Life Choices Academy</h3>
                <span class="post">Full-stack Developer</span>
                <p class="description">
                  An academy that delivers job-training programs intended to
                  give school leavers the skills and direction they need to land
                  meaningful and good-paying jobs. I have learned how to create
                  responding websites using HTML, CSS, Bootsrap, JavaScript and
                  Vue.
                </p>
              </div>
            </div>

            <div class="timeline">
              <span class="timeline-icon"></span>
              <span class="year">2021 - 2022</span>
              <div class="timeline-content">
                <h3 class="title">Clicks Pharmacy</h3>
                <span class="post">Shop Assistant Cashier</span>
                <p class="description">
                  A health and beauty retailer. I casualed during the end of
                  year holidays as a cashier and assisted customers.I carried
                  out cash management and customer services
                </p>
              </div>
            </div>
          </div>

          <div class="main-timeline">
            <div class="timeline">
              <span class="timeline-icon"></span>
              <span class="year">2019</span>
              <div class="timeline-content">
                <h3 class="title">The Leadership College</h3>
                <span class="post">Student</span>
                <p class="description">
                  The Leadership College is a/an Urban Independent Combined
                  School located in Manenberg City Of Cape Town. I completed 5
                  years of schooling here.I obtained a National Senior
                  Certificate.
                </p>
              </div>
            </div>

            <div class="timeline">
              <span class="timeline-icon"></span>
              <span class="year">2017</span>
              <div class="timeline-content">
                <h3 class="title">Sanlam</h3>
                <span class="post">Job shadower</span>
                <p class="description">
                  A South African financial services group. My job was focused
                  on administration and filing of documents.I served a helping
                  hand to the staff with their documents and administration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
p {
  font-family: "Playfair Display", serif;
  color: #aaaaaa;
  font-weight: lighter !important;
  font-size: 100px;
}
p.resume-head {
  padding-top: 8rem;
}
#Resume {
  height: 150vh;
}
.main-timeline {
  overflow: hidden;
  position: relative;
}
.main-timeline:before {
  content: "";
  width: 3px;
  height: 100%;
  background: #d6d5d5;
  position: absolute;
  top: 0;
  left: 50%;
}
.main-timeline .timeline {
  padding-right: 30px;
  position: relative;
}
.main-timeline .timeline:before,
.main-timeline .timeline:after {
  content: "";
  display: block;
  width: 100%;
  clear: both;
}
/* .main-timeline .timeline:first-child:before
{
  content: "";
  width: 13px;
  height: 13px;
  border-radius: 50%;
  border: 2px solid #d6d5d5;
  background: #fff;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  right: -3px;
} */

.main-timeline .timeline-icon {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid #d6d5d5;
  box-sizing: content-box;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: -4px;
}
.main-timeline .timeline-icon:before {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: darkseagreen;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.main-timeline .year {
  display: inline-block;
  padding: 8px 20px;
  margin: 0;
  font-size: 14px;
  color: #fff;
  background: darkseagreen;
  text-align: center;
  position: absolute;
  top: 50%;
  right: 35%;
  transform: translateY(-50%);
}
.main-timeline .year:before {
  content: "";
  border-right: 18px solid darkseagreen;
  border-top: 18px solid transparent;
  border-bottom: 18px solid transparent;
  position: absolute;
  top: 0;
  left: -18px;
}
.main-timeline .timeline-content {
  width: 46.5%;
  padding: 43px 50px;
  margin: 0 20px 0 0;
  background: #f2f2f2;
  position: relative;
}
.main-timeline .timeline-content:after {
  content: "";
  border-left: 20px solid #f2f2f2;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  position: absolute;
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
}
.main-timeline .title {
  font-family: "Playfair Display", serif;
  float: left;
  font-size: 24px;
  font-weight: bold;
  color: #504f54;
  margin: 0 20px 20px 0;
}
.main-timeline .post {
  display: inline-block;
  font-size: 14px;
  color: #999;
  margin-top: 6px;
}
.main-timeline .description {
  font-family: "Cormorant", serif;
  font-size: 14px;
  color: #7d7b7b;
  line-height: 24px;
  margin: 0;
  clear: both;
}
.main-timeline .timeline:nth-child(2n) {
  padding: 0 0 0 30px;
}
.main-timeline .timeline:nth-child(2n) .year {
  right: auto;
  left: 35%;
}
.main-timeline .timeline:nth-child(2n) .year:before {
  border: 18px solid transparent;
  border-right: none;
  border-left: 18px solid darkseagreen;
  left: auto;
  right: -18px;
}
.main-timeline .timeline:nth-child(2n) .timeline-content {
  float: right;
  margin: 0 0 0 20px;
}
.main-timeline .timeline:nth-child(2n) .timeline-content:after {
  border-left: none;
  border-right: 20px solid #f2f2f2;
  right: auto;
  left: -20px;
}
#Resume {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(../../assets/landing-2.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}

@media only screen and (max-width: 1200px) {
  #Resume {
    height: auto;
  }
  .main-timeline .year {
    right: 30% !important;
  }
  .main-timeline .timeline:nth-child(2n) .year {
    left: 30% !important;
  }
}
@media only screen and (max-width: 990px) {
  .main-timeline .year {
    right: 25% !important;
  }
  .main-timeline .timeline:nth-child(2n) .year {
    left: 25% !important;
  }
}
@media only screen and (max-width: 767px) {
  .main-timeline:before {
    left: 10px !important;
  }
  .main-timeline .timeline {
    padding: 0 0 0 30px !important;
    margin-bottom: 20px !important;
  }
  .main-timeline .timeline:last-child {
    margin-bottom: 0 !important;
  }
  .main-timeline .timeline:last-child:before {
    display: none !important;
  }
  .main-timeline .timeline-icon {
    margin: 0 !important;
    position: absolute !important;
    top: 7px !important;
    left: 0 !important;
  }
  .main-timeline .year,
  .main-timeline .timeline:nth-child(2n) .year {
    display: block !important;
    font-weight: bold !important;
    margin: 0 0 32px 30px !important;
    z-index: 1 !important;
    position: relative !important;
    top: auto !important;
    left: auto !important;
    right: auto !important;
    transform: none !important;
  }
  .main-timeline .timeline:nth-child(2n) .year:before {
    border-left: none !important;
    border-right: 18px solid darkseagreen !important;
    right: auto !important;
    left: -18px !important;
  }
  .main-timeline .timeline-content {
    padding: 20px !important;
  }
  .main-timeline .timeline-content,
  .main-timeline .timeline:nth-child(2n) .timeline-content {
    width: auto !important;
    float: none !important;
    margin: 0 0 0 30px !important;
  }
  .main-timeline .timeline-content:after,
  .main-timeline .timeline:nth-child(2n) .timeline-content:after {
    border: none !important;
    border-bottom: 20px solid #f2f2f2 !important;
    border-left: 20px solid transparent !important;
    border-right: 20px solid transparent !important;
    top: -20px !important;
    left: 50% !important;
    right: auto !important;
    transform: translateX(-50%) !important;
  }
}
@media only screen and (max-width: 480px) {
  .main-timeline .title {
    float: none !important;
    margin: 0 !important;
  }
  .main-timeline .year,
  .main-timeline .timeline:nth-child(2n) .year {
    margin-left: 20px !important;
  }
  .main-timeline .timeline-content,
  .main-timeline .timeline:nth-child(2n) .timeline-content {
    margin-left: 10px !important;
  }
  .main-timeline .post {
    margin: 5px 0 !important;
  }
}
@media only screen and (max-width: 370px) {
  p[data-v-b8489924] {
    font-family: "Playfair Display", serif;
    color: #aaaaaa;
    font-weight: lighter !important;
    font-size: 50px;
  }
  #Resume[data-v-b8489924] {
    background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
      url(http://localhost:8080/img/landing-2.1b18f45b.jpg) !important;
    background-attachment: fixed !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    height: fit-content !important;
    padding-bottom: 25px !important;
  }
}
@media only screen and (max-width: 480px) {
  .main-timeline .year[data-v-b8489924],
  .main-timeline .timeline:nth-child(2n) .year[data-v-b8489924] {
    margin-left: 20px !important;
    margin-top: 20px !important;
  }

  p.resume-head {
    padding-top: 8rem !important;
  }
}
@media only screen and (max-width: 680px) {
  .main-timeline .year[data-v-b8489924],
  .main-timeline .timeline:nth-child(2n) .year[data-v-b8489924] {
    margin-left: 20px !important;
    margin-top: 20px !important;
  }
  p{
    font-family: "Playfair Display", serif;
    color: #aaaaaa;
    font-weight: lighter !important;
    font-size: 50px !important;
  }
  #Resume[data-v-b8489924] {
    background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
      url(http://localhost:8080/img/landing-2.1b18f45b.jpg) !important;
    background-attachment: fixed !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    height: fit-content !important;
    padding-bottom: 25px !important;
  }
  div#Resume {
    padding-bottom: 5rem;
  }
  p.resume-head {
    padding-top: 7rem!important;
    font-size: 50px !important;
}
}

@media only screen and (max-width: 400px){
p.resume-head[data-v-e6c19d2a] {
    padding-top: 7rem!important;
    font-size: 50px !important;
}
}
@media only screen and (max-width: 300px){
p.resume-head[data-v-e6c19d2a] {
    padding-top: 7rem!important;
    font-size: 50px !important;
}
 p[data-v-b8489924] {
    font-family: "Playfair Display", serif;
    color: #aaaaaa;
    font-weight: lighter !important;
    font-size: 50px !important;
}
}
</style>
