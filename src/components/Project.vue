<template>
  <div class="grid-item port-img-overlay" @click="$emit('showSlideshow', project.images, project.imagefolder)" :class="[project.classes,project.category]">
    <a>
      <p class="text-primary">{{ project.title }}</p>
      <img :src="`../img/projects/${project.imagefolder}/${project.img}`" alt="Portfolio Image" />
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
