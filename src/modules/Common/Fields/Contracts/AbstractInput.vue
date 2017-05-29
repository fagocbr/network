<template>
  <div :class="classNames">
    <slot name="label">
      <label class="input-label" :for="properties.id" v-if="!properties.inline">{{ label }}</label>
    </slot>
    <slot name="component">
      <input :type="type" ref="input" :name="properties.name" :id="properties.id" :value="value"
             :class="['input', 'full-width']"
             :disabled="properties.disabled" :placeholder="properties.placeholder" :title="properties.title"
             :required="properties.required"
             @keydown="fieldKeyDown($event.target.value, $event)"
             @keypress="fieldKeyPress($event.target.value, $event)"
             @keyup="fieldKeyUp($event.target.value, $event)"
             @mouseup="fieldMouseUp($event.target.value, $event)"
             @focus="fieldFocus($event.target.value, $event)"
             @cut="fieldCut($event.target.value, $event)"
             @copy="fieldCopy($event.target.value, $event)"
             @paste="fieldPaste($event.target.value, $event)"
             @blur="fieldBlur($event.target.value, $event)"
             @input="updateValue($event.target.value, $event)"/>
      <span class="input-bar"></span>
    </slot>
    <slot name="error">
    </slot>
  </div>
</template>

<script type="text/javascript">
  import Abstract from 'src/modules/Common/Fields/Contracts/Abstract'

  export default {
    extends: Abstract,
    name: 'abstract-input',
    data: () => ({
      type: 'text'
    })
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
