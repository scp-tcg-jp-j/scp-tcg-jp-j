(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{v74v:function(e,i,r){"use strict";r.d(i,"a",(function(){return O}));var t=r("WOvX"),s=r("mrSG"),n=r("q1tI"),o=r("9h5o"),a=r("DeEv"),c=r("vTSs"),l=r("C6uA"),u=Object(o.a)({cacheSize:100}),d=function(e){function i(i){var r=e.call(this,i)||this;return r._onRenderIcon=function(e,i){return n.createElement(a.a,{className:e,iconName:p(r.props.presence,r.props.isOutOfOffice),style:i})},r}return Object(s.c)(i,e),i.prototype.render=function(){var e=this.props,i=e.coinSize,r=e.isOutOfOffice,t=e.styles,s=e.presence,o=e.theme,a=e.presenceTitle,d=e.presenceColors,p=Object(l.d)(this.props.size),f=!(p.isSize8||p.isSize10||p.isSize16||p.isSize24||p.isSize28||p.isSize32)&&(!i||i>32),b=i?i/3<40?i/3+"px":"40px":"",z=i?{fontSize:i?i/6<20?i/6+"px":"20px":"",lineHeight:b}:void 0,h=i?{width:b,height:b}:void 0,g=u(t,{theme:o,presence:s,size:this.props.size,isOutOfOffice:r,presenceColors:d});return s===c.b.none?null:n.createElement("div",{role:"presentation",className:g.presence,style:h,title:a},f&&this._onRenderIcon(g.presenceIcon,z))},i}(n.Component);function p(e,i){if(e){switch(c.b[e]){case"online":return"SkypeCheck";case"away":return i?"SkypeArrow":"SkypeClock";case"dnd":return"SkypeMinus";case"offline":return i?"SkypeArrow":""}return""}}var f=r("tqYG"),b={presence:"ms-Persona-presence",presenceIcon:"ms-Persona-presenceIcon"};function z(e){return{color:e,borderColor:e}}function h(e,i){return{selectors:{":before":{border:e+" solid "+i}}}}function g(e){return{height:e,width:e}}function S(e){return{backgroundColor:e}}var O=Object(t.a)(d,(function(e){var i,r,t,n,o,a,c=e.theme,u=e.presenceColors,d=c.semanticColors,p=c.fonts,O=Object(f.s)(b,c),w=Object(l.d)(e.size),y=Object(l.c)(e.presence),v=u&&u.available||"#6BB700",x=u&&u.away||"#FFAA44",k=u&&u.busy||"#C43148",C=u&&u.dnd||"#C50F1F",m=u&&u.offline||"#8A8886",A=u&&u.oof||"#B4009E",B=u&&u.background||d.bodyBackground,D=y.isOffline||e.isOutOfOffice&&(y.isAvailable||y.isBusy||y.isAway||y.isDoNotDisturb),E=w.isSize72||w.isSize100?"2px":"1px";return{presence:[O.presence,Object(s.a)(Object(s.a)({position:"absolute",height:l.a.size12,width:l.a.size12,borderRadius:"50%",top:"auto",right:"-2px",bottom:"-2px",border:"2px solid "+B,textAlign:"center",boxSizing:"content-box",backgroundClip:"content-box"},Object(f.t)()),{selectors:(i={},i[f.d]={borderColor:"Window",backgroundColor:"WindowText"},i)}),(w.isSize8||w.isSize10)&&{right:"auto",top:"7px",left:0,border:0,selectors:(r={},r[f.d]={top:"9px",border:"1px solid WindowText"},r)},(w.isSize8||w.isSize10||w.isSize24||w.isSize28||w.isSize32)&&g(l.a.size8),(w.isSize40||w.isSize48)&&g(l.a.size12),w.isSize16&&{height:l.a.size6,width:l.a.size6,borderWidth:"1.5px"},w.isSize56&&g(l.a.size16),w.isSize72&&g(l.a.size20),w.isSize100&&g(l.a.size28),w.isSize120&&g(l.a.size32),y.isAvailable&&{backgroundColor:v,selectors:(t={},t[f.d]=S("Highlight"),t)},y.isAway&&S(x),y.isBlocked&&[{selectors:(n={":after":w.isSize40||w.isSize48||w.isSize72||w.isSize100?{content:'""',width:"100%",height:E,backgroundColor:k,transform:"translateY(-50%) rotate(-45deg)",position:"absolute",top:"50%",left:0}:void 0},n[f.d]={selectors:{":after":{width:"calc(100% - 4px)",left:"2px",backgroundColor:"Window"}}},n)}],y.isBusy&&S(k),y.isDoNotDisturb&&S(C),y.isOffline&&S(m),(D||y.isBlocked)&&[{backgroundColor:B,selectors:(o={":before":{content:'""',width:"100%",height:"100%",position:"absolute",top:0,left:0,border:E+" solid "+k,borderRadius:"50%",boxSizing:"border-box"}},o[f.d]={backgroundColor:"WindowText",selectors:{":before":{width:"calc(100% - 2px)",height:"calc(100% - 2px)",top:"1px",left:"1px",borderColor:"Window"}}},o)}],D&&y.isAvailable&&h(E,v),D&&y.isBusy&&h(E,k),D&&y.isAway&&h(E,A),D&&y.isDoNotDisturb&&h(E,C),D&&y.isOffline&&h(E,m),D&&y.isOffline&&e.isOutOfOffice&&h(E,A)],presenceIcon:[O.presenceIcon,{color:B,fontSize:"6px",lineHeight:l.a.size12,verticalAlign:"top",selectors:(a={},a[f.d]={color:"Window"},a)},w.isSize56&&{fontSize:"8px",lineHeight:l.a.size16},w.isSize72&&{fontSize:p.small.fontSize,lineHeight:l.a.size20},w.isSize100&&{fontSize:p.medium.fontSize,lineHeight:l.a.size28},w.isSize120&&{fontSize:p.medium.fontSize,lineHeight:l.a.size32},y.isAway&&{position:"relative",left:D?void 0:"1px"},D&&y.isAvailable&&z(v),D&&y.isBusy&&z(k),D&&y.isAway&&z(A),D&&y.isDoNotDisturb&&z(C),D&&y.isOffline&&z(m),D&&y.isOffline&&e.isOutOfOffice&&z(A)]}}),void 0,{scope:"PersonaPresence"})},y4LA:function(e,i,r){"use strict";r.d(i,"a",(function(){return o}));var t=r("vTSs"),s=[t.a.lightBlue,t.a.blue,t.a.darkBlue,t.a.teal,t.a.green,t.a.darkGreen,t.a.lightPink,t.a.pink,t.a.magenta,t.a.purple,t.a.orange,t.a.lightRed,t.a.darkRed,t.a.violet,t.a.gold,t.a.burgundy,t.a.warmGray,t.a.cyan,t.a.rust,t.a.coolGray],n=s.length;function o(e){var i=e.primaryText,r=e.text,o=e.initialsColor;return"string"==typeof o?o:function(e){switch(e){case t.a.lightBlue:return"#4F6BED";case t.a.blue:return"#0078D4";case t.a.darkBlue:return"#004E8C";case t.a.teal:return"#038387";case t.a.lightGreen:case t.a.green:return"#498205";case t.a.darkGreen:return"#0B6A0B";case t.a.lightPink:return"#C239B3";case t.a.pink:return"#E3008C";case t.a.magenta:return"#881798";case t.a.purple:return"#5C2E91";case t.a.orange:return"#CA5010";case t.a.red:return"#EE1111";case t.a.lightRed:return"#D13438";case t.a.darkRed:return"#A4262C";case t.a.transparent:return"transparent";case t.a.violet:return"#8764B8";case t.a.gold:return"#986F0B";case t.a.burgundy:return"#750B1C";case t.a.warmGray:return"#7A7574";case t.a.cyan:return"#005B70";case t.a.rust:return"#8E562E";case t.a.coolGray:return"#69797E";case t.a.black:return"#1D1D1D";case t.a.gray:return"#393939"}}(o=void 0!==o?o:function(e){var i=t.a.blue;if(!e)return i;for(var r=0,o=e.length-1;o>=0;o--){var a=e.charCodeAt(o),c=o%8;r^=(a<<c)+(a>>8-c)}return i=s[r%n]}(r||i))}}}]);
//# sourceMappingURL=vendor.office-ui-fabric-react~0cb1710c.b53841dd76d31117173c.bundle.map