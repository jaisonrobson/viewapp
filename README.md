Um template de plataformas de streaming de video

Problemas conhecidos:
* Código não está totalmente otimizado
* Utilização demasiada de eventos do navegador como hover e mouseenter (faz parte da otimizacao)
* Cards de filmes e posters não estão totalmente responsivos

Afazeres:
* (em andamento) Criar um provider e consumer para o container principal das modais afim de manipular seu conteudo em qualquer lugar do codigo.
* Fazer um wrappedcomponent no ModalCover afim de externalizar o conteudo da modal que sera aberta ao clicar num 'Cover' (poster/imagem de filme)