import{_ as e,r,c as a,b as t,d as o,e as p,w as n,a as c,o as u}from"./app-CVfq4vAg.js";const i="/LGUIDoc/assets/step1-hBHBNoK8.png",l="/LGUIDoc/assets/step2-Tb846Zrm.png",q="/LGUIDoc/assets/step3-Dxo6Ntsq.png",_="/LGUIDoc/assets/step4-DGxlDFxs.png",m="/LGUIDoc/assets/step5-C30EYp8m.png",g="/LGUIDoc/assets/step6-DgyPgc22.png",b="/LGUIDoc/assets/step7-BkJ3W6cb.png",d="/LGUIDoc/assets/step9-By8RIPny.png",h="/LGUIDoc/assets/step10-DA2f2X2Z.png",f="/LGUIDoc/assets/step11-CVQ_1TLu.png",I="/LGUIDoc/assets/step12-b9pSNOEt.png",U="/LGUIDoc/assets/step13-C8Tkzzly.png",L="/LGUIDoc/assets/step15-Dqjd9q-Z.png",D="/LGUIDoc/assets/step16-BADdziz4.png",P="/LGUIDoc/assets/step17-CO-Ya-n8.png",G="/LGUIDoc/assets/step18-BGx--lqS.png",B="/LGUIDoc/assets/step19-Dxo6DgvX.png",y="/LGUIDoc/assets/step20-BJyEc24y.png",x="/LGUIDoc/assets/step21-DgyACaY8.png",C="/LGUIDoc/assets/step22-Czn_N1GB.png",S="/LGUIDoc/assets/step23-L9IQnTy4.png",M="/LGUIDoc/assets/step24-yztvvh6U.png",v="/LGUIDoc/assets/step25-DktlpVcp.png",k="/LGUIDoc/assets/step26-7NxeLJi_.png",N="/LGUIDoc/assets/step27-BLnY_1EF.png",z="/LGUIDoc/assets/step28-QEWM9x4B.png",A="/LGUIDoc/assets/step30-D99zl_LT.png",E={},T=t("h1",{id:"预制体工作流",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#预制体工作流"},[t("span",null,"预制体工作流")])],-1),R=t("p",null,[o("在这篇文档里，我们将学习如何使用LGUIPrefab来重复利用我们的UI. 从根本上来说，LGUIPreafb 只是个"),t("strong",null,"有嵌套层级的actor序列化"),o("工具.")],-1),O=t("h2",{id:"准备个屏幕空间ui-screenspaceui",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#准备个屏幕空间ui-screenspaceui"},[t("span",null,"准备个屏幕空间UI (ScreenSpaceUI).")])],-1),V=c('<h2 id="创建个按钮作为预制体的原始物体" tabindex="-1"><a class="header-anchor" href="#创建个按钮作为预制体的原始物体"><span>创建个按钮作为预制体的原始物体</span></a></h2><p>选择 &quot;ScreenSpaceUIRoot&quot; actor, 右键点击向下箭头按钮, 并选择 &quot;Create UI Element&quot;-&gt;&quot;Button&quot;:<br><img src="'+i+'" alt="step1"></p><p>把刚才创建的按钮重命名为 &quot;MyPrefabButton&quot;, 设置 &quot;PosZ&quot; 属性值为 -100, &quot;Color&quot; 属性值为 绿色:<br><img src="'+l+'" alt="step2"></p><h2 id="创建预制体" tabindex="-1"><a class="header-anchor" href="#创建预制体"><span>创建预制体</span></a></h2><p>选择 &quot;MyPrefabButton&quot; actor, 右键点击向下箭头按钮, 在弹出菜单上选择 &quot;Create Prefab&quot;:<br><img src="'+q+'" alt="step3"></p><p>然后会弹出保存文件窗口:<br><img src="'+_+'" alt="step4"></p><p>点击 &quot;保存&quot; 按钮, 然后一个预制体资产就会出现在 &quot;Content&quot; 文件夹里:<br><img src="'+m+'" alt="step5"></p><p>可以看到 &quot;Outliner&quot; 的 &quot;MyPrefabButton&quot; actor 右边的向下箭头按钮变成了预制体图标, 并且有个 LGUIPrefabManagerActor 出现在 &quot;--LGUIPrefabActor--&quot; 文件夹里:<br><img src="'+g+'" alt="step6"></p><p>选择 &quot;MyPrefabButton&quot; actor, 右键点击预制体按钮并选择 &quot;Destroy Actors&quot;, 这样就把预制体 &quot;MyPrefabButton&quot; 及其下的子物体都删除了:<br><img src="'+b+'" alt="step7"></p><h2 id="在编辑器里复用预制体" tabindex="-1"><a class="header-anchor" href="#在编辑器里复用预制体"><span>在编辑器里复用预制体</span></a></h2><p>选择 &quot;ScreenSpaceUIRoot&quot; actor, 拖拽 &quot;MyPrefabButton_Prefab&quot; 资产到视口的任意位置:<br><img src="'+d+'" alt="step9"></p><p>可以看到有个 &quot;MyPrefabButton&quot; actor 创建在场景里:<br><img src="'+h+'" alt="step10"></p><p>选择 &quot;Info&quot; actor, 拖拽 &quot;MyPrefabButton_Prefab&quot; 资产到视口的任意位置, 这样另一个 &quot;MyPrefabButton&quot; 就会被创建 (你可能需要把创建出来的actor移动一些才能看见，因为两个预制体实例可能会重合在一起):<br><img src="'+f+'" alt="step11"></p><p>可以看到在 &quot;Outliner&quot; 中不同的预制体有不同的图标颜色:<br><img src="'+I+'" alt="step12"></p><p>按住 &quot;Ctrl&quot; 键并分别点击两个 &quot;MyPrefabButton&quot; actor 来选择它们, 然后点击菜单 &quot;LGUI Editor Tools&quot;-&gt;&quot;Destroy Actors&quot; 删除这些预制体实例:<br><img src="'+U+'" alt="step13"></p><h2 id="在运行时服用预制体" tabindex="-1"><a class="header-anchor" href="#在运行时服用预制体"><span>在运行时服用预制体</span></a></h2><p>右键点击 &quot;Content&quot; 目录的空白区域然后选择 &quot;Blueprints&quot;-&gt;&quot;BlueprintClass&quot;:<br><img src="'+L+'" alt="step15"></p><p>选择 &quot;Actor Component&quot;:<br><img src="'+D+'" alt="step16"></p><p>把刚创建的 ActorComponent 命名为 &quot;PrefabLoader&quot;:<br><img src="'+P+'" alt="step17"></p><p>双击 &quot;PrefabLoader&quot; 打开蓝图编辑器:<br><img src="'+G+'" alt="step18"></p><p>从 &quot;Event Begin Play&quot; 拖拽连线然后选择 &quot;Load Prefab&quot; 节点:<br><img src="'+B+'" alt="step19"></p><p>从 &quot;MyPrefabButton_Prefab&quot; 资产拖拽到 &quot;Load Prefab&quot; 节点的 &quot;In Prefab&quot;:<br><img src="'+y+'" alt="step20"></p><p>连接 &quot;Get Owner&quot; 和 &quot;Root Component&quot; 节点到 &quot;Load Prefab&quot; 节点的 &quot;In Parent&quot;:<br><img src="'+x+'" alt="step21"></p><p>点击 &quot;Compile&quot; 然后关闭蓝图编辑器:<br><img src="'+C+'" alt="step22"></p><p>选择 &quot;ScreenSpaceUIRoot&quot; actor, 然后拖拽 &quot;PrefabLoader&quot; 组件到actor的组件栏里:<br><img src="'+S+'" alt="step23"></p><p>点击 Play, 可以看到预制体被创建了:<br><img src="'+M+'" alt="step24"></p><p>注意到按钮的颜色变成了白色, 因为这个颜色被 UIButton 组件覆盖重写了, 我们来修复这个错误.</p><h2 id="修改预制体" tabindex="-1"><a class="header-anchor" href="#修改预制体"><span>修改预制体</span></a></h2><p>点击 Stop 按钮退出运行模式. 双击 &quot;MyPrefabButton_Prefab&quot; 资产来打开 PrefabEditor(预制体编辑器):<br><img src="'+v+'" alt="step25"></p><p>选择 &quot;MyPrefabButton&quot; actor, 选择 &quot;UIButton&quot; 组件. UIButton 组件的 &quot;Transition&quot; 属性上使用 &quot;ColorTint&quot; 方式, 这种方式将会覆盖目标物体的颜色为 &quot;Normal Color&quot;:<br><img src="'+k+'" alt="step26"></p><p>修改 &quot;Normal Color&quot; 值为红色, 可以看到场景里的按钮的颜色也变成了红色:<br><img src="'+N+'" alt="step27"></p><p>在预制体编辑的左上方点击 &quot;Apply&quot; 按钮来应用修改, 这样我们的修改才会保存到预制体资产里:<br><img src="'+z+'" alt="step28"></p><p>现在关闭预制体编辑器, 然后点击 Play, 可以看到加载出来的按钮变成了红色:<br><img src="'+A+'" alt="step30"></p>',33);function J(W,Y){const s=r("RouteLink");return u(),a("div",null,[T,R,O,t("p",null,[o("跟着文档 "),p(s,{to:"/zh-cn/GetStarted/HelloWorld/"},{default:n(()=>[o("HelloWorld")]),_:1}),o(" 来创建个 ScreenSpaceUI.")]),V])}const w=e(E,[["render",J],["__file","index.html.vue"]]),H=JSON.parse('{"path":"/zh-cn/GetStarted/Prefab/","title":"预制体工作流","lang":"中文","frontmatter":{},"headers":[{"level":2,"title":"准备个屏幕空间UI (ScreenSpaceUI).","slug":"准备个屏幕空间ui-screenspaceui","link":"#准备个屏幕空间ui-screenspaceui","children":[]},{"level":2,"title":"创建个按钮作为预制体的原始物体","slug":"创建个按钮作为预制体的原始物体","link":"#创建个按钮作为预制体的原始物体","children":[]},{"level":2,"title":"创建预制体","slug":"创建预制体","link":"#创建预制体","children":[]},{"level":2,"title":"在编辑器里复用预制体","slug":"在编辑器里复用预制体","link":"#在编辑器里复用预制体","children":[]},{"level":2,"title":"在运行时服用预制体","slug":"在运行时服用预制体","link":"#在运行时服用预制体","children":[]},{"level":2,"title":"修改预制体","slug":"修改预制体","link":"#修改预制体","children":[]}],"git":{"updatedTime":1685406463000,"contributors":[{"name":"lf2007hf","email":"707908214@qq.com","commits":1}]},"filePathRelative":"zh-cn/GetStarted/Prefab/index.md"}');export{w as comp,H as data};