<template>
  <portal to="dialog-portal">
    <div id="modal" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            Share on Social Media
          </p>
          <button class="delete" aria-label="close" @click="toggle(false)" />
        </header>
        <section class="modal-card-body">
          Soon to be implemented :)
        </section>
        <footer class="modal-card-foot">
          <button class="button" @click="toggle(false)">
            Close
          </button>
        </footer>
      </div>
    </div>
  </portal>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Blog } from '@/models/blog'
import { IDialog } from '@/models/dialog'
import { BlogCategory } from '@/models/blog-category'
import { SocialMediaPlatform } from '@/models/social-media-platform'
import { FacebookHelper } from '@/helpers/facebook-helper'
import thumbnailJson from '@/assets/thumbnails.json'

@Component
export default class ShareDialog extends Vue implements IDialog {
  @Prop() blog!: Blog
  private dialogOpen = false

  get thumbnailCategory () {
    switch (this.blog.category) {
      case BlogCategory.HtmlCss:
        return this.tagNames.includes('HTML') ? 'html' : 'css'
      case BlogCategory.Python:
        return 'python'
      case BlogCategory.JavaScript:
        return 'javascript'
      case BlogCategory.CSharp:
        return 'csharp'
      case BlogCategory.General:
        return 'general'
    }
  }

  get tagNames () {
    return this.blog.tags.map((tag) => tag.name)
  }

  toggle (open: boolean) {
    const dialog = document.getElementById('modal')
    if (dialog) {
      if (open) {
        dialog.classList.add('is-active')
      }
      else {
        dialog.classList.remove('is-active')
      }
    }
  }

  generateShareLink (platform: SocialMediaPlatform) {
    if (platform === SocialMediaPlatform.Facebook) {
      FacebookHelper.generateLink()
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
