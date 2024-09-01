<template>
    <footer class="footer">
        <div class="container footer__contant">
            <div class="container footer__section">
                <NuxtLink to="/" class="footer__logo"><IconsLogo /></NuxtLink>
            </div>
            <div class="container footer__section">
                <p class="footer__title">Мероприятия</p>
                <ul>
                    <li><NuxtLink to="/">Экскурсии</NuxtLink></li>
                    <li><NuxtLink to="/">Концерты</NuxtLink></li>
                    <li><NuxtLink to="/afisha">Афиша</NuxtLink></li>
                </ul>
            </div>
            <div class="container footer__section">
                <p class="footer__title">Контакты</p>
                <div class="container footer__contact">
                    <li><p href="">г. Санкт-Петербург, Невский пр., д. 1</p></li>
                    <li><p href="mailto:text@mail.com">text@mail.com</p></li>
                    <li><p href="tel:8121234567">(812) 123-45-67</p></li>
                </div>
            </div>
            <div class="container footer__bottom">
                <hr />
                <p>Сайт ко</p>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
.footer {
    background-color: $headerColor;
    color: white;
    padding-top: 60px;
    width: 100%;
    height: 386px;
    &__contant {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-wrap: wrap;
    }
    &__section {
        flex: 1;
    }
    &__title {
        @include ebGaramondFont(500, 24, white, 33.6);
    }
    &__section ul {
        list-style-type: none;
        display: flex;
        align-items: center;
    }
    &__section ul li {
        padding-right: 24px;
    }
    &__section li {
        list-style-type: none;
        margin: 5px 0;
        text-align: left;
        padding-top: 24px;
        @include firaSansFont(400, 16, white, 22.4);
    }
    &__bottom {
        text-align: center;
        margin-top: 20px;
        width: 100%;
    }
    &__bottom hr {
        border: 1px rgba(255, 255, 255, 0.5) solid;
        width: 1296px;
        margin: 0 auto;
        margin-bottom: 32px;
    }
    &__bottom p {
        @include firaSansFont(400, 16, rgba(255, 255, 255, 0.5), 22.4);
        margin: 10px 0 0 0;
    }
}
</style>
