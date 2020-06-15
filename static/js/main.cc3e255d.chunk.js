(this["webpackJsonpsd-01-week11-movie-card-library-stateful"]=this["webpackJsonpsd-01-week11-movie-card-library-stateful"]||[]).push([[0],{38:function(e,t,a){e.exports=a(50)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(11),o=a.n(r),l=(a(43),a(44),[{title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!1,genre:"comedy"},{title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"}]),s=a(7),c=a(8),u=a(10),m=a(9),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("header",{className:"movie-card-header"},i.a.createElement("h1",{className:"page-title"},"Movie Cards Library"))}}]),a}(i.a.Component),h=a(28),p=a(12),v=a(69),g=a(52),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.searchText,a=e.onSearchTextChange,n=e.bookmarkedOnly,r=e.onBookmarkedChange,o=e.selectedGenre,l=e.onSelectedGenreChange;return i.a.createElement("form",null,i.a.createElement("label",{style:{display:"inline-block"},htmlFor:"input"},"Inclui o texto:",i.a.createElement("input",{type:"text",value:t,onChange:a})),i.a.createElement("label",{style:{display:"inline-block"},htmlFor:"input"},"Mostrar somente favoritos",i.a.createElement("input",{type:"checkbox",checked:n,onChange:r})),i.a.createElement("label",{style:{display:"inline-block"},htmlFor:"input"},"Filtrar por g\xeanero",i.a.createElement("select",{value:o,onChange:l},i.a.createElement("option",{value:""},"Todos"),i.a.createElement("option",{value:"action"},"A\xe7\xe3o"),i.a.createElement("option",{value:"comedy"},"Com\xe9dia"),i.a.createElement("option",{value:"thriller"},"Suspense"))))}}]),a}(n.Component),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.rating;return i.a.createElement("div",{className:"movie-card-rating"},i.a.createElement("span",{className:"rating"},e))}}]),a}(i.a.Component),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.movie,t=e.title,a=e.subtitle,n=e.storyline,r=e.rating,o=e.imagePath;return i.a.createElement("div",{className:"movie-card"},i.a.createElement("img",{alt:"Movie Cover",className:"movie-card-image",src:o}),i.a.createElement("div",{className:"movie-card-body"},i.a.createElement("h4",{className:"movie-card-title"},t),i.a.createElement("h5",{className:"movie-card-subtitle"},a),i.a.createElement("p",{className:"movie-card-storyline"},n)),i.a.createElement(f,{rating:r}))}}]),a}(i.a.Component),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.movies;return i.a.createElement("div",{className:"movie-list"},e.map((function(e){return i.a.createElement(y,{key:e.title,movie:e})})))}}]),a}(i.a.Component),E=a(27),j=a(68),C=a(33),O=a.n(C),S=a(35),x=a.n(S),M=(a(45),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={subtitle:"",title:"",imagePath:"",storyline:"",rating:0,genre:"action"},n.onChangeHandler=n.onChangeHandler.bind(Object(p.a)(n)),n.SubmitMovie=n.SubmitMovie.bind(Object(p.a)(n)),n.generateMovie=n.generateMovie.bind(Object(p.a)(n)),n.nextMovie=n.nextMovie.bind(Object(p.a)(n)),n.previousMovie=n.previousMovie.bind(Object(p.a)(n)),n}return Object(c.a)(a,[{key:"onChangeHandler",value:function(e,t){var a=e.target.value;"rating"===t?this.setState(Object(E.a)({},t,+a)):this.setState(Object(E.a)({},t,a))}},{key:"SubmitMovie",value:function(){this.props.modalClose(),(0,this.props.onClick)(this.state),this.setState({subtitle:"",title:"",imagePath:"",storyline:"",rating:0,genre:"action"})}},{key:"tituloLabel",value:function(){var e=this,t=this.state.title;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"input"},"T\xedtulo",i.a.createElement("input",null)),i.a.createElement("input",{type:"text",placeholder:"Title",value:t,id:"title",onChange:function(t){return e.onChangeHandler(t,"title")}}))}},{key:"subtituloLabel",value:function(){var e=this,t=this.state.subtitle;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"input"},"Subt\xedtulo",i.a.createElement("input",null)),i.a.createElement("input",{type:"text",placeholder:"Subtitle",value:t,id:"subtitle",onChange:function(t){return e.onChangeHandler(t,"subtitle")}}))}},{key:"imagemLabel",value:function(){var e=this,t=this.state.imagePath;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"input"},"Imagem",i.a.createElement("input",null)),i.a.createElement("input",{style:{display:this.url?"block":"none"},placeholder:"Imagem Url",type:"text",value:t,id:"imagePath",onChange:function(t){return e.onChangeHandler(t,"imagePath")}}))}},{key:"generateMovie",value:function(){var e=this,t=document.getElementById("title");if(t&&t.value){var a=t.value;a=a.split(" ").join("+"),fetch("https://api.themoviedb.org/3/search/movie?api_key=22e9ad4abaf918fc1d1d1d5d25707dfe&query=".concat(a)).then((function(e){return e.json()})).then((function(t){var a=t.results;return e.setState({results:a,index:0}),console.log(a),a[0].id})).then((function(t){fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=22e9ad4abaf918fc1d1d1d5d25707dfe")).then((function(e){return e.json()})).then((function(t){document.querySelector(".modal-image-div").style.display="none",e.setState({title:t.title.split(":")[0],subtitle:t.title.split(":")[1]?t.title.split(":")[1]:t.title.split(":")[0],storyline:t.overview,imagePath:"https://image.tmdb.org/t/p/w300/".concat(t.backdrop_path),profilePath:"https://image.tmdb.org/t/p/w300/".concat(t.poster_path)})}))}))}else alert("adicione um titulo")}},{key:"nextMovie",value:function(){var e=this,t=this.state,a=t.results,n=t.index,i=a[n+1].id;this.setState({results:a,index:n+1}),fetch("https://api.themoviedb.org/3/movie/".concat(i,"?api_key=22e9ad4abaf918fc1d1d1d5d25707dfe")).then((function(e){return e.json()})).then((function(t){e.setState({title:t.title.split(":")[0],subtitle:t.title.split(":")[1],storyline:t.overview,imagePath:"https://image.tmdb.org/t/p/w300/".concat(t.backdrop_path),profilePath:"https://image.tmdb.org/t/p/w300/".concat(t.poster_path)})}))}},{key:"previousMovie",value:function(){var e=this;console.log("bora");var t=this.state,a=t.results,n=t.index;if(n>0){var i=a[n-1].id;this.setState({results:a,index:n-1}),fetch("https://api.themoviedb.org/3/movie/".concat(i,"?api_key=22e9ad4abaf918fc1d1d1d5d25707dfe")).then((function(e){return e.json()})).then((function(t){e.setState({title:t.title.split(":")[0],subtitle:t.title.split(":")[1],storyline:t.overview,imagePath:"https://image.tmdb.org/t/p/w300/".concat(t.backdrop_path),profilePath:"https://image.tmdb.org/t/p/w300/".concat(t.poster_path)})}))}}},{key:"render",value:function(){var e=this,t=this.state,a=t.storyline,n=t.rating,r=t.genre,o=t.imagePath,l=t.results,s=t.index;return i.a.createElement("div",{className:"add-movie-body"},i.a.createElement(O.a,{style:{display:l&&0!=s?"block":"none"},onClick:this.previousMovie,className:"arrow left"}),i.a.createElement(x.a,{style:{display:l&&s!=l.length-1?"block":"none"},onClick:this.nextMovie,className:"arrow rigth"}),i.a.createElement("div",{className:"modal-image modal-image-div"},i.a.createElement(j.a,{className:"button-wrap",orientation:"vertical",color:"primary","aria-label":"outlined primary button group"},i.a.createElement(g.a,{onClick:this.generateMovie},"Generate Film"))),i.a.createElement("img",{className:"modal-image ",src:o,alt:""}),i.a.createElement("form",null,this.tituloLabel(),this.subtituloLabel(),this.imagemLabel(),i.a.createElement("label",{htmlFor:"input"},"Sinopse",i.a.createElement("input",{type:"text"})),i.a.createElement("textarea",{placeholder:"Storyline",value:a,id:"storyline",onChange:function(t){return e.onChangeHandler(t,"storyline")}}),i.a.createElement("label",{htmlFor:"input"},"Avalia\xe7\xe3o",i.a.createElement("input",{type:"text",name:"",id:""})),i.a.createElement("input",{placeholder:"Rating",type:"number",value:n,id:"rating",onChange:function(t){return e.onChangeHandler(t,"rating")}}),i.a.createElement("label",{htmlFor:"input"},"G\xeanero",i.a.createElement("input",{type:"text"})),i.a.createElement("select",{value:r,id:"genre",onChange:function(t){return e.onChangeHandler(t,"genre")}},i.a.createElement("option",{value:"action"},"A\xe7\xe3o"),i.a.createElement("option",{value:"comedy"},"Com\xe9dia"),i.a.createElement("option",{value:"thriller"},"Suspense")),i.a.createElement(g.a,{className:"send-button",variant:"contained",color:"primary",onClick:this.SubmitMovie},"Adicionar filme")))}}]),a}(n.Component)),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(s.a)(this,a);var i=(n=t.call(this,e)).props.movies;return n.state={searchText:"",bookmarkedOnly:!1,selectedGenre:"",movies:i,modal:!1},n.addMovie=n.addMovie.bind(Object(p.a)(n)),n.closeModal=n.closeModal.bind(Object(p.a)(n)),n}return Object(c.a)(a,[{key:"filterMovies",value:function(){var e=this.state,t=e.searchText,a=e.bookmarkedOnly,n=e.selectedGenre,i=e.movies,r=Object(h.a)(i);return a&&(r=r.filter((function(e){return e.bookmarked}))),n&&(r=r.filter((function(e){return e.genre===n}))),t&&(r=r.filter((function(e){return e.title.includes(t)||e.subtitle.includes(t)||e.storyline.includes(t)}))),r}},{key:"addMovie",value:function(e){var t=this.state.movies;this.setState({movies:[].concat(Object(h.a)(t),[e])})}},{key:"closeModal",value:function(){console.log("fechou o modal"),this.setState({modal:!1})}},{key:"render",value:function(){var e=this,t=this.state,a=t.searchText,n=t.bookmarkedOnly,r=t.selectedGenre,o=t.modal;return i.a.createElement("div",null,i.a.createElement(b,{searchText:a,bookmarkedOnly:n,selectedGenre:r,onSearchTextChange:function(t){return e.setState({searchText:t.target.value})},onBookmarkedChange:function(t){return e.setState({bookmarkedOnly:t.target.checked})},onSelectedGenreChange:function(t){return e.setState({selectedGenre:t.target.value})}}),i.a.createElement(k,{movies:this.filterMovies()}),i.a.createElement(v.a,{open:o,onClose:function(){return e.setState({modal:!1})}},i.a.createElement(M,{onClick:this.addMovie,modalClose:this.closeModal})),i.a.createElement(g.a,{style:{marginLeft:"20px"},variant:"contained",color:"primary",onClick:function(){return e.setState({modal:!0})}},"Create New Card"))}}]),a}(n.Component);var N=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(d,null),i.a.createElement(w,{movies:l}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.cc3e255d.chunk.js.map