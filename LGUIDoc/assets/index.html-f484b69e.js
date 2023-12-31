import{_ as r,r as a,o as l,c as n,b as o,d as t,e as c,w as p,a as e}from"./app-0f69a3bd.js";const i="/LGUIDoc/assets/icon-89c01995.png",u="/LGUIDoc/assets/hello_world1-03b74594.png",_="/LGUIDoc/assets/hello_world2-1d83f403.png",d="/LGUIDoc/assets/hello_world3-fbdac897.png",h="/LGUIDoc/assets/hello_world4-bf49f747.png",m="/LGUIDoc/assets/hello_world5-380f95f4.png",q="/LGUIDoc/assets/hello_world6-773ffb18.png",g="/LGUIDoc/assets/hello_world7-b72a1e0e.png",I="/LGUIDoc/assets/hello_world8-29e57008.png",U="/LGUIDoc/assets/hello_world9-9e277a8e.png",b="/LGUIDoc/assets/hello_world10-0192eb2b.png",L="/LGUIDoc/assets/hello_world11-81117108.png",G="/LGUIDoc/assets/hello_world12-734ed33c.png",f="/LGUIDoc/assets/hello_world13-fc02c50b.png",D="/LGUIDoc/assets/hello_world14-4164111d.png",w={},x=e('<h1 id="hello-lgui" tabindex="-1"><a class="header-anchor" href="#hello-lgui" aria-hidden="true">#</a> Hello LGUI</h1><p>在这篇文档里，我们将一步步创建一个简单的UI来显示&quot;Hello LGUI&quot;。<br><img src="'+i+'" alt="icon"></p><h2 id="创建屏幕空间ui" tabindex="-1"><a class="header-anchor" href="#创建屏幕空间ui" aria-hidden="true">#</a> 创建屏幕空间UI</h2><p>创建个默认场景，点击&quot;LGUI Editor Tools&quot;-&gt;&quot;Basic Setup&quot;-&gt;&quot;Screen Space UI&quot;：<br><img src="'+u+'" alt="step1"></p><p>然后一个预设的屏幕空间UI就会出现在场景里：<br><img src="'+_+'" alt="step2"></p><h2 id="创建个按钮" tabindex="-1"><a class="header-anchor" href="#创建个按钮" aria-hidden="true">#</a> 创建个按钮</h2><p>选择&quot;ScreenSpaceUIRoot&quot;，右键点击“LGUI&quot;列上的向下箭头按钮：<br><img src="'+d+'" alt="step3"></p><p>点击&quot;Create UI Element&quot;-&gt;&quot;UIButton&quot;：<br><img src="'+h+'" alt="step4"></p><p>然后一个按钮会出现在场景里：<br><img src="'+m+'" alt="step5"></p><h2 id="调整按钮" tabindex="-1"><a class="header-anchor" href="#调整按钮" aria-hidden="true">#</a> 调整按钮</h2><p>在Outlinter中选择&quot;Button&quot;，修改&quot;PosZ&quot;为 -120，这样会把按钮往下移动偏离中心位置：<br><img src="'+q+'" alt="step6"></p><h2 id="添加点击事件" tabindex="-1"><a class="header-anchor" href="#添加点击事件" aria-hidden="true">#</a> 添加点击事件</h2><p>在 &quot;Button&quot; Actor上选择 &quot;UIButton&quot;组建，找到&quot;OnClick()&quot;属性并点击&quot;+&quot;按钮：<br><img src="'+g+'" alt="step7"></p>',13),B=o("br",null,null,-1),C=o("img",{src:I,alt:"step8"},null,-1),S=e('<p>在 &quot;Actor&quot; 参数上, 选择 &quot;Info&quot; 物体：<br><img src="'+U+'" alt="step9"></p><p>点击 &quot;Component&quot; 并选择 &quot;UITextComponent&quot;:<br><img src="'+b+'" alt="step10"></p><p>点击 &quot;Function&quot; 并选择 &quot;SetText(Text)&quot;:<br><img src="'+L+'" alt="step11"></p><p>现在 &quot;Parameter&quot; 变成个输入框，输入 &quot;Hello LGUI&quot;:<br><img src="'+G+'" alt="step12"></p><p>点击 Play, 然后把鼠标移动到按钮上，可以看到按钮有高亮显示:<br><img src="'+f+'" alt="step13"><br> 点击按钮，文字就变了：<br><img src="'+D+'" alt="step14"></p>',5);function k(v,E){const s=a("RouterLink");return l(),n("div",null,[x,o("p",null,[t('这个 "On Click" 类型是 LGUIEventDelegate (请看 '),c(s,{to:"/zh-cn/GetStarted/LGUIEventDelegate/"},{default:p(()=>[t("LGUIEventDelegate")]),_:1}),t("), 它有四个参数(Actor, Component, Function, Parameter):"),B,C]),S])}const N=r(w,[["render",k],["__file","index.html.vue"]]);export{N as default};