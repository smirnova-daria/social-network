"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[952],{3952:function(e,s,t){t.r(s),t.d(s,{default:function(){return F}});var r=t(8683),n=t(5671),i=t(3144),o=t(136),a=t(7277),c=t(2791),l=t(6070),u="MyPosts_posts__list__i1sKd",d={post__wrapper:"Post_post__wrapper__Tr3Dj",avatar:"Post_avatar__1jNVf",post__message:"Post_post__message__nsOwV",likes:"Post_likes__ZPOtl"},p=t(184),h=function(e){return(0,p.jsxs)("li",{className:d.post,children:[(0,p.jsxs)("div",{className:d.post__wrapper,children:[(0,p.jsx)("img",{className:d.avatar,src:"https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="}),(0,p.jsx)("p",{className:d.post__message,children:e.message})]}),(0,p.jsxs)("span",{className:d.likes,children:["likes: ",e.likes]})]})},f=t(5705),x=function(e){return(0,p.jsx)(f.J9,{initialValues:{postText:""},onSubmit:e.handleSubmit,children:function(){return(0,p.jsxs)(f.l0,{children:[(0,p.jsx)("div",{children:(0,p.jsx)(f.gN,{component:"textarea",name:"postText",placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c..."})}),(0,p.jsx)(f.Bc,{name:"postText",component:"div"}),(0,p.jsx)("button",{type:"submit",children:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"})]})}})},j=function(e){return(0,p.jsxs)("div",{children:[(0,p.jsx)("h3",{children:"\u041c\u043e\u0438 \u043f\u043e\u0441\u0442\u044b"}),(0,p.jsx)(x,{handleSubmit:function(s){e.addPost(s.postText)}}),(0,p.jsx)("ul",{className:u,children:e.posts.map((function(e){return(0,p.jsx)(h,{message:e.message,likes:e.likesCount},e.id)}))})]})},m=t(6434),v=(0,m.$j)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(s){e((0,l.Wl)(s))}}}))(j),_=t(885),g=t(2869),b="ProfileInfo_info__OvZlQ",k="ProfileInfo_avatar__m+0bS",P=function(e){var s=(0,c.useState)(!1),t=(0,_.Z)(s,2),r=t[0],n=t[1],i=(0,c.useState)(e.status),o=(0,_.Z)(i,2),a=o[0],l=o[1];(0,c.useEffect)((function(){l(e.status)}),[e.status]);return(0,p.jsxs)("div",{children:[!r&&(0,p.jsx)("div",{children:(0,p.jsx)("span",{onDoubleClick:function(){n(!0)},children:a||"__"})}),r&&(0,p.jsx)("div",{children:(0,p.jsx)("input",{autoFocus:!0,onBlur:function(){n(!1),e.updateStatus(a)},value:a,onChange:function(e){l(e.target.value)}})})]})},N=t(3193),Z={contactsList:"ProfileData_contactsList__2x8O2",error:"ProfileData_error__sHyl+"},S=function(e){var s=e.contacts;return(0,p.jsxs)("div",{children:[(0,p.jsx)("h4",{children:"Contacts:"}),(0,p.jsx)("ul",{className:Z.contactsList,children:Object.keys(s).map((function(e){return(0,p.jsx)("li",{children:(0,p.jsxs)("a",{href:s[e],children:[e,": ",s[e]]})},e)}))})]})},w=t(132),y=w.Ry().shape({fullName:w.Z_().required("Required"),aboutMe:w.Z_().required("Required"),lookingForAJobDescription:w.Z_().required("Required")}),D=function(e){var s=e.profile,t=e.contacts,r=e.saveProfile,n=e.editModeDisable;return(0,p.jsx)(f.J9,{initialValues:s,onSubmit:function(e,s){var t=s.setStatus,i=s.setSubmitting;r(e,t).then((function(){n()})).catch((function(){i(!1)}))},validationSchema:y,children:function(e){var s=e.status;return(0,p.jsxs)(f.l0,{children:[(0,p.jsxs)("div",{children:[(0,p.jsx)(f.gN,{type:"text",name:"fullName",placeholder:"fullName"}),(0,p.jsx)(f.Bc,{name:"fullName",component:"span",className:Z.error})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)(f.gN,{component:"textarea",name:"aboutMe",placeholder:"about me"}),(0,p.jsx)(f.Bc,{name:"aboutMe",component:"span",className:Z.error})]}),(0,p.jsx)("div",{children:(0,p.jsxs)("label",{children:[(0,p.jsx)(f.gN,{type:"checkbox",name:"lookingForAJob"}),"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443"]})}),(0,p.jsxs)("div",{children:[(0,p.jsx)(f.gN,{component:"textarea",name:"lookingForAJobDescription",placeholder:"\u041c\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438..."}),(0,p.jsx)(f.Bc,{name:"lookingForAJobDescription",component:"span",className:Z.error})]}),(0,p.jsx)("div",{children:Object.keys(t).map((function(e){return(0,p.jsxs)("div",{children:[e,(0,p.jsx)(f.gN,{type:"text",name:"contacts."+e,placeholder:e})]},e)}))}),(0,p.jsx)("div",{children:s}),(0,p.jsx)("button",{type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})}})},A=function(e){var s=e.profile,t=e.isOwner,r=e.editMode;return(0,p.jsxs)("div",{children:[t&&(0,p.jsx)("button",{onClick:r,children:"Edit"}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("p",{className:Z.name,children:[(0,p.jsx)("b",{children:"\u0418\u043c\u044f: "}),s.fullName]}),(0,p.jsxs)("p",{className:Z.about,children:[(0,p.jsx)("b",{children:"\u041e\u0431\u043e \u043c\u043d\u0435: "}),s.aboutMe]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443:"})," ",s.lookingForAJob?"\u0414\u0410":"\u041d\u0415\u0422"]}),s.lookingForAJob&&(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"\u041c\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438: "}),s.lookingForAJobDescription]}),(0,p.jsx)(S,{contacts:s.contacts})]})]})},O=function(e){var s=(0,c.useState)(!1),t=(0,_.Z)(s,2),r=t[0],n=t[1];return e.profile?(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{className:b,children:[(0,p.jsxs)("div",{className:k,children:[(0,p.jsx)("img",{src:e.profile.photos.large||N,alt:"avatar"}),e.isOwner&&(0,p.jsx)("input",{type:"file",onChange:function(s){s.target.files.length&&e.savePhoto(s.target.files[0])}})]}),r?(0,p.jsx)(D,{profile:e.profile,contacts:e.profile.contacts,saveProfile:e.saveProfile,editModeDisable:function(){return n(!1)}}):(0,p.jsx)(A,{profile:e.profile,isOwner:e.isOwner,editMode:function(){n(!0)}})]}),(0,p.jsx)(P,{status:e.status,updateStatus:e.updateStatus})]}):(0,p.jsx)(g.Z,{})},C=function(e){return(0,p.jsxs)("div",{children:[(0,p.jsx)(O,(0,r.Z)({},e)),(0,p.jsx)(v,{store:e.store})]})},M=t(6871),J=t(7781),T=function(e){(0,o.Z)(t,e);var s=(0,a.Z)(t);function t(){var e;(0,n.Z)(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=s.call.apply(s,[this].concat(i))).state={redirect:!1},e}return(0,i.Z)(t,[{key:"refreshProfile",value:function(){var e=this.props.router.params.userId;e||(e=this.props.authorizedUserId)||this.setState({redirect:!0}),e&&(this.props.getProfile(e),this.props.getStatus(e))}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,s){this.props.router.params.userId!==e.router.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return this.state.redirect?(0,p.jsx)(M.Fg,{to:"/login"}):(0,p.jsx)(C,(0,r.Z)((0,r.Z)({},this.props),{},{isOwner:!this.props.router.params.userId}))}}]),t}(c.Component),F=(0,J.qC)((0,m.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getProfile:l.Ai,getStatus:l.lR,updateStatus:l.Nf,savePhoto:l.Ju,saveProfile:l.Ii}),(function(e){return function(s){var t=(0,M.TH)(),n=(0,M.s0)(),i=(0,M.UO)();return(0,p.jsx)(e,(0,r.Z)((0,r.Z)({},s),{},{router:{location:t,navigate:n,params:i}}))}}))(T)},3193:function(e,s,t){e.exports=t.p+"static/media/userPhoto.03a0c31746680500c559.png"}}]);
//# sourceMappingURL=952.2152443c.chunk.js.map