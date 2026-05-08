<template>
  <footer>
    <div class="links">
      <n-text
        class="link-item"
        :depth="3"
        @click="jumpLink('https://ai-passage-creator-main-git-main-andyggh2020s-projects.vercel.app/')"
      >AI文章创作器</n-text>
      <span class="divider">·</span>
      <n-text
        class="link-item"
        :depth="3"
        @click="jumpLink('https://media-creator-master-bfcicu56k-andyggh2020s-projects.vercel.app/')"
      >AI内容工厂</n-text>
    </div>
  </footer>
</template>

<script setup>
const jumpLink = (url) => {
  window.open(url);
};
</script>

<style lang="scss" scoped>
footer {
  height: 60px;
  padding: 0 5vw;
  max-width: 1800px;
  margin: 20px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .links {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
  }
  .link-item {
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      color: var(--n-code-text-color);
    }
  }
  .divider {
    opacity: 0.4;
  }
}
</style>
