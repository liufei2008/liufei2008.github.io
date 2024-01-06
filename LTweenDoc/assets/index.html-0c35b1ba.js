import{_ as n,a as i,b as s,c as l,d as c,e as p,f as d,g as _,h,i as m,j as u,k as g,l as w,m as T,n as b,o as f,p as C,q as L,r as x}from"./step18-9b240f4d.js";import{_ as v,r as y,o as S,c as k,b as e,d as t,e as r,a as o}from"./app-581010d2.js";const A={},F=e("h1",{id:"ltween",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ltween","aria-hidden":"true"},"#"),t(" LTween")],-1),R=e("p",null,[e("strong",null,"注意！！！"),t(" LTween是LGUI插件中的一个模块，如果你已经有了LGUI插件那么就不需要再购买LTween！")],-1),V=e("p",null,"LTween (Lex-Tween) 是个用于虚幻引擎中的简单、快速、高效的补间动画工具。",-1),B={href:"https://youtu.be/m0-aYP8zRSw?si=Nlnroc-a3TEiZiqT",target:"_blank",rel:"noopener noreferrer"},I={href:"https://www.bilibili.com/video/BV1Ey4y1Q7tM/?share_source=copy_web&vd_source=b22254760c9a0522c8caea62e5327c1d",target:"_blank",rel:"noopener noreferrer"},N=o('<hr><h1 id="对scenecomponent使用ltween" tabindex="-1"><a class="header-anchor" href="#对scenecomponent使用ltween" aria-hidden="true">#</a> 对SceneComponent使用LTween</h1><h2 id="移动-旋转-缩放-动画" tabindex="-1"><a class="header-anchor" href="#移动-旋转-缩放-动画" aria-hidden="true">#</a> 移动/旋转/缩放 动画</h2><p>创建个新的默认场景，创建个Cube，设置为可移动，设置位置到（0, 0, 80）： <img src="'+n+'" alt=""></p><p>创建个ActorComponent蓝图，命名为“TweenAnimation”： <img src="'+i+'" alt=""></p><p>编辑TweenAnimation蓝图，按照下图添加“Local Position X To”节点，这样将会把Cube的局部位置的x轴移动到“EndValue”： <img src="'+s+'" alt=""></p><p>拖拽TweenAnimation蓝图到Cube然后运行，可以看到Cube在0.5秒钟移动到位置（500, 0, 80）： <img src="'+l+'" alt=""></p><p>这个动画非常简单，我们可以弄得更有趣点。双击TweenAnimation打开蓝图编辑器，修改“Duration”为3.0，像下图这样添加个“Local Rotator To”节点： <img src="'+c+'" alt=""></p><p>运行可以看到Cube会移动和旋转： <img src="'+p+'" alt=""></p><p>像下图一样添加个“Local Scale To”节点，运行看看动画： <img src="'+d+'" alt=""></p><p>你也可以找到其他的动画节点，都在“LTween”分类里： <img src="'+_+'" alt=""></p><h2 id="延迟和缓动" tabindex="-1"><a class="header-anchor" href="#延迟和缓动" aria-hidden="true">#</a> 延迟和缓动</h2><p>删除“Local Position X To”和“Local Scale To”节点，保留“Local Rotator To”节点，设置“Delay”为1.0，运行（动画将会在点击运行之后1秒钟开始）： <img src="'+h+'" alt=""></p>',13),O={href:"https://www.inkfood.com/tween-3d-objects/",target:"_blank",rel:"noopener noreferrer"},E=e("img",{src:"https://www.inkfood.com/wordprez/wp-content/uploads/easingFunctions.png",alt:""},null,-1),P=o('<h3 id="curvefloat" tabindex="-1"><a class="header-anchor" href="#curvefloat" aria-hidden="true">#</a> CurveFloat</h3><p>有个特殊的缓动类型叫做“CurveFloat”： <img src="'+m+'" alt=""></p><p>“CurveFloat”可以让我们用个曲线来控制我们的动画。<br> 后面的步骤将会告诉你如何使用“CurveFloat”。<br> 右键单击Content的空白处，选择“Miscellaneous”-&gt;“Curve”： <img src="'+u+'" alt=""></p><p>在弹出窗口里选择“CurveFloat”： <img src="'+g+'" alt=""></p><p>命名为“AnimationCurve”： <img src="'+w+'" alt=""></p><p>LTween用曲线的水平方向的0-1范围作为时间，记住这一点然后你可以制作出你想要的任何的曲线用于动画： <img src="'+T+'" alt=""></p><p>打开“TweenAnimation”蓝图，从“Local Rotator To”节点的“Return Value”拖拽出线，添加个“Set Curve Float”节点，然后在“New Curve Float”选择“AnimationCurve”： <img src="'+b+'" alt=""></p><h2 id="循环" tabindex="-1"><a class="header-anchor" href="#循环" aria-hidden="true">#</a> 循环</h2><p>循环是补间动画中最重要的功能点之一。 从“Set Curve Float”节点的“Return Value”拖出线然后添加节点“Set Loop”： <img src="'+f+'" alt=""></p><p>点击“New Loop Type”出现4个选项：</p><ul><li><strong>Once</strong>： 不循环</li><li><strong>Restart</strong>： 每次循环都重新开始</li><li><strong>Yoyo</strong>： 动画正向和反向交替</li><li><strong>Incremental</strong>： 每次动画结束都以上一次的结束值为开始值来增长（A到B，B到B+(A-B)...） <img src="'+C+'" alt=""></li></ul><p>别忘了要设置“New Loop Count”，0或1代表没有循环，-1代表无限循环。</p><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><p>事件也是补间动画系统中一个非常重要的功能。 LTween提供这些事件：</p><ul><li><strong>OnStart</strong>： 当动画开始的时候执行，如果动画有延迟，那么当延迟结束之后才会执行</li><li><strong>OnUpdate</strong>： 动画过程中每一帧都执行</li><li><strong>OnComplete</strong>： 当动画结束的时候执行，如果动画有循环，那么在所有循环结束之后执行。如果是无限循环那么就不会执行。</li><li><strong>OnCycleStart</strong>： 每次循环开始的时候执行</li><li><strong>OnCycleComplete</strong>： 每次循环结束的时候执行 设置事件很简单，比如OnUpdate，可以从“Return Value”拖出线然后添加“On Update”节点，从“New Update”拖出线并添加自定义事件，这个添加的事件将会在动画开始后每帧都执行： <img src="'+L+'" alt=""></li></ul><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><ul><li><strong>Pause/Resume</strong>： 暂停/继续动画</li><li><strong>Restart</strong>： 重新开始动画</li><li><strong>Goto</strong>： 把动画设置到指定时间点</li><li><strong>Kill/KillIfIsTweening</strong>： 强制结束动画</li><li><strong>ForceComplete</strong>： 强制把动画设置为结束</li><li><strong>IsTweening</strong>： 是否正在进行动画</li><li><strong>GetLoopCycleCount</strong>： 获取动画循环次数</li></ul><h2 id="在材质中使用ltween" tabindex="-1"><a class="header-anchor" href="#在材质中使用ltween" aria-hidden="true">#</a> 在材质中使用LTween</h2><p>LTween提供了“Material Vector Parameter To”和“Material Scalar Parameter To”节点用于“Material Instance Dynamic”物体： <img src="'+x+'" alt=""></p>',19);function U(M,G){const a=y("ExternalLinkIcon");return S(),k("div",null,[F,R,V,e("p",null,[t("视频教程： "),e("a",B,[t("Youtube"),r(a)]),t(),e("a",I,[t("Bilibili"),r(a)])]),N,e("p",null,[t("LTween提供了多个缓动类型，点击“Ease”然后选择你需要的缓动类型。"),e("a",O,[t("这个帖子"),r(a)]),t("可以看到关于缓动函数曲线的信息（图片也是从这个站点获取的）： "),E]),P])}const j=v(A,[["render",U],["__file","index.html.vue"]]);export{j as default};
