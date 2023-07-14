<style scoped lang="scss" src="./app-footer.scss"></style>
<script lang="ts" src="./app-footer.ts"></script>
<template>
  <div
    class="[ mx-10 lg1076:mx-auto py-5 ][ max-w-980 ][ flex justify-center ][ h-full ]"
  >
    <div class="[ login-input ]">
      <ul class="[ flex lg:flex-row flex-wrap items-center ]">
        <li
          v-for="language in languages"
          :key="language.name"
          class="[ text-xs ][ mr-3 ]"
        >
          <span
            :class="[
              'text-footerLink',
              'cursor-pointer',
              { 'hover:underline': !language.isLanguageActive },
            ]"
            :title="language.name"
          >
            {{ language.name }}
          </span>
        </li>
        <li
          class="[ hover:underline ][ text-xs ][ text-footerLink cursor-pointer border px-2 py-1 ]"
        >
          <i class="[ text-lg fa-solid fa-plus ]"></i>
        </li>
      </ul>

      <hr class="[ my-2 ]" />

      <div class="">
        <ul class="[ flex lg:flex-row flex-wrap ][ mb-0 ]">
          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]"
              >Sign Up</span
            >
          </li>
          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]"
              >Log In</span
            >
          </li>
          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]"
              >Messenger</span
            >
          </li>
          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]"
              >Facebook Lite</span
            >
          </li>
          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]"
              >Watch</span
            >
          </li>
          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]"
              >Places</span
            >
          </li>
          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]"
              >Games</span
            >
          </li>
          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]"
              >Marketplace</span
            >
          </li>
          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]"
              >Meta Play</span
            >
          </li>
          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]"
              >Oculus</span
            >
          </li>
          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]"
              >Portal</span
            >
          </li>
          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]"
              >Instagram</span
            >
          </li>
          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]"
              >Bulletin</span
            >
          </li>
          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]"
              >Fundraiser</span
            >
          </li>

          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]"
              >Services</span
            >
          </li>
          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]"
              >Voting Information Center</span
            >
          </li>
          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]"
              >Privacy Policy</span
            >
          </li>
          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]"
              >Privacy Center</span
            >
          </li>
          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]"
              >Groups</span
            >
          </li>
          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]"
              >About</span
            >
          </li>
          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]"
              >Create Ad</span
            >
          </li>
          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]"
              >Create Page</span
            >
          </li>
          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]"
              >Developers</span
            >
          </li>
          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]"
              >Careers</span
            >
          </li>
          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]"
              >Cookies</span
            >
          </li>
          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span
              href=""
              class="[ flex flex-row ][ text-footerLink cursor-pointer ]"
              ><p href="" class="[ mr-1 ]">Add choices</p>
              <span>
                <i class="fa-solid fa-play"></i> </span
            ></span>
          </li>

          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]"
              >Terms</span
            >
          </li>
          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]">Help</span>
          </li>
          <li class="[ hover:underline ][ text-xs ][ mr-3 ]">
            <span href="" class="[ text-footerLink cursor-pointer ]"
              >Contact Uploading & Non-Users</span
            >
          </li>
        </ul>
      </div>

      <div>
        <p
          class="[ hover:underline ][ text-ss text-footerLink cursor-pointer ][ my-2 ]"
        >
          Meta &copy; 2023
        </p>
      </div>
    </div>
  </div>
</template>
