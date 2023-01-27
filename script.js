function filterItems(e) {
    const items = document.querySelectorAll(".item"); //selects all menu items
    let filter = e.target.dataset.filter; //grabs value in the event target's data-filter attribute
    // if filter all button is clicked, loop through all items and remove the hidden class
    if (filter === "*") {
        items.forEach(item => item.classList.remove("hidden"));
    } else {
    //loops through all items
    items.forEach(item => {
        item.classList.contains(filter) //does item have the same data-filter in its class list
        ? item.classList.remove('hidden') //if true ?, make sure css class .hidden is NOT applied
        : item.classList.add('hidden'); // if false : does not have same filter tag, apply .hidden css class
    });
};
};


