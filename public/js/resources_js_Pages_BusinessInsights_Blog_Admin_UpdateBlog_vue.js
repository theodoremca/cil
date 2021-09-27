"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_BusinessInsights_Blog_Admin_UpdateBlog_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/BusinessInsights/Blog/Admin/UpdateBlog.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/BusinessInsights/Blog/Admin/UpdateBlog.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ImageUpload_ImageUpload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageUpload/ImageUpload */ "./resources/js/Pages/BusinessInsights/Blog/Admin/ImageUpload/ImageUpload.vue");
/* harmony import */ var _bucketPaths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../bucketPaths */ "./resources/js/bucketPaths.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../storage */ "./resources/js/storage.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ImageUpload: _ImageUpload_ImageUpload__WEBPACK_IMPORTED_MODULE_1__["default"],
    Image: Image
  },
  name: "UpdateBlog",
  created: function created() {
    this.$store.commit('setCurrentBlog', parseInt(this.id));
  },
  props: ['id'],
  computed: {
    isProcessing: function isProcessing() {
      return this.loading;
    },
    blog: function blog() {
      return this.$store.getters.getCurrentBlog;
    }
  },
  data: function data() {
    return {
      loading: false,
      message: "",
      uploadValue: ""
    };
  },
  mounted: function mounted() {
    this.$store.commit('setCurrentBlog', parseInt(this.id));
  },
  methods: {
    setImageValue: function setImageValue(data) {
      this.blog.image = "";
      this.imgDatString = data;
    },
    createPost: function createPost() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var that, getResponse, dataURLtoFile, file;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                dataURLtoFile = function _dataURLtoFile(dataUrl, filename) {
                  var arr = dataUrl.split(','),
                      mime = arr[0].match(/:(.*?);/)[1],
                      bStr = atob(arr[1]),
                      n = bStr.length,
                      u8arr = new Uint8Array(n);

                  while (n--) {
                    u8arr[n] = bStr.charCodeAt(n);
                  }

                  return new File([u8arr], filename, {
                    type: mime
                  });
                };

                _this.loading = !_this.loading;
                that = _this;

                getResponse = /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (url.status) {
                              _context.next = 2;
                              break;
                            }

                            return _context.abrupt("return");

                          case 2:
                            _context.next = 4;
                            return axios.put("/api/blog/".concat(that.id), {
                              image: url.message,
                              title: that.blog.title,
                              content: that.blog.content
                            }).then(function (response) {
                              that.message = response.data;
                            })["catch"](function (error) {
                              that.message = error;
                            })["finally"](function (response) {
                              console.log({
                                image_data: url.message,
                                title: that.title,
                                content: that.content
                              });
                              console.log(that.message);
                              that.loading = !that.loading;
                              that.$router.push({
                                name: 'blog-details',
                                params: {
                                  id: "".concat(that.message.success.id)
                                }
                              }); // that.$router.('blog-details/'+that.message.success.id)
                            });

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function getResponse(_x) {
                    return _ref.apply(this, arguments);
                  };
                }();

                if (!_this.blog.image.startsWith('https://firebases')) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 7;
                return getResponse({
                  message: _this.blog.image,
                  status: true
                });

              case 7:
                return _context2.abrupt("return");

              case 8:
                file = dataURLtoFile(that.imgDatString, 'file.jpg');
                _context2.next = 11;
                return (0,_storage__WEBPACK_IMPORTED_MODULE_3__.uploadFile)(that.title, _bucketPaths__WEBPACK_IMPORTED_MODULE_2__.blogPath, file, getResponse);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/BusinessInsights/Blog/Admin/UpdateBlog.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/BusinessInsights/Blog/Admin/UpdateBlog.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UpdateBlog_vue_vue_type_template_id_7bf1134d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateBlog.vue?vue&type=template&id=7bf1134d&scoped=true& */ "./resources/js/Pages/BusinessInsights/Blog/Admin/UpdateBlog.vue?vue&type=template&id=7bf1134d&scoped=true&");
