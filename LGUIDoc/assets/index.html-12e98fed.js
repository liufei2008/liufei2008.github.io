import{_ as e,o as a,c as r,a as t}from"./app-2e097c0d.js";const i="/LGUIDoc/assets/TurnOnStat-0686449b.png",o="/LGUIDoc/assets/StatItems-ca5ec6ee.png",n={},d=t('<h1 id="lgui-stat" tabindex="-1"><a class="header-anchor" href="#lgui-stat" aria-hidden="true">#</a> LGUI Stat</h1><p>LGUI provide some stat info for quike performance check: <em>Stat-&gt;Advanced-&gt;LGUI</em> and <em>Stat-&gt;Advanced-&gt;LTween</em>:<br><img src="'+i+'" alt=""><br> When it is on, the stat info will show:<br><img src="'+o+'" alt=""><br> There are 4 main items that you should check first, they contains almost all LGUI&#39;s cost: <strong>Hud RHIRender</strong>， <strong>Canvas Update</strong>, <strong>EventSystem</strong>, <strong>UpdateLayoutInterface</strong>.</p><ul><li><h2 id="hud-rhirender" tabindex="-1"><a class="header-anchor" href="#hud-rhirender" aria-hidden="true">#</a> Hud RHIRender</h2></li></ul><p>All cost of LGUI Renderer in render thread, contains render mode of ScreenSpaceOverlay and WorldSpace-LGUIRenderer. Not contains WorldSpace-UERenderer, because in WorldSpace-UERenderer mode, LGUI just generate render data (mesh, material) and leave them for UE to render it as normal scene object.</p><h3 id="postprocess-backgroundblur" tabindex="-1"><a class="header-anchor" href="#postprocess-backgroundblur" aria-hidden="true">#</a> PostProcess_BackgroundBlur</h3><p>Render cost of UIBackgroundBlur component.</p><h3 id="postprocess-backgroundpixelate" tabindex="-1"><a class="header-anchor" href="#postprocess-backgroundpixelate" aria-hidden="true">#</a> PostProcess_BackgroundPixelate</h3><p>Render cost of UIBackgroundPixelate component.</p><h3 id="lguimesh-createsceneproxy" tabindex="-1"><a class="header-anchor" href="#lguimesh-createsceneproxy" aria-hidden="true">#</a> LGUIMesh CreateSceneProxy</h3><p>This happens when LGUIMeshComponent is creating SceneProxy.</p><h3 id="lguimesh-createmeshsection" tabindex="-1"><a class="header-anchor" href="#lguimesh-createmeshsection" aria-hidden="true">#</a> LGUIMesh CreateMeshSection</h3><p>This happens when LGUIMeshComponent&#39;s SceneProxy is creating mesh section, means LGUI is rebuilding drawcall.</p><ul><li><h2 id="canvasupdate" tabindex="-1"><a class="header-anchor" href="#canvasupdate" aria-hidden="true">#</a> CanvasUpdate</h2></li></ul><p>All cost of LGUI Renderer in game thread, no matter what render mode it is. In game thread, LGUI generate mesh &amp; texture atlas &amp; material &amp; other render resource.</p><h3 id="canvas-batachdrawcall" tabindex="-1"><a class="header-anchor" href="#canvas-batachdrawcall" aria-hidden="true">#</a> Canvas BatachDrawcall</h3><p>LGUICanvas do sort depth, calculate overlap, and batch drawcall.</p><h3 id="uigeometry-transformvertices" tabindex="-1"><a class="header-anchor" href="#uigeometry-transformvertices" aria-hidden="true">#</a> UIGeometry TransformVertices</h3><p>LGUI will collect all created geometry, and transform it&#39;s vertices &amp; normals &amp; tangents from UI element&#39;s local space to LGUICanvas&#39;s local space.</p><h3 id="uibatchgeometryrenderable-geometrymodifier" tabindex="-1"><a class="header-anchor" href="#uibatchgeometryrenderable-geometrymodifier" aria-hidden="true">#</a> UIBatchGeometryRenderable GeometryModifier</h3><p>GeometryModifier (UIEffectXXX, include TextAnimation) update render geometry in game thread.</p><h3 id="uipostprocessrenderable-updategeometry" tabindex="-1"><a class="header-anchor" href="#uipostprocessrenderable-updategeometry" aria-hidden="true">#</a> UIPostProcessRenderable UpdateGeometry</h3><p>UIPostProcessRenderable (UIBackgroundBlur &amp; UIBackgroundPixelate) update render geometry in game thread.</p><ul><li><h2 id="updatelayoutinterface" tabindex="-1"><a class="header-anchor" href="#updatelayoutinterface" aria-hidden="true">#</a> UpdateLayoutInterface</h2></li></ul><p>Update all layout object which inherit interface ILGUILayoutInterface, such as UIHorizontalLayout, UIVerticalLayout, UIText...</p><h3 id="uilayout-horizontalrebuildlayout" tabindex="-1"><a class="header-anchor" href="#uilayout-horizontalrebuildlayout" aria-hidden="true">#</a> UILayout HorizontalRebuildLayout</h3><p>UIHorizontalLayout calculation.</p><h3 id="uilayout-verticalrebuildlayout" tabindex="-1"><a class="header-anchor" href="#uilayout-verticalrebuildlayout" aria-hidden="true">#</a> UILayout VerticalRebuildLayout</h3><p>UIVerticalLayout calculation.</p><h3 id="uilayout-gridrebuildlayout" tabindex="-1"><a class="header-anchor" href="#uilayout-gridrebuildlayout" aria-hidden="true">#</a> UILayout GridRebuildLayout</h3><p>UIGridLayout calculation.</p><ul><li><h2 id="eventsystem" tabindex="-1"><a class="header-anchor" href="#eventsystem" aria-hidden="true">#</a> EventSystem</h2></li></ul><p>All cost of LGUI&#39;s EventSystem in game thread. LGUI will use ray and do raycast, execute event on hit object.</p><ul><li><h2 id="others" tabindex="-1"><a class="header-anchor" href="#others" aria-hidden="true">#</a> Others</h2></li></ul><h3 id="lguilifecyclebehaviour-start" tabindex="-1"><a class="header-anchor" href="#lguilifecyclebehaviour-start" aria-hidden="true">#</a> LGUILifeCycleBehaviour Start</h3><h3 id="lguilifecyclebehaviour-update" tabindex="-1"><a class="header-anchor" href="#lguilifecyclebehaviour-update" aria-hidden="true">#</a> LGUILifeCycleBehaviour Update</h3><p>All cost of LGUILifeCycleBehaviour&#39;s Update function in game thread.</p>',36),s=[d];function c(h,l){return a(),r("div",null,s)}const p=e(n,[["render",c],["__file","index.html.vue"]]);export{p as default};