import{_ as e,o as a,c as t,a as o}from"./app-77a7d228.js";const s="/LGUIDoc/assets/1-a0f74a55.png",r="/LGUIDoc/assets/2-1277c6e3.png",n="/LGUIDoc/assets/3-8ce693b4.png",i={},c=o('<h1 id="lgui-prefab" tabindex="-1"><a class="header-anchor" href="#lgui-prefab" aria-hidden="true">#</a> LGUI Prefab</h1><p>Prefabs are collections of actors that can be stored in an asset and instanced into a level, it is not limited on UI element, it use almost all actor types in LGUIPrefab.</p><p>Quite often when constructing a level you want to create some arrangement of actors, and then re-use that collection in the same or other levels. An example might be a torch, which consists of some static meshes and some lights. Prefabs allows you to create this kind of collection once, and then save it in as a Prefab asset. You can then select the Prefab in the Content Browser, and add it many times through the level.</p><p>Prefabs can have changes made to them in a level, and those changes can then be propagated to all existing instances of that Prefab. Because this uses Unreal&#39;s property system, only properties still at their original prefab defaults will be updated when the Prefab changes. For example, imagine you have a Prefab that contains a yellow light, and you then change one instance of the Prefab to have a blue light. Then you change the Prefab itself to have a green light. Only instances who&#39;s light is still yellow will have the color changed to green. This is very useful, as it allows you modify, or even remove, parts of a Prefab instance to make it fit a particular usage, but also receive updates to the Prefab.</p><h2 id="create-a-prefab" tabindex="-1"><a class="header-anchor" href="#create-a-prefab" aria-hidden="true">#</a> Create a Prefab</h2><p>To create a new Prefab, first attach the actors to a single root actor in the level:<br><img src="'+s+'" alt=""> Then select the root actor, right-click and choose <strong>LGUI Editor Tools -&gt; Create Prefab</strong> from the context menu. <img src="'+r+'" alt=""> Then a dialog window will show, you can choose a place and name to save the asset:<br><img src="'+n+'" alt=""></p><h2 id="nested-prefab-and-property-override" tabindex="-1"><a class="header-anchor" href="#nested-prefab-and-property-override" aria-hidden="true">#</a> Nested Prefab and Property Override</h2>',7),h=[c];function l(d,f){return a(),t("div",null,h)}const b=e(i,[["render",l],["__file","index.html.vue"]]);export{b as default};
