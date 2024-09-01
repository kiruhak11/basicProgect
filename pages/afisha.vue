<template>
    <main>
        <div class="container">
            <div class="content">
                <div class="content__title">
                    <p>Афиша</p>
                </div>
                <div class="posters">
                    <div class="poster">
                        <div class="poster__title">
                            <p class="poster__title-1">3</p>
                            <p class="poster__title-2">ИЮНЯ</p>
                        </div>
                        <img src="/images/card1.jpeg" alt="asd" class="poster__image" />
                        <div class="poster__name">
                            <p class="poster__title-3">Антонио Вивальди. Времена года</p>
                            <p class="poster__title-4">Посвящение Фрэнку Синатре.</p>
                            <div class="poster__info">
                                <IconsMusic />
                                <p class="poster__title-5">Джаз</p>
                                <IconsTime />
                                <p class="poster__title-5">19:00</p>
                                <IconsHuman />
                                <p class="poster__title-5">6+</p>
                            </div>
                        </div>
                        <div class="poster__button">
                            <P>Заказать билет</P>
                        </div>
                    </div>
                    <div class="poster">
                        <div class="poster__title">
                            <p class="poster__title-1">30</p>
                            <p class="poster__title-2">ИЮНЯ</p>
                        </div>
                        <img src="/images/card1.jpeg" alt="asd" class="poster__image" />
                        <div class="poster__name">
                            <p class="poster__title-3">Опера VS Оперетта</p>
                            <p class="poster__title-4">Санкт-Петербургский камерный оркестр Olympic Orchestra</p>
                            <div class="poster__info">
                                <IconsMusic />
                                <p class="poster__title-5">Классика</p>
                            </div>
                        </div>
                        <div class="poster__button">
                            <P>Заказать билет</P>
                        </div>
                    </div>
                    <div class="poster">
                        <div class="poster__title">
                            <p class="poster__title-1">30</p>
                            <p class="poster__title-2">ИЮНЯ</p>
                        </div>
                        <img src="/images/card1.jpeg" alt="asd" class="poster__image" />
                        <div class="poster__name">
                            <p class="poster__title-3">Опера VS Оперетта</p>
                            <p class="poster__title-4">Санкт-Петербургский камерный оркестр Olympic Orchestra</p>
                            <div class="poster__info">
                                <IconsMusic />
                                <p class="poster__title-5">Классика</p>
                            </div>
                        </div>
                        <div class="poster__button">
                            <P>Заказать билет</P>
                        </div>
                    </div>
                    <div class="poster">
                        <div class="poster__title">
                            <p class="poster__title-1">30</p>
                            <p class="poster__title-2">ИЮНЯ</p>
                        </div>
                        <img src="/images/card1.jpeg" alt="asd" class="poster__image" />
                        <div class="poster__name">
                            <p class="poster__title-3">Опера VS Оперетта</p>
                            <p class="poster__title-4">Санкт-Петербургский камерный оркестр Olympic Orchestra</p>
                            <div class="poster__info">
                                <IconsMusic />
                                <p class="poster__title-5">Классика</p>
                            </div>
                        </div>
                        <div class="poster__button">
                            <P>Заказать билет</P>
                        </div>
                    </div>
                    <div class="poster">
                        <div class="poster__title">
                            <p class="poster__title-1">30</p>
                            <p class="poster__title-2">ИЮНЯ</p>
                        </div>
                        <img src="/images/card1.jpeg" alt="asd" class="poster__image" />
                        <div class="poster__name">
                            <p class="poster__title-3">Опера VS Оперетта</p>
                            <p class="poster__title-4">Санкт-Петербургский камерный оркестр Olympic Orchestra</p>
                            <div class="poster__info">
                                <IconsMusic />
                                <p class="poster__title-5">Классика</p>
                            </div>
                        </div>
                        <div class="poster__button">
                            <P>Заказать билет</P>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.container {
    display: flex;
    justify-content: center;
}
.content {
    display: flex;
    flex-direction: column;
    padding-top: 60px;
    padding-left: 12px;
    width: 100%;

    &__title {
        display: flex;
        height: 67px;
        align-items: center;
        text-align: center;
        justify-content: center;

        p {
            @include ebGaramondFont(700, 48, $headerColor, 67.2);
        }
    }
}
.posters {
    display: flex;
    flex-direction: column;
    padding-top: 100px;
}
.poster {
    margin-bottom: 80px;
    display: flex;
    width: 100%;
    border-radius: 16px;
    background-color: $cardColor;

    &__button {
        margin-top: 126.5px;
        margin-left: 62.33px;
        display: flex;
        justify-content: center;
        align-items: center;
        @include firaSansFont(400, 16, white, 22.4);
        width: 175px;
        height: 51px;
        border-radius: 50px;
        background-color: $buttonColor;
    }
    &__info {
        display: flex;
        width: 100%;
        border-radius: 16px;
        padding-top: 40px;

        @include firaSansFont(400, 14, #19191975, 22.4);
    }
    &__title {
        flex-direction: column;
        padding-left: 60px;
        padding-top: 92.5px;
        padding-bottom: 92.5px;
        text-align: center;
    }

    &__name {
        width: 415px;
        flex-direction: column;
        padding-left: 60px;
        padding-top: 52px;
        text-align: start;
    }

    &__title-1 {
        @include ebGaramondFont(700, 64, #19191975, 89.6);
    }

    &__title-2 {
        @include ebGaramondFont(700, 32, #19191975, 44.8);
    }

    &__title-3 {
        @include ebGaramondFont(500, 28, $headerColor, 44.8);
        padding-bottom: 16px;
    }

    &__title-4 {
        @include firaSansFont(400, 14, #19191975, 22.4);
    }

    &__title-5 {
        display: flex;
        padding-left: 20px;
        padding-right: 30px;
        align-items: center;
    }

    &__image {
        width: 320px;
        height: 240px;
        border-radius: 12px;
        margin-left: 62px;
        margin-top: 32px;
    }
}
</style>
