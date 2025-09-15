export async function fetchUserData(documentId: string) {
  const response = await fetch(`https://api.tu-backend.com/consulta/${documentId}`);
  if (!response.ok) throw new Error('Error al consultar datos');
  return await response.json();
}

export async function submitClaim(data: any) {
  const response = await fetch('https://api.tu-backend.com/enviar', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Error al enviar el formulario');
  return await response.json();
}