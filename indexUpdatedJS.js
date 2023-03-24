document.getElementById("add").addEventListener("click", (e) => {
    
    e.preventDefault();

    let container = document.createElement("div");
    container.setAttribute("class", "input-container");


    let break_el = document.createElement("br");
    let label    = document.createElement("label");
    let input    = document.createElement("div");

    input.setAttribute("class", "select-container");

    label.innerHTML = "Caffeine Source: ";

    input.innerHTML = `<select name="caffeineSources" id="caffeineSources">
                            <option value = "coffee"> Coffee </option>
                            <option value = "tea"> Tea </option>
                            <option value = "energyDrink"> Energy Drink </option>
                            <option value = "softDrink"> Soft Drink </option>
                            <option value = "chocolate"> Chocolate </option>
                            <option value = "other"> Other </option>
                        </select>`

    let label_time = document.createElement("label");
    let input_time = document.createElement("input");

    input_time.setAttribute("type", "time");
    input_time.setAttribute("required", "true");

    label_time.innerHTML = "Time Consumed: ";


    container.appendChild(break_el);
    container.appendChild(label);
    container.appendChild(input);
    container.appendChild(label_time);
    container.appendChild(input_time);

    document.getElementById("form").appendChild(container)
});


document.getElementById("remove").addEventListener("click", (e) => {

    e.preventDefault();

    document.getElemenyByClassName("input-container")[0].remove(-1);
});