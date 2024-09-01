import{_ as t,c as e,o as r,a as n}from"./app-CVfq4vAg.js";const l="/LGUIDoc/assets/icon-DW6XUJjX.png",s="/LGUIDoc/assets/1-dAb76ZFC.png",a="/LGUIDoc/assets/2-CecXassU.png",o={},u=n('<h1 id="uibackgroundblur" tabindex="-1"><a class="header-anchor" href="#uibackgroundblur"><span>UIBackgroundBlur</span></a></h1><p><strong>Use it on ScreenSpaceUI or World Space LGUI Renderer.</strong><strong>May have some issue when MSAA is on.</strong> This component can make blur effect on background view&#39;s image, it is just like UMG&#39;s BackgroundBlur. <img src="'+l+'" alt=""></p><p>Create it by select &quot;Create UI Post Process&quot;-&gt;&quot;UIBackgroundBlur&quot;: <img src="'+s+'" alt=""><img src="'+a+'" alt=""></p><table><thead><tr><th style="text-align:left;">Property:</th><th style="text-align:left;">Function:</th></tr></thead><tbody><tr><td style="text-align:left;">Blur Strength</td><td style="text-align:left;">Blur effect strength.</td></tr><tr><td style="text-align:left;">Apply Alpha to Blur</td><td style="text-align:left;">Will alpha affect blur strength? If true, then 0 alpha means 0 blur strength, and 1 alpha means full blur strength. So if you need animation on <em>Blur Strength</em>, just use &quot;Alpha To&quot; node on blueprint.</td></tr><tr><td style="text-align:left;">Strength Texture</td><td style="text-align:left;">Use strengthTexture&#39;s red channel to control blur strength, 0-no blur, 1-full blur.</td></tr><tr><td style="text-align:left;">MaskTexture</td><td style="text-align:left;">Use maskTexture&#39;s red channel to mask out blur result.</td></tr><tr><td style="text-align:left;"><em>Custem UIMaterial</em> is not supported.</td><td style="text-align:left;"></td></tr></tbody></table>',4),i=[u];function d(c,g){return r(),e("div",null,i)}const m=t(o,[["render",d],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/VisualComponents/UIBackgroundBlur/","title":"UIBackgroundBlur","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1685406463000,"contributors":[{"name":"lf2007hf","email":"707908214@qq.com","commits":1}]},"filePathRelative":"VisualComponents/UIBackgroundBlur/index.md"}');export{m as comp,p as data};