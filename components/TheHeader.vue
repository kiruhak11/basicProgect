<template>
    <header>
        <div class="container header__container">
            <ul>
                <li>
                    <NuxtLink to="/"><IconsLogo /></NuxtLink>
                </li>
            </ul>
            <nav>
                <ul>
                    <li><NuxtLink to="/afisha">Афиша</NuxtLink></li>
                    <li><div class="dot"></div></li>
                    <li><a href="#">Заказ билетов</a></li>
                    <li><div class="dot"></div></li>
                    <li><a href="#">Контакты</a></li>
                    <li><div class="dot"></div></li>
                    <li><a href="#">История дворца</a></li>
                    <li><div class="dot"></div></li>
                    <li><a href="#">Галерея</a></li>
                    <li><div class="dot"></div></li>
                    <li><a href="#">Планы залов</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
header {
    background-color: $headerColor;
    color: white;
    height: 104px;
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.header {
    &__container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
}
ul {
    list-style-type: none;
    display: flex;
    align-items: center;
}

li {
    padding-left: 20px;
    a {
        @include firaSansFont(400, 16, white, 22.4);
    }
}

.dot {
    width: 6px;
    height: 6px;
    background-color: white;
    border-radius: 1px; //или не 8, закрыл уже фигму
    transform: rotate(45deg);
}
</style>
