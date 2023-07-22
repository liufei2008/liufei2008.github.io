import{_ as a,r,o as s,c as n,b as e,d as t,e as c,w as p,a as i}from"./app-1f46c590.js";const u="/LGUIDoc/assets/step1-755916a5.png",l="/LGUIDoc/assets/step2-5712d785.png",d="/LGUIDoc/assets/step3-2d3fb90a.png",b="/LGUIDoc/assets/step4-f28081a6.png",f="/LGUIDoc/assets/step5-029e343f.png",q="/LGUIDoc/assets/step6-4dfa07aa.png",h="/LGUIDoc/assets/step7-348b3875.png",m="/LGUIDoc/assets/step9-3c05fcc5.png",_="/LGUIDoc/assets/step10-5585f4ad.png",g="/LGUIDoc/assets/step11-e15adf49.png",I="/LGUIDoc/assets/step12-fa4a6cde.png",U="/LGUIDoc/assets/step13-b548adbc.png",y="/LGUIDoc/assets/step15-a772dcdd.png",w="/LGUIDoc/assets/step16-23de84f0.png",L="/LGUIDoc/assets/step17-8c4c6948.png",P="/LGUIDoc/assets/step18-af5f1d1f.png",G="/LGUIDoc/assets/step19-9f5cac8f.png",D="/LGUIDoc/assets/step20-623e0ca2.png",B="/LGUIDoc/assets/step21-b7a1a6c1.png",C="/LGUIDoc/assets/step22-465ab1d9.png",S="/LGUIDoc/assets/step23-12be0cca.png",k="/LGUIDoc/assets/step24-04a9b773.png",v="/LGUIDoc/assets/step25-1238eb8d.png",x="/LGUIDoc/assets/step26-dd51ecfd.png",M="/LGUIDoc/assets/step27-642cc878.png",N="/LGUIDoc/assets/step28-0513ed6e.png",R="/LGUIDoc/assets/step30-7d3a3c00.png",A={},E=e("h1",{id:"prefab-workflow",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prefab-workflow","aria-hidden":"true"},"#"),t(" Prefab workflow")],-1),T=e("p",null,[t("In this section, we will learn how to use LGUIPrefab to reuse our UI content. Basically LGUIPreafb is just a "),e("strong",null,"nested hierarchical actor serialization"),t(" tool, it is not limited to UI create, actually you can use it with any actor.")],-1),V=e("h2",{id:"prepare-a-lgui-screenspaceui",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prepare-a-lgui-screenspaceui","aria-hidden":"true"},"#"),t(" Prepare a LGUI ScreenSpaceUI.")],-1),H=i('<h2 id="create-a-button-as-prefab-source" tabindex="-1"><a class="header-anchor" href="#create-a-button-as-prefab-source" aria-hidden="true">#</a> Create a button as prefab source.</h2><p>Select &quot;ScreenSpaceUIRoot&quot; actor, right click on the down arrow button, and choose &quot;Create UI Element&quot;-&gt;&quot;Button&quot;:<br><img src="'+u+'" alt="step1"></p><p>Rename the button actor to &quot;MyPrefabButton&quot;, set &quot;PosZ&quot; to -100, &quot;Color&quot; to green:<br><img src="'+l+'" alt="step2"></p><h2 id="create-prefab" tabindex="-1"><a class="header-anchor" href="#create-prefab" aria-hidden="true">#</a> Create prefab.</h2><p>Select &quot;MyPrefabButton&quot; actor, right click on the down arrow button, and choose &quot;Create Prefab&quot;:<br><img src="'+d+'" alt="step3"></p><p>Now a save file window will showup:<br><img src="'+b+'" alt="step4"></p><p>Click &quot;Save&quot; button, then a prefab asset will appear in &quot;Content&quot; folder:<br><img src="'+f+'" alt="step5"></p><p>And notice the &quot;MyPrefabButton&quot; actor in the &quot;Outliner&quot;, the down arrow button icon become a prefab icon, and a LGUIPrefabManagerActor appear in &quot;--LGUIPrefabActor--&quot; folder:<br><img src="'+q+'" alt="step6"></p><p>Select &quot;MyPrefabButton&quot; actor, right click on the prefab icon and choose &quot;Destroy Actors&quot;, so the &quot;MyPrefabButton&quot; actor and it&#39;s children are all destroyed:<br><img src="'+h+'" alt="step7"></p><h2 id="reuse-prefab-in-editor" tabindex="-1"><a class="header-anchor" href="#reuse-prefab-in-editor" aria-hidden="true">#</a> Reuse prefab in editor.</h2><p>Select &quot;ScreenSpaceUIRoot&quot; actor, drag &quot;MyPrefabButton_Prefab&quot; asset and drop to anywhre on viewport:<br><img src="'+m+'" alt="step9"></p><p>See a &quot;MyPrefabButton&quot; actor is created in viewport and outliner:<br><img src="'+_+'" alt="step10"></p><p>Select &quot;Info&quot; actor, drag &quot;MyPrefabButton_Prefab&quot; asset and drop to anywhre on viewport, then a new &quot;MyPrefabButton&quot; will be created (you may need to move it off to see in viewport):<br><img src="'+g+'" alt="step11"></p><p>Notice different prefab have different color on prefab icon:<br><img src="'+I+'" alt="step12"></p><p>Select both &quot;MyPrefabButton&quot; actor by hold &quot;Ctrl&quot; key and click it, then choose &quot;LGUI Editor Tools&quot;-&gt;&quot;Destroy Actors&quot; to destroy both actors and all it&#39;s children:<br><img src="'+U+'" alt="step13"></p><h2 id="reuse-prefab-in-runtime" tabindex="-1"><a class="header-anchor" href="#reuse-prefab-in-runtime" aria-hidden="true">#</a> Reuse prefab in runtime.</h2><p>Right click in empty area of &quot;Content&quot; and choose &quot;Blueprints&quot;-&gt;&quot;BlueprintClass&quot;:<br><img src="'+y+'" alt="step15"></p><p>Select &quot;Actor Component&quot;:<br><img src="'+w+'" alt="step16"></p><p>Name the created ActorComponent class to &quot;PrefabLoader&quot;:<br><img src="'+L+'" alt="step17"></p><p>Double click &quot;PrefabLoader&quot; to open blueprint editor:<br><img src="'+P+'" alt="step18"></p><p>Drag out &quot;Event Begin Play&quot; and add a &quot;Load Prefab&quot; node:<br><img src="'+G+'" alt="step19"></p><p>Drag &quot;MyPrefabButton_Prefab&quot; to &quot;In Prefab&quot; of &quot;Load Prefab&quot; node:<br><img src="'+D+'" alt="step20"></p><p>Connect &quot;Get Owner&quot; and &quot;Root Component&quot; node to &quot;In Parent&quot; of &quot;Load Prefab&quot; node:<br><img src="'+B+'" alt="step21"></p><p>Click &quot;Compile&quot; and then close the blueprint editor:<br><img src="'+C+'" alt="step22"></p><p>Select &quot;ScreenSpaceUIRoot&quot; actor in &quot;Outliner&quot;, and drag &quot;PrefabLoader&quot; to it&#39;s component stack:<br><img src="'+S+'" alt="step23"></p><p>Hit play, you can see a prefab button is created:<br><img src="'+k+'" alt="step24"></p><p>Notice the button&#39;s color become white, because it is override by UIButton component, now let&#39;s modify the prefab to fix it.</p><h2 id="modify-prefab" tabindex="-1"><a class="header-anchor" href="#modify-prefab" aria-hidden="true">#</a> Modify prefab.</h2><p>Exit play mode by click stop button. Double click on the &quot;MyPrefabButton_Prefab&quot; to open PrefabEditor:<br><img src="'+v+'" alt="step25"></p><p>Select &quot;MyPrefabButton&quot; actor, select &quot;UIButton&quot; component. UIButton use &quot;ColorTint&quot; on &quot;Transition&quot; property, it will override the TransitionActor&#39;s color with &quot;Normal Color&quot;:<br><img src="'+x+'" alt="step26"></p><p>Change the &quot;Normal Color&quot; to red, see the button in viewport become red too:<br><img src="'+M+'" alt="step27"></p><p>Click the &quot;Apply&quot; button in the left top menu of PrefabEditor, so that the changes will apply to prefab asset:<br><img src="'+N+'" alt="step28"></p><p>Now close PrefabEditor and hit play, see the loaded button have a red color:<br><img src="'+R+'" alt="step30"></p>',33);function O(W,j){const o=r("RouterLink");return s(),n("div",null,[E,T,V,e("p",null,[t("Follow the "),c(o,{to:"/GetStarted/HelloWorld/"},{default:p(()=>[t("HelloWorld")]),_:1}),t(" section to create a base ScreenSpaceUI.")]),H])}const F=a(A,[["render",O],["__file","index.html.vue"]]);export{F as default};