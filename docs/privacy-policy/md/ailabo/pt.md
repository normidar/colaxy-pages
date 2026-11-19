# Política de Privacidade (AI LABO)

_Última atualização: 19 de novembro de 2026_

A "AI LABO" (doravante "a App") é uma aplicação utilitária que permite a uma IA operar funcionalidades do dispositivo em nome do utilizador. Esta política explica que informação a App trata.

## 1. Como funciona a App (subscrição e a sua própria chave de API)

A App oferece duas formas de utilização:

- Modelo de IA fornecido pela app (subscrição, a opção predefinida): Após iniciar sessão (ver secção 4) e subscrever, pode utilizar modelos de IA fornecidos pelo programador sem obter a sua própria chave de API. Neste modo, o conteúdo das suas conversas e as funcionalidades de IA descritas na secção 3 passam por um servidor backend operado pelo programador (executado no Google Cloud Run) até ao OpenRouter.
- A sua própria chave de API (BYOK, "traga a sua própria chave", disponível no modo avançado): Nas Definições, introduz a sua própria chave de API para um dos seguintes fornecedores: OpenRouter, Anthropic (Claude), OpenAI (ChatGPT), Google (Gemini) ou xAI (Grok). Este modo não requer início de sessão, e os pedidos vão diretamente do seu dispositivo para o fornecedor, sem passar por nenhum servidor operado pelo programador. Com uma chave do OpenRouter, a App também envia ao OpenRouter um identificador aleatório criado no seu dispositivo (não associado à sua conta), para que os pedidos seguidos vão para o mesmo fornecedor e possam reutilizar a sua cache de prompts.

## 2. Tratamento das chaves de API (modo BYOK)

Uma chave de API introduzida no modo BYOK é armazenada apenas em armazenamento encriptado no dispositivo (iOS Keychain / Android Keystore, através do flutter_secure_storage). Nunca é enviada ao programador nem a terceiros.

## 3. Informação que sai do seu dispositivo

### Fornecedores de IA

Quando utiliza a função de chat, as mensagens que escreve, as imagens e ficheiros que anexa e os resultados das ferramentas executadas pela IA (por exemplo, uma fotografia que tirou, o texto de um ficheiro ou de uma página web que leu, a sua localização, ou eventos do calendário e contactos que consultou) são enviados a um fornecedor de IA para que a IA possa responder. Algumas funcionalidades de IA também enviam:

- Geração de imagens e edição de fotografias: a instrução e, ao editar, as fotografias de referência escolhidas por si ou pela IA.
- Geração de vídeo: a instrução e as fotografias usadas como primeiro ou último fotograma.
- Transcrição: o ficheiro de áudio a transcrever.
- Memória da IA: o texto que a IA guarda ou pesquisa na sua memória é convertido em vetores numéricos (embeddings) por um fornecedor de IA. A memória em si é guardada apenas no seu dispositivo.

Com a sua própria chave de API, isto é enviado diretamente ao fornecedor escolhido (a transcrição e a geração de vídeo só estão disponíveis com uma chave do OpenRouter). Com a subscrição, passa pelo servidor backend do programador até ao OpenRouter; o backend apenas reencaminha este conteúdo e não o guarda (o que o backend guarda é descrito na secção 4). A forma como essa informação é tratada rege-se pela política de privacidade do fornecedor que efetivamente a processa:

- OpenRouter: <https://openrouter.ai/privacy>
- Anthropic (Claude): <https://www.anthropic.com/legal/privacy>
- OpenAI (ChatGPT): <https://openai.com/policies/privacy-policy>
- Google (Gemini): <https://policies.google.com/privacy>
- xAI (Grok): <https://x.ai/legal/privacy-policy>

A App pede o seu consentimento explícito para isto no primeiro arranque.

### Sites e outros serviços a que a App se liga diretamente

