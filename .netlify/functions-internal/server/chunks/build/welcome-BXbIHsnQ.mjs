import { defineComponent, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { EContainer, EHeading, EText } from 'vue-email';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "welcome",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(EContainer), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(EHeading), { class: "mx-0 my-[30px] p-0 text-center text-[24px] font-bold text-black" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Confirma\xE7\xE3o de Registro `);
                } else {
                  return [
                    createTextVNode(" Confirma\xE7\xE3o de Registro ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(EText), { class: "text-black" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Ol\xE1, ${ssrInterpolate(__props.name)}! Seu registro foi realizado com sucesso no nosso sistema. `);
                } else {
                  return [
                    createTextVNode(" Ol\xE1, " + toDisplayString(__props.name) + "! Seu registro foi realizado com sucesso no nosso sistema. ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(EHeading), { class: "mx-0 my-[30px] p-0 text-center text-[24px] font-bold text-black" }, {
                default: withCtx(() => [
                  createTextVNode(" Confirma\xE7\xE3o de Registro ")
                ]),
                _: 1
              }),
              createVNode(unref(EText), { class: "text-black" }, {
                default: withCtx(() => [
                  createTextVNode(" Ol\xE1, " + toDisplayString(__props.name) + "! Seu registro foi realizado com sucesso no nosso sistema. ", 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("emails/welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=welcome-BXbIHsnQ.mjs.map
