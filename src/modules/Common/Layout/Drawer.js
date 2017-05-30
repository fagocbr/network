// drawer
import {mapGetters} from 'vuex'

export default (side) => {
  return {
    name: 'app-drawer-' + side,
    props: {
      swipe: {
        type: Boolean,
        default: false
      },
      flat: {
        type: Boolean,
        default: true
      },
      search: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      filter: ''
    }),
    computed: {
      ...mapGetters(['AppMenuLeft']),
      classNames () {
        const classNames = []
        if (this.flat) {
          classNames.push('flat')
        }
        return classNames
      },
      menuLeft () {
        return this.AppMenuLeft.filter(_item => {
          return !this.filter || String(_item.label).toUpperCase().includes(this.filter.toUpperCase())
        })
      }
    },
    methods: {
      open () {
        this.$refs.drawer.open()
      }
    },
    created () {
    },
    mounted () {
    }
  }
}
