(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{zXKl:function(e,o,t){"use strict";t.d(o,"a",(function(){return g}));var r=t("WOvX"),n=t("mrSG"),i=t("q1tI"),a=t("9h5o"),c=t("ybKx"),d=t("Zpaa"),s=t("WJ1O"),l=t("mWkG"),b=t("DeEv"),h=t("j0ZI"),u=Object(a.a)(),k=function(e){function o(o,t){var r=e.call(this,o,t)||this;return r._checkBox=i.createRef(),r._renderContent=function(e,o,t){void 0===t&&(t={});var a=r.props,s=a.disabled,l=a.inputProps,h=a.name,u=a.ariaLabel,k=a.ariaLabelledBy,p=a.ariaDescribedBy,m=a.onRenderLabel,x=void 0===m?r._onRenderLabel:m,g=a.checkmarkIconProps,f=a.ariaPositionInSet,C=a.ariaSetSize,v=a.title,y=a.label;return i.createElement("div",{className:r._classNames.root,title:v},i.createElement(c.a,null),i.createElement("input",Object(n.a)({type:"checkbox"},l,{"data-ktp-execute-target":t["data-ktp-execute-target"],checked:e,disabled:s,className:r._classNames.input,ref:r._checkBox,name:h,id:r._id,title:v,onChange:r._onChange,onFocus:r._onFocus,onBlur:r._onBlur,"aria-disabled":s,"aria-label":u||y,"aria-labelledby":k,"aria-describedby":Object(d.a)(p,t["aria-describedby"]),"aria-posinset":f,"aria-setsize":C,"aria-checked":o?"mixed":e?"true":"false"})),i.createElement("label",{className:r._classNames.label,htmlFor:r._id},i.createElement("div",{className:r._classNames.checkbox,"data-ktp-target":t["data-ktp-target"]},i.createElement(b.a,Object(n.a)({iconName:"CheckMark"},g,{className:r._classNames.checkmark}))),x(r.props,r._onRenderLabel)))},r._onFocus=function(e){var o=r.props.inputProps;o&&o.onFocus&&o.onFocus(e)},r._onBlur=function(e){var o=r.props.inputProps;o&&o.onBlur&&o.onBlur(e)},r._onChange=function(e){var o=r.props.onChange,t=r.state,n=t.isChecked;t.isIndeterminate?(o&&o(e,n),void 0===r.props.indeterminate&&r.setState({isIndeterminate:!1})):(o&&o(e,!n),void 0===r.props.checked&&r.setState({isChecked:!n}))},r._onRenderLabel=function(e){var o=e.label,t=e.title;return o?i.createElement("span",{"aria-hidden":"true",className:r._classNames.text,title:t},o):null},Object(s.a)(r),r._id=r.props.id||Object(l.a)("checkbox-"),r.state={isChecked:!!(void 0!==o.checked?o.checked:o.defaultChecked),isIndeterminate:!!(void 0!==o.indeterminate?o.indeterminate:o.defaultIndeterminate)},r}return Object(n.c)(o,e),o.getDerivedStateFromProps=function(e,o){var t={};return void 0!==e.indeterminate&&(t.isIndeterminate=!!e.indeterminate),void 0!==e.checked&&(t.isChecked=!!e.checked),Object.keys(t).length?t:null},o.prototype.render=function(){var e=this,o=this.props,t=o.className,r=o.disabled,n=o.boxSide,a=o.theme,c=o.styles,d=o.onRenderLabel,s=void 0===d?this._onRenderLabel:d,l=o.keytipProps,b=this.state,k=b.isChecked,p=b.isIndeterminate;return this._classNames=u(c,{theme:a,className:t,disabled:r,indeterminate:p,checked:k,reversed:"start"!==n,isUsingCustomLabelRender:s!==this._onRenderLabel}),l?i.createElement(h.a,{keytipProps:l,disabled:r},(function(o){return e._renderContent(k,p,o)})):this._renderContent(k,p)},Object.defineProperty(o.prototype,"indeterminate",{get:function(){return!!this.state.isIndeterminate},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"checked",{get:function(){return!!this.state.isChecked},enumerable:!0,configurable:!0}),o.prototype.focus=function(){this._checkBox.current&&this._checkBox.current.focus()},o.defaultProps={boxSide:"start"},o}(i.Component),p=t("tqYG"),m=t("LQdl"),x={root:"ms-Checkbox",label:"ms-Checkbox-label",checkbox:"ms-Checkbox-checkbox",checkmark:"ms-Checkbox-checkmark",text:"ms-Checkbox-text"},g=Object(r.a)(k,(function(e){var o,t,r,i,a,c,d,s,l,b,h,u,k,g,f,C,v,y,_=e.className,j=e.theme,w=e.reversed,O=e.checked,B=e.disabled,S=e.isUsingCustomLabelRender,N=e.indeterminate,T=j.semanticColors,H=j.effects,L=j.palette,P=j.fonts,R=Object(p.s)(x,j),W=T.inputForegroundChecked,I=L.neutralSecondary,E=L.neutralPrimary,F=T.inputBackgroundChecked,z=T.inputBackgroundChecked,G=T.disabledBodySubtext,D=T.inputBorderHovered,J=T.inputBackgroundCheckedHovered,q=T.inputBackgroundChecked,K=T.inputBackgroundCheckedHovered,U=T.inputBackgroundCheckedHovered,X=T.inputTextHovered,Z=T.disabledBodySubtext,M=T.bodyText,Q=T.disabledText,Y=[(o={content:'""',borderRadius:H.roundedCorner2,position:"absolute",width:10,height:10,top:4,left:4,boxSizing:"border-box",borderWidth:5,borderStyle:"solid",borderColor:B?G:F,transitionProperty:"border-width, border, border-color",transitionDuration:"200ms",transitionTimingFunction:"cubic-bezier(.4, 0, .23, 1)"},o[p.d]={borderColor:"WindowText"},o)];return{root:[R.root,{position:"relative",display:"flex"},w&&"reversed",O&&"is-checked",!B&&"is-enabled",B&&"is-disabled",!B&&[!O&&(t={},t[":hover ."+R.checkbox]=(r={borderColor:D},r[p.d]={borderColor:"Highlight"},r),t[":focus ."+R.checkbox]={borderColor:D},t[":hover ."+R.checkmark]=(i={color:I,opacity:"1"},i[p.d]={color:"Highlight"},i),t),O&&!N&&(a={},a[":hover ."+R.checkbox]={background:K,borderColor:U},a[":focus ."+R.checkbox]={background:K,borderColor:U},a[p.d]=(c={},c[":hover ."+R.checkbox]={background:"Highlight",borderColor:"Highlight"},c[":focus ."+R.checkbox]={background:"Highlight"},c[":focus:hover ."+R.checkbox]={background:"Highlight"},c[":focus:hover ."+R.checkmark]={color:"Window"},c[":hover ."+R.checkmark]={color:"Window"},c),a),N&&(d={},d[":hover ."+R.checkbox+", :hover ."+R.checkbox+":after"]=(s={borderColor:J},s[p.d]={borderColor:"WindowText"},s),d[":focus ."+R.checkbox]={borderColor:J},d[":hover ."+R.checkmark]={opacity:"0"},d),(l={},l[":hover ."+R.text+", :focus ."+R.text]=(b={color:X},b[p.d]={color:B?"GrayText":"WindowText"},b),l)],_],input:(h={position:"absolute",background:"none",opacity:0},h["."+m.a+" &:focus + label::before"]=(u={outline:"1px solid "+j.palette.neutralSecondary,outlineOffset:"2px"},u[p.d]={outline:"1px solid WindowText"},u),h),label:[R.label,j.fonts.medium,{display:"flex",alignItems:S?"center":"flex-start",cursor:B?"default":"pointer",position:"relative",userSelect:"none"},w&&{flexDirection:"row-reverse",justifyContent:"flex-end"},{"&::before":{position:"absolute",left:0,right:0,top:0,bottom:0,content:'""',pointerEvents:"none"}}],checkbox:[R.checkbox,(k={position:"relative",display:"flex",flexShrink:0,alignItems:"center",justifyContent:"center",height:"20px",width:"20px",border:"1px solid "+E,borderRadius:H.roundedCorner2,boxSizing:"border-box",transitionProperty:"background, border, border-color",transitionDuration:"200ms",transitionTimingFunction:"cubic-bezier(.4, 0, .23, 1)",overflow:"hidden",":after":N?Y:null},k[p.d]=Object(n.a)({borderColor:"WindowText"},Object(p.t)()),k),N&&{borderColor:F},w?{marginLeft:4}:{marginRight:4},!B&&!N&&O&&(g={background:q,borderColor:z},g[p.d]={background:"Highlight",borderColor:"Highlight"},g),B&&(f={borderColor:G},f[p.d]={borderColor:"GrayText"},f),O&&B&&(C={background:Z,borderColor:G},C[p.d]={background:"Window"},C)],checkmark:[R.checkmark,(v={opacity:O?"1":"0",color:W},v[p.d]=Object(n.a)({color:B?"GrayText":"Window"},Object(p.t)()),v)],text:[R.text,(y={color:B?Q:M,fontSize:P.medium.fontSize,lineHeight:"20px"},y[p.d]=Object(n.a)({color:B?"GrayText":"WindowText"},Object(p.t)()),y),w?{marginRight:4}:{marginLeft:4}]}}),void 0,{scope:"Checkbox"})}}]);
//# sourceMappingURL=vendor.office-ui-fabric-react~4dda72ba.04b1072ed5745e468895.bundle.map