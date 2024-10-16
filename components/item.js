import "./item.css"

export default function Item(conten, iconStr) {
    let div = document.createElement('div');
    div.classList.add("item")
    div.innerHTML = `
    <div>
        <i data-lucide="${iconStr}"></i>
        <spam>${conten}</spam>
    </div>
    `

    let btnDelete = document.createElement("button")
    btnDelete.innerHTML = `
    <i data-lucide="x-circle"></i>
    `
    btnDelete.addEventListener("click", () => {
        div.remove()
    })

    div.append(btnDelete)

    return div;
}