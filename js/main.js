AOS.init({
  duration: 800,
  easing: "slide",
  once: true,
});

jQuery(document).ready(function ($) {
  "use strict";

  var slider = function () {
    $(".nonloop-block-3").owlCarousel({
      center: false,
      items: 1,
      loop: false,
      stagePadding: 15,
      margin: 20,
      nav: true,
      navText: [
        '<span class="icon-arrow_back">',
        '<span class="icon-arrow_forward">',
      ],
      responsive: {
        600: {
          margin: 20,
          items: 2,
        },
        1000: {
          margin: 20,
          items: 3,
        },
        1200: {
          margin: 20,
          items: 3,
        },
      },
    });
  };
  slider();

  var siteMenuClone = function () {
    $('<div class="site-mobile-menu"></div>').prependTo(".site-wrap");

    $('<div class="site-mobile-menu-header"></div>').prependTo(
      ".site-mobile-menu"
    );
    $('<div class="site-mobile-menu-close "></div>').prependTo(
      ".site-mobile-menu-header"
    );
    $('<div class="site-mobile-menu-logo"></div>').prependTo(
      ".site-mobile-menu-header"
    );

    $('<div class="site-mobile-menu-body"></div>').appendTo(
      ".site-mobile-menu"
    );

    $(".js-logo-clone").clone().appendTo(".site-mobile-menu-logo");

    $('<span class="ion-ios-close js-menu-toggle"></div>').prependTo(
      ".site-mobile-menu-close"
    );

    $(".js-clone-nav").each(function () {
      var $this = $(this);
      $this
        .clone()
        .attr("class", "site-nav-wrap")
        .appendTo(".site-mobile-menu-body");
    });

    setTimeout(function () {
      var counter = 0;
      $(".site-mobile-menu .has-children").each(function () {
        var $this = $(this);

        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find(".arrow-collapse").attr({
          "data-toggle": "collapse",
          "data-target": "#collapseItem" + counter,
        });

        $this.find("> ul").attr({
          class: "collapse",
          id: "collapseItem" + counter,
        });

        counter++;
      });
    }, 1000);

    $("body").on("click", ".arrow-collapse", function (e) {
      var $this = $(this);
      if ($this.closest("li").find(".collapse").hasClass("show")) {
        $this.removeClass("active");
      } else {
        $this.addClass("active");
      }
      e.preventDefault();
    });

    $(window).resize(function () {
      var $this = $(this),
        w = $this.width();

      if (w > 768) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });

    $("body").on("click", ".js-menu-toggle", function (e) {
      var $this = $(this);
      e.preventDefault();

      if ($("body").hasClass("offcanvas-menu")) {
        $("body").removeClass("offcanvas-menu");
        $this.removeClass("active");
      } else {
        $("body").addClass("offcanvas-menu");
        $this.addClass("active");
      }
    });

    // click outisde offcanvas
    $(document).mouseup(function (e) {
      var container = $(".site-mobile-menu");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });
  };
  siteMenuClone();

  var sitePlusMinus = function () {
    $(".js-btn-minus").on("click", function (e) {
      e.preventDefault();
      if ($(this).closest(".input-group").find(".form-control").val() != 0) {
        $(this)
          .closest(".input-group")
          .find(".form-control")
          .val(
            parseInt(
              $(this).closest(".input-group").find(".form-control").val()
            ) - 1
          );
      } else {
        $(this).closest(".input-group").find(".form-control").val(parseInt(0));
      }
    });
    $(".js-btn-plus").on("click", function (e) {
      e.preventDefault();
      $(this)
        .closest(".input-group")
        .find(".form-control")
        .val(
          parseInt(
            $(this).closest(".input-group").find(".form-control").val()
          ) + 1
        );
    });
  };
  sitePlusMinus();

  var siteSliderRange = function () {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  };
  siteSliderRange();

  var siteMagnificPopup = function () {
    $(".image-popup").magnificPopup({
      type: "image",
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        verticalFit: true,
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
      },
    });

    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false,
    });
  };
  siteMagnificPopup();

  const products = [
    {
      id: 1,
      name: "Camping Table",
      description: "For Your Perfect Camping",
      price: 20.0,
      image: "images/product4.jpg",
      quantity: 0,
    },
    {
      id: 2,
      name: "ToolBox",
      description: "Essential For Camp",
      price: 19.0,
      image: "images/product5.jpg",
      quantity: 0,
    },
    {
      id: 3,
      name: "Special Tent",
      description: " Special Tent For Perfect Camping",
      price: 49.0,
      image: "images/product6.jpg",
      quantity: 0,
    },
    {
      id: 4,
      name: "Small Gas Cooker",
      description: "Easy for carry",
      price: 19.0,
      image: "images/product7.jpg",
      quantity: 0,
    },
    {
      id: 5,
      name: "Camp Chair",
      description: "For Comfortable Resting",
      price: 39.0,
      image: "images/product8.jpg",
      quantity: 0,
    },
    {
      id: 6,
      name: "Larger Gas Cooker",
      description: "Larger Gas Space",
      price: 29.0,
      image: "images/product9.jpg",
      quantity: 0,
    },
    {
      id: 7,
      name: "Gas Cooker",
      description: "Larger Gas but Easy to carry",
      price: 27.0,
      image: "images/product10.jpg",
      quantity: 0,
    },
    {
      id: 8,
      name: "Camping Toilet",
      description: "For Perfect & Special Camping",
      price: 19.0,
      image: "images/product11.jpg",
      quantity: 0,
    },
    {
      id: 9,
      name: "Best Cooker For Camping",
      description: "Easy to carry and Feather Weight",
      price: 33.0,
      image: "images/product12.jpg",
      quantity: 0,
    },
    {
      id: 10,
      name: "Head Camera",
      description: " For Take Vlogs ",
      price: 39.0,
      image: "images/product13.jpg",
      quantity: 0,
    },
    {
      id: 11,
      name: "Warm Bed",
      description: "For Comfortable Sleeps at Camping",
      price: 79.0,
      image: "images/product14.jpg",
      quantity: 0,
    },
    {
      id: 12,
      name: "Special Tent",
      description: "Easy to Carry and Larger Space for 2People",
      price: 65.0,
      image: "images/product15.jpg",
      quantity: 0,
    },
    {
      id: 13,
      name: "Small Gas Cooker",
      description: "Easy to Carry and Perfect Camp",
      price: 47.0,
      image: "images/product16.jpg",
      quantity: 0,
    },
    {
      id: 14,
      name: "Solar Speaker",
      description: "For Listening Music and Carge Devices",
      price: 49.0,
      image: "images/product17.jpg",
      quantity: 0,
    },
    {
      id: 15,
      name: "Air Bed",
      description: "More Comfortable For You",
      price: 39.0,
      image: "images/product18.jpg",
      quantity: 0,
    },
    {
      id: 16,
      name: "Lighter",
      description: "For Safe At Night",
      price: 12.0,
      image: "images/product19.jpg",
      quantity: 0,
    },
    {
      id: 17,
      name: "Small Toolbox",
      description: "For Carry Cosmetic and Other",
      price: 9.0,
      image: "images/product20.jpg",
      quantity: 0,
    },
    {
      id: 18,
      name: "BackPack",
      description: "For Carry Camping Equipments",
      price: 29.0,
      image: "images/product21.jpg",
      quantity: 0,
    },
    {
      id: 19,
      name: "Larger Air Bed",
      description: "More Comfortable and Larger Space for 2 People",
      price: 59.0,
      image: "images/product22.jpg",
      quantity: 0,
    },
    {
      id: 20,
      name: "All Role Cooker Pack",
      description: "For Cook Everything You want",
      price: 35.0,
      image: "images/product23.jpg",
      quantity: 0,
    },
    {
      id: 21,
      name: "Single Cooker",
      description: "For Cook Your Foods",
      price: 11.0,
      image: "images/product24.jpg",
      quantity: 0,
    },
  ];
  const productsForFeature = [
    
    
    {
      id: 3,
      name: "Special Tent",
      description: " Special Tent For Perfect Camping",
      price: 49.0,
      image: "images/product6.jpg",
      quantity: 0,
    },
    {
      id: 4,
      name: "Small Gas Cooker",
      description: "Easy for carry",
      price: 19.0,
      image: "images/product7.jpg",
      quantity: 0,
    },
    {
      id: 5,
      name: "Camp Chair",
      description: "For Comfortable Resting",
      price: 39.0,
      image: "images/product8.jpg",
      quantity: 0,
    },
    {
      id: 6,
      name: "Larger Gas Cooker",
      description: "Larger Gas Space",
      price: 29.0,
      image: "images/product9.jpg",
      quantity: 0,
    },
  ];
  // Function to create a product card element.
  function createProductCard(product) {
    return `
	   <div class="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
		   <div class="block-4 text-center border">
		  
       <figure class="image">
		    <a href="shop-single.html?id=${product.id}">
        <img src="${product.image}" alt="Image placeholder" class="img-fluid">
        </a>
		   </figure>
		   <div class="block-4-text p-4">
			   <h3><a href="shop-single.html">${product.name}</a></h3>
			   <p class="mb-0">${product.description}</p>
			   <p class="text-primary font-weight-bold">$${product.price.toFixed(2)}</p>
			   <button class="btn btn-primary btn-sm addToCartButton" data-product-id="${
           product.id
         }" >Add to Cart</button>
		   </div>
		   </div>
	   </div>
	   `;
  }
  // Function to create a product card element.
  function createProductCardCarousel(product) {
    return `
    <div class="item" style="padding: 5px; " >
      <div class="block-4 text-center">
        <figure class="block-4-image">
          <img src="${product.image}" alt="Image placeholder" class="img-fluid">
        </figure>
        <div class="block-4-text p-4">
          <h3><a href="shop-single.html">${product.name}</a></h3>
          <p class="mb-0">${product.description}</p>
          <p class="text-primary font-weight-bold">$${product.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
    `;
  }
  // Function to populate the product cards.
  function populateProductCards() {
    const productCardsContainer = document.getElementById("product-cards");
    const productCardsCarouselContainer = document.getElementById("product-carousel");

    
    if (productCardsContainer) {
      products.forEach((product) => {
        const productCard = createProductCard(product);
        productCardsContainer.innerHTML += productCard;
      });
    }

    if(productCardsCarouselContainer) {
      productsForFeature.forEach((product) => {
        const productCardCarousel = createProductCardCarousel(product);
        productCardsCarouselContainer.innerHTML += productCardCarousel;
      });
    }
  }

  populateProductCards();
  function addToCart(productId) {
    console.log("addToCart invoked..........", productId);
    const productToAdd = products.find((product) => product.id === productId);

    if (productToAdd) {
      // Retrieve the existing cart data from localStorage
      let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

      // Check if the product is already in the cart
      const existingProduct = shoppingCart.find(
        (item) => item.id === productId
      );

      if (existingProduct) {
        existingProduct.quantity += 1; // Increment the quantity
      } else {
        productToAdd.quantity = 1; // Set the quantity to 1 for the new product
        shoppingCart.push(productToAdd); // Add the product to the cart
        console.log(
          "shoppingCart after addToCart................",
          shoppingCart
        );
      }

      // Store the updated cart data in localStorage
      localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));

      // Update the cart count in the header
      const cartCountElement = document.querySelector(".count");
      if (cartCountElement) {
        const cartCount = shoppingCart.reduce(
          (total, item) => total + item.quantity,
          0
        );
        cartCountElement.textContent = cartCount;
      }
    }
  }

  function notifyCountInHeader() {
    // Retrieve the existing cart data from localStorage
    let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

    // Update the cart count in the header
    const cartCountElement = document.querySelector(".count");
    if (cartCountElement) {
      const cartCount = shoppingCart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      cartCountElement.textContent = cartCount;
    }
  }

  function populateCartItems() {
    const cartTableBody = document.getElementById("cart-items");

    if (cartTableBody) {
      cartTableBody.innerHTML = ""; // Clear existing cart items

      function updateCartTotal() {
        const storedCartData =
          JSON.parse(localStorage.getItem("shoppingCart")) || [];
        let subtotal = 0;

        storedCartData.forEach((item) => {
          subtotal += item.price * item.quantity;
        });

        const totalElement = document.querySelector(".cart-total");
        if (totalElement) {
          totalElement.textContent = `$${subtotal.toFixed(2)}`;
        }
      }

      function renderCartItems() {
        const shoppingCart =
          JSON.parse(localStorage.getItem("shoppingCart")) || [];

        cartTableBody.innerHTML = "";

        shoppingCart.forEach((item) => {
          const row = document.createElement("tr");
          row.innerHTML = `
					   <td class="product-thumbnail">
						   <img src="${item.image}" alt="Image" class="img-fluid">
					   </td>
					   <td class="product-name">
						   <h2 class="h5 text-black">${item.name}</h2>
					   </td>
					   <td class="product-price">$${item.price.toFixed(2)}</td>
					   <td class="product-quantity">
						   <div class="input-group mb-3" style="max-width: 120px;">
							   <div class="input-group-prepend">
								   <button class="btn btn-outline-primary js-btn-minus" data-product-id="${
                     item.id
                   }" type="button">&minus;</button>
							   </div>
							   <input type="text" class="form-control text-center" value="${
                   item.quantity
                 }" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
							   <div class="input-group-append">
								   <button class="btn btn-outline-primary js-btn-plus" data-product-id="${
                     item.id
                   }" type="button">&plus;</button>
							   </div>
						   </div>
					   </td>
					   <td class="product-total">$${(item.price * item.quantity).toFixed(2)}</td>
					   <td><a href="#" class="btn btn-primary btn-sm js-remove-product" data-product-id="${
               item.id
             }">Remove</a></td>
				   `;

          cartTableBody.appendChild(row);
        });

        updateCartTotal();
      }
      renderCartItems();
    }
  }

  populateCartItems();
  notifyCountInHeader();

  function updateCartItemQuantity(productId, quantity) {
    let storedCartData = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    const updatedCart = storedCartData.map((item) => {
      if (item.id === productId) {
        item.quantity = quantity;
      }
      return item;
    });

    // Remove products with a quantity of 0
    const updatedCartWithoutZeroQuantity = updatedCart.filter(
      (item) => item.quantity > 0
    );

    localStorage.setItem(
      "shoppingCart",
      JSON.stringify(updatedCartWithoutZeroQuantity)
    );
    populateCartItems();
    notifyCountInHeader();
    calculateCartTotal(); // Recalculate cart total after updating quantity
  }

  // Event delegation for decreasing quantity
  $(document).on("click", ".js-btn-minus", function () {
    const productId = $(this).data("product-id");
    const input = $(this).closest(".input-group").find(".form-control");
    let quantity = parseInt(input.val());

    if (quantity > 0) {
      quantity--;
      input.val(quantity);
      updateCartItemQuantity(productId, quantity);
    }
  });

  // Event delegation for increasing quantity
  $(document).on("click", ".js-btn-plus", function () {
    const productId = $(this).data("product-id");
    const input = $(this).closest(".input-group").find(".form-control");
    let quantity = parseInt(input.val());

    quantity++;
    input.val(quantity);
    updateCartItemQuantity(productId, quantity);
  });

  function removeFromCart(productId) {
    let storedCartData = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    const updatedCart = storedCartData.filter((item) => item.id !== productId);

    localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
    populateCartItems();
    notifyCountInHeader();
  }
  // Event delegation for removing a product
  $(document).on("click", ".js-remove-product", function (e) {
    e.preventDefault();
    const productId = $(this).data("product-id");
    removeFromCart(productId);
  });



  // Function to calculate the subtotal and total
