import { ref } from "vue";

// const isOpen = ref(false);
const isOpen = ref(true);
const activeSlot = ref(null);
let hoverTimeout = null;

function show(slotName) {
  clearTimeout(hoverTimeout);
  activeSlot.value = slotName;
  isOpen.value = true;
  console.log("show:", slotName);
}

function hide() {
  hoverTimeout = setTimeout(() => {
    console.log("hide");
    isOpen.value = false;
    activeSlot.value = null;
  }, 100);
}

function cancelHide() {
  clearTimeout(hoverTimeout);
}

// singleton - kun et instance eksporteret og brugt overalt
const megaMenu = { isOpen, activeSlot, show, hide, cancelHide };

export function useMegaMenu() {
  return megaMenu;
};

