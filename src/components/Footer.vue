<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="left">
        <div class="col-1">
          <router-link class="footer__branding" :to="{ name: 'home' }">
            MyBlog
          </router-link>

          <div class="footer__social">
            <a href="#"><youtube class="footer__social-icon" /></a>
            <a href="#"><twitter class="footer__social-icon" /></a>
            <a href="#"><linkedin class="footer__social-icon" /></a>
            <a href="#"><instagram class="footer__social-icon" /></a>
          </div>
        </div>

        <div class="col-2">
          <router-link class="link footer__link" to="#">Home</router-link>
          <router-link class="link footer__link" to="#">Blogs</router-link>
          <router-link v-if="user" class="link footer__link" to="#"
            >Create Post</router-link
          >
          <router-link v-if="!user" class="link footer__link" to="#"
            >Login/Register</router-link
          >
        </div>
      </div>

      <div class="right">
        <p class="footer__legal">
          Copyright {{ new Date().getFullYear() }}. All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import youtube from "../assets/Icons/youtube-brands.svg";
import twitter from "../assets/Icons/twitter-brands.svg";
import linkedin from "../assets/Icons/linkedin-brands.svg";
import instagram from "../assets/Icons/youtube-brands.svg";

export default {
  name: "Footer",
  components: {
    youtube,
    twitter,
    linkedin,
    instagram,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--primary-dark);
  padding: 7rem 2.5rem;
  display: flex;
  justify-content: center;

  &__container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media screen and (max-width: 750px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3rem;
    }
  }

  &__branding,
  &__link {
    font-weight: 500;
    color: var(--white);
  }

  &__branding {
    font-size: 2.4rem;
    text-decoration: none;
  }

  .left {
    display: flex;
    gap: 7rem;

    @media screen and (max-width: 750px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3rem;
    }
  }

  .col- {
    &1,
    &2 {
      display: flex;
      flex-direction: column;
    }

    &1 {
      gap: 3rem;

      @media screen and (max-width: 750px) {
        align-items: center;
      }
    }

    &2 {
      gap: 1.5rem;

      @media screen and (max-width: 750px) {
        flex-direction: row;
        align-items: center;
        gap: 3rem;
      }
    }
  }

  &__social {
    display: flex;
    align-items: center;
    gap: 2rem;

    &-icon {
      color: var(--white);
      height: 2rem;
      width: 2rem;
    }
  }

  &__legal {
    color: var(--white);
  }
}
</style>