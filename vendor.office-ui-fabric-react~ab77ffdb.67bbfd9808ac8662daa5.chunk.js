(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{C6uA:function(e,i,s){"use strict";s.d(i,"b",(function(){return n})),s.d(i,"a",(function(){return o})),s.d(i,"d",(function(){return r})),s.d(i,"e",(function(){return c})),s.d(i,"c",(function(){return z}));var t,n,o,a=s("vTSs");!function(e){e.size8="20px",e.size10="20px",e.size16="16px",e.size24="24px",e.size28="28px",e.size32="32px",e.size40="40px",e.size48="48px",e.size56="56px",e.size72="72px",e.size100="100px",e.size120="120px"}(n||(n={})),function(e){e.size6="6px",e.size8="8px",e.size12="12px",e.size16="16px",e.size20="20px",e.size28="28px",e.size32="32px",e.border="2px"}(o||(o={}));var r=function(e){return{isSize8:e===a.c.size8,isSize10:e===a.c.size10||e===a.c.tiny,isSize16:e===a.c.size16,isSize24:e===a.c.size24||e===a.c.extraExtraSmall,isSize28:e===a.c.size28||e===a.c.extraSmall,isSize32:e===a.c.size32,isSize40:e===a.c.size40||e===a.c.small,isSize48:e===a.c.size48||e===a.c.regular,isSize56:e===a.c.size56,isSize72:e===a.c.size72||e===a.c.large,isSize100:e===a.c.size100||e===a.c.extraLarge,isSize120:e===a.c.size120}},c=((t={})[a.c.tiny]=10,t[a.c.extraExtraSmall]=24,t[a.c.extraSmall]=28,t[a.c.small]=40,t[a.c.regular]=48,t[a.c.large]=72,t[a.c.extraLarge]=100,t[a.c.size8]=8,t[a.c.size10]=10,t[a.c.size16]=16,t[a.c.size24]=24,t[a.c.size28]=28,t[a.c.size32]=32,t[a.c.size40]=40,t[a.c.size48]=48,t[a.c.size56]=56,t[a.c.size72]=72,t[a.c.size100]=100,t[a.c.size120]=120,t),z=function(e){return{isAvailable:e===a.b.online,isAway:e===a.b.away,isBlocked:e===a.b.blocked,isBusy:e===a.b.busy,isDoNotDisturb:e===a.b.dnd,isOffline:e===a.b.offline}}},RZZA:function(e,i,s){"use strict";s.d(i,"a",(function(){return v}));var t=s("WOvX"),n=s("mrSG"),o=s("q1tI"),a=s("9h5o"),r=s("xL1/"),c=s("FbcY"),z=s("7nsc"),l=s("e06V"),m=s("tqYG"),p=s("v74v"),d=s("DeEv"),h=s("RNC2"),u=s("vk17"),g=s("vTSs"),S=s("y4LA"),f=s("C6uA"),b=Object(a.a)({cacheSize:100}),x=Object(r.a)((function(e,i,s,t,n,o){return Object(m.B)(e,!o&&{backgroundColor:Object(S.a)({text:t,initialsColor:i,primaryText:n}),color:s})})),w=function(e){function i(i){var s=e.call(this,i)||this;return s._onRenderCoin=function(e){var i=s.props,t=i.coinSize,n=i.styles,a=i.imageUrl,r=i.imageAlt,c=i.imageShouldFadeIn,z=i.imageShouldStartVisible,l=i.theme,m=i.showUnknownPersonaCoin;if(!a)return null;var p=s.props.size,d=b(n,{theme:l,size:p,showUnknownPersonaCoin:m}),g=t||f.e[p];return o.createElement(h.a,{className:d.image,imageFit:u.b.cover,src:a,width:g,height:g,alt:r,shouldFadeIn:c,shouldStartVisible:z,onLoadingStateChange:s._onPhotoLoadingStateChange})},s._onRenderInitials=function(e){var i=e.imageInitials,t=e.allowPhoneInitials;if(e.showUnknownPersonaCoin)return o.createElement(d.a,{iconName:"Help"});var n=Object(c.a)(s.props.theme);return""!==(i=i||Object(z.a)(s._getText(),n,t))?o.createElement("span",null,i):o.createElement(d.a,{iconName:"Contact"})},s._onPhotoLoadingStateChange=function(e){s.setState({isImageLoaded:e===u.c.loaded,isImageError:e===u.c.error}),s.props.onPhotoLoadingStateChange&&s.props.onPhotoLoadingStateChange(e)},s.state={isImageLoaded:!1,isImageError:!1},s}return Object(n.c)(i,e),i.prototype.UNSAFE_componentWillReceiveProps=function(e){e.imageUrl!==this.props.imageUrl&&this.setState({isImageLoaded:!1,isImageError:!1})},i.prototype.render=function(){var e=this.props,i=e.className,s=e.coinProps,t=e.showUnknownPersonaCoin,a=e.coinSize,r=e.styles,c=e.imageUrl,z=e.initialsColor,m=e.initialsTextColor,h=e.isOutOfOffice,u=e.onRenderCoin,S=void 0===u?this._onRenderCoin:u,f=e.onRenderPersonaCoin,w=void 0===f?S:f,P=e.onRenderInitials,v=void 0===P?this._onRenderInitials:P,C=e.presence,O=e.presenceTitle,I=e.presenceColors,j=e.primaryText,y=e.showInitialsUntilImageLoads,E=e.text,k=e.theme,L=this.props.size,N=Object(l.d)(this.props,l.c),A=Object(l.d)(s||{},l.c),R=a?{width:a,height:a}:void 0,U=t,T={coinSize:a,isOutOfOffice:h,presence:C,presenceTitle:O,presenceColors:I,size:L,theme:k},_=b(r,{theme:k,className:s&&s.className?s.className:i,size:L,coinSize:a,showUnknownPersonaCoin:t}),W=Boolean(!this.state.isImageLoaded&&(y&&c||!c||this.state.isImageError||U));return o.createElement("div",Object(n.a)({role:"presentation"},N,{className:_.coin}),L!==g.c.size8&&L!==g.c.size10&&L!==g.c.tiny?o.createElement("div",Object(n.a)({role:"presentation"},A,{className:_.imageArea,style:R}),W&&o.createElement("div",{className:x(_.initials,z,m,E,j,t),style:R,"aria-hidden":"true"},v(this.props,this._onRenderInitials)),!U&&w(this.props,this._onRenderCoin),o.createElement(p.a,Object(n.a)({},T))):this.props.presence?o.createElement(p.a,Object(n.a)({},T)):o.createElement(d.a,{iconName:"Contact",className:_.size10WithoutPresenceIcon}),this.props.children)},i.prototype._getText=function(){return this.props.text||this.props.primaryText||""},i.defaultProps={size:g.c.size48,presence:g.b.none,imageAlt:""},i}(o.Component),P={coin:"ms-Persona-coin",imageArea:"ms-Persona-imageArea",image:"ms-Persona-image",initials:"ms-Persona-initials",size8:"ms-Persona--size8",size10:"ms-Persona--size10",size16:"ms-Persona--size16",size24:"ms-Persona--size24",size28:"ms-Persona--size28",size32:"ms-Persona--size32",size40:"ms-Persona--size40",size48:"ms-Persona--size48",size56:"ms-Persona--size56",size72:"ms-Persona--size72",size100:"ms-Persona--size100",size120:"ms-Persona--size120"},v=Object(t.a)(w,(function(e){var i,s=e.className,t=e.theme,o=e.coinSize,a=t.palette,r=t.fonts,c=Object(f.d)(e.size),z=Object(m.s)(P,t),l=o||e.size&&f.e[e.size]||48;return{coin:[z.coin,r.medium,c.isSize8&&z.size8,c.isSize10&&z.size10,c.isSize16&&z.size16,c.isSize24&&z.size24,c.isSize28&&z.size28,c.isSize32&&z.size32,c.isSize40&&z.size40,c.isSize48&&z.size48,c.isSize56&&z.size56,c.isSize72&&z.size72,c.isSize100&&z.size100,c.isSize120&&z.size120,s],size10WithoutPresenceIcon:{fontSize:r.xSmall.fontSize,position:"absolute",top:"5px",right:"auto",left:0},imageArea:[z.imageArea,{position:"relative",textAlign:"center",flex:"0 0 auto",height:l,width:l},l<=10&&{overflow:"visible",background:"transparent",height:0,width:0}],image:[z.image,{marginRight:"10px",position:"absolute",top:0,left:0,width:"100%",height:"100%",border:0,borderRadius:"50%",perspective:"1px"},l<=10&&{overflow:"visible",background:"transparent",height:0,width:0},l>10&&{height:l,width:l}],initials:[z.initials,{borderRadius:"50%",color:e.showUnknownPersonaCoin?"rgb(168, 0, 0)":a.white,fontSize:r.large.fontSize,fontWeight:m.c.semibold,lineHeight:48===l?46:l,height:l,selectors:(i={},i[m.d]=Object(n.a)(Object(n.a)({border:"1px solid WindowText"},Object(m.t)()),{color:"WindowText",boxSizing:"border-box",backgroundColor:"Window !important"}),i.i={fontWeight:m.c.semibold},i)},e.showUnknownPersonaCoin&&{backgroundColor:"rgb(234, 234, 234)"},l<32&&{fontSize:r.xSmall.fontSize},l>=32&&l<40&&{fontSize:r.medium.fontSize},l>=40&&l<56&&{fontSize:r.mediumPlus.fontSize},l>=56&&l<72&&{fontSize:r.xLarge.fontSize},l>=72&&l<100&&{fontSize:r.xxLarge.fontSize},l>=100&&{fontSize:r.superLarge.fontSize}]}}),void 0,{scope:"PersonaCoin"})}}]);
//# sourceMappingURL=vendor.office-ui-fabric-react~ab77ffdb.67bbfd9808ac8662daa5.bundle.map