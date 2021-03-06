<template>
    <div class="header">
        <logo-icon class="header__logo"/>

        <div>
            <div class="header__desktop">
                <phone-icon class="header__icon"/>
                <a class="header__phone" href="tel:8 (962) 290-27-27">8 (962) 290-27-27</a>

                <router-link :to="{name: 'lang-home', params: {lang: 'ru'}}" class="wk-button" active-class="wk-button--active" :class="{'wk-button--active': isRu}">ru</router-link>
                <router-link :to="{name: 'lang-home', params: {lang: 'en'}}" class="wk-button" active-class="wk-button--active">en</router-link>
            </div>

            <div class="header__mobile">
                <burger-icon v-if="!showMenu" class="header__burger" @click="openMenu"/>

                <div v-if="showMenu" class="mobile-menu">
                    <div class="mobile-menu__logo">
                        <logo-icon class="header__logo"/>
                        <close-icon class="header__burger" @click="closeMenu"/>
                    </div>

                    <div class="mobile-menu__items">
                        <router-link to="#routes" v-smooth-scroll="{ offset: -20 }" class="footer__link" @click.native="closeMenu">{{$t('routes')}}</router-link>
                        <div class="divider"></div>
                        <router-link to="#boats" v-smooth-scroll="{ offset: -20 }" class="footer__link" @click.native="closeMenu">{{$t('boats')}}</router-link>
                        <div class="divider"></div>
                        <router-link to="#contacts" v-smooth-scroll="{ offset: -20 }" class="footer__link" @click.native="closeMenu">{{$t('contacts')}}</router-link>
                    </div>

                    <div class="mobile-menu__socials">
                        <div>
                            <a href="https://instagram.com/wild.k.a.m.c.h.a.t.k.a?r=nametag" target="_blank" class="mobile-menu__social-link">
                                <inst-logo/>
                            </a>
                            <a href="" target="_blank" class="mobile-menu__social-link">
                                <vk-logo/>
                            </a>
                            <a href="https://www.facebook.com/wild.kamchatka.50" target="_blank" class="mobile-menu__social-link">
                                <fb-logo/>
                            </a>
                        </div>

                        <div>
                            <router-link :to="{name: 'lang-home', params: {lang: 'ru'}}" class="wk-button" active-class="wk-button--active" :class="{'wk-button--active': isRu}" @click.native="closeMenu">ru</router-link>
                            <router-link :to="{name: 'lang-home', params: {lang: 'en'}}" class="wk-button" active-class="wk-button--active" @click.native="closeMenu">en</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import disabledScroll from '@/plugins/disabled-scroll'

    import LogoIcon from '@/assets/svg/logo.svg?inline'
    import PhoneIcon from '@/assets/svg/phone.svg?inline'
    import BurgerIcon from '@/assets/svg/burger.svg?inline'
    import CloseIcon from '@/assets/svg/close.svg?inline'

    import InstLogo from '@/assets/svg/socials/inst.svg?inline'
    import VkLogo from '@/assets/svg/socials/vk.svg?inline'
    import FbLogo from '@/assets/svg/socials/fb.svg?inline'

    export default {
        components: {
            LogoIcon,
            PhoneIcon,
            BurgerIcon,
            CloseIcon,
            InstLogo,
            VkLogo,
            FbLogo
        },
        computed: {
            isRu () {
                return this.$i18n.locale === 'ru'
            }
        },
        data () {
            return {
                showMenu: false
            }
        },
        methods: {
            openMenu () {
                this.showMenu = true
                disabledScroll(true)
            },
            closeMenu () {
                this.showMenu = false
                disabledScroll(false)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .header
        padding 2.8rem 0 0 0
        display flex
        justify-content space-between

        +layout-md()
            padding 2.4rem 0 0 0

        &__desktop
            display flex
            flex-direction row
            align-items center

            +layout-md()
                display none

        &__mobile
            display none

            +layout-md()
                position fixed
                top 2.4rem
                right 2.4rem
                z-index 9999
                display flex
                flex-direction row
                align-items center

        &__logo
            height 1.5rem
            padding-left 3.2rem

            +layout-md()
                padding-left 0

        &__phone
            line-height 3.2rem
            color $color-base
            letter-spacing 1px
            font-family 'SF UI Text Regular'

            +layout-md()
                font-size 1.4rem
                letter-spacing .5px

        &__icon
            margin-right 1.6rem
            width 2rem
            height @width
            color $color-yellow

        &__burger
            width 1.8rem
            height @width
            outline none

    a
        font-size 1.6rem
        margin-right 1.6rem

        &:firt-child
            margin-right 2.4rem

        &:last-child
            margin-right 0

    .divider
        margin 2.4rem 0
        width 100%
        height 1px
        background #fff
        opacity .2

    .wk-button
        display inline-block
        padding .8rem
        font-family 'SF UI Display Heavy'
        font-size 1.4rem
        letter-spacing .1rem
        text-align center
        line-height 1.6rem
        text-transform uppercase

        border 1px solid rgba(255, 255, 255, 0.2)
        background initial
        color $color-base

        &--active
            border 1px solid #FFFFFF
            background #FFFFFF
            color #182130

    .mobile-menu
        padding 2.4rem
        position fixed
        top 0
        bottom 0
        left 0
        right 0
        display flex
        flex-direction column
        justify-content space-between
        background rgba(25, 29, 41, .9)
        backdrop-filter blur(5px)

        &__logo
            display flex
            flex-direction row
            justify-content space-between

        &__items
            margin-top 4rem
            display flex
            flex auto
            flex-direction column

            a
                font-family 'SF UI Display Heavy'
                font-size 2rem
                color $color-base
                text-transform uppercase
                letter-spacing 1px

        &__socials
            display flex
            flex-direction row
            justify-content space-between

        &__social-link
            margin-right 2.4rem
            display inline-block
            padding 0
            width 3.4rem
            height @width
            color $color-yellow

            &:last-child
                margin-right 0

            +layout-md()
                margin-right 1.4rem
</style>
