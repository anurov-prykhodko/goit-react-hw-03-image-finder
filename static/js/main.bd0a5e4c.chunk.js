(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__4Zx6s",form:"Searchbar_form__1c9wN",button:"Searchbar_button__2wf8h",label:"Searchbar_label__16A63",input:"Searchbar_input__2ab8B","SearchForm-input":"Searchbar_SearchForm-input__lTGLk"}},,function(e,t,a){e.exports={item:"ImageGalleryItem_item__2iu7i",image:"ImageGalleryItem_image__1CUeC"}},function(e,t,a){e.exports={backdrop:"Modal_backdrop__3C44a",content:"Modal_content__1kED0"}},,,function(e,t,a){e.exports={gallery:"ImageGallery_gallery__1NuaF"}},function(e,t,a){e.exports={button:"Button_button__1iL57"}},,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),i=(a(21),a(12)),s=a(2),l=a(3),u=a(5),h=a(4),m=a(6),d=(a(13),a(16)),b=a(8),j=a.n(b),g=a(1),p=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={requestName:""},e.handleNameChange=function(t){e.setState({requestName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.requestName.trim())return m.b.error("Please enter a correct name!");e.props.onSubmit(e.state.requestName),e.setState({requestName:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsx)("header",{className:j.a.searchbar,children:Object(g.jsxs)("form",{className:j.a.form,onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:j.a.button,children:Object(g.jsxs)("span",{className:j.a.label,children:[Object(g.jsx)(d.a,{style:{marginRight:8}}),"Search"]})}),Object(g.jsx)("input",{className:j.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.requestName,onChange:this.handleNameChange})]})})}}]),a}(n.Component),f=a(10),v=a.n(f),y=a(11),O=a.n(y),_=document.getElementById("modal-root"),x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(g.jsx)("div",{className:O.a.backdrop,onClick:this.handleBackdropClick,children:Object(g.jsx)("div",{className:O.a.content,children:this.props.children})}),_)}}]),a}(n.Component),k=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imgIdx:null,showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(l.a)(a,[{key:"handleClick",value:function(e){this.setState({imgIdx:e,showModal:!0})}},{key:"render",value:function(){var e=this,t=this.props.images,a=this.state,n=a.imgIdx,r=a.showModal;return Object(g.jsxs)(g.Fragment,{children:[t.map((function(t,a){var n=t.webformatURL,r=t.tags,o=t.id;return Object(g.jsx)("li",{className:v.a.item,onClick:function(){return e.handleClick(a)},children:Object(g.jsx)("img",{src:n,alt:r,className:v.a.image})},o)})),r&&Object(g.jsx)(x,{onClose:this.toggleModal,children:Object(g.jsx)("img",{src:t[n].largeImageURL,alt:t[n].tags})})]})}}]),a}(n.Component),w=a(14),N=a.n(w),S=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:null},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.images;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("ul",{className:N.a.gallery,children:e&&Object(g.jsx)(k,{images:e},e.id)})})}}]),a}(n.Component),C="https://pixabay.com/api/",q="22328016-b5b8589f64a6d5a0340d8aa33";var A=a(15),M=a.n(A);function E(e){return Object(g.jsx)("button",{type:"button",onClick:e.onClick,className:M.a.button,children:e.children})}var I="idle",L="resolved",P="rejected",F=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={requestName:"",imgArray:[],numPage:2,loading:!1,isMoreAvailable:!1,error:null,status:I},e.handleFormSubmit=function(t){e.setState({requestName:t,imgArray:[],numPage:1})},e.handleLoadMore=function(){e.setState((function(){return{numPage:e.state.numPage+1}}))},e.checkAvailability=function(e){return!(e<12)},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state,r=n.requestName,o=n.numPage;t.requestName!==r&&(this.setState({loading:!0}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("".concat(C,"?image_type=photo&orientation=horizontal&q=").concat(e,"&page=").concat(t,"&per_page=").concat(12,"&key=").concat(q)).then((function(t){return t.ok?t.json():Promise.reject(new Error("No images are available on request: ".concat(e)))}))}(r,o).then((function(e){if(0===e.hits.length)return a.setState({error:!0,status:P}),void m.b.error("Something went wrong! Please enter a correct request.");var t=a.checkAvailability(e.hits.length);a.setState({imgArray:[].concat(Object(i.a)(a.state.imgArray),Object(i.a)(e.hits)),isMoreAvailable:t,status:L}),m.b.success("Congratulations! You found your photo.",{icon:"\ud83d\ude80"})})).then((function(){1!==o&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){return a.setState({error:e,status:P})})).finally((function(){return a.setState({loading:!1})})))}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.imgArray,n=e.requestName,r=e.status;return Object(g.jsxs)("div",{className:"Container",children:[Object(g.jsx)(p,{onSubmit:this.handleFormSubmit}),t&&Object(g.jsx)("h2",{className:"EnterYourRequest",children:"Loading..."}),Object(g.jsx)(S,{images:a}),!n&&Object(g.jsx)("h2",{className:"EnterYourRequest",children:"Enter your request"}),r===L&&!t&&Object(g.jsx)(E,{onClick:this.handleLoadMore,children:"Load more"}),Object(g.jsx)(m.a,{autoClose:3500})]})}}]),a}(n.Component);c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(F,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.bd0a5e4c.chunk.js.map