function calculateCartTotal() {
  const storedCartData = JSON.parse(localStorage.getItem("shoppingCart")) || [];
  let subtotal = 0;

  storedCartData.forEach((item) => {
    subtotal += item.price * item.quantity;
  });

  const subtotalElement = document.querySelector(".cart-subtotal");
  if (subtotalElement) {
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
  }

  const totalElement = document.querySelector(".cart-total");
  if (totalElement) {
    totalElement.textContent = `$${subtotal.toFixed(2)}`;
  }
}

// Call the function to calculate cart total on page load
calculateCartTotal();

  function shop_single() {
	function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    // Get the product ID from the URL
    var productId = getParameterByName('id');

    if(productId) {
		// Find the product object in the products array by ID
		var productDetails = products.find(function (product) {
			return product.id === parseInt(productId, 10); // Convert productId to an integer
		});


		const shopSingleContainer = document.getElementById("shop-single");
		if (shopSingleContainer) {
			const shopSingle = createShopSingle(productDetails);
			shopSingleContainer.innerHTML += shopSingle;
		}
	}
  }

  // Function to create a product card element.
  function createShopSingle(product) {
    return `
	   <div class="row">
			<div class="col-md-6">
				<img id="product-image" src="${product.image}" alt="Image" class="img-fluid">
			</div>
			<div class="col-md-6">
				<h2 class="text-black" id="product-name">${product.name}</h2>
				<p id="product-description">${product.description}</p>
				<p class="mb-4"><strong class="text-primary h4" id="product-price">$${product.price.toFixed(2)}</strong></p>

				<button class="btn btn-primary btn-sm addToCartButton" data-product-id="${product.id}" >Add to Cart</button>
			</div>
        </div>
	   `;
  }

  shop_single();
  $(".addToCartButton").on("click", function () {
    const productId = $(this).data("product-id");
	console.log("addToCartButton Invoked for shop single.......................", productId)
    addToCart(productId);
  });



  function populateOrderItems() {
    const orderTableBody = document.getElementById("order-items");

    if (orderTableBody) {  
      function renderOrderItems() {
        const shoppingCart =
          JSON.parse(localStorage.getItem("shoppingCart")) || [];

        shoppingCart.forEach((item) => {
          const row = document.createElement("tr");
          row.innerHTML = `
					   <td>${item.name} <strong class="mx-2">x</strong> ${item.quantity}</td>
             <td>$${item.price.toFixed(2)}</td>
				   `;

          orderTableBody.appendChild(row);
          
        });

        let subtotal = 0;

        shoppingCart.forEach((item) => {
          subtotal += item.price * item.quantity;
        });

        const subtotalRow = document.createElement("tr");
        subtotalRow.innerHTML = `
					   <td class="text-black font-weight-bold"><strong>Cart Subtotal</strong></td>
             <td class="text-black">$${subtotal.toFixed(2)}</td>
				   `;
          orderTableBody.appendChild(subtotalRow);
        const cartTotalRow = document.createElement("tr");
        cartTotalRow.innerHTML = `
            <td class="text-black font-weight-bold"><strong>Order Total</strong></td>
            <td class="text-black font-weight-bold"><strong>$${subtotal.toFixed(2)}</strong></td>
				   `;
          orderTableBody.appendChild(cartTotalRow);

      }
      renderOrderItems();
    }
  }

  populateOrderItems();

});
