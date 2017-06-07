// drawer
import { mapGetters } from 'vuex'

const Drawer = (side) => {
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
        return this.AppMenuLeft
          .filter(_item => {
            return !this.filter || String(_item.label).toUpperCase().includes(this.filter.toUpperCase())
          })
          .map(_item => {
            _item.html = _item.label.replace(
              new RegExp(this.filter, 'g'),
              '<mark>' + this.filter + '</mark>'
            )
            return _item
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

export default Drawer
