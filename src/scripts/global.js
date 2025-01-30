import './components/footer-default.js'
import './components/alert-dialog.js'
import './components/form-item.js'

export function change_visibility (item, display){
    const visiStyle = getComputedStyle(item).display
    item.style.display = visiStyle === "block" || "flex" ? "none" : `${display}`;
}