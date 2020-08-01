<template>
  <table class="galaxies">
    <thead>
      <tr class="galaxies-row">
        <th class="galaxies-header">
          <button class="galaxies-header-btn" @click="callOrdered">
            Galaxy Name
            <img
              class="galaxies-header-btn-arrow"
              :class="{ translate: order }"
              src="@/assets/arrow.svg"
              alt="#"
            />
          </button>
        </th>
        <th class="galaxies-header">Constellation</th>
        <th class="galaxies-header">Origin of name</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="galaxy of galaxies"
        :key="galaxy.id"
        class="galaxies-row hover"
      >
        <td class="galaxies-data">
          <div class="galaxies-data-title">
            Galaxy Name
          </div>
          <div class="galaxies-data-content">
            <img class="galaxies-data-img" :src="galaxy.img" alt="" />{{
              galaxy.name
            }}
          </div>
        </td>
        <td class="galaxies-data">
          <div class="galaxies-data-title">
            Constellation
          </div>
          <div class="galaxies-data-content">
            {{ galaxy.constellation }}
          </div>
        </td>
        <td class="galaxies-data">
          <div class="galaxies-data-title">
            Origin of name
          </div>
          <div class="galaxies-data-content">
            {{ galaxy.originOfName }}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      order: false,
    }
  },
  computed: {
    galaxies() {
      return this.$store.getters.galaxies
    },
  },
  mounted() {
    this.$store.dispatch('getGalaxies')
  },
  methods: {
    callOrdered() {
      this.order = !this.order
      this.$store.commit('callOrdaring', this.order)
    },
  },
}
</script>

<style lang="scss">
.galaxies {
  border-collapse: collapse;
  width: 100%;
  &-header {
    padding: 15px 32px 15px 0;
    color: #909597;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    &-btn {
      outline: none;
      padding: 0;
      font-style: normal;
      background-color: transparent;
      max-width: 110px;
      width: 100%;
      color: #263238;
      font-family: Roboto;
      font-weight: 900;
      font-size: 12px;
      text-transform: uppercase;
      display: flex;
      justify-content: space-between;
      &-arrow {
        &.translate {
          transform: rotate(-180deg);
        }
      }
    }
  }
  &-row {
    display: flex;
    justify-content: space-between;
    &.hover:hover {
      background-color: rgba(97, 128, 239, 0.2);
    }
  }
  &-data {
    border: 1px solid #dddddd;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    padding: 20px 15px;
    display: flex;
    align-items: center;
    &-title {
      display: none;
    }
    &-content {
      display: flex;
      align-items: center;
    }
    &-img {
      width: 30px;
      height: 30px;
      object-fit: 'contain';
      margin-right: 20px;
    }
  }
  td,
  th {
    text-align: left;
    &:nth-child(1) {
      max-width: 25%;
      width: 100%;
    }
    &:nth-child(2) {
      max-width: 25%;
      width: 100%;
    }
    &:nth-child(3) {
      max-width: 50%;
      width: 100%;
    }
  }
}
@media screen and (max-width: 960px) {
  thead {
    .galaxies {
      &-row {
        display: none;
      }
    }
  }
  tbody {
    .galaxies {
      &-row {
        flex-direction: column;
        margin: 24px 0;
        &.hover:hover {
          background-color: transparent;
        }
      }
      &-data {
        max-width: calc(100% - 32px) !important;
        width: 100% !important;
        flex-direction: column;
        align-items: flex-start;
        padding: 8px 15px;
        line-height: 17px;
        font-size: 14px;
        &:hover {
          background-color: rgba(97, 128, 239, 0.2);
        }
        &-img {
          width: 20px;
          height: 20px;
          margin-right: 15px;
        }
        &-title {
          display: block;
          padding-bottom: 10px;
          color: #909597;
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 10px;
          line-height: 14px;
        }
      }
    }
  }
}
</style>
