import{_ as t,o as e,c as o,a as s}from"./app-18a1a2ce.js";const n="/LGUIDoc/assets/1-efe98d08.png",r="/LGUIDoc/assets/2-097490c9.png",i="/LGUIDoc/assets/3-d288e839.png",a={},l=s('<h1 id="deproject-lgui-s-screen-position-to-world" tabindex="-1"><a class="header-anchor" href="#deproject-lgui-s-screen-position-to-world" aria-hidden="true">#</a> Deproject LGUI&#39;s screen position to world</h1><p>If we want to use a UIItem to control a actor location on 3d world this is what we want.</p><p>The main point is to use two nodes: One is <strong>Convert Position from LGUICanvas to Viewport</strong>, which is provided by LGUICanvasScaler:<br><img src="'+n+'" alt=""></p><table><thead><tr><th style="text-align:left;">Property:</th><th style="text-align:left;">Function:</th></tr></thead><tbody><tr><td style="text-align:left;">Target</td><td style="text-align:left;">A reference to LGUICanvasScaler object.</td></tr><tr><td style="text-align:left;">Position</td><td style="text-align:left;">Input position in LGUICanvas&#39;s space. Note left bottom is zero position, so for UIItem who provide this value, should set <em>Anchors</em> to <em>Left Bottom</em>, and the parent of UIItem should set to full screen size.</td></tr><tr><td style="text-align:left;">Return Value</td><td style="text-align:left;">Result screen space position, left top is zero position. Note left bottom is zero position.</td></tr></tbody></table><p>Another is <strong>Deproject Screen to World</strong>, which is UnrealEngine&#39;s default node:<br><img src="'+r+'" alt=""></p><p>We can link these nodes like the screen shot below:<br><img src="'+i+'" alt=""><br> We can use the result <em>World Position</em> and <em>World Direction</em> to generate line trace. <em>Control</em> is a UIBaseActor represent for a screen UI element, <em>Root</em> is the ScreenSpaceUIRoot actor which hold the LGUICanvasScaler component.</p>',6),c=[l];function d(p,h){return e(),o("div",null,c)}const f=t(a,[["render",d],["__file","index.html.vue"]]);export{f as default};
