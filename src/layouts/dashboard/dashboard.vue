<style scoped lang="scss" src="./dashboard.scss"></style>
<script lang="ts" src="./dashboard.ts"></script>
<template>
  <div class="[ dashboard ][ grid ]">
    <!-- Titlebar -->

    <section class="[ sticky top-0 ]"><Titlebar /></section>

    <div class="[ flex ]">
      <!-- Sidebar Navigation Bar-->
      <section>
        <Sidebar />
      </section>
      <!-- Body -->
      <div class="[ grid ]">
        <transition name="fade">
          <router-view />
        </transition>
      </div>
      <!-- Right side panel -->
      <section>
        <RightSidePanel />
      </section>
    </div>
    <!-- Footer -->
  </div>
</template>