- Pesquisa na web: os termos de pesquisa são enviados diretamente do seu dispositivo para o DuckDuckGo (<https://duckduckgo.com/privacy>) e, se não houver resultados, para a Wikipédia (Wikimedia Foundation, <https://foundation.wikimedia.org/wiki/Policy:Privacy_policy>). Apenas são enviados os termos de pesquisa (além da informação técnica que qualquer pedido à internet contém, como o seu endereço IP).
- Leitura de páginas web e chamadas a APIs web: quando a IA lê uma página web ou envia um pedido web (como o comando curl), o seu dispositivo liga-se diretamente ao site escolhido pela IA e envia o conteúdo do pedido, que pode incluir um ficheiro da pasta da App se a IA o enviar. Aplica-se a política de privacidade desse site. A App só se liga a endereços públicos da internet, nunca a dispositivos da sua rede local.
- Endereços e locais: a pesquisa de endereços usa o serviço de geocodificação do sistema operativo (Apple no iOS, Google no Android), e a pesquisa de locais próximos (apenas iOS) usa o Apple Maps. O endereço ou os termos de pesquisa, e a sua localização quando pesquisa perto de si, são enviados à Apple ou à Google.
- A conversão de voz para texto usa o serviço de reconhecimento de voz do sistema operativo (Apple / Google), que pode processar a sua voz nos respetivos servidores.

## 4. Conta e subscrição

O seguinte aplica-se apenas se utilizar o modelo de IA fornecido pela app. Nada disto ocorre se utilizar apenas a sua própria chave de API.

- Início de sessão: Pode iniciar sessão com Google, Apple, ou email e palavra-passe (através do Firebase Authentication). Apenas são recolhidos o seu endereço de email e um identificador emitido pelo método de início de sessão escolhido.
- Servidor backend: Após iniciar sessão, os seus pedidos de IA passam por um servidor backend operado pelo programador (Google Cloud Run, executado na infraestrutura da Google Cloud), para verificar o estado da subscrição e controlar a utilização mensal (o custo da IA que utilizou). Em vez do ID da sua conta, o backend entrega ao OpenRouter um ID pseudónimo derivado dele.
- Registos de pedidos: para cada pedido de IA, o backend regista apenas um resumo: o tipo (chat, imagem, vídeo, áudio ou embedding), o modelo, o resultado ou código de erro, quanto tempo demorou, o número de mensagens, se continha uma imagem, os nomes das ferramentas chamadas pela IA, e o número de tokens e o custo. O conteúdo das suas mensagens, imagens, áudio e resultados de ferramentas nunca é registado. Estes registos são eliminados ao fim de 90 dias e são usados para suporte, resolução de problemas, prevenção de abusos e controlo de custos.
- Geração de vídeo: para liquidar a cobrança de um vídeo, o backend guarda o ID do trabalho, o modelo, o custo estimado e as datas. O vídeo final é reencaminhado do OpenRouter para o seu dispositivo e não é guardado no servidor.
- Verificação da app: para confirmar que os pedidos vêm de uma cópia autêntica da App, é usado o Firebase App Check, que se baseia no Google Play Integrity (Android) e no Apple App Attest (iOS). Isto envia à Google ou à Apple informação sobre a integridade da app e do dispositivo, não o seu conteúdo.
- Gestão de subscrição: As compras, restauros e o estado da subscrição são geridos pela RevenueCat (<https://www.revenuecat.com/privacy>). A sua informação de compra na App Store / Google Play é partilhada com a RevenueCat para este fim.
- Códigos de convite: Quando cria ou introduz um código de convite, guardamos no nosso servidor que conta convidou qual, juntamente com o seu próprio código, para calcular o bónus (utilização mensal adicional). A app da conta que convida mostra, para cada pessoa convidada, um número de ordem, a data do convite, o seu plano de IA atual (Mini / Standard) e a percentagem de bónus resultante. O email e outros dados que possam identificar qualquer uma das partes nunca são mostrados à outra. Ao eliminar a sua conta, o seu código de convite é eliminado.
- Votação e sugestões de funcionalidades: quando vota ou sugere uma funcionalidade em "Vote no que vem a seguir", guardamos no nosso servidor que conta votou em que funcionalidade e em que dia, e o texto da sua sugestão, para aplicar o limite de uma vez por dia e contar os votos. As sugestões são analisadas antes de serem publicadas e podem aparecer na lista como um título traduzido por IA (sem dados da conta). Ao eliminar a sua conta, os registos de votos e sugestões são eliminados (os totais de votos e os títulos publicados mantêm-se).
- Eliminação da conta: Em Definições > Conta e subscrição > Eliminar conta, pode eliminar a sua conta de início de sessão juntamente com tudo o que o servidor guarda para ela (estado da subscrição, utilização mensal, registos de pedidos, registos de geração de vídeo, código de convite, votos e sugestões) e o seu registo de cliente na RevenueCat. Isto não cancela a subscrição; cancele-a nas definições da App Store ou do Google Play. Se já não conseguir abrir a App, consulte <https://normidar.com/ailabo/delete-account.html>.

## 5. Acesso a funcionalidades do dispositivo

A seu pedido, a IA pode operar as seguintes funcionalidades do dispositivo: lanterna, vibração, texto para voz, brilho do ecrã, volume (Android), localização e pesquisa de endereços, bússola, pressão atmosférica e contagem de passos, Bluetooth (procura, e leitura ou escrita num dispositivo), leitura e escrita de etiquetas NFC, leitura de informações de Wi-Fi/bateria/dispositivo e sensores, leitura e escrita na área de transferência, câmara (fotografias e vídeos), leitura de códigos QR, gravação/reprodução de áudio e transcrição, voz para texto, leitura, criação, alteração e eliminação de eventos do calendário, pesquisa e criação de contactos, geração de imagens e vídeos e edição de fotografias, ficheiros na pasta da App (criar, ler — incluindo documentos PDF e Office —, editar, mudar o nome, copiar, pesquisar e eliminar), bases de dados exclusivas da app, uma lista de tarefas, a memória da IA, mostrar páginas web criadas pela IA (servidas apenas à própria App no seu dispositivo), gravação na galeria, partilha através da folha de partilha do sistema, abertura de outras apps, URLs, mapas, da app de marcação ou de mensagens, agendamento de alarmes/tarefas, e fazer-lhe perguntas com opções.

- Os resultados destas ações (fotografias, gravações, vídeos, ficheiros, bases de dados, a lista de tarefas, a memória da IA) e o seu histórico de chat são guardados apenas no seu dispositivo. Não são carregados para nenhum servidor operado pelo programador; só saem do seu dispositivo como descrito na secção 3 (para o fornecedor de IA quando a IA os lê ou usa, ou para o site a que a IA envia um pedido).
- O texto e os ficheiros que partilha com a App a partir de outras apps são apenas colocados na caixa de mensagem de um novo chat (os ficheiros são copiados para a pasta da App). Nada é enviado até ser o próprio a enviar a mensagem.
- Por predefinição, as ferramentas são executadas sem uma confirmação adicional na app. Em Definições > Permissões das ferramentas pode definir cada ferramenta como "Perguntar" (é mostrado um ecrã de confirmação antes da execução) ou "Recusar" (a IA nunca a pode executar). Independentemente destas definições, a App pergunta-lhe sempre antes de um pedido que possa enviar os seus dados para fora do dispositivo depois de a conversa ter visto conteúdo externo (como uma página web ou uma leitura de QR, NFC ou Bluetooth) juntamente com os seus dados pessoais, e antes de ações que não podem ser desfeitas, como substituir um ficheiro ou eliminar um evento do calendário. Independentemente disso, as caixas de diálogo de permissão do próprio sistema operativo (câmara, microfone, localização, calendário, contactos, etc.) são sempre mostradas antes de a App aceder a essas funcionalidades pela primeira vez.
- As páginas web criadas pela IA podem usar as funções do dispositivo acima (ler o nível do microfone, gravar e reproduzir, ficheiros, localização, etc.; não a geração de imagens ou vídeos, a transcrição nem a memória da IA) na medida em que as "Permissões do site" dessa página o permitam. Por predefinição tudo é permitido e as páginas não perguntam antes de usar uma função (as confirmações descritas acima aplicam-se quando a IA executa uma ferramenta). As páginas podem ligar-se à internet, por isso os seus scripts podem enviar para sites externos os dados que leiam. Pode alterar as permissões no menu da página > Permissões do site. Uma página só usa o microfone enquanto está aberta e o ecrã ligado, e o ecrã indica-o.
- As chamadas telefónicas e mensagens de texto limitam-se a abrir a aplicação de marcação/mensagens com o conteúdo pré-preenchido - a App nunca efetua uma chamada nem envia uma mensagem por conta própria; a ação final é sempre realizada por si.
- A localização, o Bluetooth, o calendário, os contactos e dados semelhantes só são acedidos quando a IA os solicita por sua instrução; a App não os acede continuamente em segundo plano. Enquanto a IA está a preparar uma resposta, pode continuar a funcionar durante algum tempo depois de sair da App; a notificação mostrada nesse momento contém apenas o seu estado, não o conteúdo do chat. As tarefas agendadas só são executadas enquanto a App está aberta.

## 6. Análise e relatórios de falhas

A App utiliza o Firebase Analytics (estatísticas de utilização, como que funcionalidades e ferramentas são usadas, nomes de modelos, número de tokens e erros) e o Firebase Crashlytics (o tipo e local de uma falha, caso ocorra) para ajudar a melhorar a App. Nenhum destes recebe alguma vez o seu conteúdo real: texto de conversas, argumentos de chamadas a ferramentas (conteúdo de ficheiros, coordenadas de localização, termos de pesquisa, etc.) ou chaves de API. Com sessão iniciada, é associado o ID da sua conta (um identificador pseudónimo do Firebase, não o seu email) para que os problemas possam ser relacionados com os registos do servidor da secção 4 ao prestar-lhe suporte. Pode desativar ambos a qualquer momento em Definições > Enviar dados de utilização.

## 7. Publicidade

Se utilizar a sua própria chave de API sem subscrição, a App mostra anúncios em banner através do Google AdMob (os subscritores, incluindo o plano "Sem anúncios", nunca veem anúncios). Nas regiões onde é necessário consentimento (como o EEE e o Reino Unido), é primeiro mostrado o formulário de consentimento da Google e os anúncios só são carregados depois de fazer a sua escolha. No iOS, a App pede permissão de monitorização (App Tracking Transparency) antes de mostrar anúncios; só verá anúncios personalizados se a conceder. Se recusar, verá apenas anúncios não personalizados.

## 8. Partilha com terceiros

O programador não vende a sua informação pessoal a terceiros. A partilha com os fornecedores de IA, o DuckDuckGo e a Wikipédia, os sites a que a IA se liga a seu pedido, a Apple e a Google (pesquisa de endereços, mapas, reconhecimento de voz, verificação da app), a RevenueCat e a Google (Firebase/AdMob) descrita nas secções 3 a 7 acima limita-se ao necessário para o funcionamento desses serviços.

## 9. Privacidade das crianças

A App não se destina a crianças com menos de 13 anos.

## 10. Contacto

Para questões sobre esta política, contacte:

normidar7@gmail.com

## 11. Alterações a esta política

Esta política pode ser atualizada periodicamente. Alterações relevantes serão anunciadas na App ou nesta página.
