export function settingsHTML() {
  let html = `

  <text class="breadcrumbs"><a class="navKey" href="#" id="home2">Главное Меню</a><a class="navKey" href="#" id="privateOffice2">>Личный кабинет</a><a>>Настройки</a></text>


  <h1> Настройки</h1>
  <div id="settingsPage">
    <div id="settingsLanguageDiv">
      <h3>Язык:</h3>
      <select id="language" required>
                    <option value ="ru">Русский</option>
                    <option value="en" >English</option>
      </select>
    </div>



    <div id="settingsStyleDiv">
      <h3>Оформление:</h3>
      <select id="styleMode" required>
                    <option value="light" >Светлая тема</option>
                    <option value ="dark">Темная тема</option>
      </select>
    </div>

    <button class="actKey navKey" id="applySettingsButton">Применить настройки</button>
  </div>
  `;
  return html;
}


export function settingsCSS1() {
  let html = `

  #settingsPage {
    display:flex;
    flex-direction:column;
    margin-left:15%;

  }

  #settingsLanguageDiv, #settingsStyleDiv {
    display:flex;
    flex-direction:row;
    align-items:center;
  }

  #settingsLanguageDiv h3 {
    margin-right:5%;
  }

  #settingsStyleDiv h3 {
    margin-right:5%;

  }
  #settingsStyleDiv select {
    min-width:150px;
  }

  `;
  return html;
}

export function settingsCSS2() {
  let html = `


  #settingsPage {
    display:flex;
    flex-direction:column;
    margin-left:15%;
  }

  #settingsLanguageDiv, #settingsStyleDiv {
    display:flex;
    flex-direction:row;
    align-items:center;
  }

  #settingsLanguageDiv h3 {
    margin-right:5%;
  }

  #settingsStyleDiv h3 {
    margin-right:5%;

  }
  #settingsStyleDiv select {
    min-width:150px;
  }




  `;
  return html;
}
