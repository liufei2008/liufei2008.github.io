import{_ as e,c as r,o as a,a as n}from"./app-CVfq4vAg.js";const d={},t=n('<h1 id="lgui-render-flow" tabindex="-1"><a class="header-anchor" href="#lgui-render-flow"><span>LGUI render flow</span></a></h1><h2 id="prepare-render-resource-game-thread" tabindex="-1"><a class="header-anchor" href="#prepare-render-resource-game-thread"><span>Prepare render resource (game thread)</span></a></h2><p>LGUIManagerActor is responsible for updating all LGUICanvas -&gt; LGUICanvas to update all UIItem and UIBaseRenderable (renderable objects) -&gt; UIBaseRenderable to create and update UIGeometry, UIPostProcessRenderProxy -&gt; LGUICanvas to collect and create grids, textures, materials, merge drawcall -&gt; LGUICanvas to create drawcall Rendering resources.</p><h2 id="rendering-rendering-thread" tabindex="-1"><a class="header-anchor" href="#rendering-rendering-thread"><span>Rendering (rendering thread)</span></a></h2><h3 id="screen-space-ui-and-world-space-ui-rendered-by-lguirenderer" tabindex="-1"><a class="header-anchor" href="#screen-space-ui-and-world-space-ui-rendered-by-lguirenderer"><span>Screen space UI and world space UI rendered by LGUIRenderer</span></a></h3><p>The LGUIRenderer renderer is extended from the ViewExtension of UE. It performs all rendering in the function XXX_RenderThread of the rendering thread and directly renders to the RenderTarget of the screen. It does not support UE&#39;s own post-production, lighting, anti-aliasing, etc.<br> The rendering process is similar to Slate. Set ViewUniformBuffer -&gt; Specify RenderTarget -&gt; Initialize GraphicsPipelineState -&gt; foreach Drawcall -&gt; Shader/Material -&gt; SetGraphicsPipelineState -&gt; DrawIndexedPrimitive -&gt; <em>foreach Drawcall</em></p><h3 id="world-space-ui" tabindex="-1"><a class="header-anchor" href="#world-space-ui"><span>World Space UI</span></a></h3><p>The world space UI uses UE&#39;s own rendering pipeline, and uses translucent materials by default to support UE&#39;s own post-production, lighting, anti-aliasing, etc.</p>',8),i=[t];function s(l,c){return a(),r("div",null,i)}const p=e(d,[["render",s],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/Rendering/LGUIRenderFlow/","title":"LGUI render flow","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Prepare render resource (game thread)","slug":"prepare-render-resource-game-thread","link":"#prepare-render-resource-game-thread","children":[]},{"level":2,"title":"Rendering (rendering thread)","slug":"rendering-rendering-thread","link":"#rendering-rendering-thread","children":[{"level":3,"title":"Screen space UI and world space UI rendered by LGUIRenderer","slug":"screen-space-ui-and-world-space-ui-rendered-by-lguirenderer","link":"#screen-space-ui-and-world-space-ui-rendered-by-lguirenderer","children":[]},{"level":3,"title":"World Space UI","slug":"world-space-ui","link":"#world-space-ui","children":[]}]}],"git":{"updatedTime":1685406463000,"contributors":[{"name":"lf2007hf","email":"707908214@qq.com","commits":1}]},"filePathRelative":"Rendering/LGUIRenderFlow/index.md"}');export{p as comp,h as data};