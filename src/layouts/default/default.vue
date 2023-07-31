<style scoped lang="scss" src="./default.scss"></style>
<script lang="ts" src="./default.ts"></script>
<template>
  <div class="[ default h-full ]">
    <!-- Body -->

    <section class="[ pt-20px 899:pt-72px pb-112px 899:pb-48 ][ bg-#f0f2f5 ]">
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
