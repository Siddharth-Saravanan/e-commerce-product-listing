(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),i=a.n(o),c=(a(18),a(19),a(2));const l=c.a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto; /* Center the grid */
`,p=c.a.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 250px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`,s=c.a.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`,d=c.a.h2`
  font-size: 18px;
  margin: 10px 0;
  color: #333;
  font-family: 'Poppins', sans-serif;
`,u=c.a.p`
  font-size: 16px;
  color: #888;
`;var m=e=>{let{searchQuery:t}=e;const[a,o]=Object(n.useState)([]);Object(n.useEffect)(()=>{fetch("https://fakestoreapi.com/products").then(e=>e.json()).then(e=>{o(e)}).catch(e=>console.error("Error fetching products:",e))},[]);const i=a.filter(e=>e.title.toLowerCase().includes(t));return r.a.createElement(l,null,0===i.length?r.a.createElement("p",null,'No products found for "',t,'"'):i.map(e=>r.a.createElement(p,{key:e.id},r.a.createElement(s,{src:e.image,alt:e.title}),r.a.createElement(d,null,e.title),r.a.createElement(u,null,e.price," USD"))))};c.a.input`
  padding: 10px;
  width: 300px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: block;
  margin: 0 auto;
`;const x=c.a.div`
  background-color: #232f3e;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: white;
  justify-content: space-between;
`,h=c.a.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  font-family: 'Poppins', sans-serif;
`,f=c.a.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px; /* Adds space between header and search bar */
`,g=c.a.form`
  display: flex;
  width: 50%;
  max-width: 600px;
  gap: 10px; /* Adds a small gap between search input and button */
`,b=c.a.input`
  flex-grow: 1;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  outline: none;
`,w=c.a.button`
  height: 40px;
  width: 100px; /* Makes the button width fixed and proportional */
  padding: 10px;
  font-size: 16px;
  background-color: #febd69;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f3a847;
  }
`;var E=e=>{let{onSearch:t}=e;return r.a.createElement(x,null,r.a.createElement(h,null,"Siddharth.com"),r.a.createElement(f,null,r.a.createElement(g,{onSubmit:e=>{e.preventDefault();const a=e.target.search.value;t(a)}},r.a.createElement(b,{type:"text",name:"search",placeholder:"Search products..."}),r.a.createElement(w,{type:"submit"},"Search"))))};var y=function(){const[e,t]=Object(n.useState)("");return r.a.createElement("div",{className:"App"},r.a.createElement(E,{onSearch:e=>{t(e.toLowerCase())}}),"  ",r.a.createElement(m,{searchQuery:e}))};var v=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,21)).then(t=>{let{getCLS:a,getFID:n,getFCP:r,getLCP:o,getTTFB:i}=t;a(e),n(e),r(e),o(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null))),v()}},[[10,1,2]]]);
//# sourceMappingURL=main.dd938824.chunk.js.map