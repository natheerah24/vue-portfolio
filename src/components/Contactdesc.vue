<template>
  <div id="Contact">
    <p>Get in touch</p>

    <div class="form-bg">
      <div class="container">
        <div class="row">
          <div class="col-md-offset-3 col-md-6">
            <form
              action="https://formspree.io/f/xpzbvprj"
              method="POST"
              class="form-horizontal"
            >
              <div class="form-group">
                <label
                  class="col-md-3 col-sm-2 control-label"
                  for="exampleInputFirstName2"
                  >First Name</label
                >
                <div class="col-md-9 col-sm-10">
                  <input
                    type="name"
                    class="form-control"
                    id="exampleInputFirstName2"
                    placeholder="Eg.Steve"
                    required
                    name="name"
                  />
                </div>
              </div>
              <div class="form-group">
                <label
                  class="col-md-3 col-sm-2 control-label"
                  for="exampleInputLastName2"
                  >Last Name</label
                >
                <div class="col-md-9 col-sm-10">
                  <input
                    type="name"
                    class="form-control"
                    id="exampleInputLastName2"
                    placeholder="Eg.Thomas"
                    required
                    name="surname"
                  />
                </div>
              </div>
              <div class="form-group">
                <label
                  class="col-md-3 col-sm-2 control-label"
                  for="exampleInputLastName2"
                  >Email Address</label
                >
                <div class="col-md-9 col-sm-10">
                  <input
                    type="name"
                    class="form-control"
                    id="exampleInputLastName2"
                    placeholder="Eg.stevethomas@gmail.com"
                    required
                    name="email"
                  />
                </div>
              </div>
              <div class="form-group">
                <label
                  class="col-md-3 col-sm-2 control-label"
                  for="exampleInputLastName2"
                  >Message</label
                >
                <div class="col-md-9 col-sm-10">
                  <input
                    type="name"
                    class="form-control"
                    id="exampleInputLastName2"
                    placeholder="Start typing"
                    required
                    name="message"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-offset-3 col-sm-offset-2 col-sm-3">
                  <button type="submit" class="btn btn-default">Submit</button>
                </div>
              </div>
            </form>
            <div class="socials">
              <a href="https://github.com/natheerah24" target="_blank"
                ><i class="fa-brands fa-github"></i
              ></a>
              <a href="https://codepen.io/natheerah24" target="_blank">
                <i class="fa-brands fa-linkedin"></i
              ></a>
              <a
                href="https://www.linkedin.com/in/natheerah-abrahams-274b22208/
"
                target="_blank"
                ><i class="fa-brands fa-codepen"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
p {
  font-family: "Playfair Display", serif;
  color: #aaaaaa;
  font-weight: lighter !important;
  font-size: 100px;
}
#Contact {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(../../assets/landing-2.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
}
label {
  color: #aaaaaa;
}
.row {
  justify-content: center;
}
/* .form-bg {
  background: linear-gradient(to right, #014d6f 10%, #2b8e8b);
  font-family: "Roboto", sans-serif;
  color: #fff;
} */
.form-horizontal .form-group {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
}
.form-horizontal .form-control {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  height: 44px;
  line-height: 2;
  color: #fff;
  padding: 10px 15px;
}
.form-horizontal .form-control:focus {
  border-color: #fff;
  box-shadow: 0 1px 3px rgba(255, 255, 255, 0.5);
  outline: 0 none;
}
.form-horizontal .form-control::-moz-placeholder {
  color: #fff;
  opacity: 0.5;
}
.form-horizontal .check {
  display: none;
}
.form-horizontal .check + label {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  padding: 10px 0;
  color: #fff;
  width: 48.4%;
  text-align: center;
  font-size: 15px;
  margin-right: 10px;
}
div#Contact {
  padding-top: 10rem;
}
.form-horizontal #check2 + label {
  margin-right: 0;
}
.form-horizontal .check:checked + label {
  background: #fff;
  color: darkseagreen;
}
.form-horizontal select.form-control option {
  color: #000;
  background: #fff;
}
.form-horizontal .btn {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.4);
  border: none;
  padding: 10px 30px;
  font-weight: 600;
  transition: all 0.2s ease 0s;
}
.form-horizontal .btn:hover {
  color: darkseagreen;
  background: #fff;
}
.socials {
  /* position: fixed;
  z-index: 1000;
  right: 3%;
  bottom: 3%;*/
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  padding-top: 10px;
  padding-bottom: 30px;
}
.socials i {
  font-size: 30px;
  color: white;
}
.socials i:hover {
  color: darkseagreen;
}
@media only screen and (max-width: 479px) {
  .check + label {
    width: 48% !important;
  }
}
@media only screen and (max-width: 300px) {
  p[data-v-2e78df9e] {
    font-family: "Playfair Display", serif !important;
    color: #aaaaaa !important;
    font-weight: lighter !important;
    font-size: 50px !important;
  }
  div#Contact {
    padding-top: 10rem !important;
  }
}
</style>
