// Importación de LitElement y herramientas de renderizado
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// Declaración del componente personalizado <consent-section>
@customElement('consent-section')
export class ConsentSection extends LitElement {
  // Estilos del componente (vacío por ahora, se puede extender)
  static styles = css``;

  // Método para emitir un evento personalizado cuando el usuario interactúa
  emitChange(e: Event) {
    this.dispatchEvent(new CustomEvent('input-change', {
      detail: e,           // Se pasa el evento original
      bubbles: true,       // Permite que el evento se propague
      composed: true       // Permite que cruce el shadow DOM
    }));
  }

  // Renderizado del componente en HTML
  render() {
    return html`
      <fieldset>
        <legend>Consentimiento</legend>
        <label>
          <input type="checkbox" name="consentimiento" @change=${this.emitChange} />
          Acepto los términos y condiciones
        </label>
      </fieldset>
    `;
  }
}