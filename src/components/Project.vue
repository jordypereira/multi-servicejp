<template>
  <div class="grid-item port-img-overlay" @click="$emit('showSlideshow', project.images)" :class="[project.classes,project.category]">
    <a>
      <img :src="project.img" alt="Portfolio Image" />
      <div class="img-hover-txt">
        <p>{{ project.title }}
          <span> {{ project.description }}</span>
        </p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['project'],
};
</script>