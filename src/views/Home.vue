<template>
    <div class="background">
        <div class="layout">
            <sections-header/>
            <sections-home/>

            <heading title="routes" id="routes"/>
            <sections-routes/>

            <heading title="boats" id="boats"/>
            <sections-boat/>

            <heading title="contacts" id="contacts"/>
            <sections-contacts/>

            <sections-footer/>
        </div>

        <popup-info/>
        <popup-success/>
        <popup-form/>
    </div>
</template>

<script>
    import heading from '@/components/heading/index.vue'

    import sectionsHeader from '@/sections/header/index.vue'
    import sectionsHome from '@/sections/home/index.vue'
    import sectionsRoutes from '@/sections/routes/index.vue'
    import sectionsContacts from '@/sections/contacts/index.vue'
    import sectionsBoat from '@/sections/boats/index.vue'
    import sectionsFooter from '@/sections/footer/index.vue'

    import popupInfo from '@/components/popup/info/index.vue'
    import popupSuccess from '@/components/popup/success/index.vue'
    import popupForm from '@/components/popup/form/index.vue'

    export default {
        name: 'home',
        components: {
            sectionsHeader,
            sectionsHome,
            sectionsRoutes,
            sectionsContacts,
            sectionsBoat,
            sectionsFooter,
            heading,
            popupInfo,
            popupSuccess,
            popupForm
        },
        computed: {
            lang () {
                return this.$route.params.lang || 'ru'
            }
        },
        watch: {
            $route () {
                this.$i18n.locale = this.lang
            }
        },
        mounted () {
            this.$i18n.locale = this.lang
        }
    }
</script>

<style lang="stylus">
    .background
        width 100%
        max-width 144rem
        margin 0 auto
        min-height 100vh

        background-image url('../assets/images/bg_desktop.jpg')
        background-repeat no-repeat
        background-size cover
        background-position-x center

    .layout
        position relative
        z-index 1
        max-width 104rem
        margin 0 auto
        display flex
        flex-direction column

        @media (max-width: 1088px)
            padding 0 2.4rem

        &:after
            content ""
            display inline-block
            position absolute
            top 0
            left 0
            z-index -1
            width 33.4rem
            height 100%
            max-height 80rem
            background-image linear-gradient(180deg, #151A25 0%, rgba(#151A25, 0) 100%)

            @media (max-width: 1088px)
                display none
</style>
