<template>
    <footer class="bg-primary-2">
        <div class="conatiner mx-auto max-w-screen-lg">
            <!-- img -->
            <div class="flex">
                <div class="w-full md:w-1/2 py-4 px-4">
                    <img src="~/assets/img/footerImg.svg" alt=""/>
                </div>
                <div class="flex flex-col self-center w-full md:w-1/2 px-4 py-4 gap-8">
                    <h2 class="text-2xl font-black text-white">Ikuti Berita dari Kami</h2>
                    <form action="" class="flex flex-col gap-4">
                        <div class="flex flex-col gap-2">
                            <label for="email" class="text-lg">Email</label>
                            <input type="email" name="" id="email" placeholder="me@example.com" class="rounded-lg bg-white shadow-default py-4 px-2">
                        </div>
                        <button class="rounded-full w-fit bg-purple-800 shadow-md shadow-purple-800 text-white px-4 py-2">Submit</button>
                    </form>
                </div>
            </div>
            <!-- footnote -->
            <div class="flex justify-between text-white items-center py-4">
                <p class="text-sm">  
                    &copy; 2018 Copyright Isolusindonesia
                </p>
                <div class="">
                    <ul class="flex justify-center gap-8">
                        <li><NuxtLink :to="`#`" class="nav-item">Beranda</NuxtLink></li>
                        <li><NuxtLink :to="`#pencapaian`" class="nav-item">Pencapaian</NuxtLink></li>
                        <li><NuxtLink  :to="`#terstimoni`" class="nav-item">Testimoni</NuxtLink></li>
                        <li><NuxtLink  :to="`#tentang-kami`" class="nav-item">Tentang Kami</NuxtLink></li>
                    </ul>
                </div>
                <div class="flex justify-center gap-4">
                    <div class="rounded-full w-8 h-8" v-for="(ft, f) in footers">
                        <a :href="ft.url"><img :src="require(`~/assets/img/icons/${ft.icon}`)" /></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    data: function () {
    return {
      footers: [
        {
            'icon': '002-instagram.svg',
            'url' : ''
        },
        {
            'icon': '001-facebook-logo-button.svg',
            'url' : ''
        },
        {
            'icon': '003-closed-envelope-circle.svg',
            'url' : ''
        },
    ]
    }
    }
}
</script>

<style scoped>
.nav-item{

}
a.nuxt-link-active{

}
a.nuxt-link-exact-active{

}
footer{
    background-image: url('~/assets/img/footerAccents.svg');
    @apply bg-no-repeat bg-cover bg-fixed bg-origin-border bg-top
}
</style>