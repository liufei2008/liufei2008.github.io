import{_ as e,a as t,b as a,c as s,d as n}from"./step5-DKwJcSBA.js";import{_ as i,c as r,o as l,a as o}from"./app-_l_BygEn.js";const c="/LTweenDoc/assets/UpdateCall-lI51CLoh.png",p={},m=o('<p>LTween provide some handy functions for work:</p><p><strong>VirtualCall</strong>- Register the start/update/complete events, set a duration time, so these events will execute:</p><p><img src="'+e+'" alt=""></p><p><strong>DelayCall</strong>- Same as engine&#39;s native node &quot;Delay&quot;: <img src="'+t+`" alt=""> c++ version may be more valuable:</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">ULTweenBPLibrary::DelayCall(World, 2.0f, [](){</span>
<span class="line">    ...(your function here)</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>DelayFrameCall</strong>- Delay a specific frame count and call event:</p><p><img src="`+a+'" alt=""></p><p><em>(DEPRECATED) <strong>RegisterUpdateEvent | UnregisterUpdateEvent</strong>- Register the &quot;Update&quot; event so it will be executed every frame, until unregistered.</em></p><p><img src="'+s+'" alt=""></p><p><strong>UpdateCall</strong>- Call event every frame.<br><img src="'+c+'" alt=""></p><p><strong>RepeatCall</strong>- Repeatly call function with given interval time:</p><p><img src="'+n+'" alt=""></p>',12),d=[m];function u(g,_){return l(),r("div",null,d)}const h=i(p,[["render",u],["__file","index.html.vue"]]),b=JSON.parse('{"path":"/Functions/","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1717295035000,"contributors":[{"name":"lf2007hf","email":"707908214@qq.com","commits":2}]},"filePathRelative":"Functions/index.md"}');export{h as comp,b as data};