import Vue from 'vue'

import FieldInputText from 'src/modules/Common/Fields/FieldInputText'
import FieldTextarea from 'src/modules/Common/Fields/FieldTextarea'
import FieldPassword from 'src/modules/Common/Fields/FieldPassword'
import FieldCheckbox from 'src/modules/Common/Fields/FieldCheckbox'
import FieldRadio from 'src/modules/Common/Fields/FieldRadio'

Vue.component('field-input', FieldInputText)
Vue.component('field-textarea', FieldTextarea)
Vue.component('field-password', FieldPassword)
Vue.component('field-checkbox', FieldCheckbox)
Vue.component('field-radio', FieldRadio)

export default {
  FieldInputText, FieldPassword, FieldCheckbox, FieldRadio
}
