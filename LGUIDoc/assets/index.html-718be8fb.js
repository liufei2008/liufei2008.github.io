import{_ as e,o as r,c as a,a as n}from"./app-77a7d228.js";const t={},d=n('<h1 id="lgui-render-flow" tabindex="-1"><a class="header-anchor" href="#lgui-render-flow" aria-hidden="true">#</a> LGUI render flow</h1><h2 id="prepare-render-resource-game-thread" tabindex="-1"><a class="header-anchor" href="#prepare-render-resource-game-thread" aria-hidden="true">#</a> Prepare render resource (game thread)</h2><p>LGUIManagerActor is responsible for updating all LGUICanvas -&gt; LGUICanvas to update all UIItem and UIBaseRenderable (renderable objects) -&gt; UIBaseRenderable to create and update UIGeometry, UIPostProcessRenderProxy -&gt; LGUICanvas to collect and create grids, textures, materials, merge drawcall -&gt; LGUICanvas to create drawcall Rendering resources.</p><h2 id="rendering-rendering-thread" tabindex="-1"><a class="header-anchor" href="#rendering-rendering-thread" aria-hidden="true">#</a> Rendering (rendering thread)</h2><h3 id="screen-space-ui-and-world-space-ui-rendered-by-lguirenderer" tabindex="-1"><a class="header-anchor" href="#screen-space-ui-and-world-space-ui-rendered-by-lguirenderer" aria-hidden="true">#</a> Screen space UI and world space UI rendered by LGUIRenderer</h3><p>The LGUIRenderer renderer is extended from the ViewExtension of UE. It performs all rendering in the function XXX_RenderThread of the rendering thread and directly renders to the RenderTarget of the screen. It does not support UE&#39;s own post-production, lighting, anti-aliasing, etc.<br> The rendering process is similar to Slate. Set ViewUniformBuffer -&gt; Specify RenderTarget -&gt; Initialize GraphicsPipelineState -&gt; foreach Drawcall -&gt; Shader/Material -&gt; SetGraphicsPipelineState -&gt; DrawIndexedPrimitive -&gt; <em>foreach Drawcall</em></p><h3 id="world-space-ui" tabindex="-1"><a class="header-anchor" href="#world-space-ui" aria-hidden="true">#</a> World Space UI</h3><p>The world space UI uses UE&#39;s own rendering pipeline, and uses translucent materials by default to support UE&#39;s own post-production, lighting, anti-aliasing, etc.</p>',8),i=[d];function s(o,c){return r(),a("div",null,i)}const h=e(t,[["render",s],["__file","index.html.vue"]]);export{h as default};
