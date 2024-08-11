import{_ as e,a as n,b as s,c as a,d as i}from"./Functions-BpPHbLa0.js";import{_ as l,c as t,o as r,a as c}from"./app-_l_BygEn.js";const d={},p=c(`<h1 id="ltweenersequence-动画序列" tabindex="-1"><a class="header-anchor" href="#ltweenersequence-动画序列"><span>LTweenerSequence（动画序列）</span></a></h1><p>LTweenerSequence是一种特殊的补间动画类型，它可以控制一组其他补间动画。首先，它是个补间动画，所以它继承了一般补间动画都有的属性和函数。它也有它自己独特的属性和函数。</p><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h2><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">/**</span>
<span class="line"> * Adds the given tween to the end of the Sequence.</span>
<span class="line"> * Not support Tweener type: Delay/ DelayFrame/ Virtual.</span>
<span class="line"> * Has no effect if the Sequence has already started.</span>
<span class="line"> */</span>
<span class="line">ULTweenerSequence* Append(UObject* WorldContextObject, ULTweener* tweener);</span>
<span class="line">/**</span>
<span class="line"> * Adds the given interval to the end of the Sequence.</span>
<span class="line"> * Has no effect if the Sequence has already started.</span>
<span class="line"> * @param interval The interval duration</span>
<span class="line"> */</span>
<span class="line">ULTweenerSequence* AppendInterval(UObject* WorldContextObject, float interval);</span>
<span class="line">/**</span>
<span class="line"> * Inserts the given tween at the given time position in the Sequence, automatically adding an interval if needed.</span>
<span class="line"> * Not support Tweener type: Delay/ DelayFrame/ Virtual.</span>
<span class="line"> * Has no effect if the Sequence has already started.</span>
<span class="line"> * @param timePosition The time position where the tween will be placed</span>
<span class="line"> */</span>
<span class="line">ULTweenerSequence* Insert(UObject* WorldContextObject, float timePosition, ULTweener* tweener);</span>
<span class="line">/**</span>
<span class="line"> * Adds the given tween to the beginning of the Sequence, pushing forward the other nested content.</span>
<span class="line"> * Not support Tweener type: Delay/ DelayFrame/ Virtual.</span>
<span class="line"> * Has no effect if the Sequence has already started.</span>
<span class="line"> */</span>
<span class="line">ULTweenerSequence* Prepend(UObject* WorldContextObject, ULTweener* tweener);</span>
<span class="line">/**</span>
<span class="line"> * Adds the given interval to the beginning of the Sequence, pushing forward the other nested content.</span>
<span class="line"> * Has no effect if the Sequence has already started.</span>
<span class="line"> * @param interval The interval duration</span>
<span class="line"> */</span>
<span class="line">ULTweenerSequence* PrependInterval(UObject* WorldContextObject, float interval);</span>
<span class="line">/**</span>
<span class="line"> * Inserts the given tween at the same time position of the last tween added to the Sequence.</span>
<span class="line"> * Note that, in case of a Join after an interval, the insertion time will be the time where the interval starts, not where it finishes.</span>
<span class="line"> * Not support Tweener type: Delay/ DelayFrame/ Virtual.</span>
<span class="line"> * Has no effect if the Sequence has already started.</span>
<span class="line"> */</span>
<span class="line">ULTweenerSequence* Join(UObject* WorldContextObject, ULTweener* tweener);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用"><span>如何使用</span></a></h2><h3 id="创建个ltweenersequence" tabindex="-1"><a class="header-anchor" href="#创建个ltweenersequence"><span>创建个LTweenerSequence</span></a></h3><p>C++：</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">auto Sequence = ULTweenBPLibrary::CreateSequence(this);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>蓝图：<br> 在LTween分类里找到<strong>Create Sequence</strong>节点 <img src="`+e+`" alt=""></p><h3 id="添加其他动画" tabindex="-1"><a class="header-anchor" href="#添加其他动画"><span>添加其他动画</span></a></h3><p>C++：</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">Sequence-&gt;Append(this, ULTweenBPLibrary::LocalPositionXTo(Actor1-&gt;GetRootComponent(), 100, 1.0f));</span>
<span class="line">Sequence-&gt;Insert(this, 0.5f, ULTweenBPLibrary::LocalPositionYTo(Actor1-&gt;GetRootComponent(), 100, 1.0f));</span>
<span class="line">Sequence-&gt;Prepend(this, ULTweenBPLibrary::LocalPositionZTo(Actor1-&gt;GetRootComponent(), 100, 1.0f));</span>
<span class="line">Sequence-&gt;Join(this, ULTweenBPLibrary::LocalPositionXTo(Actor2-&gt;GetRootComponent(), 100, 1.0f));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>蓝图： <img src="`+n+`" alt=""></p><h3 id="属性-事件-函数" tabindex="-1"><a class="header-anchor" href="#属性-事件-函数"><span>属性，事件，函数</span></a></h3><p><strong>属性：</strong><br> C++：</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">Sequence-&gt;SetDelay(0.5f);</span>
<span class="line">Sequence-&gt;SetEase(LTweenEase::InOutSine);</span>
<span class="line">Sequence-&gt;SetLoop(LTweenLoop::Restart, -1);</span>
<span class="line">Sequence-&gt;GetLoopCycleCount();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>蓝图： <img src="`+s+`" alt=""><strong>事件：</strong><br> C++：</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">Sequence-&gt;OnStart([=]{...});</span>
<span class="line">Sequence-&gt;OnUpdate([=](float progress){...});</span>
<span class="line">Sequence-&gt;OnComplete([=]{...});</span>
<span class="line">Sequence-&gt;OnCycleStart([=]{...});</span>
<span class="line">Sequence-&gt;OnCycleComplete([=]{...});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>蓝图： <img src="`+a+`" alt=""><strong>函数：</strong><br> C++：</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">Sequence-&gt;Pause();</span>
<span class="line">Sequence-&gt;Resume();</span>
<span class="line">Sequence-&gt;Restart();</span>
<span class="line">Sequence-&gt;Goto(0.5f);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>蓝图： <img src="`+i+'" alt=""></p>',21),o=[p];function u(v,m){return r(),t("div",null,o)}const g=l(d,[["render",u],["__file","index.html.vue"]]),f=JSON.parse('{"path":"/zh-cn/Sequence/","title":"LTweenerSequence（动画序列）","lang":"中文","frontmatter":{},"headers":[{"level":2,"title":"函数","slug":"函数","link":"#函数","children":[]},{"level":2,"title":"如何使用","slug":"如何使用","link":"#如何使用","children":[{"level":3,"title":"创建个LTweenerSequence","slug":"创建个ltweenersequence","link":"#创建个ltweenersequence","children":[]},{"level":3,"title":"添加其他动画","slug":"添加其他动画","link":"#添加其他动画","children":[]},{"level":3,"title":"属性，事件，函数","slug":"属性-事件-函数","link":"#属性-事件-函数","children":[]}]}],"git":{"updatedTime":1704029591000,"contributors":[{"name":"lf2007hf","email":"707908214@qq.com","commits":1}]},"filePathRelative":"zh-cn/Sequence/index.md"}');export{g as comp,f as data};
