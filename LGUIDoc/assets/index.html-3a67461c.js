import{_ as e,o as t,c as o,a}from"./app-0f69a3bd.js";const s="/LGUIDoc/assets/1.1-ee726168.png",r="/LGUIDoc/assets/1.2-ec89715a.png",i="/LGUIDoc/assets/1.3-01d80a54.png",n="/LGUIDoc/assets/1.4-53774ae1.png",l="/LGUIDoc/assets/2.1-27904e45.png",m="/LGUIDoc/assets/2.2-8d7d6a17.png",c="/LGUIDoc/assets/2.3-345a94ba.png",p="/LGUIDoc/assets/2.4-dd5e26e4.png",d="/LGUIDoc/assets/3.1-6c54f587.png",u="/LGUIDoc/assets/3.2-defbf297.png",h="/LGUIDoc/assets/3.3-240706f2.png",g="/LGUIDoc/assets/3.4-d26800d8.png",U="/LGUIDoc/assets/3.5-758ebced.png",I="/LGUIDoc/assets/3.6-27527c73.png",f="/LGUIDoc/assets/3.7-c281093c.png",_="/LGUIDoc/assets/3.8-81e37c46.png",x={},G=a('<h1 id="use-custom-material-for-ui-elements" tabindex="-1"><a class="header-anchor" href="#use-custom-material-for-ui-elements" aria-hidden="true">#</a> Use custom material for UI elements</h1><p>LGUI can use custom material to change the look of our UI elements.<br> Note You should use <strong>Surface</strong> material domain in LGUI&#39;s material, because LGUI is 3d UI, it still need 3d information.</p><h4 id="examples-1-use-a-emissive-material-to-make-our-text-glow" tabindex="-1"><a class="header-anchor" href="#examples-1-use-a-emissive-material-to-make-our-text-glow" aria-hidden="true">#</a> Examples 1, use a emissive material to make our text glow.</h4><p>Note: Glow is a world space post process effect, so only <strong>World Space UE Renderer</strong> can do this, and post process setting must enable glow.</p><ol><li>First of all, copy material <em>LGUI_Base</em> from <em>LGUI Content/ Material</em> folder (You may need to check <em>Show Plugin Content</em> if it is not visible), and paste it to your project content directory.</li><li>Add some nodes to the material like the image below:<br><img src="'+s+'" alt=""></li><li>Since UIText use SDF as default, so we need to check on &quot;Is SDF Font&quot; Switch Param:<br><img src="'+r+'" alt=""></li><li>Select a UIText, and drag the material you just modified to <em>Custom Material</em> slot:<br><img src="'+i+'" alt=""> Now the text should look glow: <img src="'+n+'" alt=""></li></ol><h4 id="example-2-use-texture-to-maskout-our-sprite" tabindex="-1"><a class="header-anchor" href="#example-2-use-texture-to-maskout-our-sprite" aria-hidden="true">#</a> Example 2, use texture to maskout our sprite.</h4><p>Note: UISprite render a UISpriteData. UISpriteData contains the info of a small area from a packed atlas texture.</p><ol><li>First of all, copy material <em>LGUI_Base</em> from <em>LGUI Content/ Material</em> folder (You may need to check <em>Show Plugin Content</em> if it is not visible). And paste it to your project content directory.</li><li>Add some nodes to the material like the image below (note the mask texture&#39;s <em>TexCoord[1]</em>, and don&#39;t forget to select a mask texture for <em>Texture Sample</em> node):<br><img src="'+l+'" alt=""></li><li>Select a UISprite, and drag the material you just modifyed to <em>Custom Material</em> slot:<br><img src="'+m+'" alt=""></li><li>Now the UISprite look not right, because we have not tell LGUI to setup the data for <em>TexCoord[1]</em>. Select LGUICanvas component from WorldSpaceUIRoot actor, in the <em>Additional Shader Channels</em> property, check on <em>UV1</em>.<br><img src="'+c+'" alt=""> Now the result should be good:<br><img src="'+p+'" alt=""> Why use <em>TexCoord[1]</em>? Because LGUI provide a common rect 0-1 range for UISprite in <em>TexCoord[1]</em>. <em>TexCoord[0]</em> is for sprite atlas, which is not 0-1 range.</li></ol><h4 id="example-3-use-lguicanvas-builtin-rectclip-and-textureclip-in-our-custom-material" tabindex="-1"><a class="header-anchor" href="#example-3-use-lguicanvas-builtin-rectclip-and-textureclip-in-our-custom-material" aria-hidden="true">#</a> Example 3, use LGUICanvas builtin RectClip and TextureClip in our custom material.</h4><p>LGUI provide preset material functions <strong>LGUIRectClip</strong> and <strong>LGUITextureClip</strong> for LGUICanvas builtin RectClip and TextureClip, you can find it in &quot;LGUI Content&quot; folder:<br><img src="'+d+'" alt=""> You can use it in any material, the key is use the material function&#39;s result as your Opacity input of material. Let&#39;s start to do it.</p><p>First create a <em>World Space UI - UE Renderer</em>, delete default &quot;Frame&quot; and &quot;Info&quot; node, and create a UISprite actor with name &quot;ClipSprite&quot;, change size to 300x300:<br><img src="'+u+'" alt=""></p><p>Then create our own material like the image beblow:<br><img src="'+h+'" alt=""></p><p>Drag <em>LGUIRectClip</em> node to the material and link it:<br><img src="'+g+'" alt=""></p><p>Select LGUICanvas component from WorldSpaceUIRoot actor, change <em>Clip Type</em> to <em>Rect</em>:<br><img src="'+U+'" alt=""></p><p>Drag the material to &quot;ClipSprite&quot;:<br><img src="'+I+'" alt=""></p><p>Now drag the UISprite actor to the edge of WorldSpaceUIRoot, see it is clipped: <img src="'+f+'" alt=""> texture-clip is the same thing, just repace the <em>LGUIRectClip</em> with node <em>LGUITextureClip</em>: <img src="'+_+'" alt=""></p>',16),L=[G];function b(C,S){return t(),o("div",null,L)}const w=e(x,[["render",b],["__file","index.html.vue"]]);export{w as default};