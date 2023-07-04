<style lang="scss" scoped>
$white: $WHITE;

.slider-wrapper {
  position: relative;
}

.image-skeleton {
  width: 100%;
  animation: pulse-bg 1s infinite;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  @include tablet-desktop {
    height: 48.4rem;
  }

  @include mobile {
    height: 29.6rem;
  }
}

.pagination-list {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  display: flex;
  column-gap: 1rem;
  transform: translateX(-50%);

  &__item {
    width: 2rem;
    height: 2rem;
    border: 0.1rem solid $white;
    border-radius: 50%;
    cursor: pointer;

    &:not(.active) {
      background-color: transparent;
    }

    @include hover {
      transition: background-color 0.3s ease;

      &:hover {
        background-color: rgba($white, 50%);
      }
    }

    &.active {
      background-color: $white;
    }
  }
}
</style>
