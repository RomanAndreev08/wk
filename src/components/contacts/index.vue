<template>
    <div class="wk-contacts">
        <a href="tel:8 (962) 290-27-27" class="wk-contacts__link"><phone-icon class="wk-contacts__icon"/>8 (962) 290-27-27</a>
        <div class="divider"></div>

        <a href="mailto:virtusoffice@mail.ru" class="wk-contacts__link"><mail-icon class="wk-contacts__icon"/>virtusoffice@mail.ru</a>
        <div class="divider"></div>

        <div>
            <a href="https://instagram.com/wild.k.a.m.c.h.a.t.k.a?r=nametag" target="_blank" class="wk-contacts__socials">
                <inst-logo/>
            </a>
            <a href="" target="_blank" class="wk-contacts__socials">
                <vk-logo/>
            </a>
            <a href="https://www.facebook.com/wild.kamchatka.50" target="_blank" class="wk-contacts__socials">
                <fb-logo/>
            </a>
        </div>
    </div>
</template>

<script>
    import InstLogo from '@/assets/svg/socials/inst.svg?inline'
    import VkLogo from '@/assets/svg/socials/vk.svg?inline'
    import FbLogo from '@/assets/svg/socials/fb.svg?inline'
    import PhoneIcon from '@/assets/svg/phone.svg?inline'
    import MailIcon from '@/assets/svg/mail.svg?inline'

    export default {
        name: 'wk-contacts',
        components: {
            InstLogo,
            VkLogo,
            FbLogo,
            PhoneIcon,
            MailIcon
        }
    }
</script>

<style lang="stylus" scoped>
    .wk-contacts
        box-sizing border-box
        max-width 46rem
        width 100%
        padding 3.2rem
        display flex
        flex-direction column
        background rgba($color-bg-dark, .6)

        +layout-md()
            padding 2.4rem

        &__link
            display flex
            align-items center
            font-size 1.6rem
            color $color-base
            line-height 3.2rem
            font-family 'SF UI Text Regular'
            letter-spacing 1px

            +layout-md()
                font-size 1.4rem
                letter-spacing .5px

        &__icon
            margin-right 1.6rem
            width 2.4rem
            height @width

        &__socials
            display inline-block
            margin-right 2.4rem
            padding 0
            width 4.8rem
            height @width
            color $color-yellow
            transition color 400ms ease

            &:hover
                color $color-orange

            &:last-child
                margin-right 0

            +layout-md()
                margin-right 1.4rem

    .divider
        margin 2.4rem 0
        width 100%
        height 1px
        background #fff
        opacity .2
</style>
