import dataset from './model/dataset.js';
import foods from './model/food.js';

const formFood = document.queryselector('#formFood');

if (localStorage.getItem('foods-app:loaded') !== 'ok') {
foods.load(dataset);
  localStorage.setItem('foods-app:loaded', 'ok');
}

for (const food of foods.readAll()) {
  createfoodcard(food);
}

function createfoodcard(food) {
  const card = <div class="card-food col-sm-6 col-lg-4 col-xl-3 mb-3">
    <div class="card">
      <div class="card-header text-center font-weight-bold">
        <span class="food-name">
          ${food.name}
        </span>
      </div>
      <div class="card-body p-0">
        <lmg src="${food.image}" alt="hamburguer" class="food-image w-100">
      </div>
    </div>
  </div>;

  const cardDeck = document.querySelector('.card-deck');

  cardDeck.insertAdjacentHTML('beforeend', card);
}

function loadFormValues(title, foodName, foodImage) {
  const formLabel = document.querySelector('#formFoodLabel');
  const formNameImput = document.querySelector('#Food-name');
  const foodImageImput = document.querySelector('#Food-image');

  formLabel.innerHTML = title;
  foodNameInput.value = foodName;
  foodImageInput.value = foodImage;
}

function loadcreatefood() {
  loadFormValues('Adicionar comida', '', '');

  formFood.onsubmit = (e) => {
    e.preventDefault();

    const food = object.fromentries(new formData(formFood));

    const newFood = foods.create(food);

    console.log(newFood);

    createfoodcard(newFood);

    $('#formFoodModal').modal('toglle');
  };
}

window.loadFormCreateFood = loadFormCreateFood;

loadfoods();
