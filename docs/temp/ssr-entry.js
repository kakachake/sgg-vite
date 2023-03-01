"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const React = require("react");
const jsxRuntime = require("react/jsx-runtime");
const server = require("react-dom/server");
const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const React__default = /* @__PURE__ */ _interopDefaultLegacy(React);
const React__namespace = /* @__PURE__ */ _interopNamespace(React);
const jsxRuntime__namespace = /* @__PURE__ */ _interopNamespace(jsxRuntime);
const Fragment = jsxRuntime__namespace.Fragment;
const jsx = jsxRuntime__namespace.jsx;
const jsxs = jsxRuntime__namespace.jsxs;
const B$1 = () => {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx("h1", {
      children: "hello b"
    })
  });
};
const b$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: B$1
}, Symbol.toStringTag, { value: "Module" }));
function Counter() {
  const [counter2, setCounter] = React.useState(0);
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsxs("button", {
      onClick: () => {
        setCounter((v) => v + 1);
      },
      children: ["\u70B9\u51FB ", counter2]
    })
  });
}
const counter = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Counter
}, Symbol.toStringTag, { value: "Module" }));
const A = () => {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx("h1", {
      children: "hello a"
    })
  });
};
const a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: A
}, Symbol.toStringTag, { value: "Module" }));
const B = () => {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx("h1", {
      children: "hello b"
    })
  });
};
const b = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: B
}, Symbol.toStringTag, { value: "Module" }));
const C = () => {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx("h1", {
      children: "hello C"
    })
  });
};
const c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: C
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter$1 = void 0;
const toc$1 = [{
  "id": "\u65B0\u4E00\u4EE3\u5168\u6808\u6846\u67B6-fresh",
  "text": "\u65B0\u4E00\u4EE3\u5168\u6808\u6846\u67B6 Fresh",
  "depth": 2
}, {
  "id": "\u6D4B\u8BD5",
  "text": "\u6D4B\u8BD5",
  "depth": 2
}, {
  "id": "\u6846\u67B6\u5B9A\u4F4D",
  "text": "\u6846\u67B6\u5B9A\u4F4D",
  "depth": 2
}, {
  "id": "\u4E0A\u624B\u4F53\u9A8C",
  "text": "\u4E0A\u624B\u4F53\u9A8C",
  "depth": 2
}, {
  "id": "\u4F18\u52A3\u52BF\u5206\u6790",
  "text": "\u4F18\u52A3\u52BF\u5206\u6790",
  "depth": 2
}, {
  "id": "\u6E90\u7801\u5B9E\u73B0",
  "text": "\u6E90\u7801\u5B9E\u73B0",
  "depth": 2
}, {
  "id": "\u5C0F\u7ED3",
  "text": "\u5C0F\u7ED3",
  "depth": 2
}];
function _createMdxContent$1(props) {
  const _components = Object.assign({
    h2: "h2",
    a: "a",
    p: "p",
    strong: "strong",
    img: "img",
    div: "div",
    span: "span",
    pre: "pre",
    code: "code",
    ul: "ul",
    li: "li",
    blockquote: "blockquote"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h2, {
      id: "\u65B0\u4E00\u4EE3\u5168\u6808\u6846\u67B6-fresh",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u65B0\u4E00\u4EE3\u5168\u6808\u6846\u67B6-fresh",
        children: "#"
      }), "\u65B0\u4E00\u4EE3\u5168\u6808\u6846\u67B6 Fresh"]
    }), "\n", jsxs(_components.p, {
      children: ["\u5927\u5BB6\u597D\uFF0C\u6211\u662F shen \u4E09\u5143\u3002\u4ECA\u5929\u7ED9\u5927\u5BB6\u4ECB\u7ECD\u4E00\u4E2A\u65B0\u7684\u6846\u67B6 Fresh\uFF0C\u7531 Deno \u4F5C\u8005\u51FA\u54C1\uFF0C\u5728\u6700\u8FD1\u53D1\u5E03\u4E86 1.0 \u7684\u6B63\u5F0F\u7248\u672C\uFF0C\u5BA3\u5E03\u652F\u6301\u4E86\u751F\u4EA7\u73AF\u5883\uFF0C\u5E76\u4E14\u5728 Github \u4E0A\u70ED\u5EA6\u4E5F\u6BD4\u8F83\u9AD8\uFF0C\u73B0\u5728\u662F\u65F6\u5019\u7ED9\u5927\u5BB6\u8BE6\u7EC6\u5730\u4ECB\u7ECD\u4E00\u4E0B\u8FD9\u4E2A\u65B9\u6848\u4E86\u3002\u63A5\u4E0B\u6765\u4F1A\u4ECE", jsx(_components.strong, {
        children: "\u6846\u67B6\u5B9A\u4F4D"
      }), "\u3001", jsx(_components.strong, {
        children: "\u4E0A\u624B\u4F53\u9A8C"
      }), "\u3001", jsx(_components.strong, {
        children: "\u4F18\u52A3\u52BF\u8BC4\u4F30"
      }), "\u548C", jsx(_components.strong, {
        children: "\u6E90\u7801\u5B9E\u73B0"
      }), "\u8FD9\u51E0\u4E2A\u65B9\u9762\u6765\u7ED9\u5927\u5BB6\u6DF1\u5165\u89E3\u8BFB Fresh \u6846\u67B6\u3002"]
    }), "\n", jsxs(_components.h2, {
      id: "\u6D4B\u8BD5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u6D4B\u8BD5",
        children: "#"
      }), "\u6D4B\u8BD5"]
    }), "\n", jsxs(_components.h2, {
      id: "\u6846\u67B6\u5B9A\u4F4D",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u6846\u67B6\u5B9A\u4F4D",
        children: "#"
      }), "\u6846\u67B6\u5B9A\u4F4D"]
    }), "\n", jsxs(_components.p, {
      children: ["\u9996\u5148\uFF0C\u4ECE\u5B9A\u4F4D\u4E0A\u6765\u770B\uFF0CFresh \u5C5E\u4E8E ", jsx(_components.strong, {
        children: "Web \u5168\u6808\u5F00\u53D1\u6846\u67B6"
      }), "\u3002\u662F\u4E0D\u662F\u5BF9\u4E8E\u8FD9\u4E2A\u8BCD\u975E\u5E38\u773C\u719F\u5462\uFF1F\u76F8\u4FE1\u4F60\u5DF2\u7ECF\u60F3\u5230\u4E86\uFF0C\u50CF\u73B0\u5728\u5927\u540D\u9F0E\u9F0E\u7684 Next.js \u4EE5\u53CA\u65B0\u51FA\u7684 Remix \u90FD\u662F\u8D70\u7684\u8FD9\u4E2A\u8DEF\u7EBF\u3002\u90A3\u4E48\u4F5C\u4E3A Next.js \u548C Remix \u7684\u7ADE\u54C1\uFF0C Fresh \u6709\u54EA\u4E9B\u503C\u5F97\u4E00\u63D0\u7684\u4EAE\u70B9\uFF0C\u6216\u8005\u8BF4\u6709\u54EA\u4E9B\u5DEE\u5F02\u70B9\u5462\uFF1F\u4E3B\u8981\u5305\u62EC\u5982\u4E0B\u7684\u51E0\u4E2A\u65B9\u9762:"]
    }), "\n", jsx(_components.p, {
      children: "\u9996\u5148\uFF0CFresh \u57FA\u4E8E Deno \u8FD0\u884C\u65F6\uFF0C\u7531 Deno \u539F\u73ED\u4EBA\u9A6C\u5F00\u53D1\uFF0C\u4EAB\u6709 Deno \u4E00\u7CFB\u5217\u5DE5\u5177\u94FE\u548C\u751F\u6001\u7684\u4F18\u52BF\uFF0C\u6BD4\u5982\u5185\u7F6E\u7684\u6D4B\u8BD5\u5DE5\u5177\u3001\u652F\u6301 http import \u7B49\u7B49\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u5176\u6B21\u662F\u6E32\u67D3\u6027\u80FD\u65B9\u9762\uFF0CFresh \u6574\u4F53\u91C7\u7528 Islands \u67B6\u6784(\u4E4B\u524D\u4ECB\u7ECD\u7684 Astro \u4E5F\u662F\u7C7B\u4F3C)\uFF0C\u5B9E\u73B0\u4E86\u5BA2\u6237\u7AEF\u6309\u9700 Hydration\uFF0C\u6709\u4E00\u5B9A\u7684\u6E32\u67D3\u6027\u80FD\u4F18\u52BF\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u5F53\u7136\uFF0C\u8FD8\u6709\u4E00\u4E2A\u6BD4\u8F83\u51FA\u8272\u7684\u70B9\u662F\u6784\u5EFA\u5C42\u505A\u5230\u4E86 Bundle-less\uFF0C\u5373\u5E94\u7528\u4EE3\u7801\u4E0D\u9700\u8981\u6253\u5305\u5373\u53EF\u76F4\u63A5\u90E8\u7F72\u4E0A\u7EBF\uFF0C\u540E\u6587\u4F1A\u4ECB\u7ECD\u8FD9\u90E8\u5206\u7684\u5177\u4F53\u5B9E\u73B0\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u6700\u540E\uFF0C\u4E0D\u540C\u4E8E Next.js \u548C Remix\uFF0CFresh \u7684\u524D\u7AEF\u6E32\u67D3\u5C42\u7531 Preact \u5B8C\u6210\uFF0C\u5305\u62EC Islands \u67B6\u6784\u7684\u5B9E\u73B0\u4E5F\u662F\u57FA\u4E8E Preact\uFF0C\u4E14\u4E0D\u652F\u6301\u5176\u5B83\u524D\u7AEF\u6846\u67B6\u3002"
    }), "\n", jsxs(_components.h2, {
      id: "\u4E0A\u624B\u4F53\u9A8C",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u4E0A\u624B\u4F53\u9A8C",
        children: "#"
      }), "\u4E0A\u624B\u4F53\u9A8C"]
    }), "\n", jsx(_components.p, {
      children: "\u5728\u4F7F\u7528 Fresh \u4E4B\u524D\uFF0C\u9700\u8981\u5728\u673A\u5668\u4E0A\u5148\u5B89\u88C5 Deno:"
    }), "\n", jsx(_components.p, {
      children: jsx(_components.a, {
        href: "https://camo.githubusercontent.com/232e090751f60c2260392094964afb5cab8df321fa0b0f9afb1170a17faf21b7/68747470733a2f2f70332d6a75656a696e2e62797465696d672e636f6d2f746f732d636e2d692d6b3375316662706663702f31646564316137643466646234343432396566306131626637613433633633367e74706c762d6b3375316662706663702d7a6f6f6d2d312e696d616765",
        children: jsx(_components.img, {
          src: "https://camo.githubusercontent.com/232e090751f60c2260392094964afb5cab8df321fa0b0f9afb1170a17faf21b7/68747470733a2f2f70332d6a75656a696e2e62797465696d672e636f6d2f746f732d636e2d692d6b3375316662706663702f31646564316137643466646234343432396566306131626637613433633633367e74706c762d6b3375316662706663702d7a6f6f6d2d312e696d616765",
          alt: ""
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["\u5982\u4F55\u6CA1\u6709\u5B89\u88C5\u7684\u8BDD\u53EF\u4EE5\u5148\u53BB Deno \u5B98\u65B9\u5B89\u88C5\u4E00\u4E0B: ", jsx(_components.a, {
        href: "https://deno.land/%E3%80%82",
        children: "https://deno.land/\u3002"
      })]
    }), "\n", jsx(_components.p, {
      children: "\u63A5\u4E0B\u6765\u53EF\u4EE5\u8F93\u5165\u5982\u4E0B\u7684\u547D\u4EE4\u521D\u59CB\u5316\u9879\u76EE:"
    }), "\n", jsxs(_components.div, {
      className: "language-ts",
      children: [jsx(_components.span, {
        className: "code-lang",
        children: "ts"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "deno"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "run"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "A"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "-"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "r"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " https"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "//fresh.deno.dev my-project"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: jsx(_components.a, {
        href: "https://camo.githubusercontent.com/cdf9cdf537a00813e54515d1a0df9f84201ed5ecc843a9d79772ca9f77475883/68747470733a2f2f70332d6a75656a696e2e62797465696d672e636f6d2f746f732d636e2d692d6b3375316662706663702f31383265383366383837373334306233616533353033306165653663643737367e74706c762d6b3375316662706663702d7a6f6f6d2d312e696d616765",
        children: jsx(_components.img, {
          src: "https://camo.githubusercontent.com/cdf9cdf537a00813e54515d1a0df9f84201ed5ecc843a9d79772ca9f77475883/68747470733a2f2f70332d6a75656a696e2e62797465696d672e636f6d2f746f732d636e2d692d6b3375316662706663702f31383265383366383837373334306233616533353033306165653663643737367e74706c762d6b3375316662706663702d7a6f6f6d2d312e696d616765",
          alt: ""
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["\u9879\u76EE\u7684\u5DE5\u7A0B\u5316\u811A\u672C\u5728 ", jsx(_components.code, {
        children: "deno.json"
      }), " \u6587\u4EF6\u4E2D:"]
    }), "\n", jsxs(_components.div, {
      className: "language-json",
      children: [jsx(_components.span, {
        className: "code-lang",
        children: "json"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "tasks"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// -A \u8868\u793A\u5141\u8BB8 Deno \u8BFB\u53D6\u73AF\u5883\u53D8\u91CF"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "start"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "deno run -A --watch=static/,routes/ dev.ts"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "},"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "importMap"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "./import_map.json"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["\u63A5\u4E0B\u6765\u4F60\u53EF\u4EE5\u6267\u884C", jsx(_components.code, {
        children: "deno task start"
      }), " \u547D\u4EE4\u542F\u52A8\u9879\u76EE:"]
    }), "\n", jsx(_components.p, {
      children: jsx(_components.a, {
        href: "https://camo.githubusercontent.com/0c7db9082b953eea0770c6600d62ea7fb59119fc730a89bc1e677534023d340a/68747470733a2f2f70332d6a75656a696e2e62797465696d672e636f6d2f746f732d636e2d692d6b3375316662706663702f30313632383931393037653234313665393030633132643333303964666361357e74706c762d6b3375316662706663702d7a6f6f6d2d312e696d616765",
        children: jsx(_components.img, {
          src: "https://camo.githubusercontent.com/0c7db9082b953eea0770c6600d62ea7fb59119fc730a89bc1e677534023d340a/68747470733a2f2f70332d6a75656a696e2e62797465696d672e636f6d2f746f732d636e2d692d6b3375316662706663702f30313632383931393037653234313665393030633132643333303964666361357e74706c762d6b3375316662706663702d7a6f6f6d2d312e696d616765",
          alt: ""
        })
      })
    }), "\n", jsx(_components.p, {
      children: "\u7EC8\u7AEF\u91CC\u9762\u663E\u793A Fresh \u4ECE\u6587\u4EF6\u76EE\u5F55\u4E2D\u626B\u63CF\u51FA\u4E86 3 \u4E2A\u8DEF\u7531\u548C 1 \u4E2A island \u7EC4\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6765\u89C2\u5BDF\u4E00\u4E0B\u9879\u76EE\u7684\u76EE\u5F55\u7ED3\u6784:"
    }), "\n", jsxs(_components.div, {
      className: "language-ts",
      children: [jsx(_components.span, {
        className: "code-lang",
        children: "ts"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u251C\u2500\u2500 "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "README"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "md"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u251C\u2500\u2500 "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "components"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u2502   \u2514\u2500\u2500 "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Button"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "tsx"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u251C\u2500\u2500 "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "deno"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "json"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u251C\u2500\u2500 "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "dev"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ts"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u251C\u2500\u2500 "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "fresh"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "gen"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ts"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u251C\u2500\u2500 "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "import_map"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "json"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u251C\u2500\u2500 "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "islands"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u2502   \u2514\u2500\u2500 "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Counter"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "tsx"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u251C\u2500\u2500 "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "main"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ts"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u251C\u2500\u2500 "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "routes"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u2502   \u251C\u2500\u2500 ["
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "]"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "tsx"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u2502   \u251C\u2500\u2500 "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "api"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u2502   \u2502   \u2514\u2500\u2500 "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "joke"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ts"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u2502   \u2514\u2500\u2500 "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "index"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "tsx"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u251C\u2500\u2500 "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "static"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u2502   \u251C\u2500\u2500 "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "favicon"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ico"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u2502   \u2514\u2500\u2500 "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "logo"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "svg"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "\u2514\u2500\u2500 "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "utils"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    \u2514\u2500\u2500 "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "twind"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ts"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["\u4F60\u53EF\u4EE5\u5173\u6CE8 ", jsx(_components.code, {
        children: "routes"
      }), " \u548C ", jsx(_components.code, {
        children: "islands"
      }), " \u4E24\u4E2A\u76EE\u5F55\uFF0C", jsx(_components.code, {
        children: "[name].tsx"
      }), "\u3001", jsx(_components.code, {
        children: "api/joke.ts"
      }), " \u548C ", jsx(_components.code, {
        children: "index.tsx"
      }), " \u5206\u522B\u5BF9\u5E94\u4E09\u4E2A\u8DEF\u7531\uFF0C\u800C islands \u76EE\u5F55\u4E0B\u7684\u6BCF\u4E2A\u6587\u4EF6\u5219\u5BF9\u5E94\u4E00\u4E2A island \u7EC4\u4EF6\u3002"]
    }), "\n", jsx(_components.p, {
      children: "\u800C\u5F00\u53D1\u8005\u5E76\u4E0D\u9700\u8981\u624B\u5199\u8DEF\u7531\u6587\u4EF6\uFF0CFresh \u53EF\u4EE5\u81EA\u52A8\u5730\u751F\u6210\u670D\u52A1\u7AEF\u7684\u8DEF\u7531\u5230\u6587\u4EF6\u7684\u6620\u5C04\u5173\u7CFB\u3002\u5F88\u660E\u663E Fresh \u5B9E\u73B0\u4E86\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u7684\u529F\u80FD\uFF0C\u8DDF Next.js \u7C7B\u4F3C\u3002"
    }), "\n", jsxs(_components.p, {
      children: ["\u6BCF\u4E2A ", jsx(_components.code, {
        children: "island \u7EC4\u4EF6"
      }), "\u9700\u8981\u6709\u4E00\u4E2A default \u5BFC\u51FA\uFF0C\u7528\u6765\u5C06\u7EC4\u4EF6\u66B4\u9732\u51FA\u53BB\uFF0C\u4F7F\u7528\u6BD4\u8F83\u7B80\u5355\uFF0C\u5C31\u4E0D\u5C55\u5F00\u4ECB\u7ECD\u4E86\u3002\u800C", jsx(_components.code, {
        children: "\u8DEF\u7531\u7EC4\u4EF6"
      }), "\u5219\u66F4\u52A0\u7075\u6D3B\uFF0C\u65E2\u53EF\u4EE5\u4F5C\u4E3A\u4E00\u4E2A API \u670D\u52A1\uFF0C\u4E5F\u53EF\u4EE5\u4F5C\u4E3A\u4E00\u4E2A\u7EC4\u4EF6\u8FDB\u884C\u6E32\u67D3\u3002\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u4EE5\u811A\u624B\u67B6\u9879\u76EE\u7684\u51E0\u4E2A\u6587\u4EF6\u793A\u4F8B\u6765\u5206\u6790\u4E00\u4E0B\u3002"]
    }), "\n", jsxs(_components.p, {
      children: ["\u9996\u5148\u662F ", jsx(_components.code, {
        children: "api/joke.ts"
      }), " \u6587\u4EF6\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u7684\u4F5C\u7528\u662F\u63D0\u4F9B\u670D\u52A1\u7AEF\u7684\u6570\u636E\u63A5\u53E3\uFF0C\u5E76\u4E0D\u627F\u8F7D\u4EFB\u4F55\u7684\u524D\u7AEF\u6E32\u67D3\u903B\u8F91\uFF0C\u4F60\u53EA\u9700\u8981\u5728\u8FD9\u4E2A\u6587\u4EF6\u91CC\u9762\u7F16\u5199\u4E00\u4E2A handler \u51FD\u6570\u5373\u53EF\uFF0C\u5982\u4E0B\u4EE3\u7801\u6240\u793A:"]
    }), "\n", jsxs(_components.div, {
      className: "language-ts",
      children: [jsx(_components.span, {
        className: "code-lang",
        children: "ts"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// api/joke.ts"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "HandlerContext"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "$fresh/server.ts"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "JOKES"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ["
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// \u7701\u7565\u5177\u4F53\u5185\u5BB9"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "]"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "export"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "handler"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "_req"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Request"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "_ctx"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "HandlerContext"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Response"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// \u968F\u673A\u8FD4\u56DE\u4E00\u4E2A joke \u5B57\u7B26\u4E32"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "new"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "Response"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "body"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["\u5F53\u4F60\u8BBF\u95EE", jsx(_components.code, {
        children: "/api/joke"
      }), " \u8DEF\u7531\u65F6\uFF0C\u53EF\u4EE5\u62FF\u5230 handler \u8FD4\u56DE\u7684\u6570\u636E:"]
    }), "\n", jsx(_components.p, {
      children: jsx(_components.a, {
        href: "https://camo.githubusercontent.com/1a93ea35e625d8ca49f40ab998e9061d5432ff3575acb153c9425a2b41fac4c9/68747470733a2f2f70332d6a75656a696e2e62797465696d672e636f6d2f746f732d636e2d692d6b3375316662706663702f66343136333964656662623834323231383733376131653435623633636632397e74706c762d6b3375316662706663702d7a6f6f6d2d312e696d616765",
        children: jsx(_components.img, {
          src: "https://camo.githubusercontent.com/1a93ea35e625d8ca49f40ab998e9061d5432ff3575acb153c9425a2b41fac4c9/68747470733a2f2f70332d6a75656a696e2e62797465696d672e636f6d2f746f732d636e2d692d6b3375316662706663702f66343136333964656662623834323231383733376131653435623633636632397e74706c762d6b3375316662706663702d7a6f6f6d2d312e696d616765",
          alt: ""
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["\u63A5\u4E0B\u6765\u662F", jsx(_components.code, {
        children: "index.tsx"
      }), "\u548C", jsx(_components.code, {
        children: "[name].tsx"
      }), " \u4E24\u4E2A\u6587\u4EF6\uFF0C\u7B2C\u4E00\u4E2A\u6587\u4EF6\u5BF9\u5E94\u6839\u8DEF\u7531\u5373", jsx(_components.code, {
        children: "/"
      }), "\uFF0C\u8BBF\u95EE\u6548\u679C\u5982\u4E0B:"]
    }), "\n", jsx(_components.p, {
      children: jsx(_components.a, {
        href: "https://camo.githubusercontent.com/119aa30d3319d4afb4c31b6e0cd7a7aaa149f2575a7e73efa20e0b6987244c6f/68747470733a2f2f70332d6a75656a696e2e62797465696d672e636f6d2f746f732d636e2d692d6b3375316662706663702f38633231623534653634613534356136383433323965326530666137613635367e74706c762d6b3375316662706663702d7a6f6f6d2d312e696d616765",
        children: jsx(_components.img, {
          src: "https://camo.githubusercontent.com/119aa30d3319d4afb4c31b6e0cd7a7aaa149f2575a7e73efa20e0b6987244c6f/68747470733a2f2f70332d6a75656a696e2e62797465696d672e636f6d2f746f732d636e2d692d6b3375316662706663702f38633231623534653634613534356136383433323965326530666137613635367e74706c762d6b3375316662706663702d7a6f6f6d2d312e696d616765",
          alt: ""
        })
      })
    }), "\n", jsx(_components.p, {
      children: "\u540E\u8005\u5219\u4E3A\u52A8\u6001\u8DEF\u7531\uFF0C\u53EF\u4EE5\u62FF\u5230\u8DEF\u7531\u4F20\u53C2\u8FDB\u884C\u6E32\u67D3:"
    }), "\n", jsxs(_components.div, {
      className: "language-ts",
      children: [jsx(_components.span, {
        className: "code-lang",
        children: "ts"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "export"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "default"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "Greet"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "props"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "PageProps"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " <"
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "div"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Hello"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "props.params."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "div"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">;"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u8BBF\u95EE\u6548\u679C\u5982\u4E0B:"
    }), "\n", jsx(_components.p, {
      children: jsx(_components.a, {
        href: "https://camo.githubusercontent.com/227da4f013e16b7c332f88057de1b9255f6b49d0d2eba7ca5a9260448a992233/68747470733a2f2f70332d6a75656a696e2e62797465696d672e636f6d2f746f732d636e2d692d6b3375316662706663702f36363063306561646538663134653563393638303663626363383164393561367e74706c762d6b3375316662706663702d7a6f6f6d2d312e696d616765",
        children: jsx(_components.img, {
          src: "https://camo.githubusercontent.com/227da4f013e16b7c332f88057de1b9255f6b49d0d2eba7ca5a9260448a992233/68747470733a2f2f70332d6a75656a696e2e62797465696d672e636f6d2f746f732d636e2d692d6b3375316662706663702f36363063306561646538663134653563393638303663626363383164393561367e74706c762d6b3375316662706663702d7a6f6f6d2d312e696d616765",
          alt: ""
        })
      })
    }), "\n", jsx(_components.p, {
      children: "\u540C\u65F6\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5728\u8DEF\u7531\u7EC4\u4EF6\u540C\u65F6\u7F16\u5199\u524D\u7AEF\u7EC4\u4EF6\u548C handler \u51FD\u6570\uFF0C\u5982\u4E0B\u4EE3\u7801\u6240\u793A:"
    }), "\n", jsxs(_components.div, {
      className: "language-ts",
      children: [jsx(_components.span, {
        className: "code-lang",
        children: "ts"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// \u4FEE\u6539 [name].tsx \u7684\u5185\u5BB9\u5982\u4E0B"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "/** "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "@"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "jsx"
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: " h */"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "h"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "preact"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "HandlerContext"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "PageProps"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "$fresh/server.ts"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "export"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "handler"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "req"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Request"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ctx"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "HandlerContext"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "title"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "\u4E00\u4E9B\u6807\u9898\u6570\u636E"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ctx"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "render"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "title"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "export"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "default"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "Greet"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "props"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "PageProps"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " <"
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "div"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "\u83B7\u53D6\u6570\u636E"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ": "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "props.data."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "title"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "</"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "div"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">;"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u4ECE handler \u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570(ctx \u5BF9\u8C61)\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53D6\u51FA render \u65B9\u6CD5\uFF0C\u4F20\u5165\u7EC4\u4EF6\u9700\u8981\u7684\u6570\u636E\uFF0C\u624B\u52A8\u8C03\u7528\u5B8C\u6210\u6E32\u67D3\u3002\u6548\u679C\u5982\u4E0B:"
    }), "\n", jsx(_components.p, {
      children: jsx(_components.a, {
        href: "https://camo.githubusercontent.com/f5490dfbda1a943d526324d9eb843bb331a5de36698134e2cd1c6eeddd5a9eb2/68747470733a2f2f70332d6a75656a696e2e62797465696d672e636f6d2f746f732d636e2d692d6b3375316662706663702f31386536666665356232336434653763626562316132313430373530646434377e74706c762d6b3375316662706663702d7a6f6f6d2d312e696d616765",
        children: jsx(_components.img, {
          src: "https://camo.githubusercontent.com/f5490dfbda1a943d526324d9eb843bb331a5de36698134e2cd1c6eeddd5a9eb2/68747470733a2f2f70332d6a75656a696e2e62797465696d672e636f6d2f746f732d636e2d692d6b3375316662706663702f31386536666665356232336434653763626562316132313430373530646434377e74706c762d6b3375316662706663702d7a6f6f6d2d312e696d616765",
          alt: ""
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["\u4EE5\u4E0A\u6211\u4EEC\u5C31\u4F53\u9A8C\u4E86 Fresh \u7684\u51E0\u4E2A\u6838\u5FC3\u7684\u529F\u80FD\uFF0C\u5305\u62EC", jsx(_components.code, {
        children: "\u9879\u76EE\u521D\u59CB\u5316"
      }), "\u3001", jsx(_components.code, {
        children: "\u8DEF\u7531\u7EC4\u4EF6\u5F00\u53D1"
      }), "\u3001", jsx(_components.code, {
        children: "\u670D\u52A1\u7AEF\u63A5\u53E3\u5F00\u53D1"
      }), "\u3001", jsx(_components.code, {
        children: "\u7EC4\u4EF6\u6570\u636E\u83B7\u53D6"
      }), "\u4EE5\u53CA", jsx(_components.code, {
        children: "\u7EA6\u5B9A\u5F0F\u8DEF\u7531"
      }), "\uFF0C\u76F8\u4FE1\u4ECE\u4E2D\u4F60\u4E5F\u80FD\u4F53\u4F1A\u5230 Fresh \u7684\u7B80\u5355\u4E0E\u5F3A\u5927\u4E86\u3002"]
    }), "\n", jsxs(_components.h2, {
      id: "\u4F18\u52A3\u52BF\u5206\u6790",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u4F18\u52A3\u52BF\u5206\u6790",
        children: "#"
      }), "\u4F18\u52A3\u52BF\u5206\u6790"]
    }), "\n", jsx(_components.p, {
      children: "\u90A3\u4E48\uFF0C\u5C31\u5982 Fresh \u5B98\u7F51\u6240\u8BF4\uFF0CFresh \u80FD\u5426\u6210\u4E3A\u4E0B\u4E00\u4EE3 Web \u5168\u6808\u6846\u67B6\u5462\uFF1F"
    }), "\n", jsx(_components.p, {
      children: jsx(_components.a, {
        href: "https://camo.githubusercontent.com/d12bac35570aa4fa9135dc308a6daef91f49b2ca6d94481d3bc8617ee0280afd/68747470733a2f2f70332d6a75656a696e2e62797465696d672e636f6d2f746f732d636e2d692d6b3375316662706663702f32376633616265666664343834343238626261333932636535643833663535397e74706c762d6b3375316662706663702d7a6f6f6d2d312e696d616765",
        children: jsx(_components.img, {
          src: "https://camo.githubusercontent.com/d12bac35570aa4fa9135dc308a6daef91f49b2ca6d94481d3bc8617ee0280afd/68747470733a2f2f70332d6a75656a696e2e62797465696d672e636f6d2f746f732d636e2d692d6b3375316662706663702f32376633616265666664343834343238626261333932636535643833663535397e74706c762d6b3375316662706663702d7a6f6f6d2d312e696d616765",
          alt: ""
        })
      })
    }), "\n", jsx(_components.p, {
      children: "\u6211\u4EEC\u4E0D\u59A8\u6765\u76D8\u70B9\u4E00\u4E0B Fresh \u7684\u4F18\u52BF\u548C\u4E0D\u8DB3\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u4F7F\u7528 Fresh \u7684\u4F18\u52BF\u53EF\u4EE5\u603B\u7ED3\u5982\u4E0B:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u4EAB\u53D7 Deno \u5E26\u6765\u7684\u5F00\u53D1\u4F18\u52BF\uFF0C\u4ECE\u5B89\u88C5\u4F9D\u8D56\u3001\u5F00\u53D1\u3001\u6D4B\u8BD5\u3001\u90E8\u7F72\u76F4\u63A5\u4F7F\u7528 Deno \u7684\u5DE5\u5177\u94FE\uFF0C\u964D\u4F4E\u5DE5\u7A0B\u5316\u7684\u6210\u672C\uFF1B"
      }), "\n", jsx(_components.li, {
        children: "\u57FA\u4E8E Island \u67B6\u6784\uFF0C\u5E26\u6765\u66F4\u5C0F\u7684\u5BA2\u6237\u7AEF\u8FD0\u884C\u65F6\u5F00\u9500\uFF0C\u6E32\u67D3\u6027\u80FD\u66F4\u597D\uFF1B"
      }), "\n", jsx(_components.li, {
        children: "\u65E0\u9700\u6253\u5305\u5373\u53EF\u5F00\u53D1\u3001\u90E8\u7F72\u5E94\u7528\uFF0C\u5E26\u6765\u66F4\u5C11\u7684\u6784\u5EFA\u6210\u672C\uFF0C\u66F4\u52A0\u8F7B\u91CF\uFF1B"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u800C\u52A3\u52BF\u4E5F\u6BD4\u8F83\u660E\u663E\uFF0C\u5305\u542B\u5982\u4E0B\u7684\u51E0\u4E2A\u65B9\u9762:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u4EC5\u652F\u6301 Preact \u6846\u67B6\uFF0C\u4E0D\u652F\u6301 React\uFF0C\u8FD9\u4E00\u70B9\u662F\u6BD4\u8F83\u81F4\u547D\u7684\uFF1B"
      }), "\n", jsx(_components.li, {
        children: "\u7531\u4E8E\u67B6\u6784\u7684\u539F\u56E0\uFF0C\u5F00\u53D1\u9636\u6BB5\u6CA1\u6709 HMR \u7684\u80FD\u529B\uFF0C\u53EA\u80FD page reload\uFF1B"
      }), "\n", jsxs(_components.li, {
        children: ["\u5BF9\u4E8E Island \u7EC4\u4EF6\uFF0C\u5FC5\u987B\u8981\u653E\u5230 islands \u76EE\u5F55\uFF0C\u5BF9\u4E8E\u6BD4\u8F83\u590D\u6742\u7684\u5E94\u7528\u800C\u8A00\uFF0C\u5FC3\u667A\u8D1F\u62C5\u4F1A\u6BD4\u8F83\u91CD\uFF0C\u800C Astro \u5728\u8FD9\u4E00\u65B9\u9762\u8981\u505A\u7684\u66F4\u4F18\u96C5\u4E00\u4E9B\uFF0C\u901A\u8FC7\u7EC4\u4EF6\u6307\u4EE4\u5373\u53EF\u6307\u5B9A island \u7EC4\u4EF6\uFF0C\u5982", jsx(_components.code, {
          children: "<Component client:load />"
        }), "\u3002"]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u4E00\u65B9\u9762 Fresh \u80FD\u89E3\u51B3\u7684\u95EE\u9898\uFF0C\u5982 Hydration \u6027\u80FD\u95EE\u9898\uFF0C\u5176\u5B83\u7684\u6846\u67B6\u4E5F\u80FD\u89E3\u51B3(Astro)\uFF0C\u5E76\u4E14\u6BD4\u5B83\u505A\u7684\u66F4\u597D\uFF0C\u53E6\u4E00\u65B9\u9762 Fresh \u7684\u90E8\u5206\u52A3\u52BF\u4E5F\u6BD4\u8F83\u81F4\u547D\uFF0C\u51B5\u4E14 Deno \u5982\u4ECA\u4E5F\u5F88\u96BE\u505A\u5230\u771F\u6B63\u5730\u666E\u53CA\uFF0C\u6240\u4EE5\u6211\u8BA4\u4E3A Fresh \u5E76\u4E0D\u662F\u4E00\u4E2A\u672A\u6765\u80FD\u591F\u5927\u8303\u56F4\u6D41\u884C\u7684 Web \u6846\u67B6\uFF0C\u4F46\u5BF9\u4E8E Deno \u548C Preact \u7684\u7528\u6237\u800C\u8A00\uFF0C\u6211\u8BA4\u4E3A Fresh \u8DB3\u4EE5\u64BC\u52A8 Next.js \u8FD9\u7C7B\u6846\u67B6\u539F\u6709\u7684\u5730\u4F4D\u3002"
    }), "\n", jsxs(_components.h2, {
      id: "\u6E90\u7801\u5B9E\u73B0",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u6E90\u7801\u5B9E\u73B0",
        children: "#"
      }), "\u6E90\u7801\u5B9E\u73B0"]
    }), "\n", jsx(_components.p, {
      children: "Fresh \u7684\u5185\u90E8\u5B9E\u73B0\u5E76\u4E0D\u7B97\u7279\u522B\u590D\u6742\uFF0C\u867D\u7136\u8BF4\u6211\u4EEC\u5E76\u4E00\u5B9A\u7528\u7684\u4E0A Fresh\uFF0C\u4F46\u6211\u89C9\u5F97 Fresh \u7684\u4EE3\u7801\u8FD8\u662F\u503C\u5F97\u4E00\u8BFB\u7684\uFF0C\u4ECE\u4E2D\u53EF\u4EE5\u5B66\u4E60\u5230\u4E0D\u5C11\u4E1C\u897F\u3002"
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsxs(_components.p, {
        children: ["Github \u5730\u5740: ", jsx(_components.a, {
          href: "https://github.com/denoland/fresh",
          children: "https://github.com/denoland/fresh"
        })]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["\u4F60\u53EF\u4EE5\u5148\u53BB\u4ED3\u5E93 examples/counter \u67E5\u770B\u793A\u4F8B\u9879\u76EE\uFF0C\u901A\u8FC7 ", jsx(_components.code, {
        children: "deno task start"
      }), " \u547D\u4EE4\u542F\u52A8\u3002\u5165\u53E3\u6587\u4EF6\u4E3A", jsx(_components.code, {
        children: "dev.ts"
      }), "\uFF0C\u5176\u4E2D\u4F1A\u8C03\u7528 Fresh \u8FDB\u884C\u8DEF\u7531\u6587\u4EF6\u548C islands \u6587\u4EF6\u7684\u641C\u96C6\uFF0C\u751F\u6210 Manifest \u4FE1\u606F\u3002"]
    }), "\n", jsxs(_components.p, {
      children: ["\u63A5\u4E0B\u6765\u8FDB\u5165\u6838\u5FC3\u73AF\u8282\u2014\u2014\u521B\u5EFA Server\uFF0C\u5177\u4F53\u903B\u8F91\u5728", jsx(_components.code, {
        children: "server/mod.ts"
      }), "\u4E2D:"]
    }), "\n", jsxs(_components.div, {
      className: "language-ts",
      children: [jsx(_components.span, {
        className: "code-lang",
        children: "ts"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "export"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "async"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "start"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "routes"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Manifest"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "opts"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "StartOptions"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{})"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ctx"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "await"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ServerContext"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "fromManifest"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "routes"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "opts"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "await"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "serve"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ctx"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "handler"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "()"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "opts"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "fromManifest"
      }), "\u4E3A\u4E00\u4E2A\u5DE5\u5382\u65B9\u6CD5\uFF0C\u76EE\u7684\u662F\u6839\u636E\u4E4B\u524D\u626B\u63CF\u5230\u7684 Manifest \u4FE1\u606F\u751F\u6210\u670D\u52A1\u7AEF\u4E0A\u4E0B\u6587\u5BF9\u8C61(ServerContext)\uFF0C\u56E0\u6B64 Server \u7684\u5B9E\u73B0\u6838\u5FC3\u4E5F\u5C31\u5728\u4E8E ServerContext:"]
    }), "\n", jsxs(_components.div, {
      className: "language-ts",
      children: [jsx(_components.span, {
        className: "code-lang",
        children: "ts"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "class"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "ServerContext"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "static"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "async"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "fromManifest"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "manifest"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Manifest"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "opts"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "FreshOptions"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// \u7701\u7565\u4E2D\u95F4\u7684\u5904\u7406\u903B\u8F91"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "new"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "ServerContext"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "()"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "fromManifest \u5B9E\u9645\u4E0A\u5C31\u662F\u8FDB\u4E00\u6B65\u5904\u7406(normalize) manifest \u4FE1\u606F\uFF0C\u751F\u6210 Route \u5BF9\u8C61\u548C Island \u5BF9\u8C61\uFF0C\u4EE5\u4F9B ServerContext \u7684\u5B9E\u4F8B\u521D\u59CB\u5316\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u63A5\u4E0B\u6765\uFF0CFresh \u4F1A\u8C03\u7528 ServerContext \u7684 handler \u65B9\u6CD5\uFF0C\u4EA4\u7ED9\u6807\u51C6\u5E93 http/server \u7684 serve \u65B9\u6CD5\u8FDB\u884C\u8C03\u7528\u3002\u56E0\u6B64\uFF0Chandler \u65B9\u6CD5\u4E5F\u662F\u6574\u4E2A\u670D\u52A1\u7AEF\u7684\u6838\u5FC3\u5B9E\u73B0\uFF0C\u5176\u4E2D\u6709\u4E24\u5927\u4E3B\u8981\u7684\u5B9E\u73B0\u90E8\u5206:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\u4E2D\u95F4\u4EF6\u673A\u5236\u7684\u5B9E\u73B0\uFF0C\u4E5F\u5C31\u662F\u5B9E\u73B0\u6D0B\u8471\u6A21\u578B\uFF0C\u5177\u4F53\u903B\u8F91\u5728\u79C1\u6709\u65B9\u6CD5", jsx(_components.code, {
          children: "#composeMiddlewares"
        }), "\u4E2D\uFF1B"]
      }), "\n", jsxs(_components.li, {
        children: ["\u9875\u9762\u6E32\u67D3\u903B\u8F91\u7684\u5B9E\u73B0\uFF0C\u5728\u79C1\u6709\u65B9\u6CD5", jsx(_components.code, {
          children: "#handlers()"
        }), "\u4E2D\u3002"]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["\u524D\u8005\u4E0D\u662F\u672C\u6587\u7684\u91CD\u70B9\uFF0C\u611F\u5174\u8DA3\u7684\u540C\u5B66\u53EF\u4EE5\u5728\u770B\u5B8C\u6587\u7AE0\u540E\u7EE7\u7EED\u7814\u7A76\u3002\u8FD9\u91CC\u6211\u4EEC\u4E3B\u8981\u5173\u6CE8\u9875\u9762\u6E32\u67D3\u7684\u903B\u8F91\u662F\u5982\u4F55\u5B9E\u73B0\u7684\uFF0C", jsx(_components.code, {
        children: "#handlers()"
      }), "\u65B9\u6CD5\u4E2D\u5B9A\u4E49\u4E86\u51E0\u4E4E\u6240\u6709\u8DEF\u7531\u7684\u5904\u7406\u903B\u8F91\uFF0C\u5305\u62EC", jsx(_components.code, {
        children: "\u8DEF\u7531\u7EC4\u4EF6\u6E32\u67D3"
      }), "\u3001", jsx(_components.code, {
        children: "404 \u7EC4\u4EF6\u6E32\u67D3"
      }), "\u3001", jsx(_components.code, {
        children: "Error \u7EC4\u4EF6\u6E32\u67D3"
      }), "\u3001", jsx(_components.code, {
        children: "\u9759\u6001\u8D44\u6E90\u52A0\u8F7D"
      }), "\u7B49\u7B49\u903B\u8F91\uFF0C\u6211\u4EEC\u53EF\u4EE5\u628A\u76EE\u5149\u96C6\u4E2D\u5728", jsx(_components.code, {
        children: "\u8DEF\u7531\u7EC4\u4EF6\u6E32\u67D3"
      }), "\u4E2D\uFF0C\u4E3B\u8981\u662F\u8FD9\u6BB5\u903B\u8F91:"]
    }), "\n", jsxs(_components.div, {
      className: "language-ts",
      children: [jsx(_components.span, {
        className: "code-lang",
        children: "ts"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "for"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "["
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "method"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "handler"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "]"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "of"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Object"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "entries"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "route"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "handler"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")) "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "routes"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "["
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "`${"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "method"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "@"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "${"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "route"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "pattern"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}`"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "] "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "req"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ctx"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "params"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "=>"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "handler"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "req"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "..."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "ctx"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "params"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "render"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "createRender"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "req"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "params"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "renderNotFound"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "createUnknownRender"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "req"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{}"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["\u800C\u5728\u8DEF\u7531\u5BF9\u8C61", jsx(_components.code, {
        children: "normalize"
      }), "\u7684\u8FC7\u7A0B(\u5373", jsx(_components.code, {
        children: "fromManifest"
      }), " \u65B9\u6CD5)\u4E2D\uFF0Croute.handler \u7684\u9ED8\u8BA4\u5B9E\u73B0\u4E3A:"]
    }), "\n", jsxs(_components.div, {
      className: "language-ts",
      children: [jsx(_components.span, {
        className: "code-lang",
        children: "ts"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "let"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "handler"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "module"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "as"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "RouteModule"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "handler"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "??="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{}"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "if"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "component"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "&&"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "typeof"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "handler"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "==="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "object"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "&&"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "handler"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "GET"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "==="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "undefined"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// \u5212\u91CD\u70B9\uFF01"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "handler"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "GET"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "_req"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "render"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "})"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "render"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "()"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "route"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Route"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "pattern"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "url"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "name"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "component"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "handler"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "csp"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "Boolean"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "config"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "?."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "csp"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "??"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "false"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u56E0\u6B64\uFF0C\u5BF9\u4E8E\u8DEF\u7531\u7EC4\u4EF6\u7684\u5904\u7406\u6700\u540E\u90FD\u4F1A\u8FDB\u5165 render \u51FD\u6570\u4E2D\uFF0C\u6211\u4EEC\u4E0D\u59A8\u6765\u770B\u770B render \u51FD\u6570\u662F\u5982\u4F55\u88AB\u521B\u5EFA\u7684:"
    }), "\n", jsxs(_components.div, {
      className: "language-ts",
      children: [jsx(_components.span, {
        className: "code-lang",
        children: "ts"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// \u7B80\u5316\u540E\u7684\u4EE3\u7801"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "genRender"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "route"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "status"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "async"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "req"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "params"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "error"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "async"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "data"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// \u6267\u884C\u6E32\u67D3\u903B\u8F91"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "resp"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "await"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "internalRender"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "()"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "["
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "body"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "]"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "resp"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "new"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "Response"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "body"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "createRender"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "genRender"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "route"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Status"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "OK"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u751F\u6210 render \u51FD\u6570\u8FD9\u5757\u903B\u8F91\u4E2A\u4EBA\u8BA4\u4E3A\u6BD4\u8F83\u62BD\u8C61\uFF0C\u9700\u8981\u9759\u4E0B\u5FC3\u6765\u7406\u6E05\u5404\u4E2A\u51FD\u6570\u7684\u8C03\u7528\u987A\u5E8F\uFF0C\u7406\u89E3\u96BE\u5EA6\u5E76\u4E0D\u5927\u3002\u6211\u4EEC\u8FD8\u662F\u628A\u5173\u6CE8\u70B9\u653E\u5230\u6838\u5FC3\u7684\u6E32\u67D3\u903B\u8F91\u4E0A\uFF0C\u4E3B\u8981\u662F internalRender \u51FD\u6570\u7684\u5B9E\u73B0:"
    }), "\n", jsxs(_components.div, {
      className: "language-ts",
      children: [jsx(_components.span, {
        className: "code-lang",
        children: "ts"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "render"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "as"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "internalRender"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "./render.tsx"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["\u4F60\u53EF\u4EE5\u53BB ", jsx(_components.code, {
        children: "render.tsx"
      }), " \u8FDB\u4E00\u6B65\u9605\u8BFB\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u4E3B\u8981\u505A\u4E86\u5982\u4E0B\u7684\u4E8B\u60C5:"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "\u8BB0\u5F55\u9879\u76EE\u4E2D\u58F0\u660E\u7684\u6240\u6709 Islands \u7EC4\u4EF6\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u62E6\u622A Preact \u4E2D vnode \u7684\u521B\u5EFA\u903B\u8F91\uFF0C\u76EE\u7684\u662F\u4E3A\u4E86\u5339\u914D\u4E4B\u524D\u8BB0\u5F55\u7684 Island \u7EC4\u4EF6\uFF0C\u5982\u679C\u80FD\u5339\u914D\u4E0A\uFF0C\u5219\u8BB0\u5F55 Island \u7EC4\u4EF6\u7684 props \u4FE1\u606F\uFF0C\u5E76\u5C06\u7EC4\u4EF6\u7528 <!--frsh-id \u503C:\u6570\u5B57--> \u7684\u6CE8\u91CA\u6807\u7B7E\u6765\u5305\u88F9\uFF0Cid \u503C\u4E3A Island \u7684 id\uFF0C\u6570\u5B57\u4E3A\u8BE5 Island \u7684 props \u5728\u5168\u5C40 props \u5217\u8868\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u65B9\u4FBF hydrate \u7684\u65F6\u5019\u80FD\u591F\u627E\u5230\u5BF9\u5E94\u7EC4\u4EF6\u7684 props\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u8C03\u7528 Preact \u7684 renderToString \u65B9\u6CD5\u5C06\u7EC4\u4EF6\u6E32\u67D3\u4E3A HTML \u5B57\u7B26\u4E32\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u5411 HTML \u4E2D\u6CE8\u5165\u5BA2\u6237\u7AEF hydrate \u7684\u903B\u8F91\u3002"
      }), "\n", jsx(_components.li, {
        children: "\u62FC\u63A5\u5B8C\u6574\u7684 HTML\uFF0C\u8FD4\u56DE\u7ED9\u524D\u7AEF\u3002"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u503C\u5F97\u6CE8\u610F\u7684\u662F\u5BA2\u6237\u7AEF hydrate \u65B9\u6CD5\u7684\u5B9E\u73B0\uFF0C\u4F20\u7EDF\u7684 SSR \u4E00\u822C\u90FD\u662F\u76F4\u63A5\u5BF9\u6839\u8282\u70B9\u8C03\u7528 hydrate\uFF0C\u800C\u5728 Islands \u67B6\u6784\u4E2D\uFF0CFresh \u5BF9\u6BCF\u4E2A Island \u8FDB\u884C\u72EC\u7ACB\u6E32\u67D3\uFF0C\u5B9E\u73B0\u5982\u4E0B:"
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "hydrate \u65B9\u6CD5\u540D\u4E5F\u53EF\u4EE5\u53EB revive"
      }), "\n"]
    }), "\n", jsxs(_components.div, {
      className: "language-ts",
      children: [jsx(_components.span, {
        className: "code-lang",
        children: "ts"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "export"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "revive"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "islands"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Record"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "string"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "ComponentType"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ">,"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "props"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "any"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "[]"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "walk"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "node"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Node"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "|"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "null"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 1. \u83B7\u53D6\u6CE8\u91CA\u8282\u70B9\u4FE1\u606F\uFF0C\u89E3\u6790\u51FA Island \u7684 id"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "tag"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "node"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "!"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "nodeType"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "==="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "8"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "&&"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      (("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "node"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "as"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Comment"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "data"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "match"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "/"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "^"
            }), jsx(_components.span, {
              style: {
                color: "#EBCB8B"
              },
              children: "\\s"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsx(_components.span, {
              style: {
                color: "#EBCB8B"
              },
              children: "frsh-"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#EBCB8B"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#EBCB8B"
              },
              children: "\\s"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "*$"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "/"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "||"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " [])["
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "]"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "let"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "endNode"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Node"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "|"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "null"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "null;"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "if"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "tag"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "startNode"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "node"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "!;"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "children"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " []"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "parent"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "node"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "!"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "parentNode"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// \u62FF\u5230\u5F53\u524D Island \u8282\u70B9\u7684\u6240\u6709\u5B50\u8282\u70B9"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "while"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " (("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "node"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "node"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "!"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "nextSibling"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "&&"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "node"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "nodeType"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "!=="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "8"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "children"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "push"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "node"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "startNode"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "parentNode"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "!"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "removeChild"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "startNode"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// remove start tag node"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "["
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "id"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "n"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "]"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "tag"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "split"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "      "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 2. \u5355\u72EC\u6E32\u67D3 Island \u7EC4\u4EF6"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "render"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "h"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "islands"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "["
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "id"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "]"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "props"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "["
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "Number"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "n"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")])"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "htmlElement"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "endNode"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "node"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// 3. \u7EE7\u7EED\u904D\u5386 DOM \u6811\uFF0C\u76F4\u5230\u627E\u5230\u6240\u6709\u7684 Island \u8282\u70B9"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sib"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "node"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "!"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "nextSibling"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "fc"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "node"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "!"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "firstChild"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "if"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "endNode"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "endNode"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "parentNode"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "?."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "removeChild"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "endNode"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// remove end tag node"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "if"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sib"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "walk"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sib"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "if"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "fc"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "walk"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "fc"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "walk"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "document"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "body"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u81F3\u6B64\uFF0C\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\u6E32\u67D3\u7684\u8FC7\u7A0B\u90FD\u5B8C\u6210\u4E86\uFF0C\u56DE\u5934\u770B\u6574\u4E2A\u8FC7\u7A0B\uFF0C\u4E3A\u4EC0\u4E48\u8BF4 Fresh \u7684\u6784\u5EFA\u8FC7\u7A0B\u662F Bundle-less \u7684\u5462\uFF1F"
    }), "\n", jsx(_components.p, {
      children: "\u6211\u4EEC\u4E0D\u59A8\u5173\u6CE8\u4E00\u4E0B Islands \u7EC4\u4EF6\u662F\u5982\u4F55\u52A0\u8F7D\u5230\u5BA2\u6237\u7AEF\u7684\u3002"
    }), "\n", jsx(_components.p, {
      children: jsx(_components.a, {
        href: "https://camo.githubusercontent.com/ad06e29584e615d81053ab8a41ec5bc667b9b5a4b8193c539631e1782b8ed7f0/68747470733a2f2f70332d6a75656a696e2e62797465696d672e636f6d2f746f732d636e2d692d6b3375316662706663702f61363839663066323262353734323938613961396264653938613631363831657e74706c762d6b3375316662706663702d7a6f6f6d2d312e696d616765",
        children: jsx(_components.img, {
          src: "https://camo.githubusercontent.com/ad06e29584e615d81053ab8a41ec5bc667b9b5a4b8193c539631e1782b8ed7f0/68747470733a2f2f70332d6a75656a696e2e62797465696d672e636f6d2f746f732d636e2d692d6b3375316662706663702f61363839663066323262353734323938613961396264653938613631363831657e74706c762d6b3375316662706663702d7a6f6f6d2d312e696d616765",
          alt: ""
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["\u9996\u5148\uFF0C\u670D\u52A1\u7AEF\u901A\u8FC7\u62E6\u622A vnode \u5B9E\u73B0\u53EF\u4EE5\u611F\u77E5\u5230\u9879\u76EE\u4E2D\u7528\u5230\u4E86\u54EA\u4E9B Island \u7EC4\u4EF6\uFF0C\u6BD4\u5982 Counter \u7EC4\u4EF6\uFF0C\u90A3\u4E48\u670D\u52A1\u7AEF\u5C31\u4F1A\u6CE8\u5165\u5BF9\u5E94\u7684 import \u4EE3\u7801\uFF0C\u5E76\u6302\u5728\u5230\u5168\u5C40\uFF0C\u901A\u8FC7 ", jsx(_components.code, {
        children: '<script type="module">'
      }), " \u7684\u65B9\u5F0F\u6CE8\u5165\u5230 HTML \u4E2D\u3002"]
    }), "\n", jsxs(_components.p, {
      children: ["\u6D4F\u89C8\u5668\u6267\u884C\u8FD9\u4E9B\u4EE3\u7801\u65F6\uFF0C\u4F1A\u7ED9\u670D\u52A1\u7AEF\u53D1\u8D77", jsx(_components.code, {
        children: "/islands/Counter"
      }), "\u7684\u8BF7\u6C42\uFF0C\u670D\u52A1\u7AEF\u63A5\u6536\u5230\u8BF7\u6C42\uFF0C\u5BF9 Counter \u7EC4\u4EF6\u8FDB\u884C\u5B9E\u65F6\u7F16\u8BD1\u6253\u5305\uFF0C\u7136\u540E\u5C06\u7ED3\u679C\u8FD4\u56DE\u7ED9\u6D4F\u89C8\u5668\uFF0C\u8FD9\u6837\u6D4F\u89C8\u5668\u5C31\u80FD\u62FF\u5230 Esbuild \u7684\u7F16\u8BD1\u4EA7\u7269\u5E76\u6267\u884C\u4E86\u3002"]
    }), "\n", jsxs(_components.p, {
      children: ["\u6240\u4EE5\u8FD9\u4E2A\u8FC7\u7A0B\u662F", jsx(_components.strong, {
        children: "\u5B8C\u5168\u53D1\u751F\u5728\u8FD0\u884C\u65F6"
      }), "\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6211\u4EEC\u4E0D\u9700\u8981\u5728\u4E00\u5F00\u59CB\u542F\u52A8\u9879\u76EE\u7684\u65F6\u5019\u5C31\u6253\u5305\u5B8C\u6240\u6709\u7684\u7EC4\u4EF6\uFF0C\u800C\u662F\u5728\u8FD0\u884C\u65F6\u505A\u5230\u6309\u9700\u6784\u5EFA\uFF0C\u5E76\u4E14\u5F97\u76CA\u4E8E Esbuild \u6781\u5FEB\u7684\u6784\u5EFA\u901F\u5EA6\uFF0C\u4E00\u822C\u80FD\u8FBE\u5230\u6BEB\u79D2\u7EA7\u522B\u7684\u6784\u5EFA\u901F\u5EA6\uFF0C\u5BF9\u4E8E\u670D\u52A1\u6765\u8BF4\u8FD0\u884C\u65F6\u7684\u538B\u529B\u5E76\u4E0D\u5927\u3002"]
    }), "\n", jsxs(_components.h2, {
      id: "\u5C0F\u7ED3",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u5C0F\u7ED3",
        children: "#"
      }), "\u5C0F\u7ED3"]
    }), "\n", jsxs(_components.p, {
      children: ["\u4EE5\u4E0A\u5C31\u662F\u672C\u6587\u7684\u5168\u90E8\u5185\u5BB9\uFF0C\u5206\u522B\u4ECE", jsx(_components.strong, {
        children: "\u6846\u67B6\u5B9A\u4F4D"
      }), "\u3001", jsx(_components.strong, {
        children: "\u4E0A\u624B\u4F53\u9A8C"
      }), "\u3001", jsx(_components.strong, {
        children: "\u4F18\u52A3\u52BF\u8BC4\u4F30"
      }), "\u548C", jsx(_components.strong, {
        children: "\u6E90\u7801\u5B9E\u73B0"
      }), "\u6765\u4ECB\u7ECD\u4E86\u5982\u4ECA\u6BD4\u8F83\u706B\u7684 Fresh \u6846\u67B6\u3002"]
    }), "\n", jsxs(_components.p, {
      children: ["\u6700\u540E\u9700\u8981\u8DDF\u5927\u5BB6\u8BF4\u660E\u7684\u662F\uFF0CFresh \u4E2D\u5173\u4E8E Islands \u67B6\u6784\u7684\u5B9E\u73B0\u662F\u57FA\u4E8E Preact \u7684\uFF0C\u6211\u672C\u4EBA\u4E5F\u501F\u9274\u4E86 Fresh \u7684\u601D\u8DEF\uFF0C\u901A\u8FC7\u62E6\u622A React.createElement \u65B9\u6CD5\u5728 React \u5F53\u4E2D\u4E5F\u5B9E\u73B0\u4E86 Islands \u67B6\u6784\uFF0C\u4EE3\u7801\u653E\u5728\u4E86 ", jsx(_components.code, {
        children: "react-islands"
      }), "\u4ED3\u5E93\u4E2D(\u5730\u5740: ", jsx(_components.a, {
        href: "https://github.com/sanyuan0704/react-islands",
        children: "https://github.com/sanyuan0704/react-islands)\uFF0C\u4EE3\u7801\u4E0D\u591A\uFF0C\u76F8\u5F53\u4E8E"
      }), "%EF%BC%8C%E4%BB%A3%E7%A0%81%E4%B8%8D%E5%A4%9A%EF%BC%8C%E7%9B%B8%E5%BD%93%E4%BA%8E) Fresh \u7684\u7B80\u5316\u7248\uFF0C\u611F\u5174\u8DA3\u7684\u5C0F\u4F19\u4F34\u53EF\u4EE5\u62C9\u4E0B\u6765\u770B\u770B~"]
    })]
  });
}
function MDXContent$1(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, Object.assign({}, props, {
    children: jsx(_createMdxContent$1, props)
  })) : _createMdxContent$1(props);
}
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  frontmatter: frontmatter$1,
  toc: toc$1,
  default: MDXContent$1
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter = {
  "pageType": "home",
  "hero": {
    "name": "Island",
    "text": "\u57FA\u4E8E Vite & MDX \u8BED\u6CD5\u7684\u9759\u6001\u7AD9\u70B9\u751F\u6210\u5668",
    "tagline": "\u7B80\u5355\u3001\u5F3A\u5927\u3001\u9AD8\u6027\u80FD\u7684\u73B0\u4EE3\u5316 SSG \u65B9\u6848",
    "image": {
      "src": "/island.png",
      "alt": "Island"
    },
    "actions": [{
      "theme": "brand",
      "text": "\u5FEB\u901F\u5F00\u59CB",
      "link": "/zh/guide/getting-started"
    }, {
      "theme": "alt",
      "text": "GitHub \u5730\u5740",
      "link": "https://github.com/sanyuan0704/island"
    }]
  },
  "features": [{
    "title": "Vite: \u6781\u901F\u7684\u5F00\u53D1\u54CD\u5E94\u901F\u5EA6",
    "details": "\u57FA\u4E8E Vite \u6784\u5EFA\uFF0C\u5F00\u53D1\u65F6\u7684\u54CD\u5E94\u901F\u5EA6\u6781\u5FEB\uFF0C\u5373\u65F6\u7684\u70ED\u66F4\u65B0\uFF0C\u5E26\u7ED9\u4F60\u6781\u81F4\u7684\u5F00\u53D1\u4F53\u9A8C\u3002",
    "icon": "\u{1F680}"
  }, {
    "title": "MDX: Markdown & React \u7EC4\u4EF6\u6765\u5199\u5185\u5BB9",
    "details": "MDX \u662F\u4E00\u79CD\u5F3A\u5927\u7684\u65B9\u5F0F\u6765\u5199\u5185\u5BB9\u3002\u4F60\u53EF\u4EE5\u5728 Markdown \u4E2D\u4F7F\u7528 React \u7EC4\u4EF6\u3002",
    "icon": "\u{1F4E6}"
  }, {
    "title": "\u5B64\u5C9B\u67B6\u6784: \u66F4\u9AD8\u7684\u751F\u4EA7\u6027\u80FD",
    "details": "\u91C7\u7528 Islands \u67B6\u6784\uFF0C\u610F\u5473\u7740\u66F4\u5C11\u7684 JavaScript \u4EE3\u7801\u3001\u5C40\u90E8 hydration\uFF0C \u4ECE\u800C\u5E26\u6765\u66F4\u597D\u7684\u9996\u5C4F\u6027\u80FD\u3002",
    "icon": "\u2728"
  }, {
    "title": "\u529F\u80FD\u4E30\u5BCC: \u4E00\u7AD9\u5F0F\u89E3\u51B3\u65B9\u6848",
    "details": "\u5BF9\u5168\u6587\u641C\u7D22\u3001\u56FD\u9645\u5316\u7B49\u5E38\u89C1\u529F\u80FD\u53EF\u4EE5\u505A\u5230\u5F00\u7BB1\u5373\u7528\u3002",
    "icon": "\u{1F6E0}\uFE0F"
  }, {
    "title": "TypeScript: \u4F18\u79C0\u7684\u7C7B\u578B\u652F\u6301",
    "details": "\u4F7F\u7528 TypeScript \u7F16\u5199\uFF0C\u63D0\u4F9B\u4E86\u4F18\u79C0\u7684\u7C7B\u578B\u652F\u6301\uFF0C\u8BA9\u4F60\u7684\u5F00\u53D1\u66F4\u52A0\u987A\u7545\u3002",
    "icon": "\u{1F511}"
  }, {
    "title": "\u6269\u5C55\u6027\u5F3A: \u63D0\u4F9B\u591A\u79CD\u81EA\u5B9A\u4E49\u80FD\u529B",
    "details": "\u901A\u8FC7\u5176\u6269\u5C55\u673A\u5236\uFF0C\u4F60\u53EF\u4EE5\u8F7B\u677E\u7684\u6269\u5C55 Island \u7684\u4E3B\u9898 UI \u548C\u6784\u5EFA\u80FD\u529B\u3002",
    "icon": "\u{1F3A8}"
  }]
};
const toc = [{
  "id": "123",
  "text": "123",
  "depth": 2
}, {
  "id": "gfm",
  "text": "GFM",
  "depth": 2
}, {
  "id": "autolink",
  "text": "Autolink",
  "depth": 3
}];
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    h2: "h2",
    h3: "h3",
    p: "p",
    div: "div",
    span: "span",
    pre: "pre",
    code: "code"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "1231231",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#1231231",
        children: "#"
      }), "1231231"]
    }), "\n", "\n", jsx(Counter, {}), "\n", jsxs(_components.h2, {
      id: "123",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#123",
        children: "#"
      }), "123"]
    }), "\n", jsxs(_components.h2, {
      id: "gfm",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#gfm",
        children: "#"
      }), "GFM"]
    }), "\n", jsxs(_components.h3, {
      id: "autolink",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#autolink",
        children: "#"
      }), "Autolink"]
    }), "\n", jsxs(_components.p, {
      children: ["literals ", jsx(_components.a, {
        href: "http://www.example.com",
        children: "www.example.com"
      }), ", ", jsx(_components.a, {
        href: "https://example.com",
        children: "https://example.com"
      }), ", and ", jsx(_components.a, {
        href: "mailto:contact@example.com",
        children: "contact@example.com"
      }), "."]
    }), "\n", jsx(_components.p, {
      children: "111111"
    }), "\n", jsxs(_components.div, {
      className: "language-js",
      children: [jsx(_components.span, {
        className: "code-lang",
        children: "js"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "a"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "console"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "log"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "a"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, Object.assign({}, props, {
    children: jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  frontmatter,
  toc,
  default: MDXContent
}, Symbol.toStringTag, { value: "Module" }));
const routes = [
  {
    path: "/b",
    element: React__default.default.createElement(B$1),
    preload: () => Promise.resolve().then(() => b$1)
  },
  {
    path: "/counter",
    element: React__default.default.createElement(Counter),
    preload: () => Promise.resolve().then(() => counter)
  },
  {
    path: "/guide/a",
    element: React__default.default.createElement(A),
    preload: () => Promise.resolve().then(() => a)
  },
  {
    path: "/guide/b",
    element: React__default.default.createElement(B),
    preload: () => Promise.resolve().then(() => b)
  },
  {
    path: "/guide/c",
    element: React__default.default.createElement(C),
    preload: () => Promise.resolve().then(() => c)
  },
  {
    path: "/guide/",
    element: React__default.default.createElement(MDXContent$1),
    preload: () => Promise.resolve().then(() => index$1)
  },
  {
    path: "/",
    element: React__default.default.createElement(MDXContent),
    preload: () => Promise.resolve().then(() => index)
  }
];
/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
var ResultType;
(function(ResultType2) {
  ResultType2["data"] = "data";
  ResultType2["deferred"] = "deferred";
  ResultType2["redirect"] = "redirect";
  ResultType2["error"] = "error";
})(ResultType || (ResultType = {}));
function matchRoutes(routes2, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes2);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(
      branches[i],
      safelyDecodeURI(pathname)
    );
  }
  return matches;
}
function flattenRoutes(routes2, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  routes2.forEach((route, index2) => {
    let meta = {
      relativePath: route.path || "",
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index2,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(
        route.index !== true,
        "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
      );
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  });
  return branches;
}
function rankRouteBranches(branches) {
  branches.sort((a2, b2) => a2.score !== b2.score ? b2.score - a2.score : compareIndexes(a2.routesMeta.map((meta) => meta.childrenIndex), b2.routesMeta.map((meta) => meta.childrenIndex)));
}
const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s) => s === "*";
function computeScore(path, index2) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index2) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a2, b2) {
  let siblings = a2.length === b2.length && a2.slice(0, -1).every((n, i) => n === b2[i]);
  return siblings ? a2[a2.length - 1] - b2[b2.length - 1] : 0;
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match)
      return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index2) => {
    if (paramName === "*") {
      let splatValue = captureGroups[index2] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    memo[paramName] = safelyDecodeURIComponent(captureGroups[index2] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "([^\\/]+)";
  });
  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else
    ;
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, paramNames];
}
function safelyDecodeURI(value) {
  try {
    return decodeURI(value);
  } catch (error) {
    warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
    return value;
  }
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
class ErrorResponse {
  constructor(status, statusText, data) {
    this.status = status;
    this.statusText = statusText || "";
    this.data = data;
  }
}
function isRouteErrorResponse(e) {
  return e instanceof ErrorResponse;
}
const validActionMethods = /* @__PURE__ */ new Set(["POST", "PUT", "PATCH", "DELETE"]);
/* @__PURE__ */ new Set(["GET", "HEAD", ...validActionMethods]);
/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function isPolyfill(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
}
const is = typeof Object.is === "function" ? Object.is : isPolyfill;
const {
  useState,
  useEffect,
  useLayoutEffect,
  useDebugValue
} = React__namespace;
let didWarnOld18Alpha = false;
let didWarnUncachedGetSnapshot = false;
function useSyncExternalStore$2(subscribe, getSnapshot, getServerSnapshot) {
  if (process.env.NODE_ENV !== "production") {
    if (!didWarnOld18Alpha) {
      if ("startTransition" in React__namespace) {
        didWarnOld18Alpha = true;
        console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
      }
    }
  }
  const value = getSnapshot();
  if (process.env.NODE_ENV !== "production") {
    if (!didWarnUncachedGetSnapshot) {
      const cachedValue = getSnapshot();
      if (!is(value, cachedValue)) {
        console.error("The result of getSnapshot should be cached to avoid an infinite loop");
        didWarnUncachedGetSnapshot = true;
      }
    }
  }
  const [{
    inst
  }, forceUpdate] = useState({
    inst: {
      value,
      getSnapshot
    }
  });
  useLayoutEffect(() => {
    inst.value = value;
    inst.getSnapshot = getSnapshot;
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({
        inst
      });
    }
  }, [subscribe, value, getSnapshot]);
  useEffect(() => {
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({
        inst
      });
    }
    const handleStoreChange = () => {
      if (checkIfSnapshotChanged(inst)) {
        forceUpdate({
          inst
        });
      }
    };
    return subscribe(handleStoreChange);
  }, [subscribe]);
  useDebugValue(value);
  return value;
}
function checkIfSnapshotChanged(inst) {
  const latestGetSnapshot = inst.getSnapshot;
  const prevValue = inst.value;
  try {
    const nextValue = latestGetSnapshot();
    return !is(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}
function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  return getSnapshot();
}
const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
const isServerEnvironment = !canUseDOM;
const shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore$2;
"useSyncExternalStore" in React__namespace ? ((module2) => module2.useSyncExternalStore)(React__namespace) : shim;
const DataStaticRouterContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  DataStaticRouterContext.displayName = "DataStaticRouterContext";
}
const DataRouterContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  DataRouterContext.displayName = "DataRouter";
}
const DataRouterStateContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  DataRouterStateContext.displayName = "DataRouterState";
}
const AwaitContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  AwaitContext.displayName = "Await";
}
const NavigationContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  NavigationContext.displayName = "Navigation";
}
const LocationContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  LocationContext.displayName = "Location";
}
const RouteContext = /* @__PURE__ */ React__namespace.createContext({
  outlet: null,
  matches: []
});
if (process.env.NODE_ENV !== "production") {
  RouteContext.displayName = "Route";
}
const RouteErrorContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  RouteErrorContext.displayName = "RouteError";
}
function useInRouterContext() {
  return React__namespace.useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(
    false,
    "useLocation() may be used only in the context of a <Router> component."
  ) : invariant(false) : void 0;
  return React__namespace.useContext(LocationContext).location;
}
function useRoutes(routes2, locationArg) {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(
    false,
    "useRoutes() may be used only in the context of a <Router> component."
  ) : invariant(false) : void 0;
  let dataRouterStateContext = React__namespace.useContext(DataRouterStateContext);
  let {
    matches: parentMatches
  } = React__namespace.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;
  if (process.env.NODE_ENV !== "production") {
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + parentPathname + '" (under <Route path="' + parentPath + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + parentPath + '"> to <Route ') + ('path="' + (parentPath === "/" ? "*" : parentPath + "/*") + '">.'));
  }
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? process.env.NODE_ENV !== "production" ? invariant(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + parentPathnameBase + '" ') + ('but pathname "' + parsedLocationArg.pathname + '" was given in the `location` prop.')) : invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes2, {
    pathname: remainingPathname
  });
  if (process.env.NODE_ENV !== "production") {
    process.env.NODE_ENV !== "production" ? warning(parentRoute || matches != null, 'No routes matched location "' + location.pathname + location.search + location.hash + '" ') : void 0;
    process.env.NODE_ENV !== "production" ? warning(matches == null || matches[matches.length - 1].route.element !== void 0, 'Matched leaf route at location "' + location.pathname + location.search + location.hash + '" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.') : void 0;
  }
  let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([parentPathnameBase, match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
  })), parentMatches, dataRouterStateContext || void 0);
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ jsx(LocationContext.Provider, {
      value: {
        location: _extends({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: Action.Pop
      },
      children: renderedMatches
    });
  }
  return renderedMatches;
}
function DefaultErrorElement() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let codeStyles = {
    padding: "2px 4px",
    backgroundColor: lightgrey
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("h2", {
      children: "Unhandled Thrown Error!"
    }), /* @__PURE__ */ jsx("h3", {
      style: {
        fontStyle: "italic"
      },
      children: message
    }), stack ? /* @__PURE__ */ jsx("pre", {
      style: preStyles,
      children: stack
    }) : null, /* @__PURE__ */ jsx("p", {
      children: "\u{1F4BF} Hey developer \u{1F44B}"
    }), /* @__PURE__ */ jsxs("p", {
      children: ["You can provide a way better UX than this when your app throws errors by providing your own\xA0", /* @__PURE__ */ jsx("code", {
        style: codeStyles,
        children: "errorElement"
      }), " props on\xA0", /* @__PURE__ */ jsx("code", {
        style: codeStyles,
        children: "<Route>"
      })]
    })]
  });
}
class RenderErrorBoundary extends React__namespace.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location) {
      return {
        error: props.error,
        location: props.location
      };
    }
    return {
      error: props.error || state.error,
      location: state.location
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ jsx(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    }) : this.props.children;
  }
}
function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataStaticRouterContext = React__namespace.useContext(DataStaticRouterContext);
  if (dataStaticRouterContext && match.route.errorElement) {
    dataStaticRouterContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /* @__PURE__ */ jsx(RouteContext.Provider, {
    value: routeContext,
    children
  });
}
function _renderMatches(matches, parentMatches, dataRouterState) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (matches == null) {
    if (dataRouterState != null && dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = dataRouterState == null ? void 0 : dataRouterState.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex((m) => m.route.id && (errors == null ? void 0 : errors[m.route.id]));
    !(errorIndex >= 0) ? process.env.NODE_ENV !== "production" ? invariant(false, "Could not find a matching route for the current errors: " + errors) : invariant(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  return renderedMatches.reduceRight((outlet, match, index2) => {
    let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null;
    let errorElement = dataRouterState ? match.route.errorElement || /* @__PURE__ */ jsx(DefaultErrorElement, {}) : null;
    let getChildren = () => /* @__PURE__ */ jsx(RenderedRoute, {
      match,
      routeContext: {
        outlet,
        matches: parentMatches.concat(renderedMatches.slice(0, index2 + 1))
      },
      children: error ? errorElement : match.route.element !== void 0 ? match.route.element : outlet
    });
    return dataRouterState && (match.route.errorElement || index2 === 0) ? /* @__PURE__ */ jsx(RenderErrorBoundary, {
      location: dataRouterState.location,
      component: errorElement,
      error,
      children: getChildren()
    }) : getChildren();
  }, null);
}
var DataRouterHook;
(function(DataRouterHook2) {
  DataRouterHook2["UseRevalidator"] = "useRevalidator";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook2["UseActionData"] = "useActionData";
  DataRouterStateHook2["UseRouteError"] = "useRouteError";
  DataRouterStateHook2["UseNavigation"] = "useNavigation";
  DataRouterStateHook2["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook2["UseMatches"] = "useMatches";
  DataRouterStateHook2["UseRevalidator"] = "useRevalidator";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.";
}
function useDataRouterState(hookName) {
  let state = React__namespace.useContext(DataRouterStateContext);
  !state ? process.env.NODE_ENV !== "production" ? invariant(false, getDataRouterConsoleError(hookName)) : invariant(false) : void 0;
  return state;
}
function useRouteError() {
  var _state$errors;
  let error = React__namespace.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook.UseRouteError);
  let route = React__namespace.useContext(RouteContext);
  let thisRoute = route.matches[route.matches.length - 1];
  if (error) {
    return error;
  }
  !route ? process.env.NODE_ENV !== "production" ? invariant(false, "useRouteError must be used inside a RouteContext") : invariant(false) : void 0;
  !thisRoute.route.id ? process.env.NODE_ENV !== "production" ? invariant(false, 'useRouteError can only be used on routes that contain a unique "id"') : invariant(false) : void 0;
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[thisRoute.route.id];
}
const alreadyWarned = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    process.env.NODE_ENV !== "production" ? warning(false, message) : void 0;
  }
}
function Router(_ref4) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator,
    static: staticProp = false
  } = _ref4;
  !!useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : invariant(false) : void 0;
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = React__namespace.useMemo(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location = React__namespace.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
  process.env.NODE_ENV !== "production" ? warning(location != null, '<Router basename="' + basename + '"> is not able to match the URL ' + ('"' + pathname + search + hash + '" because it does not start with the ') + "basename, so the <Router> won't render anything.") : void 0;
  if (location == null) {
    return null;
  }
  return /* @__PURE__ */ jsx(NavigationContext.Provider, {
    value: navigationContext,
    children: /* @__PURE__ */ jsx(LocationContext.Provider, {
      children,
      value: {
        location,
        navigationType
      }
    })
  });
}
var AwaitRenderStatus;
(function(AwaitRenderStatus2) {
  AwaitRenderStatus2[AwaitRenderStatus2["pending"] = 0] = "pending";
  AwaitRenderStatus2[AwaitRenderStatus2["success"] = 1] = "success";
  AwaitRenderStatus2[AwaitRenderStatus2["error"] = 2] = "error";
})(AwaitRenderStatus || (AwaitRenderStatus = {}));
new Promise(() => {
});
const Content = () => {
  const routesElement = useRoutes(routes);
  return routesElement;
};
const DataContext = React.createContext({});
const usePageData = () => React.useContext(DataContext);
const check = "_check_13y5y_17";
const icon = "_icon_13y5y_29";
const dark = "_dark_13y5y_38";
const sun = "_sun_13y5y_43";
const moon = "_moon_13y5y_47";
const styles$6 = {
  "switch": "_switch_13y5y_1",
  check,
  icon,
  dark,
  sun,
  moon
};
const APPEARANCE_KEY = "appearance";
const setClassList = (isDark) => {
  const classList = document.documentElement.classList;
  if (isDark) {
    classList.add("dark");
    localStorage.setItem(APPEARANCE_KEY, "dark");
  } else {
    classList.remove("dark");
    localStorage.setItem(APPEARANCE_KEY, "light");
  }
};
const updateAppearance = () => {
  const isDark = localStorage.getItem(APPEARANCE_KEY);
  setClassList(isDark === "dark");
  window.addEventListener("storage", updateAppearance);
};
if (typeof window !== void 0 && typeof localStorage !== "undefined") {
  updateAppearance();
}
const toggle = () => {
  const classList = document.documentElement.classList;
  const isDark = classList.contains("dark") ? "dark" : "light";
  setClassList(isDark !== "dark");
};
function Switch(props) {
  return /* @__PURE__ */ jsx("button", {
    className: `${styles$6.switch} ${props.className}`,
    type: "button",
    role: "switch",
    ...props.onClick ? {
      onClick: props.onClick
    } : {},
    children: /* @__PURE__ */ jsx("span", {
      className: styles$6.check,
      children: /* @__PURE__ */ jsx("span", {
        className: styles$6.icon,
        children: props.children
      })
    })
  });
}
function SwitchAppearance() {
  return /* @__PURE__ */ jsx(Switch, {
    onClick: toggle,
    children: /* @__PURE__ */ jsx("div", {
      className: styles$6.sun
    })
  });
}
const link$1 = "_link_158tj_1";
const nav = "_nav_158tj_22";
const styles$5 = {
  link: link$1,
  "social-link-icon": "_social-link-icon_158tj_12",
  nav
};
function MenuItem(props) {
  return /* @__PURE__ */ jsx("div", {
    className: "text-sm font-medium mx-3",
    children: /* @__PURE__ */ jsx("a", {
      href: props.link,
      className: styles$5.link,
      children: props.text
    })
  });
}
function Nav() {
  var _a;
  const {
    siteData: siteData2
  } = usePageData();
  const nav2 = ((_a = siteData2 == null ? void 0 : siteData2.themeConfig) == null ? void 0 : _a.nav) || [];
  return /* @__PURE__ */ jsx("header", {
    fixed: "~",
    pos: "t-0 l-0",
    w: "full",
    z: "10",
    children: /* @__PURE__ */ jsxs("div", {
      flex: "~",
      items: "center",
      justify: "between",
      className: `h-14 divider-bottom ${styles$5.nav}`,
      children: [/* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx("a", {
          href: "/",
          className: "w-full h-full text-1rem font-semibold flex items-center",
          hover: "opacity-60",
          children: "Island.js"
        })
      }), /* @__PURE__ */ jsxs("div", {
        flex: "~",
        children: [/* @__PURE__ */ jsx("div", {
          flex: "~",
          children: nav2.map((item) => {
            return /* @__PURE__ */ jsx(MenuItem, {
              ...item
            }, item.text);
          })
        }), /* @__PURE__ */ jsx("div", {
          before: "menu-item-before",
          flex: "~",
          children: /* @__PURE__ */ jsx(SwitchAppearance, {})
        }), /* @__PURE__ */ jsx("div", {
          flex: "~",
          before: "menu-item-before",
          children: /* @__PURE__ */ jsx("a", {
            href: "/",
            className: styles$5["social-link-icon"],
            children: /* @__PURE__ */ jsx("div", {
              className: "i-carbon-logo-github w-5 h-5 fill-current"
            })
          })
        })]
      })]
    })
  });
}
const base = "";
const vars = "";
const __uno = "";
const doc = "";
function HomeFeature(props) {
  const {
    features
  } = props;
  return /* @__PURE__ */ jsx("div", {
    className: "max-w-1152px",
    m: "auto",
    flex: "~ wrap",
    justify: "between",
    children: features.map((feature) => {
      const {
        icon: icon2,
        title: title2,
        details
      } = feature;
      return /* @__PURE__ */ jsx("div", {
        border: "rounded-md",
        p: "r-4 b-4",
        w: "1/3",
        children: /* @__PURE__ */ jsxs("article", {
          bg: "bg-soft",
          border: "~ bg-soft solid rounded-xl",
          p: "6",
          h: "full",
          children: [/* @__PURE__ */ jsx("div", {
            bg: "gray-light-4 dark:bg-white",
            border: "rounded-md",
            className: "mb-5 w-12 h-12 text-3xl flex-center",
            children: icon2
          }), /* @__PURE__ */ jsx("h2", {
            font: "bold",
            children: title2
          }), /* @__PURE__ */ jsx("p", {
            text: "sm text-2",
            font: "medium",
            className: "pt-2 leading-6",
            children: details
          })]
        })
      }, title2);
    })
  });
}
const clip = "_clip_zensi_1";
const styles$4 = {
  clip
};
const link = "_link_r3fql_1";
const styles$3 = {
  link
};
const EXTERNAL_URL_RE = /^(https?)/;
function Link(props) {
  const {
    href,
    children,
    className
  } = props;
  const isExternal = EXTERNAL_URL_RE.test(href);
  const target = isExternal ? "_blank" : "";
  const rel = isExternal ? "noopener noreferrer" : "";
  return /* @__PURE__ */ jsx("a", {
    href,
    target,
    rel,
    className: `${styles$3.link} ${className}`,
    children
  });
}
const button = "_button_ldbgj_1";
const medium = "_medium_ldbgj_13";
const big = "_big_ldbgj_20";
const brand = "_brand_ldbgj_41";
const alt = "_alt_ldbgj_60";
const styles$2 = {
  button,
  medium,
  big,
  brand,
  alt
};
function Button(props) {
  const {
    size = "big",
    theme = "brand",
    text,
    href = "/",
    external = false,
    className
  } = props;
  let type = null;
  if (props.type === "button") {
    type = "button";
  } else if (props.type === "a") {
    type = external ? "a" : Link;
  }
  return React__default.default.createElement(type != null ? type : "a", {
    href,
    className: `${styles$2.button} ${styles$2[theme]} ${styles$2[size]} ${className}`
  }, text);
}
function HomeHero(props) {
  const {
    hero
  } = props;
  return /* @__PURE__ */ jsx("div", {
    m: "auto",
    p: "t-20 x-16 b-16",
    children: /* @__PURE__ */ jsxs("div", {
      flex: "~",
      className: "max-w-1152px",
      m: "auto",
      children: [/* @__PURE__ */ jsxs("div", {
        text: "left",
        flex: "~ col",
        className: "max-w-592px",
        children: [/* @__PURE__ */ jsx("h1", {
          font: "bold",
          text: "6xl",
          className: "max-w-576px",
          children: /* @__PURE__ */ jsx("span", {
            className: styles$4.clip,
            children: hero.name
          })
        }), /* @__PURE__ */ jsx("p", {
          text: "6xl",
          font: "bold",
          className: "max-w-576px",
          children: hero.text
        }), /* @__PURE__ */ jsx("p", {
          p: "t-3",
          text: "2xl text-2",
          font: "medium",
          className: "whitespace-pre-wrap max-w-576px",
          children: hero.tagline
        }), /* @__PURE__ */ jsx("div", {
          flex: "~ wrap",
          justify: "start",
          p: "t-8",
          children: hero.actions.map((action) => {
            return /* @__PURE__ */ jsx("div", {
              p: "1",
              children: /* @__PURE__ */ jsx(Button, {
                type: "a",
                text: action.text,
                href: action.link,
                theme: action.theme
              })
            }, action.link);
          })
        })]
      }), hero.image && /* @__PURE__ */ jsx("div", {
        w: "max-96",
        h: "max-96",
        flex: "center",
        m: "auto",
        children: /* @__PURE__ */ jsx("img", {
          src: hero.image.src,
          alt: hero.image.alt ? hero.image.alt : hero.name
        })
      })]
    })
  });
}
function HomeLayout() {
  const {
    frontmatter: frontmatter2
  } = usePageData();
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(HomeHero, {
      hero: frontmatter2.hero
    }), /* @__PURE__ */ jsx(HomeFeature, {
      features: frontmatter2.features
    })]
  });
}
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
const freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
const root$1 = root;
var Symbol$1 = root$1.Symbol;
const Symbol$2 = Symbol$1;
var objectProto$1 = Object.prototype;
var hasOwnProperty = objectProto$1.hasOwnProperty;
var nativeObjectToString$1 = objectProto$1.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto = Object.prototype;
var nativeObjectToString = objectProto.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index2 = string.length;
  while (index2-- && reWhitespace.test(string.charAt(index2))) {
  }
  return index2;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var now = function() {
  return root$1.Date.now();
};
const now$1 = now;
var FUNC_ERROR_TEXT$1 = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var FUNC_ERROR_TEXT = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
const NAV_HEIGHT = 56;
function scrollToTarget(target, isSmooth) {
  if (!target)
    return;
  console.log("scrollToTarget", target, isSmooth);
  const targetPadding = parseInt(window.getComputedStyle(target).paddingTop);
  const targetTop = window.scrollY + target.getBoundingClientRect().top + targetPadding - NAV_HEIGHT;
  console.log("scrollToTarget", target, isSmooth);
  window.scrollTo({
    left: 0,
    top: targetTop,
    behavior: isSmooth ? "smooth" : "auto"
  });
}
function bindingAsideScroll() {
  console.log("bind");
  const marker = document.getElementById("aside-marker");
  const aside = document.getElementById("aside-container");
  const headers = Array.from((aside == null ? void 0 : aside.getElementsByTagName("a")) || []).map(
    (item) => decodeURIComponent(item.hash)
  );
  if (!aside) {
    return;
  }
  const activate = (links, index2) => {
    if (links[index2]) {
      const id = links[index2].getAttribute("href");
      const tocIndex = headers.findIndex((item) => item === id);
      const currentLink = aside == null ? void 0 : aside.querySelector(
        `a[href="${id}"]`
      );
      if (currentLink) {
        marker.style.top = `${33 + tocIndex * 28}px`;
        marker.style.opacity = "1";
      }
    }
  };
  const setActiveLink = () => {
    const links = Array.from(
      document.querySelectorAll(".island-doc .header-anchor")
    ).filter((element) => {
      var _a;
      return ((_a = element.parentElement) == null ? void 0 : _a.tagName) !== "H1";
    });
    const isBottom = document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight;
    if (isBottom) {
      activate(links, links.length - 1);
      return;
    }
    for (let i = 0; i < links.length; i++) {
      const currentAnchor = links[i];
      const nextAnchor = links[i + 1];
      const scrollTop = Math.ceil(window.scrollY) + NAV_HEIGHT;
      const currentAnchorTop = currentAnchor.parentElement.offsetTop;
      if (!nextAnchor) {
        activate(links, i);
        break;
      }
      if (i === 0 && scrollTop < currentAnchorTop || scrollTop === 0) {
        activate(links, 0);
        break;
      }
      const nextAnchorTop = nextAnchor.parentElement.offsetTop;
      if (scrollTop >= currentAnchorTop && scrollTop < nextAnchorTop) {
        activate(links, i);
        break;
      }
    }
  };
  const throttleSetActiveLink = throttle(setActiveLink, 100);
  window.addEventListener("scroll", throttleSetActiveLink);
  return () => {
    window.removeEventListener("scroll", throttleSetActiveLink);
  };
}
function useHeaders(initHeaders) {
  const [headers, setHeaders] = React.useState(initHeaders);
  React.useEffect(() => {
  });
  return headers;
}
function Aside(props) {
  const {
    toc: toc2 = []
  } = props;
  const headers = useHeaders(toc2);
  const hasOutline = toc2.length > 0;
  React.useEffect(() => {
    const unbind = bindingAsideScroll();
    return () => {
      unbind();
    };
  }, []);
  const markerRef = React.useRef(null);
  function renderHeader(header) {
    const {
      id,
      text,
      depth
    } = header;
    return /* @__PURE__ */ jsx("li", {
      className: "block leading-7 text-text-2 hover:text-text-1",
      transition: "color duration-300",
      style: {
        paddingLeft: (depth - 2) * 12
      },
      children: /* @__PURE__ */ jsx("a", {
        href: `#${id}`,
        onClick: (e) => {
          e.preventDefault();
          const target = document.getElementById(header.id);
          scrollToTarget(target, true);
        },
        children: text
      })
    }, id);
  }
  return /* @__PURE__ */ jsx("div", {
    flex: "~ col 1",
    style: {
      width: "var(--island-aside-width)"
    },
    children: /* @__PURE__ */ jsx("div", {
      children: hasOutline && /* @__PURE__ */ jsxs("div", {
        id: "aside-container",
        className: "relative divider-left pl-4 text-13px font-medium",
        children: [/* @__PURE__ */ jsx("div", {
          ref: markerRef,
          id: "aside-marker",
          className: "absolute top-33px opacity-0 w-1px h-18px bg-brand",
          style: {
            left: "-1px",
            transition: "top 0.25s cubic-bezier(0, 1, 0.5, 1), background-color 0.5s, opacity 0.25s"
          }
        }), /* @__PURE__ */ jsx("div", {
          "leading-7": "~",
          text: "13px",
          font: "semibold",
          children: "ON THIS PAGE"
        }), /* @__PURE__ */ jsx("nav", {
          children: /* @__PURE__ */ jsx("ul", {
            relative: "~",
            children: headers.map(renderHeader)
          })
        })]
      })
    })
  });
}
function usePrevNextPage() {
  var _a;
  const { pathname } = useLocation();
  const { siteData: siteData2 } = usePageData();
  const siderbar = ((_a = siteData2.themeConfig) == null ? void 0 : _a.sidebar) || {};
  const flattenSidebar = [];
  Object.keys(siderbar).forEach((item) => {
    const siderbarItem = siderbar[item] || [];
    siderbarItem.forEach((group) => {
      flattenSidebar.push(...group.items);
    });
  });
  const idx = flattenSidebar.findIndex((item) => {
    return pathname === item.link;
  });
  console.log(flattenSidebar);
  return {
    prevPage: flattenSidebar[idx - 1] || null,
    nextPage: flattenSidebar[idx + 1] || null
  };
}
const prev = "_prev_6xv5j_1";
const next = "_next_6xv5j_2";
const title = "_title_6xv5j_20";
const desc = "_desc_6xv5j_29";
const styles$1 = {
  prev,
  next,
  "pager-link": "_pager-link_6xv5j_6",
  title,
  desc
};
function DocFooter() {
  const {
    prevPage,
    nextPage
  } = usePrevNextPage();
  return /* @__PURE__ */ jsx("footer", {
    mt: "8",
    children: /* @__PURE__ */ jsxs("div", {
      flex: "~",
      gap: "2",
      "divider-top": "~",
      pt: "6",
      children: [/* @__PURE__ */ jsx("div", {
        flex: "~ col",
        className: styles$1.prev,
        children: prevPage && /* @__PURE__ */ jsxs("a", {
          href: prevPage.link,
          className: styles$1["pager-link"],
          children: [/* @__PURE__ */ jsx("span", {
            className: styles$1.desc,
            children: "\u4E0A\u4E00\u9875"
          }), /* @__PURE__ */ jsx("span", {
            className: styles$1.title,
            children: prevPage.text
          })]
        })
      }), /* @__PURE__ */ jsx("div", {
        flex: "~ col",
        className: styles$1.next,
        children: nextPage && /* @__PURE__ */ jsxs("a", {
          href: nextPage.link,
          className: `${styles$1["pager-link"]} ${styles$1.next}`,
          children: [/* @__PURE__ */ jsx("span", {
            className: styles$1.desc,
            children: "\u4E0B\u4E00\u9875"
          }), /* @__PURE__ */ jsx("span", {
            className: styles$1.title,
            children: nextPage.text
          })]
        })
      })]
    })
  });
}
const sidebar = "_sidebar_16h0y_1";
const styles = {
  sidebar
};
function Sidebar(props) {
  const {
    sidebarData,
    pathname
  } = props;
  const renderGroupItem = (item) => {
    const {
      text,
      link: link2
    } = item;
    const active = pathname === link2;
    return /* @__PURE__ */ jsx("div", {
      ml: "5",
      children: /* @__PURE__ */ jsx("div", {
        p: "1",
        text: "sm",
        "font-medium": "~",
        className: `${active ? "text-brand" : "text-text-2"}
        `,
        children: /* @__PURE__ */ jsx(Link, {
          href: item.link,
          children: text
        })
      })
    });
  };
  const renderGroup = (group) => {
    const {
      text,
      items
    } = group;
    return /* @__PURE__ */ jsxs("section", {
      block: "~",
      "not-first": "divider-top mt-4",
      children: [/* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx("h2", {
          m: "t-3 b-2",
          text: "1rem text-1",
          font: "bold",
          children: text
        })
      }), /* @__PURE__ */ jsx("div", {
        mb: "1",
        children: items.map((item) => {
          return /* @__PURE__ */ jsx("div", {
            children: renderGroupItem(item)
          }, item.link);
        })
      })]
    }, text);
  };
  return /* @__PURE__ */ jsx("aside", {
    className: styles.sidebar,
    children: /* @__PURE__ */ jsx("nav", {
      children: sidebarData.map((group) => {
        return renderGroup(group);
      })
    })
  });
}
const content = "_content_1d34c_1";
const style = {
  content,
  "doc-content": "_doc-content_1d34c_8",
  "aside-container": "_aside-container_1d34c_14"
};
function DocLayout() {
  var _a;
  const {
    siteData: siteData2,
    toc: toc2
  } = usePageData();
  const {
    pathname
  } = useLocation();
  const siderbar = ((_a = siteData2.themeConfig) == null ? void 0 : _a.sidebar) || {};
  const matchedSidebarKey = Object.keys(siderbar).find((key) => {
    if (pathname.startsWith(key)) {
      return true;
    }
  });
  const mathedSidebar = siderbar[matchedSidebarKey] || [];
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(Sidebar, {
      sidebarData: mathedSidebar,
      pathname
    }), /* @__PURE__ */ jsxs("div", {
      className: style.content,
      flex: "~",
      children: [/* @__PURE__ */ jsxs("div", {
        className: style["doc-content"],
        children: [/* @__PURE__ */ jsx("div", {
          className: "island-doc",
          children: /* @__PURE__ */ jsx(Content, {})
        }), /* @__PURE__ */ jsx(DocFooter, {})]
      }), /* @__PURE__ */ jsx("div", {
        className: style["aside-container"],
        children: /* @__PURE__ */ jsx(Aside, {
          toc: toc2
        })
      })]
    })]
  });
}
function Layout() {
  const pageData = usePageData();
  const {
    pageType
  } = pageData;
  console.log(pageData);
  const getContent = () => {
    if (pageType === "home") {
      return /* @__PURE__ */ jsx(HomeLayout, {});
    } else if (pageType === "doc") {
      return /* @__PURE__ */ jsx(DocLayout, {});
    } else {
      return /* @__PURE__ */ jsx("div", {
        children: "404"
      });
    }
  };
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(Nav, {}), /* @__PURE__ */ jsx("section", {
      style: {
        paddingTop: "var(--island-nav-height)"
      },
      children: getContent()
    })]
  });
}
const siteData = { "title": "123", "description": "121152", "themeConfig": { "nav": [{ "text": "\u4E3B\u9875", "link": "/" }, { "text": "\u6307\u5357", "link": "/guide" }], "sidebar": { "/guide": [{ "text": "\u6559\u7A0B", "items": [{ "text": "\u5FEB\u901F\u4E0A\u624B", "link": "/guide/a" }, { "text": "\u5982\u4F55\u5B89\u88C5", "link": "/guide/b" }, { "text": "\u6CE8\u610F\u4E8B\u9879", "link": "/guide/c" }] }, { "text": "\u6559\u7A0B2", "items": [{ "text": "\u5FEB\u901F\u4E0A\u624B", "link": "/guide/a" }, { "text": "\u5982\u4F55\u5B89\u88C5", "link": "/guide/b" }] }] } }, "vite": {} };
async function initPageData(routePath) {
  var _a, _b;
  const matched = matchRoutes(routes, routePath);
  if (matched) {
    const route = matched[0].route;
    const moduleInfo = await route.preload();
    return {
      pageType: (_b = (_a = moduleInfo.frontmatter) == null ? void 0 : _a.pageType) != null ? _b : "doc",
      siteData,
      frontmatter: moduleInfo.frontmatter,
      pagePath: routePath,
      toc: moduleInfo.toc
    };
  }
  return {
    pageType: "404",
    siteData,
    pagePath: routePath
  };
}
function App() {
  return /* @__PURE__ */ jsx(Layout, {});
}
function StaticRouter({
  basename,
  children,
  location: locationProp = "/"
}) {
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let action = Action.Pop;
  let location = {
    pathname: locationProp.pathname || "/",
    search: locationProp.search || "",
    hash: locationProp.hash || "",
    state: locationProp.state || null,
    key: locationProp.key || "default"
  };
  let staticNavigator = getStatelessNavigator();
  return /* @__PURE__ */ jsx(Router, {
    basename,
    children,
    location,
    navigationType: action,
    navigator: staticNavigator,
    static: true
  });
}
function getStatelessNavigator() {
  return {
    createHref(to) {
      return typeof to === "string" ? to : createPath(to);
    },
    push(to) {
      throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)})\` somewhere in your app.`);
    },
    replace(to) {
      throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere in your app.`);
    },
    go(delta) {
      throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${delta})\` somewhere in your app.`);
    },
    back() {
      throw new Error(`You cannot use navigator.back() on the server because it is a stateless environment.`);
    },
    forward() {
      throw new Error(`You cannot use navigator.forward() on the server because it is a stateless environment.`);
    }
  };
}
async function render(pagePath) {
  const pageData = await initPageData(pagePath);
  return server.renderToString(/* @__PURE__ */ jsx(DataContext.Provider, {
    value: pageData,
    children: /* @__PURE__ */ jsx(StaticRouter, {
      location: pagePath,
      children: /* @__PURE__ */ jsx(App, {})
    })
  }));
}
exports.render = render;
exports.routes = routes;
