import{_ as e,a as t,b as a,c as s,d as n}from"./step5-f1b18777.js";import{_ as r,o as i,c as l,a as o}from"./app-d9d7bcbe.js";const c={},p=o('<p>LTween provide some handy functions for work:</p><p><strong>VirtualCall</strong>- Register the start/update/complete events, set a duration time, so these events will execute:</p><p><img src="'+e+'" alt=""></p><p><strong>DelayCall</strong>- Same as engine&#39;s native node &quot;Delay&quot;: <img src="'+t+`" alt=""> c++ version may be more valuable:</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>ULTweenBPLibrary::DelayCall(World, 2.0f, [](){
    ...(your function here)
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>DelayFrameCall</strong>- Delay a specific frame count and call event:</p><p><img src="`+a+'" alt=""></p><p><strong>RegisterUpdateEvent | UnregisterUpdateEvent</strong>- Register the &quot;Update&quot; event so it will be executed every frame, until unregistered.</p><p><img src="'+s+'" alt=""></p><p><strong>RepeatCall</strong>- Repeatly call function with given interval time:</p><p><img src="'+n+'" alt=""></p>',11),d=[p];function m(u,_){return i(),l("div",null,d)}const f=r(c,[["render",m],["__file","index.html.vue"]]);export{f as default};