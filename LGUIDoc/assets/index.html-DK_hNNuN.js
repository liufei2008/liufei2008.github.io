import{_ as l,r as n,c as r,b as o,d as t,e as a,w as c,a as e,o as p}from"./app-CGRYBoMb.js";const i="/LGUIDoc/assets/icon-Cge4SJBz.png",u="/LGUIDoc/assets/hello_world1-BC3hTIjK.png",_="/LGUIDoc/assets/hello_world2-5E_hgIre.png",h="/LGUIDoc/assets/hello_world3-DKP2qmDp.png",d="/LGUIDoc/assets/hello_world4-DgqoNqZM.png",m="/LGUIDoc/assets/hello_world5-DXYQ7k-1.png",q="/LGUIDoc/assets/hello_world6-D6RDXUnO.png",g="/LGUIDoc/assets/hello_world7-B5rJqtLf.png",I="/LGUIDoc/assets/hello_world8-LPXSnllD.png",U="/LGUIDoc/assets/hello_world9-T7svYT35.png",L="/LGUIDoc/assets/hello_world10-C3svNhJk.png",G="/LGUIDoc/assets/hello_world11-C8A0FEER.png",D="/LGUIDoc/assets/hello_world12-ChpO-qy6.png",b="/LGUIDoc/assets/hello_world13-Bxai1s2m.png",f="/LGUIDoc/assets/hello_world14-CIjZ_duZ.png",x={},w=e('<h1 id="hello-lgui" tabindex="-1"><a class="header-anchor" href="#hello-lgui"><span>Hello LGUI</span></a></h1><p>在这篇文档里，我们将一步步创建一个简单的UI来显示&quot;Hello LGUI&quot;。<br><img src="'+i+'" alt="icon"></p><h2 id="创建屏幕空间ui" tabindex="-1"><a class="header-anchor" href="#创建屏幕空间ui"><span>创建屏幕空间UI</span></a></h2><p>创建个默认场景，点击&quot;LGUI Editor Tools&quot;-&gt;&quot;Basic Setup&quot;-&gt;&quot;Screen Space UI&quot;：<br><img src="'+u+'" alt="step1"></p><p>然后一个预设的屏幕空间UI就会出现在场景里：<br><img src="'+_+'" alt="step2"></p><h2 id="创建个按钮" tabindex="-1"><a class="header-anchor" href="#创建个按钮"><span>创建个按钮</span></a></h2><p>选择&quot;ScreenSpaceUIRoot&quot;，右键点击“LGUI&quot;列上的向下箭头按钮：<br><img src="'+h+'" alt="step3"></p><p>点击&quot;Create UI Element&quot;-&gt;&quot;UIButton&quot;：<br><img src="'+d+'" alt="step4"></p><p>然后一个按钮会出现在场景里：<br><img src="'+m+'" alt="step5"></p><h2 id="调整按钮" tabindex="-1"><a class="header-anchor" href="#调整按钮"><span>调整按钮</span></a></h2><p>在Outlinter中选择&quot;Button&quot;，修改&quot;PosZ&quot;为 -120，这样会把按钮往下移动偏离中心位置：<br><img src="'+q+'" alt="step6"></p><h2 id="添加点击事件" tabindex="-1"><a class="header-anchor" href="#添加点击事件"><span>添加点击事件</span></a></h2><p>在 &quot;Button&quot; Actor上选择 &quot;UIButton&quot;组建，找到&quot;OnClick()&quot;属性并点击&quot;+&quot;按钮：<br><img src="'+g+'" alt="step7"></p>',13),C=o("br",null,null,-1),v=o("img",{src:I,alt:"step8"},null,-1),S=e('<p>在 &quot;Actor&quot; 参数上, 选择 &quot;Info&quot; 物体：<br><img src="'+U+'" alt="step9"></p><p>点击 &quot;Component&quot; 并选择 &quot;UITextComponent&quot;:<br><img src="'+L+'" alt="step10"></p><p>点击 &quot;Function&quot; 并选择 &quot;SetText(Text)&quot;:<br><img src="'+G+'" alt="step11"></p><p>现在 &quot;Parameter&quot; 变成个输入框，输入 &quot;Hello LGUI&quot;:<br><img src="'+D+'" alt="step12"></p><p>点击 Play, 然后把鼠标移动到按钮上，可以看到按钮有高亮显示:<br><img src="'+b+'" alt="step13"><br> 点击按钮，文字就变了：<br><img src="'+f+'" alt="step14"></p>',5);function k(B,E){const s=n("RouteLink");return p(),r("div",null,[w,o("p",null,[t('这个 "On Click" 类型是 LGUIEventDelegate (请看 '),a(s,{to:"/zh-cn/GetStarted/LGUIEventDelegate/"},{default:c(()=>[t("LGUIEventDelegate")]),_:1}),t("), 它有四个参数(Actor, Component, Function, Parameter):"),C,v]),S])}const N=l(x,[["render",k],["__file","index.html.vue"]]),P=JSON.parse('{"path":"/zh-cn/GetStarted/HelloWorld/","title":"Hello LGUI","lang":"中文","frontmatter":{},"headers":[{"level":2,"title":"创建屏幕空间UI","slug":"创建屏幕空间ui","link":"#创建屏幕空间ui","children":[]},{"level":2,"title":"创建个按钮","slug":"创建个按钮","link":"#创建个按钮","children":[]},{"level":2,"title":"调整按钮","slug":"调整按钮","link":"#调整按钮","children":[]},{"level":2,"title":"添加点击事件","slug":"添加点击事件","link":"#添加点击事件","children":[]}],"git":{"updatedTime":1685406463000,"contributors":[{"name":"lf2007hf","email":"707908214@qq.com","commits":1}]},"filePathRelative":"zh-cn/GetStarted/HelloWorld/index.md"}');export{N as comp,P as data};
