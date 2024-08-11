import{_ as t,c as e,o,a as n}from"./app-CGRYBoMb.js";const a="/LGUIDoc/assets/1-CWW4Yfev.png",s="/LGUIDoc/assets/2-dLvJQAju.png",i="/LGUIDoc/assets/3-CAG4FUeD.png",c="/LGUIDoc/assets/4-B1mNbRVB.png",r="/LGUIDoc/assets/5-CVyl9uOm.png",l="/LGUIDoc/assets/6-BpozwkCC.png",p="/LGUIDoc/assets/7-B0O3lmzb.png",u="/LGUIDoc/assets/8-IANR2grI.png",m="/LGUIDoc/assets/9-BSolc5Ng.png",h="/LGUIDoc/assets/10-CnYCWQAC.png",d="/LGUIDoc/assets/11-C0eiLwEa.png",g="/LGUIDoc/assets/12-ClFszvkO.png",v="/LGUIDoc/assets/13-WxI2DjlQ.png",q="/LGUIDoc/assets/14-CXS5wh_n.png",b="/LGUIDoc/assets/15-CApPkW3m.png",f="/LGUIDoc/assets/16-DL_tXKCS.png",D={},_=n('<h1 id="lguieventdelegate" tabindex="-1"><a class="header-anchor" href="#lguieventdelegate"><span>LGUIEventDelegate</span></a></h1><p>LGUIEventDelegate is a callback method (excuted when the event is triggered), which can serialize and edit inside &quot;Details&quot; panel.<br> Basically after setup a LGUIEventDelegate and try to execute it, it will search function receiver object on target actor (function receiver object could be the actor itself or one of component on the actor), find function that match the function name and parameter type, and then call the function with parameter value. And LGUIEventDelegate have built-in cache, means it only do these search things once at the first time it is executed.</p><h2 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use"><span>How to use</span></a></h2><p>Create a ActorComponent blueprint class, name it &quot;MyLGUIEventDelegateTest&quot;, this component will hold the LGUIEventDelegate and execute it:<br><img src="'+a+'" alt=""></p><p>Double click MyLGUIEventDelegateTest to open the blueprint editor, then create a variable of LGUIEventDelegateEmpty type, name it &quot;MyEvent&quot;, check on &quot;InstanceEditable&quot;, then compile the blueprint:<br><img src="'+s+'" alt=""></p><p>Create another ActorComponent blueprint class, name it &quot;FunctionComponent&quot;, this component will provide the function to call by LGUIEventDelegate:<br><img src="'+i+'" alt=""></p><p>Double click FunctionComponent to open the blueprint editor, add a function with name &quot;TestFunction&quot;, add input paramter of type String, link a &quot;Print String&quot; node to the function, then compile the blueprint:<br><img src="'+c+'" alt=""></p><p>Create two actor with name &quot;A&quot; and &quot;B&quot;, drag MyLGUIEventDelegateTest to actor A, and FunctionComponent to actor B: <img src="'+r+'" alt=""><img src="'+l+'" alt=""></p><p>Select MyLGUIEventDelegateTest component on actor A, in the Details panel you will find LGUIEventDelegate &quot;My Event()&quot; that just created, click the &quot;+&quot; button to add a event item:<br><img src="'+p+'" alt=""></p><p>Keep MyLGUIEventDelegateTest component selected, and click the lock icon button on the Details panel to make it locked up, this can let us drag other actor in Outliner:<br><img src="'+u+'" alt=""></p><p>Drag actor B to event parameter:<br><img src="'+m+'" alt=""></p><p>Click component area, it will list all valid components and &quot;(ActorSelf)&quot;, select &quot;Function&quot; component because our &quot;TestFunction&quot; is inside FunctionComponent:<br><img src="'+h+'" alt=""></p><p>Click function area, it will list all compatible functions, select &quot;TestFunction(String)&quot; which created before:<br><img src="'+d+'" alt=""></p><p>The parameter area now shows a string input field, if we typein something here, when we do execute the &quot;My Event()&quot; LGUIEventDelegate, the string that we typein will convert to a parameter and pass to the executed functon. You can typein anything, for example just typein &quot;I am function parameter&quot;:<br><img src="'+g+'" alt=""></p><p>Now the callback method setup is complete, the next step is to execute the &quot;My Event()&quot; LGUIEventDelegate. Double click MyLGUIEventDelegateTest component, in the blueprint editor drag &quot;MyEvent&quot; variable to EventGraph, then drag out a line from &quot;MyEvent&quot; node and select &quot;Execute&quot; node:<br><img src="'+v+'" alt=""></p><p>Add a &quot;Delay&quot; node and set &quot;Duration&quot; to 0.5, compile blueprint:<br><img src="'+q+'" alt=""></p><p>Hit play and you will see a print message &quot;I am function parameter&quot; will show on viewport&#39;s left top area:<br><img src="'+b+'" alt=""></p><h2 id="tips" tabindex="-1"><a class="header-anchor" href="#tips"><span>Tips</span></a></h2><p>The above example is a very simple one, actually LGUIEventDelegate can pass parameter from source event to dest function, just choose LGUIEventDelegateXXX (XXX means parameter type) as your event type. LGUIEventDelegate support a lot of basic data types: <em>bool float double int8 uint8 int16 uint16 int32 uint32 int64 uint64 vector2 vector3 vector4 color linearColor quaternion string object actor pointerEvent class rotator name text</em>, some of them is c++ only.</p><p>When you use a LGUIEventDelegateXXX, when select function from list, you may see some function with &quot;(NativeParameter)&quot; (eg. TestFunction(NativeParameter)):<br><img src="'+f+'" alt=""> This means the function can receive parameter that passed from LGUIEventDelegate.</p>',20),I=[_];function L(G,U){return o(),e("div",null,I)}const E=t(D,[["render",L],["__file","index.html.vue"]]),w=JSON.parse('{"path":"/Events/LGUIEventDelegate/","title":"LGUIEventDelegate","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"How to use","slug":"how-to-use","link":"#how-to-use","children":[]},{"level":2,"title":"Tips","slug":"tips","link":"#tips","children":[]}],"git":{"updatedTime":1685406463000,"contributors":[{"name":"lf2007hf","email":"707908214@qq.com","commits":1}]},"filePathRelative":"Events/LGUIEventDelegate/index.md"}');export{E as comp,w as data};
