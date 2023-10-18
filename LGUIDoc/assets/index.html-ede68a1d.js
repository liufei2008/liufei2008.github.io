import{_ as e,o as n,c as i,a as t}from"./app-77a7d228.js";const s="/LGUIDoc/assets/CreateSequence-d1b0b913.jpg",a="/LGUIDoc/assets/AddTweener-a6ac172d.jpg",r="/LGUIDoc/assets/Properties-0cfdb4f8.jpg",d="/LGUIDoc/assets/Events-324e3e29.jpg",l="/LGUIDoc/assets/Functions-972f1c60.jpg",c={},o=t(`<h1 id="ltweenersequence" tabindex="-1"><a class="header-anchor" href="#ltweenersequence" aria-hidden="true">#</a> LTweenerSequence</h1><p>LTweenerSequence is a tween type that controls a group of other tween animations as a single tween.</p><p>First of all, it is still a tweener, so it inherits normal tweener&#39;s all properties and functions. And it has it&#39;s own properties and functions too.</p><h2 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to use</h2><h3 id="create-a-ltweenersequence" tabindex="-1"><a class="header-anchor" href="#create-a-ltweenersequence" aria-hidden="true">#</a> Create a LTweenerSequence</h3><p>C++:</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>auto Sequence = ULTweenBPLibrary::CreateSequence(this);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Blueprint:<br> Just find <strong>Create Sequence</strong> node under LTween category <img src="`+s+`" alt=""></p><h3 id="add-other-tweener" tabindex="-1"><a class="header-anchor" href="#add-other-tweener" aria-hidden="true">#</a> Add other tweener</h3><p>C++:</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>Sequence-&gt;Append(this, ULTweenBPLibrary::LocalPositionXTo(Actor1-&gt;GetRootComponent(), 100, 1.0f));
Sequence-&gt;Insert(this, 0.5f, ULTweenBPLibrary::LocalPositionYTo(Actor1-&gt;GetRootComponent(), 100, 1.0f));
Sequence-&gt;Prepend(this, ULTweenBPLibrary::LocalPositionZTo(Actor1-&gt;GetRootComponent(), 100, 1.0f));
Sequence-&gt;Join(this, ULTweenBPLibrary::LocalPositionXTo(Actor2-&gt;GetRootComponent(), 100, 1.0f));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Blueprint: <img src="`+a+`" alt=""></p><h3 id="properties-events-functions" tabindex="-1"><a class="header-anchor" href="#properties-events-functions" aria-hidden="true">#</a> Properties, Events, Functions</h3><p><strong>Properties:</strong> C++:</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>Sequence-&gt;SetDelay(0.5f);
Sequence-&gt;SetEase(LTweenEase::InOutSine);
Sequence-&gt;SetLoop(LTweenLoop::Restart, -1);
Sequence-&gt;GetLoopCycleCount();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Blueprint: <img src="`+r+`" alt=""><strong>Events:</strong> C++:</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>Sequence-&gt;OnStart([=]{...});
Sequence-&gt;OnUpdate([=](float progress){...});
Sequence-&gt;OnComplete([=]{...});
Sequence-&gt;OnCycleStart([=]{...});
Sequence-&gt;OnCycleComplete([=]{...});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Blueprint: <img src="`+d+`" alt=""><strong>Functions:</strong> C++:</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>Sequence-&gt;Pause();
Sequence-&gt;Resume();
Sequence-&gt;Restart();
Sequence-&gt;Goto(0.5f);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Blueprint: <img src="`+l+'" alt=""></p>',22),u=[o];function v(m,h){return n(),i("div",null,u)}const b=e(c,[["render",v],["__file","index.html.vue"]]);export{b as default};
