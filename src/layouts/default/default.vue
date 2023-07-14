<style scoped lang="scss" src="./default.scss"></style>
<script lang="ts" src="./default.ts"></script>
<template>
  <div class="[ default h-full ]">
    <!-- Body -->

    <section
      class="[ pt-20px fblg:pt-72px pb-112px fblg:pb-48 ][ bg-bg-login ]"
    >
      <transition name="fade">
        <router-view />
      </transition>
    </section>

    <!-- Footer -->
    <section class="[ bg-white ]">
      <AppFooter />
    </section>
  </div>
</template>
