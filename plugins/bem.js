import Vue from 'vue';

const Bem = {
  createModificator(baseClass, modName, modValue = '') {
    if (modValue === false) {
      return '';
    }

    modValue = modValue === true ? false : modValue;

    return `${baseClass}--${modName}`.concat(modValue ? `-${modValue}` : '');
  },

  build(block, element = undefined, modificators = {}, additional) {
    const classes = [];

    if (element === null) {
      element = undefined;
    }

    if (typeof element === 'object') {
      modificators = element;
      element = undefined;
    }

    const baseClass = element ? `${block}__${element}` : block;

    classes.push(baseClass);

    if (typeof modificators === 'string') {
      classes.push(modificators);
    }

    if (typeof modificators === 'object') {
      Object.keys(modificators).forEach(modName => {
        let mod = '';
        if (typeof modificators[modName] == 'string') {
          let modArray = modificators[modName].split(', ');
          modArray.forEach(modValue => {
            mod += ` ${this.createModificator(baseClass, modName, modValue)}`;
          });
        } else {
          mod = this.createModificator(
            baseClass,
            modName,
            modificators[modName],
          );
        }
        if (mod !== '') {
          classes.push(mod);
        }
      });
    }

    if (additional) {
      classes.push(additional);
    }

    return classes.join(' ').trim();
  },

  install(Vue) {
    const self = this;

    Vue.mixin({
      methods: {
        b(element = undefined, modificators = {}, additional = undefined) {
          let { block } = this.$options;

          if (!block) {
            block = this.$options.name;
          }

          return self.build(block, element, modificators, additional);
        },
      },
    });
  },
};

Vue.use(Bem);
