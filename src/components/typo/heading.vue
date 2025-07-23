<template>
  <component :is="headingTag" :class="mergedClass" v-bind="options.attrs || null">
    <slot />
  </component>
</template>

<script>
export default {
  name: "TypoHeading",
  props: {
    options: {
      type: Object,
      default: () => ({
        level: null,
        class: null,
        attrs: {
          id: null,
          style: null
        }
      })
    }
  },
  computed: {
    headingTag() {
      // If level is a number 1-6, convert to 'h1'-'h6'
      if (typeof this.options.level === 'number' && this.options.level >= 1 && this.options.level <= 6) {
        return `h${this.options.level}`;
      }

      // Default to 'h1'
      return 'h1';
    },
    mergedClass() {
      // Merge default classes with user classes (array or string)
      const defaultClasses = ['mt-2', 'mb-4'];
      if (Array.isArray(this.options.class)) {
        return [...defaultClasses, ...this.options.class];
      }
      if (typeof this.options.class === 'string' && this.options.class) {
        return [...defaultClasses, this.options.class];
      }
      return defaultClasses;
    }
  }
}
</script>

<!-- <template>
    <component :is="headingType">
        <slot />
    </component>
</template>

<script>
export default {
    name: "TypoHeading",
    props: {
        headingType: {
            type: String,
            default: "h1",
            validator: value => ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value)
        }
    }
}
</script> -->