import{_ as e,c as a,o as t,a as n}from"./app-CGRYBoMb.js";const r="/LGUIDoc/assets/1-DcjAiJU6.png",c="/LGUIDoc/assets/2-CgvIsumL.png",o="/LGUIDoc/assets/3-CrCn4SGa.png",s="/LGUIDoc/assets/4-C7zVk_qM.png",l="/LGUIDoc/assets/5-BDoY-X4C.png",i={},p=n('<h1 id="screen-space-overlay" tabindex="-1"><a class="header-anchor" href="#screen-space-overlay"><span>Screen Space Overlay</span></a></h1><p>LGUI render <strong>Screen Space Overlay</strong> UI direct to viewport after UnrealEngine render the world.</p><h2 id="create" tabindex="-1"><a class="header-anchor" href="#create"><span>Create</span></a></h2><p>Select &quot;LGUI Editor Tools&quot;-&gt;&quot;Basic Setup&quot;-&gt;&quot;Screen Space UI&quot;: <img src="'+r+'" alt=""></p><p>Then a &quot;ScreenSpaceUIRoot&quot; will be created, along with some default actor (PresetEventSystemActor, Frame, Info): <img src="'+c+'" alt=""></p><p>Select LGUICanvas component, you will see the &quot;Render Mode&quot; is &quot;Screen Space Overlay&quot;: <img src="'+o+'" alt=""></p><h2 id="lguicanvasscaler" tabindex="-1"><a class="header-anchor" href="#lguicanvasscaler"><span>LGUICanvasScaler</span></a></h2><p>There is another important component on &quot;ScreenSpaceUIRoot&quot; is the &quot;LGUICanvasScaler&quot; component, you can change these parameters of LGUICanvasScale to make the UI fit different resolutions: <img src="'+s+'" alt=""></p><p>And these parameters can change camera parameters that render the ScreenSpaceUI: <img src="'+l+'" alt=""></p><h2 id="note" tabindex="-1"><a class="header-anchor" href="#note"><span>NOTE!!!</span></a></h2><p>Only one &quot;Screen Space UI Root&quot; can exist in one world.</p>',11),h=[p];function d(m,u){return t(),a("div",null,h)}const g=e(i,[["render",d],["__file","index.html.vue"]]),_=JSON.parse('{"path":"/Rendering/ScreenSpaceUI/","title":"Screen Space Overlay","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Create","slug":"create","link":"#create","children":[]},{"level":2,"title":"LGUICanvasScaler","slug":"lguicanvasscaler","link":"#lguicanvasscaler","children":[]},{"level":2,"title":"NOTE!!!","slug":"note","link":"#note","children":[]}],"git":{"updatedTime":1685406463000,"contributors":[{"name":"lf2007hf","email":"707908214@qq.com","commits":1}]},"filePathRelative":"Rendering/ScreenSpaceUI/index.md"}');export{g as comp,_ as data};
