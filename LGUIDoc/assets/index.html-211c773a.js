import{_ as s,r as a,o as i,c as d,b as t,d as e,e as o,w as c,a as n}from"./app-6f31cbcb.js";const f="/LGUIDoc/assets/TextAnimation-0d9e85c9.gif",m="/LGUIDoc/assets/1-1f8b8c46.png",h="/LGUIDoc/assets/2-7c16ed13.png",p="/LGUIDoc/assets/3-80e5a655.png",g="/LGUIDoc/assets/4-9fedef3d.png",y="/LGUIDoc/assets/5-9190fd96.png",x="/LGUIDoc/assets/6-9334aa0f.png",u="/LGUIDoc/assets/7-3a614f20.png",_="/LGUIDoc/assets/8-b952e828.png",b="/LGUIDoc/assets/9-c59719b3.png",v="/LGUIDoc/assets/10-e1883439.png",P={},S=n('<h1 id="textanimation" tabindex="-1"><a class="header-anchor" href="#textanimation" aria-hidden="true">#</a> TextAnimation</h1><p><img src="'+f+'" alt=""></p><p>Select a UIText actor, add &quot;UIEffectTextAnimation&quot; component:<br><img src="'+m+'" alt=""></p><h2 id="textanimation-component" tabindex="-1"><a class="header-anchor" href="#textanimation-component" aria-hidden="true">#</a> TextAnimation Component</h2><p><img src="'+h+'" alt=""></p>',5),w=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"Property:"),t("th",{style:{"text-align":"left"}},"Function:")])],-1),T=t("tr",null,[t("td",{style:{"text-align":"left"}},"Selector"),t("td",{style:{"text-align":"left"}},"Selector defines the method to select characters in text.")],-1),L=t("tr",null,[t("td",{style:{"text-align":"left"}},"Properties"),t("td",{style:{"text-align":"left"}},"Properties defines which property will affect and how it affect.")],-1),I=t("td",{style:{"text-align":"left"}},"Execute Order",-1),R={style:{"text-align":"left"}},U=t("tr",null,[t("td",{style:{"text-align":"left"}},[e("Basically we use "),t("strong",null,"Selector"),e(" to select range of characters in text, and use "),t("strong",null,"Properties"),e(" to change character's property, then use a animation controller to "),t("strong",null,"Play Animation"),e(".")]),t("td",{style:{"text-align":"left"}})],-1),k={href:"https://github.com/liufei2008/LGUI_Tutorial",target:"_blank",rel:"noopener noreferrer"},D=n('<h2 id="selector" tabindex="-1"><a class="header-anchor" href="#selector" aria-hidden="true">#</a> Selector</h2><p><em>Selector</em> can collect information about which characters are selected, and 0 to 1 interpolation value from start to end, then provide these informations to <em>Properties</em>.<br> There are 3 types of Selector: Range, Random, RichTextTag.</p><p><strong>Range</strong> selector defines start and end range of characters in UIText, and provide 0 to 1 value(for interpolation) from start to end.<br><img src="'+p+'" alt=""></p><table><thead><tr><th style="text-align:left;">Property:</th><th style="text-align:left;">Function:</th></tr></thead><tbody><tr><td style="text-align:left;">Start</td><td style="text-align:left;">Start character position from 0 to 1, 0 is first character of text, 1 is last one.</td></tr><tr><td style="text-align:left;">End</td><td style="text-align:left;">End character position from 0 to 1, 0 is first character of text, 1 is last one.</td></tr><tr><td style="text-align:left;">Offset</td><td style="text-align:left;">0 means <em>Properties</em> will have no effect, 1 means <em>Properties</em> have full effect, and middle value is interplation. We can set this &quot;offset&quot; property to make animation.</td></tr><tr><td style="text-align:left;">Range</td><td style="text-align:left;"><em>Selector</em> can provide 0 to 1 value from start to end, but sometime <em>Properties</em> effect may look too smooth, so lower this value can let <em>Properties</em> effect more sharp.</td></tr><tr><td style="text-align:left;">Flip Direction</td><td style="text-align:left;"><em>Selector</em> can provide 0 to 1 value from start to end when this value is false, if it is true then 1 to 0 from start to end.</td></tr></tbody></table><p><strong>Random</strong> selector will select characters randomly, and generate random value from 0 to 1 for interpolation.<br><img src="'+g+'" alt=""></p><table><thead><tr><th style="text-align:left;">Property:</th><th style="text-align:left;">Function:</th></tr></thead><tbody><tr><td style="text-align:left;">Seed</td><td style="text-align:left;">Random seed.</td></tr><tr><td style="text-align:left;">Start</td><td style="text-align:left;">Start character position from 0 to 1, 0 is first character of text, 1 is last one.</td></tr><tr><td style="text-align:left;">End</td><td style="text-align:left;">End character position from 0 to 1, 0 is first character of text, 1 is last one.</td></tr><tr><td style="text-align:left;">Offset</td><td style="text-align:left;">0 means <em>Properties</em> will have no effect, 1 means <em>Properties</em> have full effect, and middle value is interplation. We can set this &quot;offset&quot; property to make animation.</td></tr></tbody></table><p><strong>RichTextTag</strong> selector can select characters by rich-text custom-tag, and provide 0 to 1 value(for interpolation) from start to end.<br><img src="'+y+'" alt=""></p><table><thead><tr><th style="text-align:left;">Property:</th><th style="text-align:left;">Function:</th></tr></thead><tbody><tr><td style="text-align:left;">Range</td><td style="text-align:left;">Like the property in <strong>Range</strong> selector. Lower this value can let <em>Properties</em> effect more sharp.</td></tr><tr><td style="text-align:left;">Tag Name</td><td style="text-align:left;">Custom tag name</td></tr><tr><td style="text-align:left;">Flip Direction</td><td style="text-align:left;">Like the property in <strong>Range</strong> selector, flip 0-1 to 1-0.</td></tr><tr><td style="text-align:left;">Offset</td><td style="text-align:left;">0 means <em>Properties</em> will have no effect, 1 means <em>Properties</em> have full effect, and middle value is interplation. We can set this &quot;offset&quot; property to make animation.</td></tr></tbody></table><h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><p><em>Properties</em> can use the information that passed from <em>Selector</em>, and apply property change to characters.<br> There are many types of Properties: Alpha, Color, Position, Rotation, Scale, Position Random, Position Wave... The name is what it functional for.</p><p>eg.<br><strong>Alpha</strong> can change transparency of characters.<br><img src="'+x+'" alt=""></p><table><thead><tr><th style="text-align:left;">Property:</th><th style="text-align:left;">Function:</th></tr></thead><tbody><tr><td style="text-align:left;">Alpha</td><td style="text-align:left;">Target alpha value, 0-1 range.</td></tr><tr><td style="text-align:left;">Ease Type</td><td style="text-align:left;">Animation type, same as LTween ease.</td></tr><tr><td style="text-align:left;">Ease Curve</td><td style="text-align:left;">Only valid if easeType = CurveFloat. Use CurveFloat to control the animation.</td></tr></tbody></table><p><strong>ColorRandom</strong> can generate random color.<br><img src="'+u+'" alt=""></p><table><thead><tr><th style="text-align:left;">Property:</th><th style="text-align:left;">Function:</th></tr></thead><tbody><tr><td style="text-align:left;">Seed</td><td style="text-align:left;">Random seed</td></tr><tr><td style="text-align:left;">Min</td><td style="text-align:left;">Random min</td></tr><tr><td style="text-align:left;">Max</td><td style="text-align:left;">Random max</td></tr><tr><td style="text-align:left;">Use HSV</td><td style="text-align:left;">Conver color to HSV(Hue, Saturate, Value) and interpolate, then convert the result back. Interpolate two colors in HSV may look better.</td></tr></tbody></table><p><strong>PositionWave</strong> can use a sin function to generate wave effect for characters.<br><img src="'+_+'" alt=""></p><table><thead><tr><th style="text-align:left;">Property:</th><th style="text-align:left;">Function:</th></tr></thead><tbody><tr><td style="text-align:left;">Position</td><td style="text-align:left;">Max position value for sin wave. Sin function generate values from -1 to 1, so the result will be from -position to position.</td></tr><tr><td style="text-align:left;">Frequency</td><td style="text-align:left;">Higher frequency will generate smaller wavelength.</td></tr><tr><td style="text-align:left;">Speed</td><td style="text-align:left;">Move speed of the wave.</td></tr><tr><td style="text-align:left;">Flip Direction</td><td style="text-align:left;">Flip move speed direction of the wave.</td></tr></tbody></table><p>We can use <strong>multiple properties</strong> to combine our specific effects, the effects will calculate from top to bottom:<br><img src="'+b+'" alt=""></p><h2 id="playanimation" tabindex="-1"><a class="header-anchor" href="#playanimation" aria-hidden="true">#</a> PlayAnimation</h2><p>We can use build-in <strong>LGUIPlayTween</strong> component to control our animation. The key is call function <em>SetSelectorOffset</em> on UIEffectTextAnimation component.<br><img src="'+v+'" alt=""></p>',19);function E(F,G){const l=a("RouterLink"),r=a("ExternalLinkIcon");return i(),d("div",null,[S,t("table",null,[w,t("tbody",null,[T,L,t("tr",null,[I,t("td",R,[e("See "),o(l,{to:"/VisualComponents/CommonEffect/"},{default:c(()=>[e("Common Effect")]),_:1})])]),U])]),t("p",null,[t("strong",null,[e("Get example from "),t("a",k,[e("This Project"),o(r)]),e(".")])]),D])}const A=s(P,[["render",E],["__file","index.html.vue"]]);export{A as default};