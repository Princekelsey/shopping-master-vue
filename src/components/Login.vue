<template>
  <div class="login">
    <!-- Modal -->
    <b-modal class="modal fade" id="login" ref="my-login" :hide-footer="isHidden">
      <ul class="nav nav-fill nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            id="pills-home-tab"
            data-toggle="pill"
            href="#pills-login"
            role="tab"
            aria-controls="pills-login"
            aria-selected="true"
          >Login</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="pills-register-tab"
            data-toggle="pill"
            href="#pills-register"
            role="tab"
            aria-controls="pills-register"
            aria-selected="false"
          >Signup</a>
        </li>
      </ul>

      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-login"
          role="tabpanel"
          aria-labelledby="pills-login-tab"
        >
          <h5 class="text-center">Login To Your Account</h5>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              v-model="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              @keyup.enter="login"
              v-model="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <div class="form-group text-center">
            <b-button pill variant="outline-primary" @click="login">Login</b-button>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-register"
          role="tabpanel"
          aria-labelledby="pills-register-tab"
        >
          <h5 class="text-center">Create New Account</h5>

          <div class="form-group">
            <label for="name">Display name</label>
            <input
              type="text"
              v-model="name"
              class="form-control"
              id="name"
              placeholder="unique name"
            />
          </div>

          <div class="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              v-model="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              v-model="password"
              class="form-control"
              id="password"
              placeholder="Password"
              @keyup.enter="register"
            />
          </div>

          <div class="form-group text-center">
            <b-button pill variant="outline-primary" @click="register">Signup</b-button>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { auth, createUserProfileDocument } from "../firebase";

export default {
  name: "Login",
  data() {
    return {
      name: null,
      email: null,
      password: null,
      currentUser: {},
      isHidden: true
    };
  },
  methods: {
    register() {
      if (this.name && this.email && this.password) {
        auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(res => {
            const { user } = res;
            const additionalData = { displayName: this.name };
            this.saveUser(user, additionalData);
            this.$refs["my-login"].hide();
            this.$router.replace("admin/overview");
          })
          .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode == "auth/weak-password") {
              alert("The password is too weak.");
            } else {
              alert(errorMessage);
            }
            console.log(error);
          });
      } else return;
    },
    login() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$refs["my-login"].hide();
          this.$router.replace("admin/overview");
          this.email = null;
          this.password = null;
        })
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            alert("Wrong password.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    },
    async saveUser(userAuth, additionalData) {
      try {
        const userRef = await createUserProfileDocument(
          userAuth,
          additionalData
        );
        const userSnapShop = await userRef.get();
        this.currentUser = { id: userSnapShop.id, ...userSnapShop.data() };
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
