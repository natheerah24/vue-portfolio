<template>
  <div id="Testimonials">
    <p class="Test-head">Testimonials</p>
    <div class="container">
      <div class="row">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="col-md-4 col-sm-6"
        >
          <div class="our-team">
            <div class="pic">
              <img :src="testimonial.img" alt="" />
            </div>
            <div class="team-content">
              <h3 class="team-title">{{ testimonial.name }}</h3>
              <span class="post">{{ testimonial.role }}</span>
              <p class="description">{{ testimonial.desc }}</p>
              <ul class="social-links">
                <li>
                  <a
                    :href="testimonial.linkedin"
                    target="_blank"
                    class="fab fa-linkedin"
                  ></a>
                </li>
                <li>
                  <a
                    :href="testimonial.github"
                    target="_blank"
                    class="fa-brands fa-github"
                  ></a>
                </li>
                <li>
                  <a
                    :href="testimonial.codepen"
                    target="_blank"
                    class="fa-brands fa-codepen"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      testimonials: [
        {
          id: "1",
          name: "Jason Wandrag",
          desc: "Natheerah has shown to be an extremely dedicated and diligent individual who can produce quality work as well as work well within a team. Natheerah is definitely going to be a big asset to any company she joins.",
          role: "Lecturer",
          github: "https://github.com/JasonWandrag",
          codepen: "https://codepen.io/Chryptolite",
          linkedin: "https://www.linkedin.com/in/jason-wandrag-004b1512b",
          img: "https://i.postimg.cc/nc01Cxmm/IMG-20220511-WA0005.jpg",
        },
        {
          id: "2",
          name: "Fatima Galant",
          desc: "  Natheerah is a bright, resilient and creative individual. She always goes above and beyond all expectations when faced with a project or stressful situation. Her individuality will always be something to be admired. Working alongside her has been an absolute joy and I would personally recommend her.",
          role: "Colleague",
          github: "https://github.com/fatimagalant",
          codepen: "https://codepen.io/fatimagalant",
          linkedin: "https://www.linkedin.com/in/fatima-g-778944228",
          img: "https://i.postimg.cc/Qx4pjbLk/Fatima.jpg",
        },
        {
          id: "3",
          name: "Zoe Van Der Schyff",
          desc: "  Natheerah Abrahams is well mannered and has good communication skills ,she is consistent in working hard and pushing herself to achieve her goals.",
          role: "Colleague",
          github: "https://github.com/zoevds/zoevds",
          codepen: "https://codepen.io/zoevds",
          linkedin: "https://www.linkedin.com/in/zoe-van-der-schyff-0060b023a",
          img: "https://i.postimg.cc/8cyrP1YP/Zoe.jpg",
        },
        {
          id: "4",
          name: "Ricardo Ronan Moses",
          desc: "Natheerah Abrahams is a very outspoken person and she brings lots of joy to a room. She is not afraid to ask assistance when needed.",
          role: "Colleague",
          github: "https://github.com/RicardoRonan",
          codepen: "https://codepen.io/ricardoronan",
          linkedin: "https://www.linkedin.com/in/ricardo-moses-363706231",
          img: "https://i.postimg.cc/yNVQWk7q/Ricardo-3.jpg",
        },
        {
          id: "5",
          name: "Ashwin Jacobs",
          desc: "Natheerah Abrahams has the ability to complete tasks on time, if not earlier. Her planning before taking action is always consistent, and I'm impressed by her work. I know that Natheerah Abrahams has the  ability and skills  that will fit perfectly in a employee setting and would be an excellent addition to your company.",
          role: "Colleague",
          github: "https://github.com/AshwinJacobs",
          codepen: "https://codepen.io/ashwinjacobs",
          linkedin: "https://www.linkedin.com/in/ashwin-dean-0956b0199/",
          img: "https://i.postimg.cc/WzbTn2Gx/Ashwin-3.jpg",
        },
        {
          id: "6",
          name: "Godwin Dzvapatsva",
          desc: "Natheerah has a very gentle personality. I am confident that she will continue to be productive and always willing to learn new concepts. Natheerah has shown great potential in building web applications using HTML, CSS, JavaScript, and VueJs. I recommend her.",
          role: "Head of Curriculum and Learning",
          github: "",
          codepen: "",
          linkedin: "https://www.linkedin.com/in/gpdzvapatsva",
          img: "https://i.postimg.cc/mDsWVQfP/godwin-2022.jpg",
        },
      ],
    };
  },
};
</script>
<style scoped>
p {
  font-family: "Playfair Display", serif;
  color: #aaaaaa;
  font-weight: lighter !important;
  font-size: 100px;
}
#Testimonials {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(../../assets/landing-2.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 50px;
  height: fit-content;
}
div#Testimonials {
  padding-top: 10rem;
}
.col-md-4.col-sm-6 {
  padding-top: 20px;
}
.our-team {
  border-top: 1px solid #fff;
  background: #fff;
  border-radius: 5px;
  margin-top: 72px;
}
.team-content {
  height: 17rem;
}
.our-team .pic {
  width: 40%;
  border: 3px solid #fff;
  border-radius: 60px 0;
  margin: -72px auto 0;
  overflow: hidden;
  transition: all 0.2s ease 0s;
}
.our-team:hover .pic {
  border-radius: 50%;
  border-color: darkseagreen;
}
.our-team .pic img {
  width: 100%;
  height: auto;
}
.our-team .team-content {
  text-align: center;
  position: relative;
  overflow: hidden;
}
.our-team .team-title {
  font-size: 24px;
  color: #333;
  margin: 20px 0 0;
  text-transform: uppercase;
}
.our-team .post {
  font-size: 16px;
  color: #333;
  display: block;
  margin-bottom: 15px;
}
.our-team .description {
  font-family: "Cormorant", serif;
  font-size: 16px;
  font-weight: 300;
  color: #333;
  padding: 0 35px;
  line-height: 22px;
  margin-bottom: 60px;
}
.our-team .social-links {
  width: 100%;
  height: 20%;
  position: absolute;
  bottom: -17%;
  left: 0;
  margin: 0;
  padding: 9px 0;
  list-style: none;
  background: darkseagreen;
  transition: all 0.2s linear 0s;
}
.our-team:hover .social-links {
  bottom: 0;
}
.our-team .social-links li {
  display: inline-block;
  margin: 0 5px;
}
.our-team .social-links li a {
  width: 35px;
  height: 35px;
  line-height: 35px;
  border-radius: 50%;
  font-size: 20px;
  color: #fff;
  border: 1px solid #fff;
}
.our-team .social-links li a:hover {
  text-decoration: none;
}
@media only screen and (max-width: 990px) {
  .our-team {
    margin-top: 80px !important;
  }
}
@media only screen and (max-width: 300px) {
  .Test-head {
    font-family: "Playfair Display", serif !important;
    color: #aaaaaa !important;
    font-weight: lighter !important;
    font-size: 40px !important;
  }
  .team-content {
    height: 22rem !important;
  }
  div#Testimonials {
    padding-top: 8rem !important;
  }
}
@media only screen and (max-width: 680px) {
  .team-content[data-v-563c85bc] {
    height: 25rem !important;
  }
}
@media only screen and (max-width: 400px) {
   .Test-head {
  font-size: 40px !important;
   }
}
</style>
