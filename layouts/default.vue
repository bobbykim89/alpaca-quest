<script setup lang="ts">
import { useAlertStore } from '@/stores'
import { Alert, HeaderHorizontal } from '@bobbykim/manguito-theme'
import type { MenuItemType, SocialUrl } from '@bobbykim/mcl-footer'
import { MclFooterA } from '@bobbykim/mcl-footer'
import { storeToRefs } from 'pinia'

const router = useRouter()
const tradmarkYear = ref<number>()
const alertStore = useAlertStore()
const { alertColor, alertMessage } = storeToRefs(alertStore)

const footerMenuItems: MenuItemType[] = [
  {
    title: 'Home',
    url: '/',
    target: '_self',
  },
  {
    title: 'Quiz',
    url: '/quiz',
    target: '_self',
  },
  {
    title: 'About',
    url: '/about',
    target: '_self',
  },
]
const menuItemData = reactive<{
  title: string
  logoMobile: string
  logo: string
  logoAlt: string
  logoLink: string
  socialUrl: SocialUrl
  menu: MenuItemType[]
}>({
  title: 'ALPACA<span class="text-warning">Quest</span>',
  logoMobile: '/img/logo64.webp',
  logo: '/img/logo192.webp',
  logoAlt: 'ALPACA Quest Logo',
  logoLink: '/',
  socialUrl: {
    github: 'https://github.com/bobbykim89',
  },
  menu: footerMenuItems,
})

const handleTitleClick = (e: Event, link: string) => {
  e.preventDefault()
  router.push({ path: link })
}
const handleFooterMenuClick = (e: Event, item: MenuItemType) => {
  e.preventDefault()
  router.push({ path: item.url })
}

onMounted(() => {
  tradmarkYear.value = new Date().getFullYear()
})
</script>

<template>
  <div>
    <header-horizontal>
      <template #content>
        <div class="flex flex-shrink-0 items-center self-center md:py-3xs">
          <div class="h-md md:h-xl mr-2xs md:mr-xs align-middle">
            <NuxtLink :to="menuItemData.logoLink">
              <NuxtImg
                :src="menuItemData.logoMobile"
                :alt="menuItemData.logoAlt"
                class="md:hidden h-full w-full inline-block"
                width="32"
                height="32"
              />
              <NuxtImg
                :src="menuItemData.logo"
                :alt="menuItemData.logoAlt"
                class="hidden h-full w-full md:inline-block"
                width="192"
                height="192"
              />
            </NuxtLink>
          </div>
          <div class="flex flex-col justify-center ml-2">
            <NuxtLink :to="menuItemData.logoLink">
              <h2
                class="inline-block align-middle tracking-wider h2-md text-dark-4"
                v-html="menuItemData.title"
              />
            </NuxtLink>
          </div>
        </div>
      </template>
      <template #content-right>
        <div class="flex items-center gap-4 text-lg text-dark-2 font-bold">
          <div
            v-for="(item, idx) in menuItemData.menu"
            :key="idx"
            class="border-r-2 border-light-4 pr-4 last:border-r-0 last:pr-0"
          >
            <NuxtLink
              :to="item.url"
              class="hover:text-dark-1 focus:text-dark-1 transition-colors duration-150 ease-linear"
              >{{ item.title }}</NuxtLink
            >
          </div>
        </div>
      </template>
      <template #mobile-content="{ headerClose }">
        <div
          class="flex flex-col justify-center items-center gap-2 text-lg text-dark-4 font-bold py-2xs"
        >
          <div v-for="(item, idx) in menuItemData.menu" :key="idx">
            <NuxtLink
              :to="item.url"
              class="hover:text-dark-1 focus:dark-1 transition-colors duration-150 ease-linear"
              @click="headerClose"
              >{{ item.title }}</NuxtLink
            >
          </div>
        </div>
      </template>
    </header-horizontal>
    <div class="bg-light-4 min-h-[60dvh]">
      <div class="container">
        <Alert
          :show="alertMessage !== null"
          :color="alertColor"
          dismissible
          class="my-xs mx-xs"
        >
          <div class="flex justify-center text-light-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              class="w-xs mr-2xs"
            >
              <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"
              />
            </svg>
            <span>{{ alertMessage }}</span>
          </div>
        </Alert>
        <slot />
      </div>
    </div>
    <mcl-footer-a
      :logo="menuItemData.logo"
      :logo-alt="menuItemData.logoAlt"
      :logo-link="menuItemData.logoLink"
      :logo-as-link="false"
      :title="menuItemData.title"
      title-color="dark-4"
      :menu-items="menuItemData.menu"
      :menu-item-as-link="false"
      :social-links="menuItemData.socialUrl"
      bg-color="light-2"
      border-top-color="warning"
      menu-text-color="dark-4"
      social-icon-color="dark-4"
      highlight-color="warning"
      @logo-click="handleTitleClick"
      @menu-click="handleFooterMenuClick"
    >
      <small class="text-dark-1">&copy; ALPACAQuest {{ tradmarkYear }}</small>
    </mcl-footer-a>
  </div>
</template>

<style scoped></style>
