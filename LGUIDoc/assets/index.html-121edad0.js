import{_ as r,r as c,o as i,c as p,b as t,d as e,e as s,w as a,a as n}from"./app-2e097c0d.js";const u="/LGUIDoc/assets/step1-5cb28414.png",d="/LGUIDoc/assets/step2-6de58de8.png",l="/LGUIDoc/assets/step3-53cc0cbb.png",_="/LGUIDoc/assets/step4-23031d89.png",h="/LGUIDoc/assets/step5-908f8740.png",q="/LGUIDoc/assets/step6-58141c9b.png",I="/LGUIDoc/assets/step7-e0138a0f.png",U="/LGUIDoc/assets/step8-ea1a65dd.png",m="/LGUIDoc/assets/step9-fa487c31.png",x={},f=t("h1",{id:"使用自定义字体",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#使用自定义字体","aria-hidden":"true"},"#"),e(" 使用自定义字体")],-1),g=t("p",null,"在这篇文档里, 我们将使用字体文件(ttf, ttc, otf)来创建自定义字体并用于 UIText. LGUI提供里两种类型的字体:",-1),G=t("ul",null,[t("li",null,"LGUI Font - 位图字体, 针对不同属性的文字生成不同的像素并写入贴图."),t("li",null,"LGUI SDF Font - 这是默认的字体类型, 使用有向距离场 (signed distance field) 技术渲染, 可以用最小的贴图尺寸来渲染超大的平滑的文字.")],-1),L=t("h2",{id:"准备个字体文件",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#准备个字体文件","aria-hidden":"true"},"#"),e(" 准备个字体文件")],-1),b=t("br",null,null,-1),F=t("img",{src:u,alt:"step1"},null,-1),D=n('<p>复制字体文件到你的虚幻项目目录 (就是.uproject文件同一个目录).</p><h2 id="创建-lgui-资产asset" tabindex="-1"><a class="header-anchor" href="#创建-lgui-资产asset" aria-hidden="true">#</a> 创建 LGUI 资产asset.</h2><p>鼠标右键点击 Content 目录的空白区域, 在弹出菜单中选择 &quot;LGUI&quot;-&gt;&quot;LGUI SDF Font&quot;, 这样创建个 LGUI SDF Font 资产:<br><img src="'+d+'" alt="step2"></p><p>重命名刚才创建的资产为 &quot;MyLGUIFont&quot;: <img src="'+l+'" alt="step3"></p><p>双击打开字体编辑器窗口, 点击 “FontSourceFile” 后面的 &quot;...&quot; 按钮, 然后选择刚才准备好的字体文件:<br><img src="'+_+'" alt="step4"></p><h2 id="创建-uitext" tabindex="-1"><a class="header-anchor" href="#创建-uitext" aria-hidden="true">#</a> 创建 UIText</h2>',6),S=n('<p>选择 &quot;ScreenSpaceUIRoot&quot;, 右键点击向下箭头按钮, 选择 &quot;Create UI Element&quot;-&gt;&quot;UIText&quot;:<br><img src="'+h+'" alt="step5"></p><p>重命名刚才创建的 UIText 为 &quot;MyUIText&quot;:<br><img src="'+q+'" alt="step6"></p><h2 id="修改-uitext-属性" tabindex="-1"><a class="header-anchor" href="#修改-uitext-属性" aria-hidden="true">#</a> 修改 UIText 属性.</h2><p>选择 &quot;MyUIText&quot;, 修改 &quot;PosZ&quot; 属性为 -120, 这样把文字挪开偏离视口中心的位置:<br><img src="'+I+'" alt="step7"></p><p>选择 &quot;MyUIText&quot;, 修改 &quot;Size&quot; 属性为 40, &quot;Color&quot; 属性为黑色, 在 &quot;Text&quot; 属性中输入 &quot;中国智造&quot;:<br><img src="'+U+'" alt="step8"></p><h2 id="使用自定义的字体" tabindex="-1"><a class="header-anchor" href="#使用自定义的字体" aria-hidden="true">#</a> 使用自定义的字体</h2><p><strong>重要部分</strong>, 选中 &quot;MyUIText&quot; 并把 &quot;MyLGUIFont&quot; 资产拖拽到 &quot;Font&quot; 属性上, 可以看到视口中渲染的文字发生变化:<br><img src="'+m+'" alt="step9"></p>',7);function T(y,M){const o=c("RouterLink");return i(),p("div",null,[f,g,G,L,t("p",null,[e("LGUI 使用 "),s(o,{to:"/zh-cn/GetStarted/Font/https:/www.freetype.org/"},{default:a(()=>[e("freetype")]),_:1}),e(' 来渲染字体, 所以我们需要用 freetype 支持的字体文件格式 (ttf, ttc, otf). 下载个字体文件或者用系统目录中的字体文件. 我用 "华文新魏" 字体:'),b,F]),D,t("p",null,[e("按照文档 "),s(o,{to:"/zh-cn/GetStarted/HelloWorld/"},{default:a(()=>[e("HelloWorld")]),_:1}),e(' 来创建个 "Screen Space UI" .')]),S])}const C=r(x,[["render",T],["__file","index.html.vue"]]);export{C as default};