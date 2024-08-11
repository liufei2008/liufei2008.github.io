import{_ as r,r as a,c as s,b as t,d as e,e as n,w as p,a as c,o as i}from"./app-CGRYBoMb.js";const u="/LGUIDoc/assets/step1-hBHBNoK8.png",l="/LGUIDoc/assets/step2-Tb846Zrm.png",b="/LGUIDoc/assets/step3-Dxo6Ntsq.png",d="/LGUIDoc/assets/step4-DGxlDFxs.png",f="/LGUIDoc/assets/step5-C30EYp8m.png",q="/LGUIDoc/assets/step6-DgyPgc22.png",h="/LGUIDoc/assets/step7-BkJ3W6cb.png",m="/LGUIDoc/assets/step9-By8RIPny.png",g="/LGUIDoc/assets/step10-DA2f2X2Z.png",_="/LGUIDoc/assets/step11-CVQ_1TLu.png",y="/LGUIDoc/assets/step12-b9pSNOEt.png",I="/LGUIDoc/assets/step13-C8Tkzzly.png",U="/LGUIDoc/assets/step15-Dqjd9q-Z.png",L="/LGUIDoc/assets/step16-BADdziz4.png",D="/LGUIDoc/assets/step17-CO-Ya-n8.png",P="/LGUIDoc/assets/step18-BGx--lqS.png",w="/LGUIDoc/assets/step19-Dxo6DgvX.png",G="/LGUIDoc/assets/step20-BJyEc24y.png",B="/LGUIDoc/assets/step21-DgyACaY8.png",C="/LGUIDoc/assets/step22-Czn_N1GB.png",S="/LGUIDoc/assets/step23-L9IQnTy4.png",k="/LGUIDoc/assets/step24-yztvvh6U.png",v="/LGUIDoc/assets/step25-DktlpVcp.png",x="/LGUIDoc/assets/step26-7NxeLJi_.png",M="/LGUIDoc/assets/step27-BLnY_1EF.png",N="/LGUIDoc/assets/step28-QEWM9x4B.png",R="/LGUIDoc/assets/step30-D99zl_LT.png",E={},A=t("h1",{id:"prefab-workflow",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#prefab-workflow"},[t("span",null,"Prefab workflow")])],-1),T=t("p",null,[e("In this section, we will learn how to use LGUIPrefab to reuse our UI content. Basically LGUIPreafb is just a "),t("strong",null,"nested hierarchical actor serialization"),e(" tool, it is not limited to UI create, actually you can use it with any actor.")],-1),z=t("h2",{id:"prepare-a-lgui-screenspaceui",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#prepare-a-lgui-screenspaceui"},[t("span",null,"Prepare a LGUI ScreenSpaceUI.")])],-1),O=c('<h2 id="create-a-button-as-prefab-source" tabindex="-1"><a class="header-anchor" href="#create-a-button-as-prefab-source"><span>Create a button as prefab source.</span></a></h2><p>Select &quot;ScreenSpaceUIRoot&quot; actor, right click on the down arrow button, and choose &quot;Create UI Element&quot;-&gt;&quot;Button&quot;:<br><img src="'+u+'" alt="step1"></p><p>Rename the button actor to &quot;MyPrefabButton&quot;, set &quot;PosZ&quot; to -100, &quot;Color&quot; to green:<br><img src="'+l+'" alt="step2"></p><h2 id="create-prefab" tabindex="-1"><a class="header-anchor" href="#create-prefab"><span>Create prefab.</span></a></h2><p>Select &quot;MyPrefabButton&quot; actor, right click on the down arrow button, and choose &quot;Create Prefab&quot;:<br><img src="'+b+'" alt="step3"></p><p>Now a save file window will showup:<br><img src="'+d+'" alt="step4"></p><p>Click &quot;Save&quot; button, then a prefab asset will appear in &quot;Content&quot; folder:<br><img src="'+f+'" alt="step5"></p><p>And notice the &quot;MyPrefabButton&quot; actor in the &quot;Outliner&quot;, the down arrow button icon become a prefab icon, and a LGUIPrefabManagerActor appear in &quot;--LGUIPrefabActor--&quot; folder:<br><img src="'+q+'" alt="step6"></p><p>Select &quot;MyPrefabButton&quot; actor, right click on the prefab icon and choose &quot;Destroy Actors&quot;, so the &quot;MyPrefabButton&quot; actor and it&#39;s children are all destroyed:<br><img src="'+h+'" alt="step7"></p><h2 id="reuse-prefab-in-editor" tabindex="-1"><a class="header-anchor" href="#reuse-prefab-in-editor"><span>Reuse prefab in editor.</span></a></h2><p>Select &quot;ScreenSpaceUIRoot&quot; actor, drag &quot;MyPrefabButton_Prefab&quot; asset and drop to anywhre on viewport:<br><img src="'+m+'" alt="step9"></p><p>See a &quot;MyPrefabButton&quot; actor is created in viewport and outliner:<br><img src="'+g+'" alt="step10"></p><p>Select &quot;Info&quot; actor, drag &quot;MyPrefabButton_Prefab&quot; asset and drop to anywhre on viewport, then a new &quot;MyPrefabButton&quot; will be created (you may need to move it off to see in viewport):<br><img src="'+_+'" alt="step11"></p><p>Notice different prefab have different color on prefab icon:<br><img src="'+y+'" alt="step12"></p><p>Select both &quot;MyPrefabButton&quot; actor by hold &quot;Ctrl&quot; key and click it, then choose &quot;LGUI Editor Tools&quot;-&gt;&quot;Destroy Actors&quot; to destroy both actors and all it&#39;s children:<br><img src="'+I+'" alt="step13"></p><h2 id="reuse-prefab-in-runtime" tabindex="-1"><a class="header-anchor" href="#reuse-prefab-in-runtime"><span>Reuse prefab in runtime.</span></a></h2><p>Right click in empty area of &quot;Content&quot; and choose &quot;Blueprints&quot;-&gt;&quot;BlueprintClass&quot;:<br><img src="'+U+'" alt="step15"></p><p>Select &quot;Actor Component&quot;:<br><img src="'+L+'" alt="step16"></p><p>Name the created ActorComponent class to &quot;PrefabLoader&quot;:<br><img src="'+D+'" alt="step17"></p><p>Double click &quot;PrefabLoader&quot; to open blueprint editor:<br><img src="'+P+'" alt="step18"></p><p>Drag out &quot;Event Begin Play&quot; and add a &quot;Load Prefab&quot; node:<br><img src="'+w+'" alt="step19"></p><p>Drag &quot;MyPrefabButton_Prefab&quot; to &quot;In Prefab&quot; of &quot;Load Prefab&quot; node:<br><img src="'+G+'" alt="step20"></p><p>Connect &quot;Get Owner&quot; and &quot;Root Component&quot; node to &quot;In Parent&quot; of &quot;Load Prefab&quot; node:<br><img src="'+B+'" alt="step21"></p><p>Click &quot;Compile&quot; and then close the blueprint editor:<br><img src="'+C+'" alt="step22"></p><p>Select &quot;ScreenSpaceUIRoot&quot; actor in &quot;Outliner&quot;, and drag &quot;PrefabLoader&quot; to it&#39;s component stack:<br><img src="'+S+'" alt="step23"></p><p>Hit play, you can see a prefab button is created:<br><img src="'+k+'" alt="step24"></p><p>Notice the button&#39;s color become white, because it is override by UIButton component, now let&#39;s modify the prefab to fix it.</p><h2 id="modify-prefab" tabindex="-1"><a class="header-anchor" href="#modify-prefab"><span>Modify prefab.</span></a></h2><p>Exit play mode by click stop button. Double click on the &quot;MyPrefabButton_Prefab&quot; to open PrefabEditor:<br><img src="'+v+'" alt="step25"></p><p>Select &quot;MyPrefabButton&quot; actor, select &quot;UIButton&quot; component. UIButton use &quot;ColorTint&quot; on &quot;Transition&quot; property, it will override the TransitionActor&#39;s color with &quot;Normal Color&quot;:<br><img src="'+x+'" alt="step26"></p><p>Change the &quot;Normal Color&quot; to red, see the button in viewport become red too:<br><img src="'+M+'" alt="step27"></p><p>Click the &quot;Apply&quot; button in the left top menu of PrefabEditor, so that the changes will apply to prefab asset:<br><img src="'+N+'" alt="step28"></p><p>Now close PrefabEditor and hit play, see the loaded button have a red color:<br><img src="'+R+'" alt="step30"></p>',33);function V(H,J){const o=a("RouteLink");return i(),s("div",null,[A,T,z,t("p",null,[e("Follow the "),n(o,{to:"/GetStarted/HelloWorld/"},{default:p(()=>[e("HelloWorld")]),_:1}),e(" section to create a base ScreenSpaceUI.")]),O])}const Y=r(E,[["render",V],["__file","index.html.vue"]]),Z=JSON.parse('{"path":"/GetStarted/Prefab/","title":"Prefab workflow","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Prepare a LGUI ScreenSpaceUI.","slug":"prepare-a-lgui-screenspaceui","link":"#prepare-a-lgui-screenspaceui","children":[]},{"level":2,"title":"Create a button as prefab source.","slug":"create-a-button-as-prefab-source","link":"#create-a-button-as-prefab-source","children":[]},{"level":2,"title":"Create prefab.","slug":"create-prefab","link":"#create-prefab","children":[]},{"level":2,"title":"Reuse prefab in editor.","slug":"reuse-prefab-in-editor","link":"#reuse-prefab-in-editor","children":[]},{"level":2,"title":"Reuse prefab in runtime.","slug":"reuse-prefab-in-runtime","link":"#reuse-prefab-in-runtime","children":[]},{"level":2,"title":"Modify prefab.","slug":"modify-prefab","link":"#modify-prefab","children":[]}],"git":{"updatedTime":1685406463000,"contributors":[{"name":"lf2007hf","email":"707908214@qq.com","commits":1}]},"filePathRelative":"GetStarted/Prefab/index.md"}');export{Y as comp,Z as data};
