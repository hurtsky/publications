(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{330:function(e,a,t){"use strict";t.r(a);var o=t(0),n=t.n(o),r=t(318),c=t(317),i=t(196),l=t(361),d=t(373),s=t(1),p=t(2),m=(t(3),t(4)),b=t(5),u=t(362),g=n.a.forwardRef(function(e,a){var t=e.action,o=e.avatar,r=e.classes,c=e.className,i=e.component,l=void 0===i?"div":i,d=e.disableTypography,b=void 0!==d&&d,g=e.subheader,f=e.subheaderTypographyProps,h=e.title,y=e.titleTypographyProps,v=Object(p.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),x=h;null==x||x.type===u.a||b||(x=n.a.createElement(u.a,Object(s.a)({variant:o?"body2":"h5",className:r.title,component:"span",display:"block"},y),x));var O=g;return null==O||O.type===u.a||b||(O=n.a.createElement(u.a,Object(s.a)({variant:o?"body2":"body1",className:r.subheader,color:"textSecondary",component:"span",display:"block"},f),O)),n.a.createElement(l,Object(s.a)({className:Object(m.a)(r.root,c),ref:a},v),o&&n.a.createElement("div",{className:r.avatar},o),n.a.createElement("div",{className:r.content},x,O),t&&n.a.createElement("div",{className:r.action},t))}),f=Object(b.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(g),h=(t(11),["video","audio","picture","iframe","img"]),y=n.a.forwardRef(function(e,a){var t=e.children,o=e.classes,r=e.className,c=e.component,i=void 0===c?"div":c,l=e.image,d=e.src,b=e.style,u=Object(p.a)(e,["children","classes","className","component","image","src","style"]);var g=-1!==h.indexOf(i),f=!g&&l?Object(s.a)({backgroundImage:'url("'.concat(l,'")')},b):b;return n.a.createElement(i,Object(s.a)({className:Object(m.a)(o.root,r,g&&o.media,-1!=="picture img".indexOf(i)&&o.img),ref:a,style:f,src:g?l||d:void 0},u),t)}),v=Object(b.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(y),x=t(374),O=t(375),S=t(383),j=t.n(S),C=t(376),k=t(382),E=Object(i.a)(function(e){return{card:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},media:{height:500}}});a.default=function(){var e=E();return n.a.createElement(r.a,null,n.a.createElement(c.a,{title:"Welcome to SEAMEO SEN Publication Site"}),n.a.createElement(l.a,{container:!0,spacing:2},k.conferences.map(function(a,t){return n.a.createElement(l.a,{key:t,item:!0,xs:12,sm:12,md:6,lg:4},n.a.createElement(d.a,{className:e.card},n.a.createElement(v,{className:e.media,image:a.confImgCover,title:a.confName}),n.a.createElement(f,{title:a.confName,subheader:a.confTheme}),n.a.createElement(x.a,null,a.place),n.a.createElement(O.a,null,n.a.createElement(C.a,{size:"big",color:"primary",href:a.page,variant:"contained",startIcon:n.a.createElement(j.a,null)},"READ MORE"))))})))}},373:function(e,a,t){"use strict";var o=t(1),n=t(2),r=t(0),c=t.n(r),i=(t(3),t(4)),l=t(364),d=t(5),s=c.a.forwardRef(function(e,a){var t=e.classes,r=e.className,d=e.raised,s=void 0!==d&&d,p=Object(n.a)(e,["classes","className","raised"]);return c.a.createElement(l.a,Object(o.a)({className:Object(i.a)(t.root,r),elevation:s?8:1,ref:a},p))});a.a=Object(d.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},374:function(e,a,t){"use strict";var o=t(1),n=t(2),r=t(0),c=t.n(r),i=(t(3),t(4)),l=t(5),d=c.a.forwardRef(function(e,a){var t=e.classes,r=e.className,l=e.component,d=void 0===l?"div":l,s=Object(n.a)(e,["classes","className","component"]);return c.a.createElement(d,Object(o.a)({className:Object(i.a)(t.root,r),ref:a},s))});a.a=Object(l.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(d)},375:function(e,a,t){"use strict";var o=t(1),n=t(2),r=t(0),c=t.n(r),i=(t(3),t(4)),l=t(5),d=c.a.forwardRef(function(e,a){var t=e.disableSpacing,r=void 0!==t&&t,l=e.classes,d=e.className,s=Object(n.a)(e,["disableSpacing","classes","className"]);return c.a.createElement("div",Object(o.a)({className:Object(i.a)(l.root,d,!r&&l.spacing),ref:a},s))});a.a=Object(l.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > * + *":{marginLeft:8}}},{name:"MuiCardActions"})(d)},376:function(e,a,t){"use strict";var o=t(2),n=t(1),r=t(0),c=t.n(r),i=(t(3),t(4)),l=t(5),d=t(48),s=t(314),p=t(10),m=c.a.forwardRef(function(e,a){var t=e.children,r=e.classes,l=e.className,d=e.color,m=void 0===d?"default":d,b=e.component,u=void 0===b?"button":b,g=e.disabled,f=void 0!==g&&g,h=e.disableFocusRipple,y=void 0!==h&&h,v=e.endIcon,x=e.focusVisibleClassName,O=e.fullWidth,S=void 0!==O&&O,j=e.size,C=void 0===j?"medium":j,k=e.startIcon,E=e.type,N=void 0===E?"button":E,z=e.variant,w=void 0===z?"text":z,R=Object(o.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),I=k&&c.a.createElement("span",{className:Object(i.a)(r.startIcon,r["iconSize".concat(Object(p.a)(C))])},k),T=v&&c.a.createElement("span",{className:Object(i.a)(r.endIcon,r["iconSize".concat(Object(p.a)(C))])},v);return c.a.createElement(s.a,Object(n.a)({className:Object(i.a)(r.root,r[w],r["".concat(w).concat("default"!==m&&"inherit"!==m?Object(p.a)(m):"")],l,"medium"!==C&&[r["".concat(w,"Size").concat(Object(p.a)(C))],r["size".concat(Object(p.a)(C))]],f&&r.disabled,S&&r.fullWidth,{inherit:r.colorInherit}[m]),component:u,disabled:f,focusRipple:!y,focusVisibleClassName:Object(i.a)(r.focusVisible,x),ref:a,type:N},R),c.a.createElement("span",{className:r.label},I,t,T))});a.a=Object(l.a)(function(e){return{root:Object(n.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(d.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(d.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(d.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(d.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(d.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(d.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(d.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4},endIcon:{display:"inherit",marginRight:-4,marginLeft:8},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}},{name:"MuiButton"})(m)},382:function(e){e.exports=JSON.parse('{"conferences":[{"confName":"ICSE Proceeding 2019","confTheme":"Elevating Innovation for Sustainable Development of Special Needs Education","date":"13 - 15 July 2019","place":"Shangri La Hotel, Surabaya, Indonesia","page":"/proc2019/","confImgCover":"/img/icse2019cover.jpg"},{"confName":"ICSE Proceeding 2017","confTheme":"Access and Engagement","date":"31 July -  2 Ogos 2017","place":"Borneo Convention Centre Kuching, Sarawak, Malaysia","page":"/proc2017/","confImgCover":"/img/icse2017cover.jpg"}]}')},383:function(e,a,t){"use strict";t(34);var o=t(16);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=o(t(0)),r=(0,o(t(81)).default)(n.default.createElement(n.default.Fragment,null,n.default.createElement("path",{d:"M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"}),n.default.createElement("path",{d:"M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83zM17.5 14.33c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z"})),"MenuBook");a.default=r}}]);
//# sourceMappingURL=component---src-pages-index-js-2a9ab8f7e8633dd04f8a.js.map