(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{227:function(t,e,o){t.exports=o.p+"assets/img/1.0ca82d5b.png"},228:function(t,e,o){t.exports=o.p+"assets/img/2.33899801.png"},229:function(t,e,o){t.exports=o.p+"assets/img/3.3f04831e.png"},574:function(t,e,o){"use strict";o.r(e);var s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"project-3d-world-position-to-lgui-s-screen-2d-position"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#project-3d-world-position-to-lgui-s-screen-2d-position"}},[t._v("#")]),t._v(" Project 3d world position to LGUI's screen 2d position")]),t._v(" "),e("p",[t._v("This is useful when we want to create a floating health bar on our character.")]),t._v(" "),e("p",[t._v("The main point is to use two nodes: One is "),e("strong",[t._v("Project World to Screen")]),t._v(", which is UnrealEngine's default node:"),e("br"),t._v(" "),e("img",{attrs:{src:o(227),alt:""}}),t._v("\nAnother is "),e("strong",[t._v("Convert Position from Viewport to LGUICanvas")]),t._v(", which is provided by LGUICanvasScaler:"),e("br"),t._v(" "),e("img",{attrs:{src:o(228),alt:""}})]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Property:")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Function:")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Target")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("A reference to LGUICanvasScaler object.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Position")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Input position, which is output from "),e("strong",[t._v("Project World to Screen")]),t._v(" node.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Return Value")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Result LGUI's screen space position. Note left bottom is zero position, so for UIItem who need to use the result value, should set "),e("em",[t._v("Anchors")]),t._v(" to "),e("em",[t._v("Left Bottom")]),t._v(", and the parent of UIItem should set to full screen size.")])])])]),t._v(" "),e("p",[t._v("We can link these nodes like the screen shot below:"),e("br"),t._v(" "),e("img",{attrs:{src:o(229),alt:""}}),e("br"),t._v(" "),e("em",[t._v("Healthbar")]),t._v(" is a UIBaseActor represent for a healthbar, "),e("em",[t._v("Root")]),t._v(" is the ScreenSpaceUIRoot actor which hold the LGUICanvasScaler component.")])])}],n=o(0),i=Object(n.a)({},(function(){this._self._c;return this._m(0)}),s,!1,null,null,null);e.default=i.exports}}]);