import{_ as e,a as n,b as s,c as a,d as i}from"./Functions-BpPHbLa0.js";import{_ as t,c as l,o as r,a as c}from"./app-_l_BygEn.js";const d={},p=c(`<h1 id="ltweenersequence" tabindex="-1"><a class="header-anchor" href="#ltweenersequence"><span>LTweenerSequence</span></a></h1><p>LTweenerSequence is a tween type that controls a group of other tween animations as a single tween. First of all, it is still a tweener, so it inherits normal tweener&#39;s all properties and functions. And it has it&#39;s own properties and functions too.</p><h2 id="functions" tabindex="-1"><a class="header-anchor" href="#functions"><span>Functions</span></a></h2><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">/**</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use"><span>How to use</span></a></h2><h3 id="create-a-ltweenersequence" tabindex="-1"><a class="header-anchor" href="#create-a-ltweenersequence"><span>Create a LTweenerSequence</span></a></h3><p>C++:</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">auto Sequence = ULTweenBPLibrary::CreateSequence(this);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Blueprint:<br> Just find <strong>Create Sequence</strong> node under LTween category <img src="`+e+`" alt=""></p><h3 id="add-other-tweener" tabindex="-1"><a class="header-anchor" href="#add-other-tweener"><span>Add other tweener</span></a></h3><p>C++:</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">Sequence-&gt;Append(this, ULTweenBPLibrary::LocalPositionXTo(Actor1-&gt;GetRootComponent(), 100, 1.0f));</span>
<span class="line">Sequence-&gt;Insert(this, 0.5f, ULTweenBPLibrary::LocalPositionYTo(Actor1-&gt;GetRootComponent(), 100, 1.0f));</span>
<span class="line">Sequence-&gt;Prepend(this, ULTweenBPLibrary::LocalPositionZTo(Actor1-&gt;GetRootComponent(), 100, 1.0f));</span>
<span class="line">Sequence-&gt;Join(this, ULTweenBPLibrary::LocalPositionXTo(Actor2-&gt;GetRootComponent(), 100, 1.0f));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Blueprint: <img src="`+n+`" alt=""></p><h3 id="properties-events-functions" tabindex="-1"><a class="header-anchor" href="#properties-events-functions"><span>Properties, Events, Functions</span></a></h3><p><strong>Properties:</strong><br> C++:</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">Sequence-&gt;SetDelay(0.5f);</span>
<span class="line">Sequence-&gt;SetEase(LTweenEase::InOutSine);</span>
<span class="line">Sequence-&gt;SetLoop(LTweenLoop::Restart, -1);</span>
<span class="line">Sequence-&gt;GetLoopCycleCount();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Blueprint: <img src="`+s+`" alt=""><strong>Events:</strong><br> C++:</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">Sequence-&gt;OnStart([=]{...});</span>
<span class="line">Sequence-&gt;OnUpdate([=](float progress){...});</span>
<span class="line">Sequence-&gt;OnComplete([=]{...});</span>
<span class="line">Sequence-&gt;OnCycleStart([=]{...});</span>
<span class="line">Sequence-&gt;OnCycleComplete([=]{...});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Blueprint: <img src="`+a+`" alt=""><strong>Functions:</strong><br> C++:</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">Sequence-&gt;Pause();</span>
<span class="line">Sequence-&gt;Resume();</span>
<span class="line">Sequence-&gt;Restart();</span>
<span class="line">Sequence-&gt;Goto(0.5f);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Blueprint: <img src="`+i+'" alt=""></p>',21),o=[p];function u(v,m){return r(),l("div",null,o)}const g=t(d,[["render",u],["__file","index.html.vue"]]),f=JSON.parse('{"path":"/Sequence/","title":"LTweenerSequence","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Functions","slug":"functions","link":"#functions","children":[]},{"level":2,"title":"How to use","slug":"how-to-use","link":"#how-to-use","children":[{"level":3,"title":"Create a LTweenerSequence","slug":"create-a-ltweenersequence","link":"#create-a-ltweenersequence","children":[]},{"level":3,"title":"Add other tweener","slug":"add-other-tweener","link":"#add-other-tweener","children":[]},{"level":3,"title":"Properties, Events, Functions","slug":"properties-events-functions","link":"#properties-events-functions","children":[]}]}],"git":{"updatedTime":1704029591000,"contributors":[{"name":"lf2007hf","email":"707908214@qq.com","commits":1}]},"filePathRelative":"Sequence/index.md"}');export{g as comp,f as data};
