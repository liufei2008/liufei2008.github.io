import{_ as e,c as t,o as a,a as n}from"./app-CVfq4vAg.js";const r="/LGUIDoc/assets/1-BXBp7MAB.png",o="/LGUIDoc/assets/2-CPkPz_Bz.png",i={},c=n('<h1 id="lguiprefabinterface" tabindex="-1"><a class="header-anchor" href="#lguiprefabinterface"><span>LGUIPrefabInterface</span></a></h1><p>This interface provide <strong>Awake</strong> function for Actor and ActorComponent that managed inside LGUIPrefab.<br> Open a blueprint Actor or ActorComponent, click on &quot;Class Settings&quot;, in the &quot;Implemented Interfaces&quot; area click &quot;Add&quot; button and typein <em>LGUIPrefabInterface</em>: <img src="'+r+'" alt=""> Then two functions will appear on &quot;Interfaces&quot; area:<br><strong>Awake</strong>: Called when LGUIPrefab finish load. This is called late than BeginPlay. <strong>EditorAwake</strong>: Same as <em>Awake</em> function but only execute in edit mode. <img src="'+o+'" alt=""></p><p><strong>NOTE!!!</strong> Awake execute order in prefab: Higher in hierarchy will execute earlier, so scripts on root actor will execute the first, and scripts on lowest actor will execute the last. Actor execute first, then execute on component. And this Awake is execute later than all LGUILifeCycleBehaviour&#39;s Awake when in same prefab.</p>',3),s=[c];function l(f,p){return a(),t("div",null,s)}const h=e(i,[["render",l],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/PrefabWorkflow/LGUIPrefabInterface/","title":"LGUIPrefabInterface","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1698790844000,"contributors":[{"name":"lf2007hf","email":"707908214@qq.com","commits":2}]},"filePathRelative":"PrefabWorkflow/LGUIPrefabInterface/index.md"}');export{h as comp,m as data};