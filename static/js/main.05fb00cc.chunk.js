(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__4Zx6s",form:"Searchbar_form__1c9wN",button:"Searchbar_button__2wf8h",label:"Searchbar_label__16A63",input:"Searchbar_input__2ab8B","SearchForm-input":"Searchbar_SearchForm-input__lTGLk"}},,,function(e,t,a){e.exports={item:"ImageGalleryItem_item__2iu7i",image:"ImageGalleryItem_image__1CUeC"}},function(e,t,a){e.exports={backdrop:"Modal_backdrop__3C44a",content:"Modal_content__1kED0"}},function(e,t,a){e.exports={gallery:"ImageGallery_gallery__1NuaF"}},,,,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),i=(a(18),a(2)),s=a(3),l=a(5),u=a(4),h=a(8),m=a(13),d=(a(19),a(7)),b=a.n(d),j=a(1),p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={requestName:""},e.handleNameChange=function(t){e.setState({requestName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.requestName.trim())return h.b.error("Please enter a correct name!");e.props.onSubmit(e.state.requestName),e.setState({requestName:""})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:b.a.searchbar,children:Object(j.jsxs)("form",{className:b.a.form,onSubmit:this.handleSubmit,children:[Object(j.jsx)("button",{type:"submit",className:b.a.button,children:Object(j.jsxs)("span",{className:b.a.label,children:[Object(j.jsx)(m.a,{style:{marginRight:8}}),"Search"]})}),Object(j.jsx)("input",{className:b.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.requestName,onChange:this.handleNameChange})]})})}}]),a}(n.Component),g=a(10),f=a.n(g),O=a(11),v=a.n(O),y=document.getElementById("modal-root"),_=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(j.jsx)("div",{className:v.a.backdrop,onClick:this.handleBackdropClick,children:Object(j.jsx)("div",{className:v.a.content,children:this.props.children})}),y)}}]),a}(n.Component),x=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={imgIdx:null,showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(s.a)(a,[{key:"handleClick",value:function(e){this.setState({imgIdx:e,showModal:!0})}},{key:"render",value:function(){var e=this,t=this.props.images,a=this.state,n=a.imgIdx,r=a.showModal;return Object(j.jsxs)(j.Fragment,{children:[t.map((function(t,a){var n=t.webformatURL,r=t.tags,c=t.id;return Object(j.jsx)("li",{className:f.a.item,onClick:function(){return e.handleClick(a)},children:Object(j.jsx)("img",{src:n,alt:r,className:f.a.image})},c)})),r&&Object(j.jsx)(_,{onClose:this.toggleModal,children:Object(j.jsx)("img",{src:t[n].largeImageURL,alt:t[n].tags})})]})}}]),a}(n.Component),k=a(12),w=a.n(k),N=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:null},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.images;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("ul",{className:w.a.gallery,children:e&&Object(j.jsx)(x,{images:e},e.id)})})}}]),a}(n.Component),S="https://pixabay.com/api/",C="22328016-b5b8589f64a6d5a0340d8aa33";var q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={requestName:"",loading:!1},e.handleFormSubmit=function(t){e.setState({requestName:t})},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state.requestName;t.requestName!==n&&(this.setState({loading:!0}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("".concat(S,"?image_type=photo&orientation=horizontal&q=").concat(e,"&page=").concat(t,"&per_page=").concat(12,"&key=").concat(C)).then((function(t){return t.ok?t.json():Promise.reject(new Error("No images are available on request: ".concat(e)))}))}(n).then((function(e){return e.hits})).then((function(e){return a.setState({images:e})})).finally((function(){return a.setState({loading:!1})})))}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.images,n=e.requestName;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{onSubmit:this.handleFormSubmit}),t&&Object(j.jsx)("h2",{children:"Loading..."}),Object(j.jsx)(N,{images:a}),!n&&Object(j.jsx)("h2",{children:"Enter your request"}),Object(j.jsx)(h.a,{autoClose:3500})]})}}]),a}(n.Component);o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(q,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.05fb00cc.chunk.js.map