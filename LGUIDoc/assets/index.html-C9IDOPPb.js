import{_ as n,r as l,c as r,b as t,d as e,e as s,w as i,a,o as d}from"./app-CVfq4vAg.js";const c="/LGUIDoc/assets/TextAnimation-D5RmpQMs.gif",f="/LGUIDoc/assets/1-PyRsUGd5.png",p="/LGUIDoc/assets/2-DI9D3aD6.png",m="/LGUIDoc/assets/3-CJk6MgDb.png",h="/LGUIDoc/assets/4-BCePa9AZ.png",g="/LGUIDoc/assets/5-30rb3NUm.png",y="/LGUIDoc/assets/6-CTAFJSBJ.png",x="/LGUIDoc/assets/7-DaWtH_Bc.png",u="/LGUIDoc/assets/8-C_f9B1YU.png",b="/LGUIDoc/assets/9-CP953jp9.png",_="/LGUIDoc/assets/10-D495Py73.png",v={},P=a('<h1 id="textanimation" tabindex="-1"><a class="header-anchor" href="#textanimation"><span>TextAnimation</span></a></h1><p><img src="'+c+'" alt=""></p><p>Select a UIText actor, add &quot;UIEffectTextAnimation&quot; component:<br><img src="'+f+'" alt=""></p><h2 id="textanimation-component" tabindex="-1"><a class="header-anchor" href="#textanimation-component"><span>TextAnimation Component</span></a></h2><p><img src="'+p+'" alt=""></p>',5),S=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"Property:"),t("th",{style:{"text-align":"left"}},"Function:")])],-1),T=t("tr",null,[t("td",{style:{"text-align":"left"}},"Selector"),t("td",{style:{"text-align":"left"}},"Selector defines the method to select characters in text.")],-1),w=t("tr",null,[t("td",{style:{"text-align":"left"}},"Properties"),t("td",{style:{"text-align":"left"}},"Properties defines which property will affect and how it affect.")],-1),U=t("td",{style:{"text-align":"left"}},"Execute Order",-1),R={style:{"text-align":"left"}},C=t("tr",null,[t("td",{style:{"text-align":"left"}},[e("Basically we use "),t("strong",null,"Selector"),e(" to select range of characters in text, and use "),t("strong",null,"Properties"),e(" to change character's property, then use a animation controller to "),t("strong",null,"Play Animation"),e(".")]),t("td",{style:{"text-align":"left"}})],-1),D=a('<p><strong>Get example from <a href="https://github.com/liufei2008/LGUI_Tutorial" target="_blank" rel="noopener noreferrer">This Project</a>.</strong></p><h2 id="selector" tabindex="-1"><a class="header-anchor" href="#selector"><span>Selector</span></a></h2><p><em>Selector</em> can collect information about which characters are selected, and 0 to 1 interpolation value from start to end, then provide these informations to <em>Properties</em>.<br> There are 3 types of Selector: Range, Random, RichTextTag.</p><p><strong>Range</strong> selector defines start and end range of characters in UIText, and provide 0 to 1 value(for interpolation) from start to end.<br><img src="'+m+'" alt=""></p><table><thead><tr><th style="text-align:left;">Property:</th><th style="text-align:left;">Function:</th></tr></thead><tbody><tr><td style="text-align:left;">Start</td><td style="text-align:left;">Start character position from 0 to 1, 0 is first character of text, 1 is last one.</td></tr><tr><td style="text-align:left;">End</td><td style="text-align:left;">End character position from 0 to 1, 0 is first character of text, 1 is last one.</td></tr><tr><td style="text-align:left;">Offset</td><td style="text-align:left;">0 means <em>Properties</em> will have no effect, 1 means <em>Properties</em> have full effect, and middle value is interplation. We can set this &quot;offset&quot; property to make animation.</td></tr><tr><td style="text-align:left;">Range</td><td style="text-align:left;"><em>Selector</em> can provide 0 to 1 value from start to end, but sometime <em>Properties</em> effect may look too smooth, so lower this value can let <em>Properties</em> effect more sharp.</td></tr><tr><td style="text-align:left;">Flip Direction</td><td style="text-align:left;"><em>Selector</em> can provide 0 to 1 value from start to end when this value is false, if it is true then 1 to 0 from start to end.</td></tr></tbody></table><p><strong>Random</strong> selector will select characters randomly, and generate random value from 0 to 1 for interpolation.<br><img src="'+h+'" alt=""></p><table><thead><tr><th style="text-align:left;">Property:</th><th style="text-align:left;">Function:</th></tr></thead><tbody><tr><td style="text-align:left;">Seed</td><td style="text-align:left;">Random seed.</td></tr><tr><td style="text-align:left;">Start</td><td style="text-align:left;">Start character position from 0 to 1, 0 is first character of text, 1 is last one.</td></tr><tr><td style="text-align:left;">End</td><td style="text-align:left;">End character position from 0 to 1, 0 is first character of text, 1 is last one.</td></tr><tr><td style="text-align:left;">Offset</td><td style="text-align:left;">0 means <em>Properties</em> will have no effect, 1 means <em>Properties</em> have full effect, and middle value is interplation. We can set this &quot;offset&quot; property to make animation.</td></tr></tbody></table><p><strong>RichTextTag</strong> selector can select characters by rich-text custom-tag, and provide 0 to 1 value(for interpolation) from start to end.<br><img src="'+g+'" alt=""></p><table><thead><tr><th style="text-align:left;">Property:</th><th style="text-align:left;">Function:</th></tr></thead><tbody><tr><td style="text-align:left;">Range</td><td style="text-align:left;">Like the property in <strong>Range</strong> selector. Lower this value can let <em>Properties</em> effect more sharp.</td></tr><tr><td style="text-align:left;">Tag Name</td><td style="text-align:left;">Custom tag name</td></tr><tr><td style="text-align:left;">Flip Direction</td><td style="text-align:left;">Like the property in <strong>Range</strong> selector, flip 0-1 to 1-0.</td></tr><tr><td style="text-align:left;">Offset</td><td style="text-align:left;">0 means <em>Properties</em> will have no effect, 1 means <em>Properties</em> have full effect, and middle value is interplation. We can set this &quot;offset&quot; property to make animation.</td></tr></tbody></table><h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties"><span>Properties</span></a></h2><p><em>Properties</em> can use the information that passed from <em>Selector</em>, and apply property change to characters.<br> There are many types of Properties: Alpha, Color, Position, Rotation, Scale, Position Random, Position Wave... The name is what it functional for.</p><p>eg.<br><strong>Alpha</strong> can change transparency of characters.<br><img src="'+y+'" alt=""></p><table><thead><tr><th style="text-align:left;">Property:</th><th style="text-align:left;">Function:</th></tr></thead><tbody><tr><td style="text-align:left;">Alpha</td><td style="text-align:left;">Target alpha value, 0-1 range.</td></tr><tr><td style="text-align:left;">Ease Type</td><td style="text-align:left;">Animation type, same as LTween ease.</td></tr><tr><td style="text-align:left;">Ease Curve</td><td style="text-align:left;">Only valid if easeType = CurveFloat. Use CurveFloat to control the animation.</td></tr></tbody></table><p><strong>ColorRandom</strong> can generate random color.<br><img src="'+x+'" alt=""></p><table><thead><tr><th style="text-align:left;">Property:</th><th style="text-align:left;">Function:</th></tr></thead><tbody><tr><td style="text-align:left;">Seed</td><td style="text-align:left;">Random seed</td></tr><tr><td style="text-align:left;">Min</td><td style="text-align:left;">Random min</td></tr><tr><td style="text-align:left;">Max</td><td style="text-align:left;">Random max</td></tr><tr><td style="text-align:left;">Use HSV</td><td style="text-align:left;">Conver color to HSV(Hue, Saturate, Value) and interpolate, then convert the result back. Interpolate two colors in HSV may look better.</td></tr></tbody></table><p><strong>PositionWave</strong> can use a sin function to generate wave effect for characters.<br><img src="'+u+'" alt=""></p><table><thead><tr><th style="text-align:left;">Property:</th><th style="text-align:left;">Function:</th></tr></thead><tbody><tr><td style="text-align:left;">Position</td><td style="text-align:left;">Max position value for sin wave. Sin function generate values from -1 to 1, so the result will be from -position to position.</td></tr><tr><td style="text-align:left;">Frequency</td><td style="text-align:left;">Higher frequency will generate smaller wavelength.</td></tr><tr><td style="text-align:left;">Speed</td><td style="text-align:left;">Move speed of the wave.</td></tr><tr><td style="text-align:left;">Flip Direction</td><td style="text-align:left;">Flip move speed direction of the wave.</td></tr></tbody></table><p>We can use <strong>multiple properties</strong> to combine our specific effects, the effects will calculate from top to bottom:<br><img src="'+b+'" alt=""></p><h2 id="playanimation" tabindex="-1"><a class="header-anchor" href="#playanimation"><span>PlayAnimation</span></a></h2><p>We can use build-in <strong>LGUIPlayTween</strong> component to control our animation. The key is call function <em>SetSelectorOffset</em> on UIEffectTextAnimation component.<br><img src="'+_+'" alt=""></p>',20);function k(I,L){const o=l("RouteLink");return d(),r("div",null,[P,t("table",null,[S,t("tbody",null,[T,w,t("tr",null,[U,t("td",R,[e("See "),s(o,{to:"/VisualComponents/CommonEffect/"},{default:i(()=>[e("Common Effect")]),_:1})])]),C])]),D])}const F=n(v,[["render",k],["__file","index.html.vue"]]),G=JSON.parse('{"path":"/VisualComponents/TextAnimation/","title":"TextAnimation","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"TextAnimation Component","slug":"textanimation-component","link":"#textanimation-component","children":[]},{"level":2,"title":"Selector","slug":"selector","link":"#selector","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[]},{"level":2,"title":"PlayAnimation","slug":"playanimation","link":"#playanimation","children":[]}],"git":{"updatedTime":1685406463000,"contributors":[{"name":"lf2007hf","email":"707908214@qq.com","commits":1}]},"filePathRelative":"VisualComponents/TextAnimation/index.md"}');export{F as comp,G as data};