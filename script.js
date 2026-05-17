const siteConfig = {
  phone: "(727) 267-8191",
  facebookUrl: "https://www.facebook.com/p/Eriks-Eatery-61564585456567/",
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeTjjknR4pwFaaP4qXceDx55YqcyUMohlZa9kQxTqfZ3unfrw/viewform",
  menuSource: {
    // Publish a Google Sheet to the web as CSV, then paste the CSV URL here.
    // Supported columns: Category, Food, Description, Price. Optional: Available.
    googleSheetCsvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vT5ieKCMMZRBoLY8uU8LV5iS6WMaLStw4HMBelU01hoyzD07dZGdaSKL6Yec6H6Mulw__H6f4H4mjFS/pub?output=csv",
    useFallbackMenuWhenSheetFails: true
  },
  images: {
    logo: "assets/eriks-logo.jpg",
    hero: "assets/ellies-wrap-poster.jpg",
    truck: "assets/food-truck.jpg",
    kitchen: "assets/erik-in-kitchen.jpg",
    menu: "assets/menu.jpg"
  },
  gallery: [
    {
      title: "Ellie's Wrap",
      description: "Fresh, colorful, and a clear fan favorite.",
      image: "assets/ellies-wrap.jpg",
      position: "center"
    },
    {
      title: "Smash Burgers",
      description: "Hot off the grill with melty cheese.",
      image: "assets/smash-burger.jpg",
      position: "center"
    },
    {
      title: "Gyros",
      description: "Greek American classics with tzatziki.",
      image: "assets/gyro.jpg",
      position: "center"
    },
    {
      title: "Event Trays",
      description: "Wraps, catering spreads, and party-ready service.",
      image: "assets/event-wraps.jpg",
      position: "center"
    },
    {
      title: "Philly Cheesesteak",
      description: "Sliced beef, onions, melted cheese, and a toasted roll.",
      image: "assets/philly-cheesesteak.jpg",
      position: "center"
    }
  ],
  menu: [
    {
      category: "Handhelds",
      items: [
        {
          name: "Sausage and Peppazz",
          description: "Grilled Italian sausage with onions and peppazz. Served with fries.",
          price: "$14.95"
        },
        {
          name: "Athenian Army Wrap",
          description: "Spring mix lettuce, grilled chicken, feta, olives, tomato, cucumber, red onions, and Greek dressing. Served with fries.",
          price: "$14.95"
        },
        {
          name: "Philly Cheesesteak",
          description: "With onions and fries.",
          price: "$13.95"
        },
        {
          name: "Chicken Philly",
          description: "With onions and fries.",
          price: "$13.95"
        },
        {
          name: "Smash Burger",
          description: "With onions and cheese with fries.",
          price: "$12.95"
        },
        {
          name: "Traditional Burger",
          description: "With or without cheese with fries. Add bacon for additional cost.",
          price: "$10.95"
        },
        {
          name: "Big Country Chicken Sandwich",
          description: "Grilled chicken, cheese, bacon, and BBQ sauce with fries.",
          price: "$13.95"
        },
        {
          name: "Ellie's Wrap",
          description: "Grilled chicken breast, spring mix lettuce, tomato, bacon bits, cheddar cheese, zesty garlic ranch in a garlic tortilla.",
          price: "$13.95"
        },
        {
          name: "Gyro",
          description: "Tomato, onion, tzatziki with fries.",
          price: "$13.95"
        },
        {
          name: "Chicken Gyro",
          description: "Tomato, onion, tzatziki with fries.",
          price: "$13.95"
        },
        {
          name: "Spinach Pie",
          description: "Served with fries.",
          price: "$11.95"
        }
      ]
    },
    {
      category: "Smash Burgers",
      items: [
        {
          name: "The Dimos",
          description: "Double smash burger with bacon, onion, cheese, and an egg. Served with fries.",
          price: "$14.95"
        },
        {
          name: "Triple Fatty",
          description: "Three-smash burger with bacon, cheese, onion. Served with fries.",
          price: "$14.95"
        },
        {
          name: "Shroom 'n Doom",
          description: "Double smash burger with bacon, cheese, onions, and mushrooms. Served with fries.",
          price: "$14.95"
        }
      ]
    },
    {
      category: "Sides / Salad",
      items: [
        {
          name: "Greek Salad",
          description: "Mixed lettuce, tomatoes, cucumbers, Greek olives, pepperoncino peppers, red onion, and feta cheese.",
          price: "$13.95"
        },
        {
          name: "Greek Fries",
          description: "Crisp fries with Greek-inspired flavor.",
          price: "$7.95"
        }
      ]
    },
    {
      category: "Kids",
      items: [
        {
          name: "Chicken Tenders",
          description: "Served with fries.",
          price: "$7.95"
        },
        {
          name: "Hot Dog",
          description: "Served with fries.",
          price: "$7.95"
        },
        {
          name: "Mozzarella Sticks",
          description: "A kid-friendly favorite.",
          price: "$7.95"
        }
      ]
    }
  ]
};

