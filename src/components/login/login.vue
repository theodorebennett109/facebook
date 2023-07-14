<style scoped lang="scss" src="./login.scss"></style>
<script lang="ts" src="./login.ts"></script>
<template>
  <div class="[ login ][ flex justify-center ][ fblg:py-20px ]">
    <div class="[ w-88 ]">
      <div class="[ bg-white shadow-xl ][ rounded-lg ][ pb-24px pt-10px ]">
        <form>
          <div>
            <div class="[ flex justify-center ][ h-16 ][ py-1.5 ]">
              <input
                id="username"
                name="username"
                v-model="username"
                class="[ login-input text-base placeholder-placeholder-color ][ px-4 py-2 w-86 ][ border border-input-border-color ][ rounded-lg ][ content-center ]"
                type="text"
                placeholder="Email or phone number "
              />
            </div>

            <div id="wrongUserName-msg" class="[ px-4 ]" v-if="incorrectEmail">
              <span class="[ text-sm text-error ]">
                The email or mobile number you entered isn’t connected to an
                account.
                <span
                  class="[ font-bold text-error hover:text-error hover:underline ][ cursor-pointer ]"
                  href=""
                >
                  Find your account and log in.</span
                ></span
              >
            </div>

            <div class="[ flex justify-center ][ h-16 ][ py-1.5 ]">
              <input
                id="password"
                name="password"
                v-model="password"
                class="[ login-input text-base ][ px-4 py-2 w-86 ][ border border-input-border-color ][ rounded-lg ]"
                type="password"
                placeholder="Password"
              />
            </div>
            <div
              id="wrongPassword-msg"
              class="[ px-4 ]"
              v-if="incorrectPassword"
            >
              <span class="[ text-sm text-error ]"
                >The password you have entered is incorrect
              </span>
            </div>

            <div class="[ flex justify-center ][ h-54px ][ pt-1.5 ]">
              <button
                id="login-btn"
                class="[ hover:text-app-footer no-underline ][ login-input text-xl text-white font-bold text-center ][ px-4 py-0 w-86 h-12 ][ border border-input-border-color hover:bg-darker-blue ][ rounded-lg ][ bg-#1877f2 ][ leading-12 ]"
                type="submit"
              >
                Log In
              </button>
            </div>
            <div></div>
            <div class="[ flex justify-center ][ mt-4 ]">
              <p
                class="[ font-medium no-underline text-forget hover:text-forget text-sm hover:underline ][ cursor-pointer ][ login-input ]"
              >
                Forgot password?
              </p>
            </div>

            <div
              class="[ border-b border-login-seperator ][ mx-4 my-20px ][ flex justify-center ]"
            ></div>
          </div>

          <div class="[ flex justify-center ][ h-54px ][ pt-1.5 ]">
            <span
              @click="setIsRegistractionModalActive(true)"
              class="[ text-base text-white ][ login-input ][ font-bold ][ px-4 ] [ rounded-lg ][ bg-success hover:bg-darker-green ][ leading-12 ][ no-underline ][ cursor-pointer ]"
              >Create new account</span
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
