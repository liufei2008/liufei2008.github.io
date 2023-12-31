import{_ as e,a as t,b as a,c as r,d as s}from"./step5-f1b18777.js";import{_ as n,o as i,c as l,a as o}from"./app-d9d7bcbe.js";const c={},d=o('<p>LTween提供了一些好用的函数：</p><p><strong>VirtualCall</strong>- 注册Start/Update/Complete事件，设置时长（duration），然后事件就会按照要求执行： <img src="'+e+'" alt=""></p><p><strong>DelayCall</strong>- 与引擎自带的“Delay”节点有相同的功能： <img src="'+t+`" alt=""> c++版本可能会更常用：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>ULTweenBPLibrary::DelayCall(World, 2.0f, [](){
    ...(your function here)
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>DelayFrameCall</strong>- 延迟特定帧数后执行事件： <img src="`+a+'" alt=""></p><p><strong>RegisterUpdateEvent | UnregisterUpdateEvent</strong>- 注册“Update”事件用以每帧都调用事件，直到取消注册： <img src="'+r+'" alt=""></p><p><strong>RepeatCall</strong>- 以给定的间隔重复执行函数： <img src="'+s+'" alt=""></p>',7),p=[d];function _(m,g){return i(),l("div",null,p)}const f=n(c,[["render",_],["__file","index.html.vue"]]);export{f as default};
