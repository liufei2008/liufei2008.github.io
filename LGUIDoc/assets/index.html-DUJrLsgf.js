import{_ as e,c as t,o as a,a as n}from"./app-CVfq4vAg.js";const r="/LGUIDoc/assets/1-ClSzvwwD.png",i={},o=n('<h1 id="uicanvasgroup" tabindex="-1"><a class="header-anchor" href="#uicanvasgroup"><span>UICanvasGroup</span></a></h1><p>The <strong>UI Canvas Group</strong> can be used to control certain aspects of a whole group of UI elements from one place without needing to handle them each individually. The properties of the UICanvasGroup affect the UI element it is on as well as all children.<br><img src="'+r+'" alt=""></p><h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties"><span>Properties</span></a></h2><table><thead><tr><th>Property:</th><th>Function:</th></tr></thead><tbody><tr><td>Alpha</td><td>The opacity of the UI elements in this group. The value is between 0 and 1 where 0 is fully transparent and 1 is fully opaque. Note that elements retain their own transparency as well, so the UICanvasGroup alpha and the alpha values of the individual UI elements are multiplied with each other.</td></tr><tr><td>Interactable</td><td>Determines if this component will accept input. When it is set to false interaction is disabled.</td></tr><tr><td>RestrictNavigationArea</td><td>When use navigation input (keyboard or gamepad navigation), restrict navigation area to only children of this UI element when navigate out.</td></tr><tr><td>IgnoreParentGroup</td><td>Will this group also be affected by the settings in UICanvasGroup components further up in the UI element hierarchy, or will it ignore those and hence override them?</td></tr></tbody></table><h2 id="details" tabindex="-1"><a class="header-anchor" href="#details"><span>Details</span></a></h2><p>Typical uses of UICanvasGroup are:</p><ul><li>Fading in or out a whole window by adding a UICanvasGroup on the UI actor of the Window and control its Alpha property.</li><li>Making a whole set of controls non-interactable (&quot;grayed out&quot;) by adding a UICanvasGroup to a parent UI actor and setting its Interactable property to false.</li></ul>',7),s=[o];function l(d,h){return a(),t("div",null,s)}const c=e(i,[["render",l],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/Rendering/UICanvasGroup/","title":"UICanvasGroup","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[]},{"level":2,"title":"Details","slug":"details","link":"#details","children":[]}],"git":{"updatedTime":1685406463000,"contributors":[{"name":"lf2007hf","email":"707908214@qq.com","commits":1}]},"filePathRelative":"Rendering/UICanvasGroup/index.md"}');export{c as comp,u as data};