const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const menuList = document.querySelector("[data-menu-list]");
const menuStatus = document.querySelector("[data-menu-status]");
const galleryList = document.querySelector("[data-gallery-list]");

document.querySelectorAll("[data-google-form-link]").forEach((link) => {
  link.href = siteConfig.googleFormUrl;
});

document.querySelectorAll("[data-facebook-link]").forEach((link) => {
  link.href = siteConfig.facebookUrl;
});

document.querySelectorAll("[data-site-image]").forEach((image) => {
  const imageName = image.dataset.siteImage;
  const source = siteConfig.images[imageName];

  image.src = source || "";
  image.addEventListener("error", () => {
    image.classList.add("is-missing");
  });
});

function renderMenu() {
  menuList.innerHTML = siteConfig.menu
    .map((category) => {
      const items = category.items
        .map(
          (item) => `
            <article class="menu-card">
              <div>
                <h4>${item.name}</h4>
                <p>${item.description}</p>
              </div>
              <span class="price">${item.price}</span>
            </article>
          `
        )
        .join("");

      return `
        <section class="menu-category">
          <h3>${category.category}</h3>
          ${items}
        </section>
      `;
    })
    .join("");
}

function showMenuStatus(message) {
  if (!menuStatus) {
    return;
  }

  menuStatus.textContent = message;
  menuStatus.classList.toggle("is-visible", Boolean(message));
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = "";
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && inQuotes && next === '"') {
      value += '"';
      index += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      row.push(value.trim());
      value = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") {
        index += 1;
      }
      row.push(value.trim());
      if (row.some(Boolean)) {
        rows.push(row);
      }
      row = [];
      value = "";
    } else {
      value += char;
    }
  }

  row.push(value.trim());
  if (row.some(Boolean)) {
    rows.push(row);
  }

  return rows;
}

function normalizeHeader(header) {
  return header.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function inferCategory(name) {
  const itemName = name.toLowerCase();

  if (["chicken tenders", "hot dog", "mozzarella sticks"].some((term) => itemName.includes(term))) {
    return "Kids";
  }

  if (itemName.includes("dimos") || itemName.includes("triple") || itemName.includes("shroom")) {
    return "Smash Burgers";
  }

  if (itemName.includes("salad") || itemName.includes("fries")) {
    return "Sides / Salad";
  }

  return "Handhelds";
}

function menuFromRows(rows) {
  const [headers, ...items] = rows;
  const headerMap = Object.fromEntries(headers.map((header, index) => [normalizeHeader(header), index]));
  const get = (row, ...keys) => {
    const foundKey = keys.find((key) => headerMap[key] !== undefined);
    return foundKey ? row[headerMap[foundKey]] || "" : "";
  };
  const categories = new Map();

  items.forEach((row) => {
    const available = get(row, "available").toLowerCase();
    const isHidden = ["no", "false", "0", "hidden", "soldout"].includes(available);
    const name = get(row, "food", "name", "item");
    const category = get(row, "category", "categorytitle", "section") || inferCategory(name);

    if (!name || isHidden) {
      return;
    }

    if (!categories.has(category)) {
      categories.set(category, { category, items: [] });
    }

    categories.get(category).items.push({
      name,
      description: get(row, "description"),
      price: get(row, "price")
    });
  });

  return [...categories.values()].filter((category) => category.items.length);
}

async function loadMenu() {
  const csvUrl = siteConfig.menuSource.googleSheetCsvUrl.trim();

  if (!csvUrl) {
    showMenuStatus("");
    renderMenu();
    return;
  }

  try {
    showMenuStatus("Loading the latest menu from Google Sheets...");
    const response = await fetch(csvUrl, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Sheet returned ${response.status}`);
    }

    const rows = parseCsv(await response.text());
    const sheetMenu = menuFromRows(rows);

    if (!sheetMenu.length) {
      throw new Error("Sheet did not include any visible menu items");
    }

    siteConfig.menu = sheetMenu;
    showMenuStatus("Menu loaded from Google Sheets.");
    renderMenu();
  } catch (error) {
    if (!siteConfig.menuSource.useFallbackMenuWhenSheetFails) {
      showMenuStatus("Menu is temporarily unavailable.");
      return;
    }

    showMenuStatus("Showing the saved menu. The connected Google Sheet is empty or unavailable right now.");
    renderMenu();
    console.warn("Google Sheet menu failed to load:", error);
  }
}

function renderGallery() {
  galleryList.innerHTML = siteConfig.gallery
    .map(
      (item) => `
        <article class="gallery-card">
          <img
            src="${item.image}"
            alt="${item.title}"
            style="object-position: ${item.position || "center"}"
            onerror="this.classList.add('is-missing');"
          >
          <div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function updateHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

navToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", updateHeaderState, { passive: true });

loadMenu();
renderGallery();
updateHeaderState();
