import autoAnimate from "@formkit/auto-animate";
import Item from "./components/item.js";
import { createIcons, Facebook, Youtube, Instagram, XCircle } from "lucide";

const itemsContainer = document.querySelector("#items");

autoAnimate(itemsContainer);

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputContent = form.querySelector("#content");
  /**
   * @type {HTMLSelectElement}
   */
  const iconSelect = form.querySelector("#iconSelect");

  const content = inputContent.value.trim();
  const icon = iconSelect.value;

  const newItem = Item(content, icon);
  inputContent.value = "";
  iconSelect.selectedIndex = 0;

  itemsContainer.append(newItem);
  createIcons({
    icons: {
      Instagram,
      Youtube,
      Facebook,
      XCircle,
    },
  });
});
