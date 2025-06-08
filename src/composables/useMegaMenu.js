import { ref } from "vue";

const isOpen = ref(false); // om megaMenu er åbent
const activeSlot = ref(null); // hvilken menu-slot er aktiv
let hoverTimeout = null; // timeout til at lukke menuen efter delay

function show(slotName) {
  clearTimeout(hoverTimeout); // fjern evt. ventetid på at skjule menu
  activeSlot.value = slotName; // sæt aktiv menu-slot
  isOpen.value = true; // åben menu
  console.log("show:", slotName);
}

function hide() {
  // sæt timeout til at lukke menu efter 100 ms
  hoverTimeout = setTimeout(() => {
    console.log("hide");
    isOpen.value = false; // luk menu
    activeSlot.value = null; // nulstil aktiv slot
  }, 100);
}

function cancelHide() {
  clearTimeout(hoverTimeout); // annuller timeout for at lukke menu
}

// singleton - kun ét instance eksporteres og bruges overalt
const megaMenu = { isOpen, activeSlot, show, hide, cancelHide };

export function useMegaMenu() {
  return megaMenu;
};