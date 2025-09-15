// Importación de LitElement y herramientas de renderizado
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// Declaración del componente personalizado <claim-details>
@customElement('claim-details')
export class ClaimDetails extends LitElement {
  // Estilos CSS aplicados al componente
  static styles = css`
    .form-group {
      margin-bottom: 1.5rem;
    }

    textarea {
      resize: vertical;
      min-height: 150px;
    }
  `;

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
        <legend>Datos de la Reclamación</legend>

        <!-- Selección del tipo de solicitud -->
        <div class="form-group">
          <label>Tipo:</label>
          <div class="radio-group">
            <label>
              <input
                type="radio"
                name="tipoReclamacion"
                value="reclamación"
                @change=${this.emitChange}
              />
              Reclamación
            </label>
            <label>
              <input
                type="radio"
                name="tipoReclamacion"
                value="queja"
                @change=${this.emitChange}
              />
              Queja
            </label>
          </div>
        </div>

        <!-- Campo de descripción -->
        <div class="form-group">
          <label for="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            name="descripcion"
            rows="6"
            placeholder="Describa brevemente el motivo de su solicitud"
            @input=${this.emitChange}
          ></textarea>
        </div>

        <!-- Campo para adjuntar archivos -->
        <div class="form-group">
          <label for="documentos">Adjuntar documentación:</label>
          <input
            id="documentos"
            type="file"
            name="documentos"
            @change=${this.emitChange}
          />
        </div>

        <!-- Preferencia de respuesta -->
        <div class="form-group">
          <label>Indique cómo desea recibir la contestación:</label>
          <div class="radio-group">
            <label>
              <input
                type="radio"
                name="modoRespuesta"
                value="email"
                @change=${this.emitChange}
              />
              Por correo electrónico
            </label>
            <label>
              <input
                type="radio"
                name="modoRespuesta"
                value="postal"
                @change=${this.emitChange}
              />
              Por correo ordinario
            </label>
          </div>
        </div>

        <!-- Campo para correo electrónico de respuesta -->
        <div class="form-group">
          <label for="emailRespuesta">Correo electrónico:</label>
          <input
            id="emailRespuesta"
            type="email"
            name="emailRespuesta"
            placeholder="ejemplo@correo.com"
            @input=${this.emitChange}
          />
        </div>
      </fieldset>
    `;
  }
}