Previa explicacion del codigo basico de   ecommers

const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");

const cartBtn = document.getElementById("cart-btn");

const displayCart = () =>{
    modalContainer.innerHTML = "";
    modalContainer.style.display = "block";
    modalOverlay.style.display = "block";
    // modal Header
    const modalHeader = document.createElement("div");

    const modalClose = document.createElement("div");
    modalClose.innerText = "❌"
    modalClose.className = "modal-close";
    modalHeader.append(modalClose);

    modalClose.addEventListener("click", () =>{
    modalContainer.style.display = "none";
    modalOverlay.style.display = "none";
    };

    const modalTitle = document.createElement("div");
    modalTitle.innerText = "Cart";
    modalTitle.className = "modal-title";
    modalHeader.append(modalTitle);

    modalContainer.append(modalHeader);
    // Modal Body
    cart.forEach((product) => {
        const modalBody = document.createElement("div");
        modalBody.className = "modal-body";
        modalBody.innerHTML = `
        <div class = "product">
            <img class= "product-img" src ="${product.img}" />
            <div class= "product info">
                <h4>${product.productName}</h4>
            </div>
            <div class="quantity">
                <span class="quantity-btn-decrese"></span>
                <span class="quantity-input">${product.quanty}</span>
                <span class="quantity-btn-increse">+</span>
            </div> 
            <div class= "price">${product.price*product.quanty}$</div>
            <div class ="delete-product">❌</div>
        </div>
        `;
        modalContainer.append(modalBody);
    });
   // modal footer

   const modalFooter = document.createElement("div");
   modalFooter.className = "modal-footer"
   modalFooter.innerHTML = `
   <div class="total-price">Total :)</div>
   `;
   modalContainer.append(modalFooter);

};
cartBtn.addEventListener("click", displayCart);

//// agrego de nuevo el codigo completo con las adisiones realizadas en elcart.js//

const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");
const cartBtn = document.getElementById("cart-btn");

const displayCart = () =>{
    modalContainer.innerHTML = "";
    modalContainer.style.display ="block";
    modalOverlay.style.display ="block";
    //modal header//
    const modalHeader = document.createElement("div");
    const modalClose = document.createElement("div");
    modalClose.innerText = "❌";
    modalClose.className = "modal-close";
    modalHeader.append(modalClose);

    modalClose.addEventListener("click", () =>{
        modalContainer.style.display = "none";
        modalOverlay.style.display = "none";
    });

    const modalTitle = document.createElement("div");
    modalTitle.innerText = "Cart";    modalTitle.className = "modal-title";
    modalHeader.append(modalTitle);

    modalContainer.append(modalHeader);
    //creamos el modal del body//

    cart.forEach((product) => {
        const modalBody = document.createElement("div");
        modalBody.className ="modal-body"
        modalBody.innerHTML =`
        <div class="product">
            <img class="product.img" src="${product.img}"/>
            <div class="product-info">
                <h4>${product.productName}</h4>
            </div>
          <div class="quantity">
            <span class="quantity-btn-decrese">-</span>
            <span class="quantity-input">${product.quanty}</span>
            <span class="quantity-btn-increse">+</span>
          </div>
            <div class="price">${product.price * product.quanty}$ </div>
            <div class="delete-product">❌</div>
        </div>
        `;
        modalContainer.append(modalBody);
        //metodo de decremento de cantidades del carrito//
        
        const decrese = modalBody.querySelector(".quantity-btn-decrese")
        decrese.addEventListener("click", () => {
           if(product.quanty !==1) {
                product.quanty--;
            displayCart();
           }
        });

        const increse = modalBody.querySelector(".quantity-btn-increse");
        increse.addEventListener("click", () => {
            product.quanty++;
            displayCart();
        });
        //delete//
        const deleteProduct = modalBody.querySelector(".delete-Product");
        deleteProduct.addEventListener("click", () => {
            deleteCartProduct(product.id);
        });
    });           
   
    // modal footer//
    const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0);

    const modalFooter = document.createElement("div");
    modalFooter.className="modal-footer";
    modalFooter.innerHTML= `
    <div class="total-price">total:${total}</div>
    `;
    modalContainer.append(modalFooter);

    
};

    cartBtn.addEventListener("click", displayCart);

    const deleteCartProduct = (id) => {
        const founId = cart.findIndex((element)=> element.id === id);
        console.log(founId);
        cart.splice(founId, 1);
        displayCart();
    };    


   

