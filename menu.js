// saving the data
const menu = [
    {
      image: "../images/breakfast/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg",
      title: "Pasta Pizza",
      price: 2300,
      category: "breakfast",
    },
    {
      image: "../images/breakfast/pexels-jansher-chakkittammal-18024281.jpg",
      title: "Salad and Rice",
      price: 2700,
      category: "breakfast",
    },
    {
      image: "../images/breakfast/pexels-mehmet-yasin-kabaklı-17803597.jpg",
      title: "Fruit Meal",
      price: 2200,
      category: "breakfast",
    },
    {
      image: "../images/breakfast/pexels-micheile-oliviestrauss-9428260.jpg",
      title: "Morning Juice",
      price: 2400,
      category: "breakfast",
    },
    {
      image: "../images/launch/pexels-lisa-fotios-1351238.jpg",
      title: "Bread and Sausage",
      price: 2000,
      category: "lunch",
    },
    {
      image: "../images/launch/pexels-micheile-oliviestrauss-9428260 (1).jpg",
      title: "Love Banquet",
      price: 3300,
      category: "lunch",
    },
    {
      image: "../images/launch/pexels-pixabay-262978.jpg",
      title: "Canadian Pizza-cury",
      price: 2200,
      category: "lunch",
    },
    {
      image: "../images/launch/pexels-robin-stickel-70497.jpg",
      title: "Power Powder",
      price: 1800,
      category: "lunch",
    },
    {
      image: "../images/dinner/pexels-chan-walrus-958546.jpg",
      title: "Family Jolof-Rice",
      price: 2800,
      category: "dinner",
    },
    {
      image: "../images/dinner/pexels-sami-abdullah-20476115.jpg",
      title: "Cereal Meal",
      price: 2200,
      category: "dinner",
    },
    {
      image: "../images/dinner/pexels-william-choquette-1954526.jpg",
      title: "Pounded Yam",
      price: 2400,
      category: "dinner",
    },
  ];
  
  let catBtn = document.querySelectorAll(".js-btn");
  
  // looping through the button.
  catBtn.forEach((button) => {
    button.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.category;
      const menuCat = menu.filter((menuItem) => {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
  
      console.log(menuCat);
      if (category === "All") {
        menuList(menu);
      } else {
        menuList(menuCat);
      }
    });
  });
  
  // function that loops through the array
  const menuList = (menuFood) => {
    let menuHTML = menuFood.map((menus) => {
      return `
      <div class="mb-3 col-md-6" style="max-width: 540px;">
        <div class="row g-0 justify-content-between">
          <div class="col-md-5 pe-3">
            <img src="${
              menus.image
            }" style="width: 100%; height: 150px;" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-7">
            <div class="">
               <div class=" d-flex justify-content-between">
                <h5>
                  ${menus.title}
                </h5>
                <p>$${menus.price / 100}</p>
              </div>
              <p class="">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class=""><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    `;
    });
  
    document.querySelector(".js-menu-container").innerHTML = menuHTML;
  };
  menuList(menu);