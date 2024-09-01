<template>
    <main>
        <div class="container">
            <div class="content">
                <div class="content__title">
                    <p>Антонио Вивальди. Времена года</p>
                </div>
                <div class="content__info">
                    <img src="/images/card1.jpeg" alt="" class="content__mainimage" />
                    <div class="text">
                        <p class="text__title">Санкт-Петербургский камерный оркестр Olympic Orchestra</p>
                        <p class="text__subtitle">Солистка – Надежда Троицкая (скрипка)</p>
                        <p class="text__subtitle">Дирижёр – Илья Филькенштейн</p>
                        <p class="text__subtitle">Художественный руководитель - Алексей Степанов</p>
                        <p class="text__main">
                            Музыка Вивальди на века!!! Изысканная роскошь, пышность и причудливая эстетика эпохи барокко в полной мере нашли
                            воплощение в творчестве знаменитого венецианца Антонио Вивальди. Его называют «итальянским Бахом», и неспроста:
                            за 63 года жизни музыкант написал около 800 произведений, включая оперы, хоровые произведения, более 500
                            концертов для различных инструментов и оркестра. Талантливый композитор-новатор, виртуозный скрипач, блестящий
                            дирижер и педагог, он оставил после себя богатейшее творческое наследие.
                        </p>
                        <p class="text__main2">
                            В первом отделении прозвучит знаменитый цикл «Времена года» Антонио Вивальди, второе же отделение будет
                            посвящено мелодичным серенадам для струнного оркестра Эдуарда Элгара и Петра Ильича Чайковского.
                        </p>
                        <p class="text__programm">Программа концерта</p>
                        <p class="text__programm-text">1 отделение</p>
                        <p class="text__programm-text">А. Вивальди «Времена года»:</p>
                        <p class="text__programm-text">Концерт № 1 ми мажор «Весна»</p>
                        <p class="text__programm-text">Концерт № 2 соль минор «Лето»</p>
                        <p class="text__programm-text">Концерт № 3 фа мажор «Осень»</p>
                        <p class="text__programm-text">Концерт № 4 фа минор «Зима»</p>
                        <p class="text__programm-text">2 отделение</p>
                        <p class="text__programm-text">Э. Элгар «Серенада для струнного оркестра»</p>
                        <p class="text__programm-text">П. Чайковский «Серенада для струнного оркестра»</p>
                        <p class="text__price">Стоимость билетов</p>
                        <p class="text__price-text">700-1900 руб.</p>
                        <div class="text__button"><P>Заказать билет</P></div>
                        <div class="text__images">
                            <img src="/images/card1.jpeg" alt="" class="text__image" />
                            <img src="/images/card1.jpeg" alt="" class="text__image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.text {
    padding-left: 134px;
    &__title {
        padding-bottom: 24px;
        @include ebGaramondFont(700, 26, $headerColor, 33.6);
    }
    &__subtitle {
        padding-bottom: 16px;
        @include ebGaramondFont(600, 16, $headerColor, 22.4);
    }
    &__main {
        padding-top: 40px;
        @include ebGaramondFont(600, 16, $headerColor, 22.4);
    }
    &__main2 {
        padding-top: 16px;

        @include ebGaramondFont(600, 16, $headerColor, 22.4);
    }
    &__programm {
        padding-top: 40px;
        padding-bottom: 24px;
        @include ebGaramondFont(700, 24, $headerColor, 33.6);
    }
    &__programm-text {
        padding-bottom: 16px;
        @include firaSansFont(400, 16, $headerColor, 22.4);
    }
    &__price {
        padding-top: 40px;
        @include ebGaramondFont(700, 24, $headerColor, 33.6);
    }
    &__price-text {
        padding-top: 24px;
        @include firaSansFont(400, 16, $headerColor, 22.4);
    }
    &__button {
        margin-top: 40px;
        list-style-type: none;
        display: flex;
        justify-content: center;
        align-items: center;
        @include firaSansFont(400, 16, white, 22.4);
        width: 175px;
        height: 51px;
        border-radius: 50px;
        background-color: $buttonColor;
    }
    &__images {
        display: flex;
        flex-direction: row;
        padding-top: 40px;
        padding-bottom: 150px;
    }
    &__image {
        width: 306px;
        height: 210px;
        margin-right: 24px;
        border-radius: 12px;
    }
}
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

    &__mainimage {
        width: 526px;
        height: 742px;
        border-radius: 12px;
        object-fit: cover;
    }
    &__title {
        display: flex;
        text-align: center;
        justify-content: center;
        p {
            @include ebGaramondFont(700, 48, $headerColor, 67.2);
        }
    }
    &__info {
        display: flex;
        padding-top: 100px;
    }
}
</style>
