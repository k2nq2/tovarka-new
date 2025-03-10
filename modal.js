/*!
 * EasyToggler v2.2.7 (https://github.com/rah-emil/easy-toggler#readme)
 * Copyright 2022 Rah Emil <013131@mail.ru>
 * Licensed under MIT (https://github.com/rah-emil/easy-toggler/blob/master/LICENSE)
 */
(function () {
    'use strict';

    const toggle = ($toggler, attrs) => {
      const _target = $toggler.getAttribute(attrs.toggle);

      document.querySelectorAll(`[${attrs.toggle}]`).forEach(easyBlock => {
        if (!easyBlock.hasAttribute(attrs.parallel) && easyBlock !== $toggler) {
          document.querySelector(easyBlock.getAttribute(attrs.toggle)).classList.remove(easyBlock.getAttribute(attrs.class));

          const _selfClass = $toggler.getAttribute(attrs.self);

          if (_selfClass) {
            $toggler.classList.remove(_selfClass);
          }
        }
      });
      document.querySelector(_target)?.classList.toggle($toggler.getAttribute(attrs.class));

      const _selfClass = $toggler.getAttribute(attrs.self);

      if (_selfClass) {
        $toggler.classList.toggle(_selfClass);
      }

      attrs.onToggle($toggler);
    };

    const add = ($add, attrs) => {
      const _target = $add.getAttribute(attrs.add);

      const _class = $add.getAttribute(attrs.class);

      document.querySelectorAll(_target).forEach(easyBlock => {
        easyBlock.classList.add(_class);
      });

      const _selfClass = $add.getAttribute(attrs.self);

      if (_selfClass) {
        $add.classList.add(_selfClass);
      }

      attrs.onAdd($add);
    };

    const remove = ($remove, attrs) => {
      const _target = $remove.getAttribute(attrs.remove);

      const _class = $remove.getAttribute(attrs.class);

      document.querySelectorAll(_target).forEach(easyBlock => {
        easyBlock.classList.remove(_class);
      });

      const _selfClass = $remove.getAttribute(attrs.self);

      if (_selfClass) {
        $remove.classList.remove(_selfClass);
      }

      attrs.onRemove($remove);
    };

    const rcoes = (e, attrs) => {
      const $rcoes = document.querySelectorAll(`[${attrs.rcoe}]`);
      Array.from($rcoes).forEach($rcoe => {
        let block = $rcoe.getAttribute(attrs.toggle);
        let block_class = $rcoe.getAttribute(attrs.class);

        if (!e.target.closest(block)) {
          document.querySelector(block)?.classList.remove(block_class);

          const _selfClass = $rcoe.getAttribute(attrs.self);

          if (_selfClass) {
            $rcoe.classList.remove(_selfClass);
          }

          attrs.onRcoe($rcoe);
        }
      });
    };

    function easyTogglerHandler(e, attrs) {
      const $toggler = e.target.closest(`[${attrs.toggle}]`);
      const $remove = e.target.closest(`[${attrs.remove}]`);
      const $add = e.target.closest(`[${attrs.add}]`);

      if ($toggler) {
        e.preventDefault();
        toggle($toggler, attrs);
      }

      if ($remove) {
        e.preventDefault();
        remove($remove, attrs);
      }

      if ($add) {
        e.preventDefault();
        add($add, attrs);
      }

      if (!$toggler && !$remove && !$add) {
        rcoes(e, attrs);
      }
    }

    const attrsDefault = {
      toggle: 'easy-toggle',
      add: 'easy-add',
      remove: 'easy-remove',
      class: 'easy-class',
      rcoe: 'easy-rcoe',
      parallel: 'easy-parallel',
      self: 'easy-self',
      selfRcoe: 'easy-self-rcoe',

      // Hooks
      onToggle($el) {},

      onAdd($el) {},

      onRemove($el) {},

      onRcoe($el) {}

    };

    document.addEventListener('DOMContentLoaded', () => {
      document.addEventListener('click', e => {
        easyTogglerHandler(e, attrsDefault);
      });
    });

})();
//# sourceMappingURL=easy-toggler.iife.js.map
document.getElementById('optionSelect').addEventListener('change', function() {
  const option = this.value;
  const blocks = document.querySelectorAll('.content-block');
  
  blocks.forEach(block => block.style.display = 'none');
  
  if (option) {
      document.getElementById(`contentBlock${option.slice(-1)}`).style.display = 'block';
  }
});