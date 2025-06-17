# 📦 Intérpretes Test

Este proyecto sirve para poder hacer reservaciones usando la práctica ROUND ROBIN de Cal.com

---

## 🚀 Tecnologías Usadas

- **Next.js** – Framework React
- **TypeScript** – Tipado fuerte
- **Tailwind CSS** – Estilizado rápido
- **Shadcn** – Componentes prefabricados
- **Cal.com API** – Para manejar los horarios y reservas

---

## ⚙️ APIs Utilizadas

### 👤 `GET /teams/{TEAM_ID}/memberships`
- **Función:** Obtener usuarios de un team.
- **Uso:** `getAllMembers()`

### 📅 `GET /slots`
- **Función:** Obtener horarios disponibles.
- **Uso:** `getAvailableSlots({ startTime, endTime })`

### 📆 `POST /bookings`
- **Función:** Reservar una cita.
- **Uso:** `reserveBooking({ eventTypeId, ... })`
---

## 🧠 Hooks Personalizados

### `useAsyncState()`
- **Responsabilidad:** Hook sencillo para manejar estados asyncronos.

### `useAvailableSlots()`
- **Responsabilidad:** Llama a la API de disponibilidad, maneja loading y errores.

### `useReserveBooking({ action })`
- **Responsabilidad:** Hace la reserva y ejecuta una acción al completar (como redirigir o mostrar un toast).

### `useForm()`
- **Responsabilidad:** Hook sencillo para manejar el estado del formulario (nombre, email, etc.).

---

## 🧩 Lógica General

1. El usuario ingresa sus datos y selecciona una fecha.
2. Se obtienen los horarios disponibles con `useAvailableSlots`.
3. Elige un slot → se muestra un `AlertDialog` para confirmar.
4. Al confirmar, `useReserveBooking` hace la llamada `POST /bookings`.
5. Se muestra una notificación y se redirige a la vista de horario reservado.
