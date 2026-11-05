# Política de Privacidad (AI LABO)

_Última actualización: 5 de noviembre de 2026_

"AI LABO" (en adelante, "la App") es una aplicación de utilidad que permite que una IA opere funciones del dispositivo en nombre del usuario. Esta política explica qué información trata la App.

## 1. Cómo funciona la App (suscripción y tu propia clave de API)

La App ofrece dos formas de uso:

- Modelo de IA proporcionado por la app (suscripción, la opción predeterminada): Tras iniciar sesión (véase la sección 4) y suscribirte, puedes usar modelos de IA proporcionados por el desarrollador sin obtener tu propia clave de API. En este modo, el contenido de tus conversaciones y las funciones de IA descritas en la sección 3 pasan por un servidor backend operado por el desarrollador (que se ejecuta en Google Cloud Run) hasta OpenRouter.
- Tu propia clave de API (BYOK, "trae tu propia clave", disponible en el modo avanzado): En Ajustes, introduces tu propia clave de API para uno de los siguientes proveedores: OpenRouter, Anthropic (Claude), OpenAI (ChatGPT), Google (Gemini) o xAI (Grok). Este modo no requiere iniciar sesión, y las solicitudes van directamente de tu dispositivo al proveedor sin pasar por ningún servidor operado por el desarrollador.

## 2. Tratamiento de las claves de API (modo BYOK)

Una clave de API introducida en modo BYOK se almacena únicamente en almacenamiento cifrado del dispositivo (iOS Keychain / Android Keystore, a través de flutter_secure_storage). Nunca se envía al desarrollador ni a terceros.

## 3. Información que sale de tu dispositivo

### Proveedores de IA

Cuando usas la función de chat, los mensajes que escribes, las imágenes y archivos que adjuntas y los resultados de las herramientas que ejecuta la IA (por ejemplo, una foto que tomó, el texto de un archivo o de una página web que leyó, tu ubicación, o eventos del calendario y contactos que consultó) se envían a un proveedor de IA para que la IA pueda responder. Algunas funciones de IA también envían:

- Generación de imágenes y edición de fotos: la instrucción y, al editar, las fotos de referencia que elegiste tú o la IA.
- Generación de vídeo: la instrucción y las fotos que se usen como primer o último fotograma.
- Transcripción: el archivo de audio que se transcribe.
- Memoria de la IA: el texto que la IA guarda o busca en su memoria se convierte en vectores numéricos (embeddings) mediante un proveedor de IA. La memoria en sí se guarda solo en tu dispositivo.

Con tu propia clave de API, esto se envía directamente al proveedor que elegiste (la transcripción y la generación de vídeo solo están disponibles con una clave de OpenRouter). Con la suscripción, pasa por el servidor backend del desarrollador hasta OpenRouter; el backend solo reenvía este contenido y no lo guarda (lo que el backend sí guarda se describe en la sección 4). El tratamiento de esa información se rige por la política de privacidad del proveedor que efectivamente la procesa:

- OpenRouter: <https://openrouter.ai/privacy>
- Anthropic (Claude): <https://www.anthropic.com/legal/privacy>
- OpenAI (ChatGPT): <https://openai.com/policies/privacy-policy>
- Google (Gemini): <https://policies.google.com/privacy>
- xAI (Grok): <https://x.ai/legal/privacy-policy>

La App solicita tu consentimiento explícito para esto en el primer inicio.

### Sitios web y otros servicios a los que la App se conecta directamente

