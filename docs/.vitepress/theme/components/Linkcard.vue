<!-- .vitepress/theme/Linkcard.vue -->
<script setup lang="ts">
import { computed } from 'vue'

interface LinkData {
  url: string
  title: string
  description: string
  logo: string
}

interface Props {
  data: LinkData[]
}

const props = defineProps<Props>()

const flexClass = computed(() => {
  const count = props.data.length
  if (count === 1) return 'flex-100'
  if (count === 2) return 'flex-50'
  return 'flex-33'
})

const isEmoji = (str: string) => {
  const emojiRegex = /^(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)$/u
  return emojiRegex.test(str)
}
</script>

<template>
  <div class="linkcard-container">
    <a
      v-for="link in data"
      :key="link.url"
      :class="['linkcard', flexClass]"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="logo-container">
        <img
          v-if="!isEmoji(link.logo)"
          class="logo"
          :src="link.logo"
          :alt="link.title + ' logo'"
        />
        <span v-else class="emoji-logo">{{ link.logo }}</span>
      </div>
      <div class="content">
        <h3 class="title">{{ link.title }}</h3>
        <p class="description">{{ link.description }}</p>
      </div>
    </a>
  </div>
</template>

<style scoped>
.linkcard-container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 16px;
}

.linkcard {
  display: flex;
  align-items: center;
  background-color: var(--vp-c-bg-soft);
  border-radius: 6px;
  padding: 8px;
  transition: all 0.2s ease;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.linkcard:hover {
  background-color: var(--vp-c-bg-mute);
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.flex-100 {
  flex-basis: 100%;
}
.flex-50 {
  flex-basis: calc(50% - 6px);
}
.flex-33 {
  flex-basis: calc(33.333% - 8px);
}

.logo-container {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  flex-shrink: 0;
}

.logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 4px;
}

.emoji-logo {
  font-size: 20px;
  line-height: 1;
}

.content {
  flex: 1;
  min-width: 0;
}

.title {
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 2px;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.description {
  font-size: 12px;
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 768px) {
  .linkcard {
    flex-basis: calc(50% - 6px) !important;
  }
}

@media (max-width: 480px) {
  .linkcard {
    flex-basis: 100% !important;
  }

  .logo-container {
    width: 28px;
    height: 28px;
  }

  .emoji-logo {
    font-size: 18px;
  }

  .title {
    font-size: 13px;
  }

  .description {
    font-size: 11px;
  }
}
</style>
