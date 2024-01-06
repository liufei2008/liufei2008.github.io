import{_ as e,a as n,b as i,c as a,d as t}from"./Functions-2a340b3b.js";import{_ as s,o as r,c as d,a as l}from"./app-581010d2.js";const c={},o=l(`<h1 id="ltweenersequence-动画序列" tabindex="-1"><a class="header-anchor" href="#ltweenersequence-动画序列" aria-hidden="true">#</a> LTweenerSequence（动画序列）</h1><p>LTweenerSequence是一种特殊的补间动画类型，它可以控制一组其他补间动画。首先，它是个补间动画，所以它继承了一般补间动画都有的属性和函数。它也有它自己独特的属性和函数。</p><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>/**
 * Adds the given tween to the end of the Sequence.
 * Not support Tweener type: Delay/ DelayFrame/ Virtual.
 * Has no effect if the Sequence has already started.
 */
ULTweenerSequence* Append(UObject* WorldContextObject, ULTweener* tweener);
/**
 * Adds the given interval to the end of the Sequence.
 * Has no effect if the Sequence has already started.
 * @param interval The interval duration
 */
ULTweenerSequence* AppendInterval(UObject* WorldContextObject, float interval);
/**
 * Inserts the given tween at the given time position in the Sequence, automatically adding an interval if needed.
 * Not support Tweener type: Delay/ DelayFrame/ Virtual.
 * Has no effect if the Sequence has already started.
 * @param timePosition The time position where the tween will be placed
 */
ULTweenerSequence* Insert(UObject* WorldContextObject, float timePosition, ULTweener* tweener);
/**
 * Adds the given tween to the beginning of the Sequence, pushing forward the other nested content.
 * Not support Tweener type: Delay/ DelayFrame/ Virtual.
 * Has no effect if the Sequence has already started.
 */
ULTweenerSequence* Prepend(UObject* WorldContextObject, ULTweener* tweener);
/**
 * Adds the given interval to the beginning of the Sequence, pushing forward the other nested content.
 * Has no effect if the Sequence has already started.
 * @param interval The interval duration
 */
ULTweenerSequence* PrependInterval(UObject* WorldContextObject, float interval);
/**
 * Inserts the given tween at the same time position of the last tween added to the Sequence.
 * Note that, in case of a Join after an interval, the insertion time will be the time where the interval starts, not where it finishes.
 * Not support Tweener type: Delay/ DelayFrame/ Virtual.
 * Has no effect if the Sequence has already started.
 */
ULTweenerSequence* Join(UObject* WorldContextObject, ULTweener* tweener);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h2><h3 id="创建个ltweenersequence" tabindex="-1"><a class="header-anchor" href="#创建个ltweenersequence" aria-hidden="true">#</a> 创建个LTweenerSequence</h3><p>C++：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>auto Sequence = ULTweenBPLibrary::CreateSequence(this);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>蓝图：<br> 在LTween分类里找到<strong>Create Sequence</strong>节点 <img src="`+e+`" alt=""></p><h3 id="添加其他动画" tabindex="-1"><a class="header-anchor" href="#添加其他动画" aria-hidden="true">#</a> 添加其他动画</h3><p>C++：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>Sequence-&gt;Append(this, ULTweenBPLibrary::LocalPositionXTo(Actor1-&gt;GetRootComponent(), 100, 1.0f));
Sequence-&gt;Insert(this, 0.5f, ULTweenBPLibrary::LocalPositionYTo(Actor1-&gt;GetRootComponent(), 100, 1.0f));
Sequence-&gt;Prepend(this, ULTweenBPLibrary::LocalPositionZTo(Actor1-&gt;GetRootComponent(), 100, 1.0f));
Sequence-&gt;Join(this, ULTweenBPLibrary::LocalPositionXTo(Actor2-&gt;GetRootComponent(), 100, 1.0f));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>蓝图： <img src="`+n+`" alt=""></p><h3 id="属性-事件-函数" tabindex="-1"><a class="header-anchor" href="#属性-事件-函数" aria-hidden="true">#</a> 属性，事件，函数</h3><p><strong>属性：</strong><br> C++：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>Sequence-&gt;SetDelay(0.5f);
Sequence-&gt;SetEase(LTweenEase::InOutSine);
Sequence-&gt;SetLoop(LTweenLoop::Restart, -1);
Sequence-&gt;GetLoopCycleCount();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>蓝图： <img src="`+i+`" alt=""><strong>事件：</strong><br> C++：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>Sequence-&gt;OnStart([=]{...});
Sequence-&gt;OnUpdate([=](float progress){...});
Sequence-&gt;OnComplete([=]{...});
Sequence-&gt;OnCycleStart([=]{...});
Sequence-&gt;OnCycleComplete([=]{...});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>蓝图： <img src="`+a+`" alt=""><strong>函数：</strong><br> C++：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>Sequence-&gt;Pause();
Sequence-&gt;Resume();
Sequence-&gt;Restart();
Sequence-&gt;Goto(0.5f);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>蓝图： <img src="`+t+'" alt=""></p>',21),u=[o];function v(m,h){return r(),d("div",null,u)}const g=s(c,[["render",v],["__file","index.html.vue"]]);export{g as default};
