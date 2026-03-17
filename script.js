const products = [
  {
    name: "Pulseira Malachite Silver",
    description: "Pedras verdes naturais com detalhes em aço polido.",
    image: "img/pulseira-malachite-silver.jpg"
  },
  {
    name: "Pulseira Mint Pearl",
    description: "Composição leve em tons claros e acabamento sofisticado.",
    image: "https://drive.google.com/uc?export=view&id=192FnhaiirYLtv_rDPYeeCjc9xd_bJgM5"
  },
  {
    name: "Pulseira Hematite Black",
    description: "Visual contemporâneo com contraste entre hematita e pérolas.",
    image: "https://drive.google.com/uc?export=view&id=192FnhaiirYLtv_rDPYeeCjc9xd_bJgM5"
  },
  {
    name: "Pulseira Eclipse Noir",
    description: "Design minimalista em tons escuros para uso diário premium.",
    image: "https://drive.google.com/uc?export=view&id=1MmGyPIl-RZGS5WDn1-Kio1prMnnaim9z"
  }
];

const productList = document.getElementById("productList");
const selectedItems = document.getElementById("selectedItems");
const reserveLink = document.getElementById("reserveLink");
const year = document.getElementById("year");
const selected = new Set();

year.textContent = new Date().getFullYear();

function refreshReserveStatus() {
  if (!selected.size) {
    selectedItems.innerHTML = "<li>Nenhuma peça selecionada.</li>";
    reserveLink.classList.add("disabled");
    return;
  }

  selectedItems.innerHTML = [...selected].map((name) => `<li>${name}</li>`).join("");
  reserveLink.classList.remove("disabled");
}

function renderProducts() {
  products.forEach((product) => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <figure class="media">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </figure>
      <div class="card-content">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <label>
          <input type="checkbox" value="${product.name}" />
          Selecionar para reserva
        </label>
      </div>
    `;

    card.querySelector("input").addEventListener("change", (event) => {
      if (event.target.checked) {
        selected.add(product.name);
      } else {
        selected.delete(product.name);
      }
      refreshReserveStatus();
    });

    productList.appendChild(card);
  });
}

renderProducts();
refreshReserveStatus();
