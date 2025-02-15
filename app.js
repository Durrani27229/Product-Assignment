const url = "https://fakestoreapi.com/products";
const main = document.querySelector(".main");
const loader = document.querySelector(".loader");
const getProducts = async() => {
    try{const response = await fetch(url);
        const data = await response.json();
        // console.log(data);

        main.innerHTML = "";
        return data.map((item) => {
            loader.setAttribute("hidden",true);
            main.innerHTML += `<div class="cart">
                <div class="cart-image">
                    <img src="${item.image}" class="img-fluid" alt="">
                </div>
                <div class="title mt-3">
                    <p>${item.title.slice(0,15)}</p>
                </div>
                <div class="price">
                    <p> Usd : $ ${item.price}</p>
                </div>
                <div class="detail">
                    <p>${item.description.slice(0,25)}...</p>
                </div>
                
            </div>`   
        })
        }
    catch(error){
        console.log(error);
    }    
    
}

getProducts();






