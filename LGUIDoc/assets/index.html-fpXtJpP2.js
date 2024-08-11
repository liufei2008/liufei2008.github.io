import{_ as e,c as t,o,a as r}from"./app-CGRYBoMb.js";const a={},n=r('<h1 id="update-project-from-lgui2-to-lgui3" tabindex="-1"><a class="header-anchor" href="#update-project-from-lgui2-to-lgui3"><span>Update project from LGUI2 to LGUI3</span></a></h1><p>Follow this page to upgrade your LGUI2 project to LGUI3.</p><p><strong>CAUTION!!!</strong> LGUI3 is not fully compatible with LGUI2, follow this video to upgrade your project to LGUI3: <a href="https://youtu.be/PSFG3nAJRHE" target="_blank" rel="noopener noreferrer">Youtube</a> <a href="https://www.bilibili.com/video/BV1sa411y7Zf?share_source=copy_web" target="_blank" rel="noopener noreferrer">Bilibili</a> , but I can&#39;t guarantee this convertion is good for every project.</p><h4 id="changes-in-lgui3" tabindex="-1"><a class="header-anchor" href="#changes-in-lgui3"><span>Changes in LGUI3:</span></a></h4><ul><li><strong>Coornidate system</strong>: from Unity-like (x-right, y-up, z-forward) to UE-like (x-forward, y-right, z-up) coordinate system.</li><li><strong>Color property</strong>: UIItem.Widget.Color moved to UIBaseRenderable.Color.</li><li><strong>UICanvasGroup</strong>: Handle children UI element&#39;s opacity and interactable.</li><li><strong>Anchor system</strong>: LGUI3 use AnchorMin/AnchorMax/AnchoredPosition/SizeDelta anchor system, just like Unity&#39;s, clean and predictable.</li><li><strong>Name redirect</strong>: eg. LGUIDrawableEvent to LGUIEventDelegate, AwakeBP to ReceiveAwake, StartBP to ReceiveStart, XXXBP to ReceiveXXX. Blueprint can automatic convert with no extral work, C++ can check LGUI/Config/DefaultLGUI.ini to see all these changes.</li></ul>',5),i=[n];function l(s,c){return o(),t("div",null,i)}const d=e(a,[["render",l],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/FAQ/UpdateTo3/","title":"Update project from LGUI2 to LGUI3","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1685406463000,"contributors":[{"name":"lf2007hf","email":"707908214@qq.com","commits":1}]},"filePathRelative":"FAQ/UpdateTo3/index.md"}');export{d as comp,h as data};
