(this["webpackJsonpudemy-curso"]=this["webpackJsonpudemy-curso"]||[]).push([[0],{38:function(e,t,a){e.exports=a(54)},44:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),l=a.n(c),s=a(15),o=a(7),i=a(8),m=a(10),u=a(9),p=a(11),h=a(16),d=(a(43),a(44),a(23)),E=a(18),b=a(17),f=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.title,n=e.year,c=e.poster;return r.a.createElement(b.a,{lg:3,md:4,sm:6},r.a.createElement(s.b,{to:"/detail/".concat(t)},r.a.createElement(E.a,{style:{marginTop:"50px"}},r.a.createElement(E.a.Img,{style:{width:"100%"},variant:"top",src:c,alt:a}),r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,{style:{fontSize:"1em"}},a),r.a.createElement(E.a.Text,null,n)))))}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.movies.map((function(e){return r.a.createElement(f,{key:e.imdbID,title:e.Title,year:e.Year,poster:e.Poster,id:e.imdbID})}))}}]),t}(n.Component),v=function(e){var t=e.children;return r.a.createElement("h1",{style:{padding:"40px"},className:"text-center"},t)},g=a(37),j=a(29),O=a(24),x=a(20),w=a(21),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={inputMovie:""},a._handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(g.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault(),fetch("https://www.omdbapi.com/?apikey=".concat("7961c1d2","&s=").concat(a.state.inputMovie)).then((function(e){return e.json()})).then((function(e){return a.props.setResults(e.Search)})).catch((function(e){return console.log(e)}))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(j.a,{style:{display:"flex",justifyContent:"center"},onSubmit:this.handleSubmit},r.a.createElement(j.a.Control,{style:{width:"35%"},name:"inputMovie",type:"text",placeholder:"Try something...",value:this.state.inputMovie,onChange:this._handleChange}),r.a.createElement(O.a,{type:"submit",variant:"light"},r.a.createElement(x.a,{icon:w.a,color:"blue"})))}}]),t}(n.Component),C=a(22),N=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(C.a,null,r.a.createElement(v,null,"Search movies"),r.a.createElement(k,{setResults:this.props.setResults}),r.a.createElement("p",{style:{textAlign:"center",color:"rgb(62, 169, 191)"}},r.a.createElement("small",null,"You can search Movies, Series or Videogames")),this.props.movies?r.a.createElement(d.a,null,r.a.createElement(y,{movies:this.props.movies})):r.a.createElement("p",{className:"text-center",style:{color:"red"}},"Sorry! Results not found",r.a.createElement("span",{role:"img","aria-label":"sheep"},"\ud83d\ude13")))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={movie:{}},a._fetchMovie=function(e){fetch("https://www.omdbapi.com/?apikey=".concat("7961c1d2","&i=").concat(e)).then((function(e){return e.json()})).then((function(e){return a.setState({movie:e})})).catch((function(e){return console.log(e)}))},a.componentDidMount=function(){return a._fetchMovie(a.props.match.params.id)},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){console.log(this.state.movie);var e=this.state.movie,t=e.Title,a=e.Released,n=e.Runtime,c=e.Genre,l=e.Director,o=e.Actors,i=e.Plot,m=e.Poster,u=e.imdbRating,p=e.Type;return r.a.createElement(C.a,null,r.a.createElement("h1",{style:{padding:"20px",textDecoration:"underline"},className:"text-center"},t),r.a.createElement(d.a,{style:{padding:"30px"}},r.a.createElement(b.a,{md:5,sm:12,className:"text-center"},r.a.createElement("img",{className:"align-self-center",style:{width:"70%",borderRadius:"10px",height:"70vh"},src:m,alt:t})),r.a.createElement(b.a,{md:7,sm:12},r.a.createElement("div",{style:{backgroundColor:"rgba(222, 222, 222, 0.59)",marginTop:"30px",padding:"20px",width:"100%"}},r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}},r.a.createElement("p",null,r.a.createElement("span",{style:{margin:"0 10px"},className:"badge badge-secondary"},c)),r.a.createElement("p",null,r.a.createElement("span",{style:{margin:"0 10px"},className:"badge badge-secondary"},a)),r.a.createElement("p",null,r.a.createElement("span",{style:{margin:"0 10px"},className:"badge badge-secondary"},p)),r.a.createElement("p",{className:"text-right"},r.a.createElement("strong",null)," ",r.a.createElement("span",{className:"badge badge-warning"},r.a.createElement(x.a,{icon:w.b,color:"black"})," ",u))),r.a.createElement("h4",null,"Director"),r.a.createElement("p",null,l),r.a.createElement("h4",null,"Duration"),r.a.createElement("p",null," ",n),r.a.createElement("p",null," ",o),r.a.createElement("p",null,i),r.a.createElement("div",{className:"text-center"},r.a.createElement(s.b,{to:"/"},r.a.createElement(O.a,{variant:"info",className:"text-center"},"Back to search")))))))}}]),t}(n.Component),R=function(){return r.a.createElement("div",{className:"text-center",style:{marginTop:"100px"}},r.a.createElement("h1",null,"404!"),r.a.createElement("h2",null,"This page doesn't exist"),r.a.createElement(s.b,{to:"/movie-search-react/"},"Go back to search"))},T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={results:[]},a._setResults=function(e){return a.setState({results:e})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return console.log("/movie-search-react"),r.a.createElement(r.a.Fragment,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/movie-search-react/",render:function(){return r.a.createElement(N,{movies:e.state.results,setResults:e._setResults})}}),r.a.createElement(h.a,{path:"/movie-search-reactdetail/:id",render:function(e){return r.a.createElement(S,e)}}),r.a.createElement(h.a,{component:R})))}}]),t}(n.Component);l.a.render(r.a.createElement(n.StrictMode,null,r.a.createElement(s.a,null,r.a.createElement(T,null))),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.ba30ee26.chunk.js.map