// Importación de LitElement y herramientas de renderizado
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// Declaración del componente personalizado <personal-info>
@customElement('personal-info')
export class PersonalInfo extends LitElement {
  // Estilos del componente (vacío por ahora, se puede extender)
  static styles = css``;

  // Propiedad reactiva que recibe los datos del usuario
  @property({ type: Object }) data: any = {};

  // Método para emitir eventos cuando hay cambios en los campos
  emitChange(e: Event) {
    this.dispatchEvent(new CustomEvent('input-change', {
      detail: e,           // Se pasa el evento original
      bubbles: true,       // Permite que el evento se propague
      composed: true       // Permite que cruce el shadow DOM
    }));
  }

  // Renderizado del formulario de datos personales
  render() {
    return html`
      <fieldset>
        <legend>Datos Personales</legend>

        <label>Nombre:</label>
        <input name="nombre" .value=${this.data.nombre || ''} @input=${this.emitChange} />

        <label>Apellido 1:</label>
        <input name="apellido1" .value=${this.data.apellido1 || ''} @input=${this.emitChange} />

        <label>Apellido 2:</label>
        <input name="apellido2" .value=${this.data.apellido2 || ''} @input=${this.emitChange} />

        <label>Tipo de documento:</label>
        <select name="tipoDocumento" @change=${this.emitChange}>
          <option>DNI</option>
          <option>NIE</option>
          <option>Pasaporte</option>
        </select>

        <label>Número de documento:</label>
        <input name="documento" .value=${this.data.documento || ''} @input=${this.emitChange} />

        <div class="field-inline">
          <label for="telefono">Teléfono:</label>
          <input id="telefono" name="telefono" .value=${this.data.telefono || ''} @input=${this.emitChange} />
        </div>
      </fieldset>
    `;
  }
}