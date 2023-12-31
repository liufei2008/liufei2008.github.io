import{_ as e,o as t,c as o,a as r}from"./app-0f69a3bd.js";const a="/LGUIDoc/assets/1-d29b9376.png",n="/LGUIDoc/assets/2-9a0e24dc.png",s="/LGUIDoc/assets/3-5627b601.png",c="/LGUIDoc/assets/4-6a729a48.png",d="/LGUIDoc/assets/5-096043ff.png",i={},l=r('<h1 id="world-space-lgui-renderer" tabindex="-1"><a class="header-anchor" href="#world-space-lgui-renderer" aria-hidden="true">#</a> World Space - LGUI Renderer</h1><p><strong>World Space - LGUI Renderer</strong> use LGUI&#39;s render pipeline, elements render direct to viewport after UnrealEngine render the world, not affected by post-process.</p><h2 id="create" tabindex="-1"><a class="header-anchor" href="#create" aria-hidden="true">#</a> Create</h2><p>Select &quot;LGUI Editor Tools&quot;-&gt;&quot;Basic Setup&quot;-&gt;&quot;World Space - LGUI Renderer&quot;: <img src="'+a+'" alt=""></p><p>Then a &quot;WorldSpaceUIRoot_LGUIRenderer&quot; will be created.: <img src="'+n+'" alt=""></p><p>Select LGUICanvas component, you will see the &quot;Render Mode&quot; is &quot;World Space - LGUI Renderer&quot;: <img src="'+s+'" alt=""></p><h2 id="blend-depth-with-existing-scene-objects" tabindex="-1"><a class="header-anchor" href="#blend-depth-with-existing-scene-objects" aria-hidden="true">#</a> Blend depth with existing scene objects</h2><p>LGUI can take depth buffer texture, sample it and compare with current rendering UI elements&#39;s depth value, and do depth blend. Create a Sphere object, move and scale it so that it can occlude with existing UI elements, and create a light to make the level look better. By default this feature is enabled, so you can see the UI is occluded by the sphere: <img src="'+c+'" alt=""></p><p>Select LGUICanvas component, change &quot;Blend Depth&quot; parameter value to 1.0: <img src="'+d+'" alt=""></p><p>So the &quot;Blend Depth&quot; parameter can control how much visible if UI elements is occluded by a scene object. <strong>This feature only support opaque object, and not work on mobile platform.</strong></p>',10),p=[l];function h(u,m){return t(),o("div",null,p)}const g=e(i,[["render",h],["__file","index.html.vue"]]);export{g as default};