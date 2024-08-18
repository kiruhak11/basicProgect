<template>
    <body>
        <div class="container">
            <div class="pyramid left">
                <div class="block small"></div>
                <div class="block medium"></div>
                <div class="block large"></div>
            </div>
            <div class="pyramid center">
                <div class="block small"></div>
                <div class="block medium"></div>
                <div class="block large"></div>
            </div>
            <div class="pyramid right">
                <div class="block small"></div>
                <div class="block medium"></div>
                <div class="block large"></div>
            </div>
        </div>
    </body>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.pyramid {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.pyramid.left {
    align-items: flex-start;
}
.pyramid.right {
    align-items: flex-end;
}
.block {
    height: 50px;
    background-color: red;
    margin: 2px 0;
}
.block.small {
    width: 50px;
}
.block.medium {
    width: 100px;
}
.block.large {
    width: 150px;
}
</style>
