# Política de Privacidade (AI LABO)

_Última atualização: 26 de setembro de 2026_

A "AI LABO" (doravante "a App") é uma aplicação utilitária que permite a uma IA operar funcionalidades do dispositivo em nome do utilizador. Esta política explica que informação a App trata.

## 1. Como funciona a App (BYOK e o modelo de IA fornecido pela app)

A App oferece duas formas de utilização:

- BYOK (traga a sua própria chave): Nas Definições, introduz a sua própria chave de API para um dos seguintes fornecedores: OpenRouter, Anthropic (Claude), OpenAI (ChatGPT), Google (Gemini) ou xAI (Grok). Este modo não requer início de sessão e não passa por nenhum servidor operado pelo programador.
- Modelo de IA fornecido pela app (subscrição): Após iniciar sessão (ver secção 4) e subscrever, pode utilizar um modelo de IA fornecido pelo programador sem obter a sua própria chave de API. Neste modo, o conteúdo das suas conversas é enviado para o fornecedor de IA através de um servidor backend operado pelo programador (executado no Google Cloud Run).

## 2. Tratamento das chaves de API (modo BYOK)

Uma chave de API introduzida no modo BYOK é armazenada apenas em armazenamento encriptado no dispositivo (iOS Keychain / Android Keystore, através do flutter_secure_storage). Nunca é enviada ao programador nem a terceiros.

## 3. Informação enviada ao seu fornecedor de IA

Quando utiliza a função de chat, as mensagens que escreve, as imagens que anexa e os resultados de qualquer ferramenta executada pela IA são enviados a um fornecedor de IA. No modo BYOK, isto é enviado diretamente ao fornecedor escolhido; no modo de modelo de IA fornecido pela app, passa pelo servidor backend do programador até ao OpenRouter. A forma como essa informação é tratada rege-se pela política de privacidade do fornecedor que efetivamente a processa:

- OpenRouter: <https://openrouter.ai/privacy>
- Anthropic (Claude): <https://www.anthropic.com/legal/privacy>
- OpenAI (ChatGPT): <https://openai.com/policies/privacy-policy>
- Google (Gemini): <https://policies.google.com/privacy>
- xAI (Grok): <https://x.ai/legal/privacy-policy>

A App pede o seu consentimento explícito para isto no primeiro arranque.

Pesquisa na web: quando a IA utiliza a ferramenta de pesquisa na web, os termos de pesquisa são enviados diretamente do seu dispositivo para o DuckDuckGo (<https://duckduckgo.com/privacy>). Apenas são enviados os termos de pesquisa (além da informação técnica que qualquer pedido à internet contém, como o seu endereço IP).

## 4. Conta e subscrição

O seguinte aplica-se apenas se utilizar o modelo de IA fornecido pela app. Nada disto ocorre se utilizar apenas o modo BYOK.

- Início de sessão: Pode iniciar sessão com Google, Apple, ou email e palavra-passe (através do Firebase Authentication). Apenas são recolhidos o seu endereço de email e um identificador emitido pelo método de início de sessão escolhido.
- Servidor backend: Após iniciar sessão, os seus pedidos de chat passam por um servidor backend operado pelo programador (Google Cloud Run, executado na infraestrutura da Google Cloud), para verificar o estado da subscrição e controlar a utilização mensal.
- Gestão de subscrição: As compras, restauros e o estado da subscrição são geridos pela RevenueCat (<https://www.revenuecat.com/privacy>). A sua informação de compra na App Store / Google Play é partilhada com a RevenueCat para este fim.

## 5. Acesso a funcionalidades do dispositivo

A seu pedido, a IA pode operar as seguintes funcionalidades do dispositivo: lanterna, vibração, texto para voz, localização, procura por Bluetooth, leitura de informações de Wi-Fi/bateria/dispositivo e sensores, leitura e escrita na área de transferência, câmara, leitura de códigos QR, gravação/reprodução de áudio, voz para texto, geração de imagens, criação/leitura/listagem/eliminação de ficheiros, leitura e escrita numa base de dados exclusiva da app, gravação de imagens na galeria, partilha através da folha de partilha do sistema, abertura de outras apps, URLs, da app de marcação ou de mensagens, e agendamento de alarmes/tarefas.

- Os resultados destas ações (fotografias tiradas, áudio gravado, ficheiros criados, etc.) são guardados apenas no seu dispositivo. Nada disto é enviado para qualquer servidor operado pelo programador.
- Por predefinição, as ferramentas são executadas sem uma confirmação adicional na app. No separador Ferramentas pode definir cada ferramenta como "Perguntar" (é mostrado um ecrã de confirmação antes da execução) ou "Recusar" (a IA nunca a pode executar). Independentemente disso, as caixas de diálogo de permissão do próprio sistema operativo (câmara, microfone, localização, etc.) são sempre mostradas antes de a App aceder a essas funcionalidades pela primeira vez.
- As chamadas telefónicas e mensagens de texto limitam-se a abrir a aplicação de marcação/mensagens com o conteúdo pré-preenchido - a App nunca efetua uma chamada nem envia uma mensagem por conta própria; a ação final é sempre realizada por si.
- A localização, o Bluetooth e dados semelhantes só são acedidos quando a IA os solicita por sua instrução; a App não os acede continuamente em segundo plano.

## 6. Análise e relatórios de falhas

A App utiliza o Firebase Analytics (estatísticas agregadas de utilização) e o Firebase Crashlytics (o tipo e local de uma falha, caso ocorra) para ajudar a melhorar a App. Nenhum destes recebe alguma vez o seu conteúdo real: texto de conversas, argumentos de chamadas a ferramentas (conteúdo de ficheiros, coordenadas de localização, termos de pesquisa, etc.) ou chaves de API. Pode desativar o Firebase Analytics a qualquer momento nas Definições.

## 7. Publicidade

Se utilizar o modo BYOK gratuitamente (sem subscrição ativa), a App mostra anúncios em banner através do Google AdMob (os subscritores nunca veem anúncios). No iOS, a App pede permissão de monitorização (App Tracking Transparency) no primeiro arranque; só verá anúncios personalizados se a conceder. Se recusar, verá apenas anúncios não personalizados.

## 8. Partilha com terceiros

O programador não vende a sua informação pessoal a terceiros. A partilha com os fornecedores de IA, o DuckDuckGo, a RevenueCat e a Google (Firebase/AdMob) descrita nas secções 3 a 7 acima limita-se ao necessário para o funcionamento desses serviços.

## 9. Privacidade das crianças

A App não se destina a crianças com menos de 13 anos.

## 10. Contacto

Para questões sobre esta política, contacte:

normidar7@gmail.com

## 11. Alterações a esta política

Esta política pode ser atualizada periodicamente. Alterações relevantes serão anunciadas na App ou nesta página.
