<template>
  <div id="Projects">
    <p class="text-center">Projects</p>
    <div class="container">
      <div class="proj">
        <div class="box" v-for="project in projects" :key="project.id">
          <img :src="project.img" alt="" />
          <div class="box-content">
            <ul class="icon">
              <li>
                <a :href="project.hostedLink" target="_blank"
                  ><i class="fa-solid fa-eye"></i
                ></a>
              </li>
              <li>
                <a :href="project.github" target="_blank"
                  ><i class="fa-brands fa-github"></i
                ></a>
              </li>
            </ul>
            <h3 class="title">{{ project.name }}</h3>
            <span class="post">{{ project.description }}</span>
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
      projects: [
        {
          id: 1,
          name: "Calculator",
          description:
            "Fully functional calculator made with HTML, CSS, Bootstrap and JavaScript",
          githubLink: "https://github.com/natheerah24/calculator",
          hostedLink: "https://calculator-natheerah.netlify.app/",
          img: "https://i.postimg.cc/2ym5Ft1W/calculator-2.jpg",
        },
        {
          id: 2,
          name: "Mock Portfolio",
          description: "A portfolio made with HTML and CSS ",
          githubLink: "https://github.com/natheerah24/mockportfolio",
          hostedLink: "https://singular-puppy-a83b44.netlify.app/",
          img: "https://i.postimg.cc/sDYNNNvX/mock-portfolio.png",
        },
        {
          id: 3,
          name: "Portfolio",
          description: "A portfolio made with HTML, CSS and Bootsrap",
          githubLink: "https://github.com/natheerah24/Portfolio_Project",
          hostedLink: "https://natheerah-abrahams.netlify.app/",
          img: "https://i.postimg.cc/FK3dy3T2/portfolio.png",
        },
        {
          id: 4,
          name: "Property Sales",
          description:
            "A listing site for houses made with HTML, CSS and JavaScript",
          githubLink: "https://github.com/natheerah24/Property-challenge",
          hostedLink: "https://properties-4-sale.netlify.app/",
          img: "https://i.postimg.cc/Zqbnd2yy/properties.png",
        },
        {
          id: 5,
          name: "Restaurant",
          description:
            "An online booking site for a restaurant made with HTML, CSS and Bootstrap",
          githubLink: "https://github.com/natheerah24/restaurant",
          hostedLink: "https://restaurant-by-natheerah.netlify.app/",
          img: "https://i.postimg.cc/PJQ53n9H/restaurant.png",
        },
        {
          id: 6,
          name: "Scale",
          description:
            "A fully functional BMI scale made with HTML, CSS and Bootstap",
          githubLink: "https://github.com/natheerah24/BMI-calculator",
          hostedLink: "https://bmi-calculator-natheerah.netlify.app/",
          img: "https://i.postimg.cc/C5czMVNN/scale.jpg",
        },
        {
          id: 7,
          name: "Temperature Converter",
          description:
            "A functional temperature converter that converts degrees to fahrenheit and vice versa made with HTML, CSS, Bootstrap and JavaScript",
          githubLink: "https://github.com/natheerah24/tempertature-converter",
          hostedLink: "https://temperature-converter-natheerah.netlify.app/",
          img: "https://i.postimg.cc/28FfZwRs/temp.jpg",
        },
        {
          id: 8,
          name: "To do list",
          description:
            "A fully functinal to do list that update and delete, made with HTML, CSS and JavaScript",
          githubLink: "https://github.com/natheerah24/To-do-list",
          hostedLink: "https://to-do-list-natheerah.netlify.app/",
          img: "https://i.postimg.cc/Jnq2hTBx/to-do-list.jpg",
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
label.col-md-3.col-sm-2.control-label {
  font-family: "Cormorant", serif;
}
.proj {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
#Projects {
  padding-bottom: 50px;
  height: fit-content;
}
.box {
  font-family: "Raleway", sans-serif;
  box-shadow: rgba(50, 50, 80, 0.5) 0px 14px 18px -12px,
    rgba(0, 0, 0, 0.8) 0px 14px 15px -13px;
  border-radius: 7px;
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 300px;
}
.box:before,
.box:after {
  content: "";
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 50%;
  transform-origin: left;
  transform: scaleX(0);
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s cubic-bezier(0.66, 0.08, 0.19, 0.97);
}
.box:after {
  top: auto;
  bottom: 0;
  transition-delay: 0.15s;
}
.box:hover:before,
.box:hover:after {
  transform: scaleX(1);
}
.box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.box .box-content {
  color: #fff;
  width: 100%;
  padding: 15px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
}
.box .title {
  font-size: 22px;
  font-weight: 700;
  font-family: "Playfair Display", serif;
  text-transform: uppercase;
  margin: 0 0 3px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.3s ease 0s;
}
.box .post {
  font-size: 15px;
  font-weight: 500;
  font-style: italic;
  font-family: "Cormorant", serif;
  letter-spacing: 1px;
  text-transform: capitalize;
  display: block;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.3s ease 0.15s;
}
.box:hover .title,
.box:hover .post {
  opacity: 1;
  transform: translateY(0);
}
div#Projects {
  padding-top: 10rem;
}
.box .icon {
  padding: 0;
  margin: 0 0 10px;
  list-style: none;
}
.box .icon li {
  margin: 0 6px 0 0;
  display: inline-block;
  opacity: 0;
  transform: rotateX(90deg);
  transition: all 0.3s ease-in-out 0.2s;
}
.box .icon li:nth-child(2) {
  transition-delay: 0.3s;
}
.box:hover .icon li {
  opacity: 1;
  transform: rotateX(0deg);
}
.box .icon li a {
  color: darkseagreen;
  background: #fff;
  font-size: 18px;
  text-align: center;
  line-height: 34px;
  height: 34px;
  width: 34px;
  display: block;
  transition: all 0.3s ease-in-out;
}
.box .icon li a:hover {
  color: #fff;
  background: darkseagreen;
  border-radius: 10px 10px;
}
#Projects {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(../../assets/landing-2.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}
@media only screen and (max-width: 990px) {
  .box {
    margin: 0 0 30px !important;
  }
}
@media only screen and (max-width: 300px) {
  p[data-v-3a5e3e8a] {
    font-family: "Playfair Display", serif;
    color: #aaaaaa;
    font-weight: lighter !important;
    font-size: 50px;
  }

  div#Projects {
    padding-top: 8rem !important;
  }
}
</style>
