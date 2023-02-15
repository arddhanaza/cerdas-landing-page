
import CerdasLogo from './CerdasLogo.vue';

<template>
    <nav class="container mx-auto max-w-screen-lg flex justify-center py-4 px-4 md:py-0">
        <CerdasLogo class="" />
        <div class="w-full">
            <ul class="hidden md:flex justify-center md:gap-12">
                <li><NuxtLink :to="`#`" class="nav-item">Beranda</NuxtLink></li>
                <li><NuxtLink :to="`#pencapaian`" class="nav-item">Pencapaian</NuxtLink></li>
                <li><NuxtLink  :to="`#terstimoni`" class="nav-item">Testimoni</NuxtLink></li>
                <li><NuxtLink  :to="`#tentang-kami`" class="nav-item">Tentang Kami</NuxtLink></li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
.nav-item{
    @apply text-neutral text-lg block py-4 border-t-4 border-transparent
}
a.nuxt-link-exact-active{
    @apply text-black/80 border-t-4 border-primary-1
}
</style>