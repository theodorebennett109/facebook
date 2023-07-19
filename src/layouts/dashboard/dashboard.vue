<style scoped lang="scss" src="./dashboard.scss"></style>
<script lang="ts" src="./dashboard.ts"></script>
<template>
  <div class="[ dashboard ][ grid ]">
    <!-- Titlebar -->

    <section class="[ sticky top-0 ]"><Titlebar /></section>

    <div class="[ flex ]">
      <!-- Sidebar Navigation Bar-->
      <section class="[ fixed left-0 ]">
        <Sidebar />
      </section>
      <!-- Body -->

      <div class="[ grid ][ mr-300 ml-360 ]">
        <transition name="fade">
          <router-view />
        </transition>
      </div>
      <!-- Right side panel -->
      <section class="[ fixed right-0 ]">
        <RightSidePanel />
      </section>
    </div>
    <!-- Footer -->
  </div>
</template>
