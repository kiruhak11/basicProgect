<!-- eslint-disable vue/no-parsing-error -->
<template>
    <main>
        <div>
            <div class="container">
                <div class="container__image">
                    <img src="/images/image-main.jpeg" alt="asd" class="image-main" />
                    <div class="container__cards">
                        <div class="card">
                            <img src="/images/card1.jpeg" alt="" class="card_1" />
                            <div class="card__title"><p>Опера VS Оперетта</p></div>
                        </div>
                        <div class="card">
                            <img src="/images/card2.jpeg" alt="" class="card_1" />
                            <div class="card__title"><p>Антонио Вивальди. Времена года</p></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="content">
                    <div class="content__title">
                        <p>Афиша</p>
                        <div class="content__image">
                            <IconsCalendar />
                            <p>Все мероприятия</p>
                        </div>
                    </div>
                    <div class="posters">
                        <div class="poster">
                            <div class="poster__title">
                                <p class="poster__title-1">3</p>
                                <p class="poster__title-2">ИЮНЯ</p>
                            </div>
                            <img src="/images/image-main.jpeg" alt="asd" class="poster__image" />
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
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="content__1">
                    <div class="content__news">
                        <p>Новости</p>
                        <div class="content__cards">
                            <div class="content__card">
                                <img src="/images/content-card.jpeg" alt="asd" class="content__card-image" />
                                <p class="content__card-title">Переносы / Отмена мероприятий</p>
                                <p class="content__card-text">
                                    11.04.2023 г. в 19.00 час. — концерт «Опера vs. Оперетта» - ПЕРЕНОС на 05.06.2023 г. в 19.00 час.
                                </p>
                            </div>
                            <div class="content__card">
                                <img src="/images/content-card2.jpeg" alt="asd" class="content__card-image" />
                                <p class="content__card-title">Переносы / Отмена мероприятий</p>
                                <p class="content__card-text">
                                    11.04.2023 г. в 19.00 час. — концерт «Опера vs. Оперетта» - ПЕРЕНОС на 05.06.2023 г. в 19.00 час.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="content__calendar">
                        <img src="/images/excursions.jpeg" alt="123" class="content__calendar-image" />
                        <p class="content__calendar-title">Обзорные экскурсии</p>
                        <div class="content__datecard">
                            <div class="content__date">
                                <p>Июль</p>
                                <div class="content__date-buttons">
                                    <div class="content__date-button">
                                        <p><</p>
                                    </div>
                                    <div class="content__date-button">
                                        <p>></p>
                                    </div>
                                </div>
                            </div>
                            <div class="content__blocks">
                                <div class="content__block-row">
                                    <div class="content__block-grey"><p>1</p></div>
                                    <div class="content__block-green"><p>2</p></div>
                                    <div class="content__block-grey"><p>3</p></div>
                                    <div class="content__block-grey"><p>4</p></div>
                                    <div class="content__block-green"><p>5</p></div>
                                    <div class="content__block-grey"><p>6</p></div>
                                    <div class="content__block-green"><p>7</p></div>
                                </div>
                                <div class="content__block-row">
                                    <div class="content__block-grey"><p>1</p></div>
                                    <div class="content__block-green"><p>2</p></div>
                                    <div class="content__block-grey"><p>3</p></div>
                                    <div class="content__block-grey"><p>4</p></div>
                                    <div class="content__block-green"><p>5</p></div>
                                    <div class="content__block-grey"><p>6</p></div>
                                    <div class="content__block-green"><p>7</p></div>
                                </div>
                                <div class="content__block-row">
                                    <div class="content__block-grey"><p>1</p></div>
                                    <div class="content__block-green"><p>2</p></div>
                                    <div class="content__block-grey"><p>3</p></div>
                                    <div class="content__block-grey"><p>4</p></div>
                                    <div class="content__block-green"><p>5</p></div>
                                    <div class="content__block-grey"><p>6</p></div>
                                    <div class="content__block-green"><p>7</p></div>
                                </div>
                                <div class="content__block-row">
                                    <div class="content__block-grey"><p>1</p></div>
                                    <div class="content__block-green"><p>2</p></div>
                                    <div class="content__block-grey"><p>3</p></div>
                                    <div class="content__block-grey"><p>4</p></div>
                                    <div class="content__block-green"><p>5</p></div>
                                    <div class="content__block-grey"><p>6</p></div>
                                    <div class="content__block-green"><p>7</p></div>
                                </div>
                                <div class="content__block-row">
                                    <div class="content__block-grey"><p>1</p></div>
                                    <div class="content__block-green"><p>2</p></div>
                                    <div class="content__block-grey"><p>3</p></div>
                                    <div class="content__block-grey"><p>4</p></div>
                                    <div class="content__block-green"><p>5</p></div>
                                    <div class="content__block-grey"><p>6</p></div>
                                    <div class="content__block-green"><p>7</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="content">
                    <div class="content__title">
                        <p>Краткие анонсы</p>
                        <div class="content__image1">
                            <IconsCalendar />
                            <p>Все мероприятия</p>
                        </div>
                    </div>
                    <div class="blocks">
                        <div class="blocks__column">
                            <div class="blocks__block">
                                <p class="blocks__number">3</p>
                                <p class="blocks__month">Июня</p>
                            </div>
                            <p class="blocks__text">«ВЕК имени СИНАТРЫ»</p>
                        </div>
                        <div class="blocks__column">
                            <div class="blocks__block">
                                <p class="blocks__number">3</p>
                                <p class="blocks__month">Июня</p>
                            </div>
                            <p class="blocks__text">«ВЕК имени СИНАТРЫ»</p>
                        </div>
                        <div class="blocks__column">
                            <div class="blocks__block">
                                <p class="blocks__number">3</p>
                                <p class="blocks__month">Июня</p>
                            </div>
                            <p class="blocks__text">«ВЕК имени СИНАТРЫ»</p>
                        </div>
                        <div class="blocks__column">
                            <div class="blocks__block">
                                <p class="blocks__number">3</p>
                                <p class="blocks__month">Июня</p>
                            </div>
                            <p class="blocks__text">«ВЕК имени СИНАТРЫ»</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.blocks {
    display: flex;
    padding-top: 100px;

    &__text {
        @include ebGaramondFont(600, 14, $headerColor, 19.6);
        padding-left: 27px;
    }
    &__column {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        padding-right: 24px;
        padding-bottom: 150px;
    }
    &__block {
        display: flex;
        text-align: center;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 98px;
        border-radius: 12px;
        background-color: $buttonColor;
        color: white;
    }

    &__number {
        @include ebGaramondFont(600, 32, white, 44.8);
    }

    &__month {
        @include ebGaramondFont(400, 18, white, 25.2);
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

.content {
    display: flex;
    flex-direction: column;
    padding-top: 184px;
    padding-left: 12px;
    width: 100%;

    &__1 {
        display: flex;
        padding-left: 12px;
        padding-top: 136px;
        width: 100%;
        position: relative;
    }

    &__cards {
        display: flex;
        padding-top: 60px;
    }

    &__card {
        display: flex;
        flex-direction: column;
        margin-right: 24px;
        width: 306px;
    }
    &__card-image {
        width: 306px;
        height: 204px;
        border-radius: 12px;

        object-fit: cover;
    }
    &__news {
        @include ebGaramondFont(500, 48, $headerColor, 67.2);
    }

    &__calendar {
        display: flex;
        flex-direction: column;
        padding-left: 134px;
    }

    &__calendar-image {
        width: 526px;
        height: 300px;
        object-fit: cover;
        filter: brightness(0.5);
        border-radius: 12px 12px 0px 0px;
    }

    &__calendar-title {
        @include ebGaramondFont(600, 32, white, 44.8);
        position: absolute;
        padding-top: 231px;
        padding-left: 24px;
    }

    &__datecard {
        display: flex;
        background-color: #19191905;
        border-radius: 0px 0px 12px 12px;
        p {
            @include ebGaramondFont(600, 32, $headerColor, 44.8);
        }
    }
    &__date {
        display: flex;
        flex-direction: column;
        padding: 24px;
    }
    &__date-buttons {
        display: flex;
        flex-direction: row;
        padding-top: 123px;
    }
    &__date-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48px;
        height: 48px;
        border-radius: 8px;
        background-color: $buttonColor;
        margin-right: 8px;

        p {
            @include firaSansFont(400, 32, white, 44.8);
        }
    }

    &__block-green {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 4px;
        background-color: $buttonColor;
        margin-right: 4px;

        p {
            @include firaSansFont(600, 16, white, 22.4);
        }
    }
    &__block-grey {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 4px;
        background-color: #19191930;
        margin-right: 4px;

        p {
            @include firaSansFont(600, 16, white, 22.4);
        }
    }
    &__blocks {
        padding-left: 30px;
        padding-top: 24px;
    }
    &__block-row {
        display: flex;
        padding-bottom: 4px;
    }
    &__title {
        display: flex;
        height: 67px;
        align-items: center;

        p {
            @include ebGaramondFont(700, 48, $headerColor, 67.2);
        }
    }
    &__image1 {
        display: flex;
        padding-left: 680px;
        height: 40px;
        align-items: center;

        p {
            padding-left: 34.5px;
            @include ebGaramondFont(700, 24, $headerColor, 33.6);
        }
    }

    &__image {
        display: flex;
        padding-left: 870px;
        height: 40px;
        align-items: center;

        p {
            padding-left: 34.5px;
            @include ebGaramondFont(700, 24, $headerColor, 33.6);
        }
    }
    &__card-title {
        @include firaSansFont(500, 24, $headerColor, 33.6);
        padding-top: 32px;
        padding-bottom: 24px;
    }

    &__card-text {
        @include firaSansFont(400, 16, #19191975, 22.4);
    }
}

.image-main {
    width: 856px;
    height: 497px;
    border-radius: 12px;
}
.container {
    display: flex;
    justify-content: center;

    &__image {
        display: flex;
        justify-content: center;
        margin-top: 60px;
    }
    &__cards {
        display: flex;
        flex-direction: column;
        padding-left: 24px;
    }
}
.card {
    margin-bottom: 12px;
    width: 416px;
    height: 104px;
    border-radius: 8px;
    padding: 12px 16px 12px 16px;
    gap: 24px;
    background-color: $cardColor;
    display: inline-flex;
    align-items: center;
    text-align: center;

    &_1 {
        width: 80px;
        height: 80px;
        border-radius: 8px;
    }
    &__title {
        @include firaSansFont(600, 16, $headerColor, 22.4);
    }
}
</style>