- Búsqueda web: los términos de búsqueda se envían directamente desde tu dispositivo a DuckDuckGo (<https://duckduckgo.com/privacy>) y, si no hay resultados, a Wikipedia (Wikimedia Foundation, <https://foundation.wikimedia.org/wiki/Policy:Privacy_policy>). Solo se envían los términos de búsqueda (aparte de la información técnica que conlleva cualquier solicitud a internet, como tu dirección IP).
- Lectura de páginas web y llamadas a API web: cuando la IA lee una página web o envía una solicitud web (como el comando curl), tu dispositivo se conecta directamente al sitio que eligió la IA y envía el contenido de la solicitud, que puede incluir un archivo de la carpeta de la App si la IA lo sube. Se aplica la política de privacidad de ese sitio. La App solo se conecta a direcciones públicas de internet, nunca a dispositivos de tu red local.
- Direcciones y lugares: la búsqueda de direcciones usa el servicio de geocodificación del sistema operativo (Apple en iOS, Google en Android), y la búsqueda de lugares cercanos (solo iOS) usa Apple Maps. La dirección o los términos de búsqueda, y tu ubicación cuando buscas cerca de ti, se envían a Apple o a Google.
- La conversión de voz a texto usa el servicio de reconocimiento de voz del sistema operativo (Apple / Google), que puede procesar tu voz en sus servidores.

## 4. Cuenta y suscripción

Lo siguiente solo aplica si usas el modelo de IA proporcionado por la app. Nada de esto ocurre si solo usas tu propia clave de API.

- Inicio de sesión: Puedes iniciar sesión con Google, Apple, o correo electrónico y contraseña (mediante Firebase Authentication). Solo se recopilan tu dirección de correo electrónico y un identificador emitido por el método de inicio de sesión elegido.
- Servidor backend: Tras iniciar sesión, tus solicitudes de IA pasan por un servidor backend operado por el desarrollador (Google Cloud Run, que se ejecuta en infraestructura de Google Cloud), para verificar el estado de la suscripción y controlar el uso mensual (el coste de la IA que usaste). En lugar del ID de tu cuenta, el backend entrega a OpenRouter un ID seudónimo derivado de él.
- Registros de solicitudes: por cada solicitud de IA, el backend registra solo un resumen: el tipo (chat, imagen, vídeo, audio o embedding), el modelo, el resultado o código de error, cuánto tardó, el número de mensajes, si contenía una imagen, los nombres de las herramientas que llamó la IA, y el número de tokens y el coste. Nunca se registra el contenido de tus mensajes, imágenes, audio ni resultados de herramientas. Estos registros se eliminan a los 90 días y se usan para soporte, resolución de problemas, prevención de abusos y control de costes.
- Generación de vídeo: para liquidar el cobro de un vídeo, el backend guarda el ID del trabajo, el modelo, el coste estimado y las fechas. El vídeo terminado se reenvía de OpenRouter a tu dispositivo y no se guarda en el servidor.
- Verificación de la app: para comprobar que las solicitudes provienen de una copia auténtica de la App, se usa Firebase App Check, que se basa en Google Play Integrity (Android) y Apple App Attest (iOS). Esto envía a Google o Apple información sobre la integridad de la app y del dispositivo, no tu contenido.
- Gestión de la suscripción: Las compras, restauraciones y el estado de la suscripción son gestionados por RevenueCat (<https://www.revenuecat.com/privacy>). Tu información de compra de App Store / Google Play se comparte con RevenueCat para este fin.
- Códigos de invitación: Cuando creas o introduces un código de invitación, guardamos en nuestro servidor qué cuenta invitó a cuál, junto con tu propio código, para calcular la bonificación (uso mensual adicional). La app de la cuenta que invita muestra, para cada persona invitada, un número de orden, la fecha de la invitación, su plan de IA actual (Mini / Standard) y el porcentaje de bonificación resultante. Nunca se muestran a la otra parte el correo electrónico ni otros datos que permitan identificar a ninguna de las dos. Al eliminar tu cuenta se elimina tu código de invitación.
- Votaciones y sugerencias de funciones: cuando votas o sugieres una función en "Vota lo próximo", guardamos en nuestro servidor qué cuenta votó por qué función y qué día, y el texto de tu sugerencia, para aplicar el límite de una vez al día y contar los votos. Las sugerencias se revisan antes de publicarse y pueden mostrarse en la lista como un título traducido por IA (sin datos de la cuenta). Al eliminar tu cuenta se eliminan tus registros de votos y sugerencias (los totales de votos y los títulos publicados se mantienen).
- Eliminación de la cuenta: En Ajustes > Cuenta y suscripción > Eliminar cuenta puedes eliminar tu cuenta de inicio de sesión junto con todo lo que el servidor guarda para ella (estado de la suscripción, uso mensual, registros de solicitudes, registros de generación de vídeo, código de invitación, votos y sugerencias) y tu registro de cliente en RevenueCat. Esto no cancela la suscripción; cancélala en los ajustes de App Store o Google Play. Si ya no puedes abrir la App, consulta <https://normidar.com/ailabo/delete-account.html>.

## 5. Acceso a funciones del dispositivo

A petición tuya, la IA puede operar las siguientes funciones del dispositivo: linterna, vibración, texto a voz, brillo de la pantalla, volumen (Android), ubicación y búsqueda de direcciones, brújula, presión atmosférica y número de pasos, Bluetooth (escaneo, y lectura o escritura en un dispositivo), lectura y escritura de etiquetas NFC, lectura de información de Wi-Fi/batería/dispositivo y sensores, lectura y escritura del portapapeles, cámara (fotos y vídeos), lectura de códigos QR, grabación/reproducción de audio y transcripción, voz a texto, lectura, creación, modificación y eliminación de eventos del calendario, búsqueda y creación de contactos, generación de imágenes y vídeos y edición de fotos, archivos de la carpeta de la App (crear, leer —incluidos documentos PDF y de Office—, editar, renombrar, copiar, buscar y eliminar), bases de datos exclusivas de la app, una lista de tareas, la memoria de la IA, mostrar páginas web creadas por la IA (servidas solo a la propia App en tu dispositivo), guardado en la fototeca, compartir mediante el menú para compartir del sistema, apertura de otras apps, URLs, mapas, la app de teléfono o de mensajería, programación de alarmas/tareas, y hacerte preguntas con opciones.

- Los resultados de estas acciones (fotos, grabaciones, vídeos, archivos, bases de datos, la lista de tareas, la memoria de la IA) y tu historial de chat se guardan únicamente en tu dispositivo. No se suben a ningún servidor operado por el desarrollador; solo salen de tu dispositivo como se describe en la sección 3 (al proveedor de IA cuando la IA los lee o usa, o al sitio al que la IA envía una solicitud).
- El texto y los archivos que compartes con la App desde otras apps solo se colocan en el cuadro de mensaje de un nuevo chat (los archivos se copian a la carpeta de la App). No se envía nada hasta que tú mismo envías el mensaje.
- De forma predeterminada, las herramientas se ejecutan sin una confirmación adicional dentro de la app. En Ajustes > Permisos de herramientas puedes configurar cada herramienta como "Preguntar" (se muestra una pantalla de confirmación antes de ejecutarse) o "Denegar" (la IA nunca puede ejecutarla). Independientemente de estos ajustes, la App siempre te pregunta antes de una solicitud que podría enviar tus datos fuera del dispositivo cuando la conversación ya ha visto contenido externo (como una página web o una lectura de QR, NFC o Bluetooth) junto con tus datos personales, y antes de acciones que no se pueden deshacer, como sobrescribir un archivo o eliminar un evento del calendario. Por otra parte, los diálogos de permisos del propio sistema operativo (cámara, micrófono, ubicación, calendario, contactos, etc.) siempre se muestran antes de que la App acceda a esas funciones por primera vez.
- Las llamadas telefónicas y los mensajes de texto se limitan a abrir la aplicación de marcación/mensajería con el contenido precargado; la App nunca realiza una llamada ni envía un mensaje por sí sola: la acción final siempre la realizas tú.
- La ubicación, el Bluetooth, el calendario, los contactos y datos similares solo se acceden cuando la IA los solicita por tu instrucción; la App no accede a ellos de forma continua en segundo plano. Mientras la IA está preparando una respuesta, puede seguir funcionando un tiempo después de que salgas de la App; la notificación que se muestra entonces solo indica su estado, no el contenido del chat. Las tareas programadas solo se ejecutan mientras la App está abierta.

## 6. Analítica e informes de fallos

La App utiliza Firebase Analytics (estadísticas de uso, como qué funciones y herramientas se usan, nombres de modelos, número de tokens y errores) y Firebase Crashlytics (el tipo y la ubicación de un fallo, si ocurre) para ayudar a mejorar la App. Ninguno de estos recibe nunca tu contenido real: texto de las conversaciones, argumentos de llamadas a herramientas (contenido de archivos, coordenadas de ubicación, términos de búsqueda, etc.) o claves de API. Cuando has iniciado sesión, se adjunta el ID de tu cuenta (un identificador seudónimo de Firebase, no tu correo electrónico) para poder relacionar los problemas con los registros del servidor de la sección 4 al darte soporte. Puedes desactivar ambos en cualquier momento en Ajustes > Enviar datos de uso.

## 7. Publicidad

Si usas tu propia clave de API sin suscripción, la App muestra anuncios en banner mediante Google AdMob (los suscriptores, incluido el plan "Sin anuncios", nunca ven anuncios). En las regiones donde se requiere consentimiento (como el EEE y el Reino Unido), primero se muestra el formulario de consentimiento de Google y los anuncios solo se cargan después de que elijas. En iOS, la App solicita permiso de seguimiento (App Tracking Transparency) antes de mostrar anuncios; solo verás anuncios personalizados si lo concedes. Si lo rechazas, solo verás anuncios no personalizados.

## 8. Compartición con terceros

El desarrollador no vende tu información personal a terceros. La compartición con los proveedores de IA, DuckDuckGo y Wikipedia, los sitios a los que la IA se conecta a petición tuya, Apple y Google (búsqueda de direcciones, mapas, reconocimiento de voz, verificación de la app), RevenueCat y Google (Firebase/AdMob) descrita en las secciones 3 a 7 anteriores se limita a lo necesario para el funcionamiento de esos servicios.

## 9. Privacidad de los menores

La App no está dirigida a menores de 13 años.

## 10. Contacto

Para preguntas sobre esta política, contacta con:

normidar7@gmail.com

## 11. Cambios a esta política

Esta política puede actualizarse periódicamente. Los cambios importantes se anunciarán en la App o en esta página.
