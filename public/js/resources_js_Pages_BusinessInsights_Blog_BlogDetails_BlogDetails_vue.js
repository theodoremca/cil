"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_BusinessInsights_Blog_BlogDetails_BlogDetails_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/BusinessInsights/Blog/BlogDetails/BlogDetails.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/BusinessInsights/Blog/BlogDetails/BlogDetails.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
  name: 'Blogdetails',
  props: ['id'],
  data: function data() {
    return {
      loading: false,
      message: false
    };
  },
  mounted: function mounted() {
    this.$store.commit('setCurrentBlog', parseInt(this.id));
  },
  methods: {
    deleteBlog: function deleteBlog() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var that;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = _this;
                _context.next = 3;
                return axios["delete"]("/api/blog/".concat(that.id)).then(function (response) {
                  that.message = response.data;
                })["catch"](function (error) {
                  that.message = error;
                })["finally"](function (response) {
                  that.loading = !that.loading;
                  that.$router.push({
                    name: 'blog'
                  });
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  computed: {
    blog: function blog() {
      return this.$store.getters.getCurrentBlog;
    },
    isAdmin: function isAdmin() {
      return window.auth_user !== null;
    },
    createdAt: function createdAt() {
      // The 0 there is the key, which sets the date to the epoch
      return new Date(this.blog.created_at);
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/BusinessInsights/Blog/BlogDetails/BlogDetails.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/BusinessInsights/Blog/BlogDetails/BlogDetails.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BlogDetails_vue_vue_type_template_id_39e0345f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogDetails.vue?vue&type=template&id=39e0345f& */ "./resources/js/Pages/BusinessInsights/Blog/BlogDetails/BlogDetails.vue?vue&type=template&id=39e0345f&");
/* harmony import */ var _BlogDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogDetails.vue?vue&type=script&lang=js& */ "./resources/js/Pages/BusinessInsights/Blog/BlogDetails/BlogDetails.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BlogDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BlogDetails_vue_vue_type_template_id_39e0345f___WEBPACK_IMPORTED_MODULE_0__.render,
  _BlogDetails_vue_vue_type_template_id_39e0345f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/BusinessInsights/Blog/BlogDetails/BlogDetails.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/BusinessInsights/Blog/BlogDetails/BlogDetails.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Pages/BusinessInsights/Blog/BlogDetails/BlogDetails.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BlogDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/BusinessInsights/Blog/BlogDetails/BlogDetails.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/BusinessInsights/Blog/BlogDetails/BlogDetails.vue?vue&type=template&id=39e0345f&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/Pages/BusinessInsights/Blog/BlogDetails/BlogDetails.vue?vue&type=template&id=39e0345f& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetails_vue_vue_type_template_id_39e0345f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetails_vue_vue_type_template_id_39e0345f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetails_vue_vue_type_template_id_39e0345f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BlogDetails.vue?vue&type=template&id=39e0345f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/BusinessInsights/Blog/BlogDetails/BlogDetails.vue?vue&type=template&id=39e0345f&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/BusinessInsights/Blog/BlogDetails/BlogDetails.vue?vue&type=template&id=39e0345f&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/BusinessInsights/Blog/BlogDetails/BlogDetails.vue?vue&type=template&id=39e0345f& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "rs-blog inner single pt-100 pb-100 md-pt-80 md-pb-80" },
      [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _vm.blog
              ? _c("div", { staticClass: "col-lg-8" }, [
                  _c("div", { staticClass: "blog-part" }, [
                    _c("div", { staticClass: "blog-img" }, [
                      _vm.blog.image
                        ? _c("img", { attrs: { src: _vm.blog.image, alt: "" } })
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "article-content shadow mb-60" }, [
                      _c("ul", { staticClass: "blog-meta mb-22" }, [
                        _c("li", [
                          _c("i", { staticClass: "fa fa-calendar-check-o" }),
                          _vm._v(" " + _vm._s(_vm.createdAt))
                        ]),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            on: {
                              dblclick: function($event) {
                                return _vm.$router.push({
                                  name: "update-blog",
                                  params: { id: "" + _vm.id }
                                })
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-user-o" }),
                            _vm._v(_vm._s(_vm.isAdmin ? "Edit Blog" : "Admin"))
                          ]
                        ),
                        _vm._v(" "),
                        _vm.isAdmin
                          ? _c("li", { on: { dblclick: _vm.deleteBlog } }, [
                              _c("i", { staticClass: "fa fa-user-o" }),
                              _vm._v("Delete Blog")
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("h2", [_vm._v(_vm._s(_vm.blog.title))]),
                      _vm._v(" "),
                      _c("p", { staticClass: "desc" }, [
                        _vm._v(
                          "\n                                    " +
                            _vm._s(_vm.blog.content) +
                            "\n                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "article-nav" }, [
                      _c("ul", [
                        _c(
                          "li",
                          { staticClass: "next" },
                          [
                            _c(
                              "router-link",
                              { attrs: { to: { path: "/blog" } } },
                              [
                                _c("span", { staticClass: "next-link" }, [
                                  _vm._v("back  "),
                                  _c("i", { staticClass: "flaticon-back" })
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "clearfix" })
                    ])
                  ])
                ])
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
    return _c("div", { staticClass: "rs-breadcrumbs bg-9" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "content-part text-center" }, [
          _c("h1", { staticClass: "breadcrumbs-title white-color mb-0" }, [
            _vm._v("Blog Single")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);