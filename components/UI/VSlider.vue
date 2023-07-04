<style lang="scss" scoped>
.slider {
  position: relative;
}

.swiper-container {
  overflow: unset !important;

  /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
  :deep(.swiper-wrapper) {
    position: static !important;
    z-index: unset !important;
    width: unset !important;
    height: unset !important;
    box-sizing: border-box !important;
    transition-property: unset !important;
  }
}
</style>
