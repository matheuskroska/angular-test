## CloudCANVAS

Overview

<p align="center">
  <a href="https://unform.dev">
    <img src="https://i.imgur.com/oCLkgL1.png" height="auto" width="300" alt="Unform" />
    
  </a>
</p>

<br>
<p align="center">
   <img src="https://i.imgur.com/gUUrGGe.png" height="auto" width="auto" alt="NutriPlan"/>
  
</p>
<p align="center">
   <img src="https://i.imgur.com/uvERv7n.png" height="auto" width="auto" alt="NutriPlan"/>
</p>

- **[Instalação]()**

Clone o repositório e em seguida execute
<br>
```npm install``` & ```ng serve```

## Testes

```npm run jest:coverage```

Cobri os serviços com testes.

## API's utilizadas

- https://www.weatherapi.com/,  consultando três endpoints distintos:
- /search
- /current
- /forecast

## Features

- [x] Autocomplete de cidades pesquisadas
- [x] Consulta a previsão do tempo de até 7 dias e seus horários.
- [x] Light/Dark mode. 

## Idéia

<br>
- Minha ideia é consumir uma primeira API com apenas dados simples da cidade e exibir nos cards da home.
<br>
- Esse autocomplete tem um debounce e o atualizar cidade tambem.
<br>
- Tratei os dados de retorno da API para exibir a data atualizada da requisição e adicionei um campo extra "URL"
<br>
 - fiz dessa forma pois a API de Autocomplete não dá o ID da cidade, a URL é "cidade-estado-pais"
<br>
- Garanto assim que a cidade seja sempre a correta escolhida.
<br>
- As requisições subsequentes a outros endpoints exibem dados completos no card e na página detalhe
<br>
- As requisições são sempre feitas dentro de um serviço e para a página detalhes eu forneco a "URL"
<br>
- Utilizei um serviço para guardar, atualizar e deletar meus dados, e persistir entre trocas de tela, semelhante a uma Store.
<br>
- Componetizei a aplicação de forma a poder utilizar a maioria dos blocos, deixei os estilos relacionados ao componente dentro dos proprios componentes
<br>
- Os estilos de layout ( grids, responsividade) são responsabilidade das pages.
<br>
- Tentei utilizar recursos recentes como "Standalone Componentes" e "Control Flow"
<br>
- Não consegui concluir todos os requisitos, mas tentei mostrar um pouco de cada coisa
<br>
- Em detrimento do tempo e para deixar a aplicação mais polida, não realizei todos os testes.


