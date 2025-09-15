// Importación de librerías y módulos necesarios
import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { fetchUserData, submitClaim } from '../services/apiService';
import './PersonalInfo.ts';
import './ClaimDetails.ts';
import './ConsentSection.ts';
import formStyles from '../styles/form.css?inline';

// Declaración del componente personalizado <claim-form>
@customElement('claim-form')
export class ClaimForm extends LitElement {
  // Aplicación de estilos CSS importados
  static styles = css`${unsafeCSS(formStyles)}`;

  // Estados reactivos para almacenar datos del usuario y del formulario
  @state() userData: any = {};
  @state() formData: any = {};

  // Método que se ejecuta una vez que el componente está montado
  async firstUpdated() {
    console.log('Componente montado');
    try {
      // Precarga de datos del usuario (simulado con un DNI)
      const data = await fetchUserData('12345678X');
      this.userData = data;
      this.formData = { ...data };
    } catch (error) {
      console.error('Error al precargar datos:', error);
    }
  }

  // Manejo de cambios en los campos del formulario
  handleInput(e: Event) {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    this.formData = { ...this.formData, [target.name]: target.value };
  }

  // Envío del formulario al backend
  async handleSubmit(e: Event) {
    e.preventDefault();
    try {
      await submitClaim(this.formData);
      alert('Formulario enviado con éxito');
    } catch (error) {
      alert('Error al enviar el formulario');
    }
  }

  // Renderizado del componente en HTML
  render() {
    return html`
      <header class="form-header">
        <img src="/logo-ing.svg" alt="Logo ING" class="logo" />
        <h1>Servicio de Defensa del Cliente</h1>
      </header>

      <form @submit=${this.handleSubmit}>
        <h2>Reclamaciones al Servicio de Defensa del Cliente</h2>

        <!-- Sección de información personal -->
        <personal-info
          .data=${this.userData}
          @input-change=${this.handleInput}>
        </personal-info>

        <!-- Sección de detalles de la reclamación -->
        <claim-details
          @input-change=${this.handleInput}>
        </claim-details>

        <!-- Sección de consentimiento -->
        <consent-section
          @input-change=${this.handleInput}>
        </consent-section>

        <!-- Botones de acción -->
        <div class="actions">
          <button type="submit">Aceptar</button>
          <button type="reset">Borrar</button>
          <button type="button" @click=${() => location.reload()}>Cancelar</button>
        </div>
      </form>
    `;
  }
}