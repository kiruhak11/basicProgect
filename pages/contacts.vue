<template>
    <main>
        <div class="container">
            <div class="content">
                <p class="content__title">Контакты</p>
                <div class="text">
                    <div class="content__column1">
                        <p class="text__title">Адрес:</p>
                        <p class="text__text">Россия, 191025, г. Санкт-Петербург, Невский пр., д. 1</p>
                        <p class="text__title">Режим работы кассы Дворца:</p>
                        <p class="text__text">понедельник: выходной</p>
                        <p class="text__text">вторник-суббота: с 11.00 до 19.00 час.</p>
                        <p class="text__text">воскресенье: с 11.00 до 17.00 час.</p>
                        <p class="text__text">перерыв: с 14.00 до 14.30 час.</p>
                    </div>
                    <div class="content__column2">
                        <p class="text__title">Билетная касса, заказ экскурсий:</p>
                        <p class="text__text">(812) 123-45-67</p>
                        <p class="text__title">Аренда концертного/конференц зала:</p>
                        <p class="text__text">(812) 123-45-67</p>
                        <p class="text__title">ВКонтакте:</p>
                        <p class="text__text">nevskiy1</p>
                    </div>
                </div>
                <div class="content__image">
                    <img src="/images/map.png" alt="" class="content__map" />
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
.container {
    display: flex;
    justify-content: center;
}

.text {
    display: flex;
    width: 100%;
    justify-content: center;
    &__title {
        padding-top: 24px;
        padding-bottom: 24px;
        @include ebGaramondFont(700, 24, $headerColor, 33.6);
    }
    &__text {
        padding-bottom: 16px;
        @include firaSansFont(400, 16, $headerColor, 22.4);
    }
}
.content {
    display: flex;
    flex-direction: column;
    padding-top: 60px;
    padding-left: 12px;
    width: 100%;
    &__image {
        display: flex;
        justify-content: center;
        padding-top: 100px;
        padding-bottom: 150px;
    }
    &__map {
        width: 856px;
        height: 441px;
        object-fit: cover;
        border-radius: 12px;
    }
    &__column1 {
        display: flex;
        flex-direction: column;
    }
    &__column2 {
        display: flex;
        flex-direction: column;
        padding-left: 134px;
    }
    &__title {
        display: flex;
        text-align: center;
        justify-content: center;
        padding-bottom: 76px;
        @include ebGaramondFont(700, 48, $headerColor, 67.2);
    }
}
</style>
