import{_ as e,o as t,c as a,a as i}from"./app-77a7d228.js";const n="/LGUIDoc/assets/1-a003b362.png",s="/LGUIDoc/assets/2-b2d794a4.png",d={},r=i('<h1 id="find-child-by-displayname" tabindex="-1"><a class="header-anchor" href="#find-child-by-displayname" aria-hidden="true">#</a> Find Child by DisplayName</h1><h4 id="_1-uiitem-s-displayname" tabindex="-1"><a class="header-anchor" href="#_1-uiitem-s-displayname" aria-hidden="true">#</a> 1. UIItem&#39;s DisplayName</h4><p>UE4&#39;s actor don&#39;t have a persistent name, the name displayed in <em>World Outliner</em> is editor only. But sometimes we need a persistent name to find a UI item. LGUI&#39;s UIItem component provide a run-time valid property <strong>DisplayName</strong>, which is the same value as the actor displayed in <em>World Outliner</em>:<br><img src="'+n+'" alt=""></p><h4 id="_2-functions-to-use-the-displayname" tabindex="-1"><a class="header-anchor" href="#_2-functions-to-use-the-displayname" aria-hidden="true">#</a> 2. Functions to use the <em>DisplayName</em>:</h4><p><img src="'+s+'" alt=""></p><table><thead><tr><th style="text-align:left;">Function:</th><th style="text-align:left;">Description:</th></tr></thead><tbody><tr><td style="text-align:left;">Find Child by Display Name (In Name)</td><td style="text-align:left;">Search in children and return the first UIItem that the displayName match input name. Support hierarchy nested search, eg: InName = &quot;Content/ListItem/NameLabel&quot;. Parameter <em>In Name</em> is case sensitive.</td></tr><tr><td style="text-align:left;">Find Child Array by Display Name (In Name)</td><td style="text-align:left;">Like &quot;FindChildByDisplayName&quot;, but return all children that match the case.</td></tr></tbody></table><h4 id="_3-change-uiitem-s-displayname" tabindex="-1"><a class="header-anchor" href="#_3-change-uiitem-s-displayname" aria-hidden="true">#</a> 3. Change UIItem&#39;s DisplayName</h4><p>Like descripted before, UIItem&#39;s <em>DisplayName</em> the same as actor&#39;s label displayed in <em>World Outliner</em>, so just change the actor label in editor.<br> And in runtime, call function <em>SetDisplayName</em> to change it.</p>',8),l=[r];function m(h,o){return t(),a("div",null,l)}const p=e(d,[["render",m],["__file","index.html.vue"]]);export{p as default};
