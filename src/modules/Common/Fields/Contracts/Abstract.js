import { Utils } from 'quasar-framework'

const defaults = {
  id: Utils.uid(),
  label: '',
  title: '',
  placeholder: '',
  mask: '',
  className: '',
  width: '100',
  inline: false,
  disabled: false,
  required: false
}

const Abstract = {
  name: 'field-abstract',
  props: {
    /**
     * v-model
     */
    value: {
      required: true,
      default: undefined
    },
    /**
     * Pass to properties on created
     */
    schema: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    properties: {},
    classNames: []
  }),
  computed: {
    /**
     * @returns {string}
     */
    label () {
      return this.properties.label + ' ' + (this.properties.required ? '*' : '')
    }
  },
  /**
   * hook created
   */
  created () {
    this.properties = Object.assign({}, defaults, this.schema)
  },
  methods: {
    /**
     * @param name
     * @returns {Array}
     */
    getDefaultClassName (name) {
      const classNames = []
      const width = 'has-' + String(this.properties.inline ? '100' : this.properties.width)
      classNames.push('field')
      classNames.push(width)
      classNames.push(name)

      return classNames
    },
    /**
     * @param value
     */
    updateValue (value) {
      this.$refs.input.value = value
      this.$emit('input', value)
    },
    /**
     * @return mixed
     */
    getValue () {
      return this.$refs.input.value
    },
    /**
     * @param {*} value
     * @param {object} $event
     */
    fieldKeyDown (value, $event) {
      this.updateValue(value)
      this.$emit('key_down', value, $event)
    },
    /**
     * @param {*} value
     * @param {object} $event
     */
    fieldKeyPress (value, $event) {
      this.updateValue(value)
      this.$emit('key_press', value, $event)
    },
    /**
     * @param {*} value
     * @param {object} $event
     */
    fieldKeyUp (value, $event) {
      this.updateValue(value)
      this.$emit('key_up', value, $event)
    },
    /**
     * @param {*} value
     * @param {object} $event
     */
    fieldMouseUp (value, $event) {
      this.updateValue(value)
      this.$emit('mouse_up', value, $event)
    },
    /**
     * @param {*} value
     * @param {object} $event
     */
    fieldFocus (value, $event) {
      this.updateValue(value)
      this.$emit('focus', value, $event)
    },
    /**
     * @param {*} value
     * @param {object} $event
     */
    fieldBlur (value, $event) {
      this.updateValue(value)
      this.$emit('blur', value, $event)
    },
    /**
     * @param {*} value
     * @param {object} $event
     */
    fieldCut (value, $event) {
      this.updateValue(value)
      this.$emit('cut', value, $event)
    },
    /**
     * @param {*} value
     * @param {object} $event
     */
    fieldCopy (value, $event) {
      this.updateValue(value)
      this.$emit('copy', value, $event)
    },
    /**
     * @param {*} value
     * @param {object} $event
     */
    fieldPaste (value, $event) {
      this.updateValue(value)
      this.$emit('paste', value, $event)
    }
  }
}

export default Abstract