/* harmony import */ var _UpdateBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateBlog.vue?vue&type=script&lang=js& */ "./resources/js/Pages/BusinessInsights/Blog/Admin/UpdateBlog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UpdateBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateBlog_vue_vue_type_template_id_7bf1134d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _UpdateBlog_vue_vue_type_template_id_7bf1134d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7bf1134d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/BusinessInsights/Blog/Admin/UpdateBlog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/BusinessInsights/Blog/Admin/UpdateBlog.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/BusinessInsights/Blog/Admin/UpdateBlog.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateBlog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/BusinessInsights/Blog/Admin/UpdateBlog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/BusinessInsights/Blog/Admin/UpdateBlog.vue?vue&type=template&id=7bf1134d&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/Pages/BusinessInsights/Blog/Admin/UpdateBlog.vue?vue&type=template&id=7bf1134d&scoped=true& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBlog_vue_vue_type_template_id_7bf1134d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBlog_vue_vue_type_template_id_7bf1134d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBlog_vue_vue_type_template_id_7bf1134d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateBlog.vue?vue&type=template&id=7bf1134d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/BusinessInsights/Blog/Admin/UpdateBlog.vue?vue&type=template&id=7bf1134d&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/BusinessInsights/Blog/Admin/UpdateBlog.vue?vue&type=template&id=7bf1134d&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/BusinessInsights/Blog/Admin/UpdateBlog.vue?vue&type=template&id=7bf1134d&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "main-content" }, [
    _c(
      "div",
      { staticClass: "rs-blog inner single pt-100 pb-100 md-pt-80 md-pb-80" },
      [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-8" }, [
              _c("div", { staticClass: "blog-part" }, [
                _c("div", { staticClass: "bs-contact-form pt-45" }, [
                  _c("h3", { staticClass: "title" }, [_vm._v("Add A Post")]),
                  _vm._v(" "),
                  _c("div", { attrs: { id: "form-messages" } }),
                  _vm._v(" "),
                  _c(
                    "form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.createPost.apply(null, arguments)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-lg-12" },
                          [
                            _c("ImageUpload", {
                              attrs: { imageToUpdate: this.blog.image },
                              on: { "get-image-string": _vm.setImageValue }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-12" }, [
                          _c("div", { staticClass: "form-field" }, [
                            _c("label", [_vm._v("Title")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.blog.title,
                                  expression: "blog.title"
                                }
                              ],
                              attrs: { type: "text", name: "email" },
                              domProps: { value: _vm.blog.title },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.blog,
                                    "title",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-12" }, [
                          _c("div", { staticClass: "form-field mb-30" }, [
                            _c("label", [_vm._v("Content")]),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.blog.content,
                                  expression: "blog.content"
                                }
                              ],
                              attrs: {
                                rows: "7",
                                id: "message",
                                name: "message"
                              },
                              domProps: { value: _vm.blog.content },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.blog,
                                    "content",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-button mt-30" }, [
                            _c("button", {
                              staticClass: "readon radius",
                              attrs: { disabled: _vm.isProcessing },
                              domProps: {
                                textContent: _vm._s(
                                  _vm.isProcessing ? "posting" : "post"
                                )
                              }
                            })
                          ])
                        ])
                      ])
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
             false
              ? 0
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { attrs: { id: "sticky-end" } })
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "blog-sidebar", attrs: { id: "sticky-sidebar" } },
      [
        _c("div", { staticClass: "sidebar-search sidebar-grid shadow mb-50" }, [
          _c("form", { staticClass: "search-bar" }, [
            _c("input", { attrs: { type: "text", placeholder: "Search..." } }),
            _vm._v(" "),
            _c("span", [
              _c("button", { attrs: { type: "submit" } }, [
                _c("i", { staticClass: "flaticon-search" })
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "sidebar-popular-post sidebar-grid shadow mb-50" },
          [
            _c("div", { staticClass: "sidebar-title" }, [
              _c("h3", { staticClass: "title mb-20" }, [_vm._v("Recent Post")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "single-post mb-20" }, [
              _c("div", { staticClass: "post-image" }, [
                _c("a", { attrs: { href: "blog-single.html" } }, [
                  _c("img", {
                    attrs: {
                      src: "assets/images/blog/small/1.jpg",
                      alt: "post image"
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "post-desc" }, [
                _c("div", { staticClass: "post-title" }, [
                  _c("h5", { staticClass: "margin-0" }, [
                    _c("a", { attrs: { href: "blog-single.html" } }, [
                      _vm._v(
                        "Covid-19 threatens the next generation of smartphones\n                      "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("ul", [
                  _c("li", [
                    _c("i", { staticClass: "fa fa-calendar" }),
                    _vm._v(" 28 June, 2019")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "single-post" }, [
              _c("div", { staticClass: "post-image" }, [
                _c("a", { attrs: { href: "blog-single.html" } }, [
                  _c("img", {
                    attrs: {
                      src: "assets/images/blog/small/5.jpg",
                      alt: "post image"
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "post-desc" }, [
                _c("div", { staticClass: "post-title" }, [
                  _c("h5", { staticClass: "margin-0" }, [
                    _c("a", { attrs: { href: "blog-single.html" } }, [
                      _vm._v(
                        "Covid-19 threatens the next generation of smartphones\n                      "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("ul", [
                  _c("li", [
                    _c("i", { staticClass: "fa fa-calendar" }),
                    _vm._v(" 28 June, 2019")
                  ])
                ])
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "sidebar-categories sidebar-grid shadow" }, [
          _c("div", { staticClass: "sidebar-title" }, [
            _c("h3", { staticClass: "title mb-20" }, [_vm._v("Categories")])
          ]),
          _vm._v(" "),
          _c("ul", [
            _c("li", [
              _c("a", { attrs: { href: "#" } }, [_vm._v("Consulting")])
            ]),
            _vm._v(" "),
            _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Creative")])]),
            _vm._v(" "),
            _c("li", [
              _c("a", { attrs: { href: "#" } }, [_vm._v("Development")])
            ]),
            _vm._v(" "),
            _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Finance")])]),
            _vm._v(" "),
            _c("li", [
              _c("a", { attrs: { href: "#" } }, [_vm._v("Management")])
            ]),
            _vm._v(" "),
            _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Strategy")])])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ })

}]);