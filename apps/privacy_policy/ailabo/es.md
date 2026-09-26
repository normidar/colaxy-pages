# Política de Privacidad (AI LABO)

_Última actualización: 26 de septiembre de 2026_

"AI LABO" (en adelante, "la App") es una aplicación de utilidad que permite que una IA opere funciones del dispositivo en nombre del usuario. Esta política explica qué información trata la App.

## 1. Cómo funciona la App (BYOK y el modelo de IA proporcionado por la app)

La App ofrece dos formas de uso:

- BYOK (trae tu propia clave): En Ajustes, introduces tu propia clave de API para uno de los siguientes proveedores: OpenRouter, Anthropic (Claude), OpenAI (ChatGPT), Google (Gemini) o xAI (Grok). Este modo no requiere iniciar sesión y no pasa por ningún servidor operado por el desarrollador.
- Modelo de IA proporcionado por la app (suscripción): Tras iniciar sesión (véase la sección 4) y suscribirte, puedes usar un modelo de IA proporcionado por el desarrollador sin obtener tu propia clave de API. En este modo, el contenido de tus conversaciones se envía al proveedor de IA a través de un servidor backend operado por el desarrollador (que se ejecuta en Google Cloud Run).

## 2. Tratamiento de las claves de API (modo BYOK)

Una clave de API introducida en modo BYOK se almacena únicamente en almacenamiento cifrado del dispositivo (iOS Keychain / Android Keystore, a través de flutter_secure_storage). Nunca se envía al desarrollador ni a terceros.

## 3. Información enviada a tu proveedor de IA

Cuando usas la función de chat, los mensajes que escribes, las imágenes que adjuntas y los resultados de cualquier herramienta ejecutada por la IA se envían a un proveedor de IA. En modo BYOK, esto se envía directamente al proveedor que elegiste; en modo de modelo de IA proporcionado por la app, pasa por el servidor backend del desarrollador hasta OpenRouter. El tratamiento de esa información se rige por la política de privacidad del proveedor que efectivamente la procesa:

- OpenRouter: <https://openrouter.ai/privacy>
- Anthropic (Claude): <https://www.anthropic.com/legal/privacy>
- OpenAI (ChatGPT): <https://openai.com/policies/privacy-policy>
- Google (Gemini): <https://policies.google.com/privacy>
- xAI (Grok): <https://x.ai/legal/privacy-policy>

La App solicita tu consentimiento explícito para esto en el primer inicio.

Búsqueda web: cuando la IA usa la herramienta de búsqueda web, los términos de búsqueda se envían directamente desde tu dispositivo a DuckDuckGo (<https://duckduckgo.com/privacy>). Solo se envían los términos de búsqueda (aparte de la información técnica que conlleva cualquier solicitud a internet, como tu dirección IP).

## 4. Cuenta y suscripción

Lo siguiente solo aplica si usas el modelo de IA proporcionado por la app. Nada de esto ocurre si solo usas el modo BYOK.

- Inicio de sesión: Puedes iniciar sesión con Google, Apple, o correo electrónico y contraseña (mediante Firebase Authentication). Solo se recopilan tu dirección de correo electrónico y un identificador emitido por el método de inicio de sesión elegido.
- Servidor backend: Tras iniciar sesión, tus solicitudes de chat pasan por un servidor backend operado por el desarrollador (Google Cloud Run, que se ejecuta en infraestructura de Google Cloud), para verificar el estado de la suscripción y controlar el uso mensual.
- Gestión de la suscripción: Las compras, restauraciones y el estado de la suscripción son gestionados por RevenueCat (<https://www.revenuecat.com/privacy>). Tu información de compra de App Store / Google Play se comparte con RevenueCat para este fin.

## 5. Acceso a funciones del dispositivo

A petición tuya, la IA puede operar las siguientes funciones del dispositivo: linterna, vibración, texto a voz, ubicación, escaneo por Bluetooth, lectura de información de Wi-Fi/batería/dispositivo y sensores, lectura y escritura del portapapeles, cámara, lectura de códigos QR, grabación/reproducción de audio, voz a texto, generación de imágenes, creación/lectura/listado/eliminación de archivos, lectura y escritura de una base de datos exclusiva de la app, guardado de imágenes en la fototeca, compartir mediante el menú para compartir del sistema, apertura de otras apps, URLs, la app de teléfono o de mensajería, y programación de alarmas/tareas.

- Los resultados de estas acciones (fotos tomadas, audio grabado, archivos creados, etc.) se guardan únicamente en tu dispositivo. Nada de esto se envía a ningún servidor operado por el desarrollador.
- De forma predeterminada, las herramientas se ejecutan sin una confirmación adicional dentro de la app. En la pestaña Herramientas puedes configurar cada herramienta como "Preguntar" (se muestra una pantalla de confirmación antes de ejecutarse) o "Denegar" (la IA nunca puede ejecutarla). Por otra parte, los diálogos de permisos del propio sistema operativo (cámara, micrófono, ubicación, etc.) siempre se muestran antes de que la App acceda a esas funciones por primera vez.
- Las llamadas telefónicas y los mensajes de texto se limitan a abrir la aplicación de marcación/mensajería con el contenido precargado; la App nunca realiza una llamada ni envía un mensaje por sí sola: la acción final siempre la realizas tú.
- La ubicación, el Bluetooth y datos similares solo se acceden cuando la IA los solicita por tu instrucción; la App no accede a ellos de forma continua en segundo plano.

## 6. Analítica e informes de fallos

La App utiliza Firebase Analytics (estadísticas de uso agregadas) y Firebase Crashlytics (el tipo y la ubicación de un fallo, si ocurre) para ayudar a mejorar la App. Ninguno de estos recibe nunca tu contenido real: texto de las conversaciones, argumentos de llamadas a herramientas (contenido de archivos, coordenadas de ubicación, términos de búsqueda, etc.) o claves de API. Puedes desactivar Firebase Analytics en cualquier momento desde Ajustes.

## 7. Publicidad

Si usas el modo BYOK de forma gratuita (sin una suscripción activa), la App muestra anuncios en banner mediante Google AdMob (los suscriptores nunca ven anuncios). En iOS, la App solicita permiso de seguimiento (App Tracking Transparency) en el primer inicio; solo verás anuncios personalizados si lo concedes. Si lo rechazas, solo verás anuncios no personalizados.

## 8. Compartición con terceros

El desarrollador no vende tu información personal a terceros. La compartición con los proveedores de IA, DuckDuckGo, RevenueCat y Google (Firebase/AdMob) descrita en las secciones 3 a 7 anteriores se limita a lo necesario para el funcionamiento de esos servicios.

## 9. Privacidad de los menores

La App no está dirigida a menores de 13 años.

## 10. Contacto

Para preguntas sobre esta política, contacta con:

normidar7@gmail.com

## 11. Cambios a esta política

Esta política puede actualizarse periódicamente. Los cambios importantes se anunciarán en la App o en esta página.
