import{_ as e,o as t,c as a,a as r}from"./app-77a7d228.js";const o="/LGUIDoc/assets/1-1e2d19db.png",n="/LGUIDoc/assets/2-4b6a0dc8.png",c="/LGUIDoc/assets/3-c2089603.png",s="/LGUIDoc/assets/4-8d34ff10.png",i="/LGUIDoc/assets/5-616b91fb.png",p={},d=r('<h1 id="screen-space-overlay" tabindex="-1"><a class="header-anchor" href="#screen-space-overlay" aria-hidden="true">#</a> Screen Space Overlay</h1><p>LGUI render <strong>Screen Space Overlay</strong> UI direct to viewport after UnrealEngine render the world.</p><h2 id="create" tabindex="-1"><a class="header-anchor" href="#create" aria-hidden="true">#</a> Create</h2><p>Select &quot;LGUI Editor Tools&quot;-&gt;&quot;Basic Setup&quot;-&gt;&quot;Screen Space UI&quot;: <img src="'+o+'" alt=""></p><p>Then a &quot;ScreenSpaceUIRoot&quot; will be created, along with some default actor (PresetEventSystemActor, Frame, Info): <img src="'+n+'" alt=""></p><p>Select LGUICanvas component, you will see the &quot;Render Mode&quot; is &quot;Screen Space Overlay&quot;: <img src="'+c+'" alt=""></p><h2 id="lguicanvasscaler" tabindex="-1"><a class="header-anchor" href="#lguicanvasscaler" aria-hidden="true">#</a> LGUICanvasScaler</h2><p>There is another important component on &quot;ScreenSpaceUIRoot&quot; is the &quot;LGUICanvasScaler&quot; component, you can change these parameters of LGUICanvasScale to make the UI fit different resolutions: <img src="'+s+'" alt=""></p><p>And these parameters can change camera parameters that render the ScreenSpaceUI: <img src="'+i+'" alt=""></p><h2 id="note" tabindex="-1"><a class="header-anchor" href="#note" aria-hidden="true">#</a> NOTE!!!</h2><p>Only one &quot;Screen Space UI Root&quot; can exist in one world.</p>',11),l=[d];function h(u,m){return t(),a("div",null,l)}const S=e(p,[["render",h],["__file","index.html.vue"]]);export{S as default};
