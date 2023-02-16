<script setup>
const props = defineProps({
  toggleClass: {
    type: String,
    required: false,
    default: '',
  },
  isList: {
    type: Boolean,
    required: false,
  },
})
const isShow = ref(false)

function toggleShow() {
  isShow.value = !isShow.value
}
</script>

<template>
  <li
    :class="{
      show: isShow,
      dropdown: true,
      'dropdown-list-toggle': props.isList,
    }"
  >
    <a
      href="#"
      :class="`nav-link ${props.toggleClass}`"
      @click.prevent="toggleShow()"
      ><slot name="toggle"><i class="far fa-bell"></i></slot
    ></a>
    <div
      :class="{
        show: isShow,
        'dropdown-menu dropdown-menu-right': true,
        'dropdown-list': props.isList,
      }"
    >
      <slot></slot>
    </div>
  </li>
</template>
