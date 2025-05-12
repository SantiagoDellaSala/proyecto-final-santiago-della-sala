# **PRE-ENTREGA DE PROYECTO FINAL**

**SANTIAGO DELLA SALA**

---

## **Introducción**

**Yu-Gi-Oh! Store** es una tienda en línea dedicada a la venta de productos del famoso juego de cartas **Yu-Gi-Oh!**. La propuesta principal es ofrecer a los usuarios diferentes caminos para interactuar con los productos, como la posibilidad de **publicar cartas** con detalles específicos (nombre, características, referencias, etc.). 

En una fase posterior, se implementará un sistema de **intercambio de cartas**, donde los usuarios podrán cambiar cartas entre sí, ya sea de manera directa o añadiendo un valor monetario para equilibrar la transacción.

Además, el sistema incluye un **login** para que cada usuario tenga su propio perfil, que les permitirá interactuar con la tienda, realizar un seguimiento de sus ventas, intercambios y mantener un historial detallado con una calificación basada en su actividad (ventas, intercambios, etc.).

---

## **Estructura del Proyecto**

A continuación, se detallan los puntos principales de la **pre-entrega** de este proyecto, organizados para facilitar su revisión por parte de los evaluadores.

---

## **Requerimiento #1: Implementación del Carrito y Productos**

**A. Crear un componente para listar los productos disponibles**  
- El componente que lista los productos se encuentra en el archivo **`Home.jsx`** dentro de la carpeta **`pages`**.

**B. Uso del hook `useState` para manejar el estado del carrito**  
- El carrito se maneja en el archivo **`CartContext.jsx`** dentro de la carpeta **`context`**. El componente de carrito está dividido en componentes más pequeños, con **`Cart.jsx`** como el componente principal.

**C. Implementación de un evento de clic para agregar productos al carrito**  
- El evento `onClick` para agregar productos al carrito está implementado en el archivo **`Home.jsx`**, específicamente en la línea 111, donde se define el comportamiento para el botón **"Agregar al carrito"**.

**D. Mostrar el carrito con los productos seleccionados en otro componente**  
- El carrito y los productos seleccionados se muestran en el componente **`Cart.jsx`**.

**E. Crear un Layout del eCommerce**  
- El diseño del eCommerce se gestiona con los componentes **`Footer.jsx`** y **`Header.jsx`** en la carpeta **`components`**.

---

## **Requerimiento #2: Integración y Mejoras**

**A. Integración con una API**  
- En el archivo **`App.jsx`**, línea 17, se muestra cómo se integra la API pública de **Yu-Gi-Oh!** mediante el uso de **`fetch`**.

**B. Manejo de estado de carga y errores**  
- En el mismo archivo **`App.jsx`**, se utiliza el bloque **`catch`** para manejar posibles errores al obtener datos de la API, mostrando un mensaje de error en un **`Alert`**.

**C. Gestión del estado con `useState`**  
- El estado de los productos y el estado de carga se manejan en la línea 12 del archivo **`App.jsx`** utilizando el hook **`useState`**.

**D. Actualización del diseño del eCommerce**  
- El diseño ha sido mejorado con **Bootstrap**, optimizando la estructura visual de varias partes de la tienda.

**E. Manejo de efectos secundarios con `useEffect`**  
- El hook **`useEffect`** es utilizado en la línea 17 del archivo **`App.jsx`** para realizar efectos secundarios, como la carga de datos de la API al inicio.

**F. Ampliación del carrito**  
- El carrito ahora está completamente funcional, incluyendo operaciones CRUD (crear, leer, actualizar y eliminar).

---

## **Requerimiento #3: Rutas y Navegación**

**A. Implementación de rutas**  
- Se ha organizado la navegación en el archivo **`AppRoutes.jsx`** dentro de la carpeta **`routes`**, lo que facilita la actualización y mantenimiento de las rutas del eCommerce.

**B. Estado de carga y manejo de errores en las rutas**  
- En el archivo **`ErrorPage.jsx`**, se maneja el estado de error. Si existe un error al acceder a alguna ruta, el sistema redirige al usuario a una página de error con un mensaje detallado.

**C. Creación de un componente para cada sección**  
- Las rutas están organizadas en componentes. Aunque por el momento no hay muchas rutas, se ha dejado espacio para futuras expansiones, donde cada nueva ruta podrá ser manejada en su propio componente.

**D. Navegación entre productos**  
- La navegación entre productos ya está completamente funcional, permitiendo al usuario navegar fácilmente entre las diferentes páginas del eCommerce.

---

## **Requerimiento #4: Funcionalidades Avanzadas**

**A. Rutas Dinámicas**  
- Las rutas dinámicas están implementadas correctamente. Por ejemplo, las rutas para ver productos específicos están configuradas para que se adapten a cualquier producto disponible en la base de datos.

**B. Interactividad**  
- Los usuarios pueden interactuar con el sistema de login, agregar y eliminar productos del carrito, además de tener la opción de crear y editar cartas.

**C. Rutas Protegidas**  
- Se ha creado un archivo **`ProtectedRoute.jsx`** que gestiona las rutas protegidas, es decir, aquellas rutas a las que solo se puede acceder cuando el usuario está logueado, como el carrito y la creación/edición de cartas.

**D. Navbar**  
- El **`Navbar`** está listo y completamente funcional, con todos los detalles mencionados anteriormente, como la visualización del estado de login y la gestión del carrito.

---

## **Tecnologías Utilizadas**

- **React**: Biblioteca para la creación de interfaces de usuario.
- **React Router**: Manejo de rutas para la navegación en la aplicación.
- **React Bootstrap**: Framework de diseño basado en Bootstrap para estilizar componentes.
- **API Pública de Yu-Gi-Oh!**: Fuente de datos para los productos disponibles en la tienda.
- **Context API**: Gestión del estado global, tanto para el carrito como para la autenticación de los usuarios.
- **Hooks de React**: Uso de `useState`, `useEffect` y `useContext` para manejar el estado y los efectos secundarios de la aplicación.

---

## **Próximos Pasos**

- Implementación del sistema de intercambio de cartas.
- Mejora del diseño y optimización de la experiencia del usuario.
- Expansión de la base de datos con más productos y funcionalidades.
- Refinamiento de las rutas y el manejo de errores.

---

¡Gracias por revisar la **pre-entrega** de mi proyecto! Estoy abierto a sugerencias y comentarios para mejorar aún más la aplicación.  

**SANTIAGO DELLA SALA**