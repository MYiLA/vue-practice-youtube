<template>
  <div id="app">
    <!-- шаг 5. чтобы выводить компонент динамически - есть тег компонент
    :is - это свойство формирует из стандартного компонента тот, который нужен нам в данный момент-->
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
// шаг 6. регистрация компонентов
import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'

export default {
  // шаг 4. определяем, какой лейаут рендерить
  computed: {
    // шаг 4. лейаут мы будем самостоятельно вычислять и он будет возвращать строку
    layout () {
      // шаг 7. указываем название страницы,
      // а статику указываем как конкатенация с основным адресом(уточнение, какой именно компонент рендерить)
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  // шаг 6. регистрация компонентов
  components: {
    EmptyLayout, MainLayout
  }
}
</script>

<style lang="scss">
// шаг 1. так как это главный компонент, то импортируем стили сюда
@import '~materialize-css/dist/css/materialize.min.css';
@import './assets/index.css';
</style>
