<template>
    <div class="anim">
        <span class="first"></span>
        <span class="mid"></span>
        <span class="last"></span>
    </div>
</template>

<script>
    export default {
        name: 'anim'
    }
</script>

<style lang="stylus" scoped>
    .anim
        height 2rem
        display flex
        flex-direction row
        align-items center
        justify-content center

        span
            width .8rem
            height @width
            background #fff
            transition height .2s linear

            animation-name anim
            animation-duration 999ms
            animation-iteration-count infinite

            &:not(:last-child)
                margin-right .8rem

    .first
        animation-delay 0

    .mid
        animation-delay 333ms

    .last
        animation-delay 666ms

    @keyframes anim
        0%
            height .8rem

        25%
            height .8rem
            background $color-yellow

        50%
            height 1.2rem

        75%
            height 1.2rem

        100%
            height .8rem
</style>
