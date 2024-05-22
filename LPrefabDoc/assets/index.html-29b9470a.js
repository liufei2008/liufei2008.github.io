import{_ as r,r as i,o as n,c as o,a as e,b as a,d as s,w as c,e as h}from"./app-8619d86d.js";const f="/LPrefabDoc/assets/1-639da3d8.png",d="/LPrefabDoc/assets/2-47feeb78.png",b="/LPrefabDoc/assets/3-7243eeb1.png",l={},p=e("h1",{id:"prefab-variant",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prefab-variant","aria-hidden":"true"},"#"),a(" Prefab Variant")],-1),m=e("p",null,"Prefab Variants are useful when you want to have a set of predefined variations of a Prefab.",-1),u=e("p",null,"For example, you might want to have several different types of Torchs in your game, which are all based on the same basic Torch Prefab. However you may want some Torchs to show different colors, or some to emit sound effects.",-1),P=h('<ul><li>Make a Torch emit red light by using a property override.</li><li>Make a Torch carry an item by attaching an additional Actor to its handle.</li><li>Make a Torch with flame-burning sound by adding an actor with AudioSource component.</li></ul><p>A Prefab Variant inherits the properties of another Prefab, called the base. Overrides made to the Prefab Variant take percedence over the base Prefab&#39;s values. A Prefab Variant can have any other Prefab as its base, even other Prefab Variants.</p><h2 id="creating-a-prefab-variant" tabindex="-1"><a class="header-anchor" href="#creating-a-prefab-variant" aria-hidden="true">#</a> Creating a Prefab Variant</h2><p>You can right-click on a Prefab asset in the Content Browser and select LPrefab &gt; Create PrefabVariant. This creates a variant of the selected Prefab, which initially doesn&#39;t have any overrides. You can open the Prefab Variant in Prefab Editor to begin adding overrides to it.<br><img src="'+f+'" alt=""><img src="'+d+'" alt=""></p><h2 id="editing-a-prefab-variant" tabindex="-1"><a class="header-anchor" href="#editing-a-prefab-variant" aria-hidden="true">#</a> Editing a Prefab Variant</h2><p>Double click the Prefab Variant to open it in Prefab Editor, the root appears as a Prefab instance with the Prefab icon in LPrefab column. This Prefab instance represents the base Prefab that the Prefab Variant inherits from; it doesn&#39;t represent the Prefab Variant itself. Any edits you make to the Prefab Variant become overrides to this base that exists in the Variant: <img src="'+b+'" alt=""></p><p>As with any Prefab instance, you can use prefab overrides in a Prefab Variant, such as modified property values, added child Actors. There are also the same limitations: you cannot reparent Actors in the Prefab Variant which come from its base Prefab. You also cannot remove an Actor or add ActorComponent or remove ActorComponent from a Prefab Variant which exists in its base Prefab.</p>',7);function v(_,g){const t=i("RouterLink");return n(),o("div",null,[p,m,u,e("p",null,[a("We can use the "),s(t,{to:"/Prefab/"},{default:c(()=>[a("torch prefab")]),_:1}),a(" that we created before as example, then we could create several Prefab Variants to :")]),P])}const y=r(l,[["render",v],["__file","index.html.vue"]]);export{y as default};
