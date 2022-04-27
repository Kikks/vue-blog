<template>
  <nav class="nav">
    <div class="container nav__container">
      <div class="branding">
        <router-link class="branding__text" :to="{ name: 'home' }">
          MyBlog
        </router-link>
      </div>

      <div class="nav__links">
        <router-link class="link nav__link" to="#">Home</router-link>
        <router-link class="link nav__link" to="#">Blogs</router-link>
        <router-link class="link nav__link" to="#">Create Post</router-link>
        <router-link class="link nav__link" to="#">Login/Register</router-link>
      </div>

      <menu-icon class="menu-icon" @click="toggleMobileNav" />
    </div>

    <transition name="mobile-nav">
      <div class="mobile-nav" v-show="mobileNav">
        <router-link class="link mobile-nav__link" to="#">Home</router-link>
        <router-link class="link mobile-nav__link" to="#">Blogs</router-link>
        <router-link class="link mobile-nav__link" to="#"
          >Create Post</router-link
        >
        <router-link class="link mobile-nav__link" to="#"
          >Login/Register</router-link
        >
      </div>
    </transition>
  </nav>
</template>

<script>
import menuIcon from "../assets/Icons/bars-regular.svg";

export default {
  name: "Navigation",
  components: {
    "menu-icon": menuIcon,
  },
  data() {
    return {
      mobileNav: false,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      if (window.innerWidth > 600) {
        this.mobileNav = false;
      }
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  background-color: #fff;
  padding: 0 2.5rem;
  z-index: 50;
  box-shadow: 0 0.4rem 0.6rem -1rem rgba($color: #000000, $alpha: 0.1),
    0 0.2rem 0.4rem rgba($color: #000000, $alpha: 0.06);

  &__links {
    @media screen and (max-width: 600px) {
      display: none;
    }
  }

  &__link {
    font-weight: 500;
    padding: 0 0.8rem;
    transition: color 0.3s;
    margin-left: 2rem;

    &:hover {
      color: var(--primary);
    }
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 0;

    & .branding {
      display: flex;
      align-items: center;

      &__text {
        font-size: 2.4rem;
        font-weight: 600;
        color: var(--black);
        text-decoration: none;
      }
    }
  }
}

.menu-icon {
  cursor: pointer;
  height: 2rem;
  width: 2rem;

  @media screen and (min-width: 601px) {
    display: none;
  }
}

.mobile-nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 70%;
  max-width: 25rem;
  height: 100vh;
  padding: 10rem 2rem;
  display: flex;
  flex-direction: column;
  background-color: var(--primary);
  z-index: 60;
  user-select: none;

  &__link {
    font-weight: 500;
    color: var(--white);
    margin: 1rem 0;
  }
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 0.5s ease;
}

.mobile-nav-enter,
.mobile-nav-leave-to {
  transform: translateX(-25rem);
}

.mobile-nav-enter-to,
.mobile-nav-leave {
  transform: translateX(0);
}
</style>