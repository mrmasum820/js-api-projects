const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = ``;

    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('.col');
        div.innerHTML = `
            <div onclick='loadMealsDetail(${meal.idMeal})' class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `
        mealsContainer.appendChild(div);
    })
}

const searchFood = (name) => {
    const mealSearch = document.getElementById('meal-search');
    const searchMeal = mealSearch.value;
    loadMeals(searchMeal);

    mealSearch.value = '';
}

const loadMealsDetail = (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displayMealsDetail(data.meals[0]))
}

const displayMealsDetail = (meal) => {
    console.log(meal);
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = ``;
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions}</p>
    </div>
    `

    mealContainer.appendChild(cardDiv);
}

loadMeals('');