(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{16:function(t,e,a){},18:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var c=a(1),i=a.n(c),s=a(9),r=a.n(s),n=(a(16),a(11)),o=a(2),d=a(8),l=a.n(d),m=a(10),u=a(3),j=a(4),h=a(6),f=a(5),b=(a(18),a(0));var p=function(t){return Object(b.jsxs)("li",{className:"cart-item","data-id":t.itemId,children:[Object(b.jsx)("div",{className:"name",children:t.name}),Object(b.jsxs)("div",{className:"quantity",children:[Object(b.jsx)("button",{className:"fa fa-minus",onClick:t.remove,children:Object(b.jsx)("i",{})}),t.quantity,Object(b.jsx)("button",{className:"fa fa-plus",onClick:t.add,children:Object(b.jsx)("i",{})})]}),Object(b.jsxs)("div",{className:"price",children:["@ $",t.price]}),Object(b.jsx)("button",{className:"remove-from-cart",onClick:t.clear,children:Object(b.jsx)("i",{className:"far fa-times-circle"})})]})};var O=function(t){return!1===t.visible?null:Object(b.jsxs)("aside",{className:"cart",children:[Object(b.jsx)("h2",{children:"Your Cart"}),Object(b.jsxs)("ul",{children:[t.items.map((function(e){return Object(b.jsx)(p,{itemId:e.id,name:e.name,price:e.price,quantity:e.quantity,add:t.add,remove:t.remove,clear:t.clear},e.id)})),!t.items.length&&Object(b.jsx)("p",{children:"Your cart is empty."})]}),Object(b.jsxs)("div",{className:"total",children:["Total: $",t.totalPrice().toFixed(2)]})]})},v=function(t){Object(h.a)(a,t);var e=Object(f.a)(a);function a(){var t;Object(u.a)(this,a);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={cartVisible:!1},t.toggleCart=function(){t.setState((function(t,e){return{cartVisible:!t.cartVisible}}))},t}return Object(j.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("header",{children:[Object(b.jsx)("h1",{children:"MouseHeaven"}),Object(b.jsxs)("div",{className:"cart-icon",children:[Object(b.jsxs)("div",{className:"cart-icon-values",children:[Object(b.jsxs)("div",{className:"cart-total",children:["$",this.props.totalPrice().toFixed(2)]}),Object(b.jsxs)("div",{className:"in-cart-items",children:[this.props.totalItems()," item",1===this.props.totalItems()?"":"s"]})]}),Object(b.jsx)("i",{className:"fas fa-shopping-cart",onClick:this.toggleCart})]}),Object(b.jsx)(O,{visible:this.state.cartVisible,items:this.props.cartItems,modify:this.props.modifyCart,add:this.props.add,remove:this.props.remove,totalPrice:this.props.totalPrice,clear:this.props.clear})]})}}]),a}(c.Component);var x=function(t){return Object(b.jsxs)("li",{className:"item","data-id":t.itemId,children:[Object(b.jsx)("img",{src:t.image,alt:"Image of a "+t.name+" mouse."}),Object(b.jsx)("h2",{children:t.name}),Object(b.jsxs)("div",{className:"price",children:["$",t.price]}),Object(b.jsx)("div",{className:"stock",children:t.stock>0?"Stock: "+t.stock:"OUT OF STOCK"}),Object(b.jsx)("div",{className:"description",children:t.desc}),Object(b.jsx)("button",{onClick:t.add,children:"Add to Cart"})]})},I=function(t){Object(h.a)(a,t);var e=Object(f.a)(a);function a(t){var c;return Object(u.a)(this,a),(c=e.call(this,t)).componentDidMount=Object(m.a)(l.a.mark((function t(){var e,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://5ed0108416017c00165e327c.mockapi.io/api/v1/items/");case 2:return e=t.sent,t.next=5,e.json();case 5:a=t.sent,c.setState({items:a});case 7:case"end":return t.stop()}}),t)}))),c.addItem=function(t){var e=c.state.items.find((function(e){return e.id===parseInt(t.target.closest("li").dataset.id)})),a=c.state.cartItems.find((function(e){return e.id===parseInt(t.target.closest("li").dataset.id)}));if(void 0!==a){if(a.quantity>=e.stock)return;c.setState((function(t,e){return{cartItems:t.cartItems.map((function(t){return t===a?Object(o.a)(Object(o.a)({},t),{},{quantity:t.quantity+1}):t}))}}))}else{if(0===e.stock)return;c.setState((function(t,a){return{cartItems:[].concat(Object(n.a)(t.cartItems),[{id:e.id,name:e.name,quantity:1,price:e.price}])}}))}},c.removeItem=function(t){var e=c.state.cartItems.find((function(e){return e.id===parseInt(t.target.closest("li").dataset.id)}));void 0!==e&&c.setState((function(t){return{cartItems:t.cartItems.map((function(t){return t.id===e.id?Object(o.a)(Object(o.a)({},e),{},{quantity:t.quantity-1}):t})).filter((function(t){return t.quantity>0}))}}))},c.clearItem=function(t){var e=c.state.cartItems.find((function(e){return e.id===parseInt(t.target.closest("li").dataset.id)}));void 0!==e&&c.setState((function(t){return{cartItems:t.cartItems.filter((function(t){return t.id!==e.id}))}}))},c.totalPrice=function(){return c.state.cartItems.reduce((function(t,e){return t+e.price*e.quantity}),0)},c.totalItems=function(){return c.state.cartItems.reduce((function(t,e){return t+e.quantity}),0)},c.state={items:[],cartItems:[]},c}return Object(j.a)(a,[{key:"render",value:function(){var t=this;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(v,{cartItems:this.state.cartItems,toggleCart:this.toggleCart,modifyCart:this.modifyCart,add:this.addItem,remove:this.removeItem,totalPrice:this.totalPrice,totalItems:this.totalItems,clear:this.clearItem}),Object(b.jsx)("main",{children:Object(b.jsx)("ul",{className:"items",children:this.state.items.map((function(e){return Object(b.jsx)(x,{desc:e.description,itemId:e.id,image:e.imageURL,name:e.name,price:e.price,add:t.addItem,stock:e.stock},e.id)}))})})]})}}]),a}(c.Component),g=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(e){var a=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;a(t),c(t),i(t),s(t),r(t)}))};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root")),g()}},[[20,1,2]]]);
//# sourceMappingURL=main.a922a1d4.chunk.js.map