<template>
  <div class="form_wrapper">
    <div class="form_container">
      <input type="text" placeholder="Название">
      <textarea placeholder="Описание"></textarea>
    </div>
    <div class="form_container">
      <div class="navbar-content">
        <input type="text" placeholder="Вопрос">
        <select name="form">
          <option value="one">Один из списка</option>
          <option value="several">Несколько из списка</option>
          <option value="free">Свободный ответ</option>
        </select>
      </div>
      <ul class="form_lists">
        <li class="navbar-content">
          <div class="circle"></div>
          <input type="text" placeholder="Вариант 1">
          <p class="q_del">&#10060;</p>
        </li>
        <li class="navbar-content">
          <div class="circle"></div>
          <input type="text" placeholder="Вариант 2">
          <p class="q_del">&#10060;</p>
        </li>
        <li class="navbar-content">
          <div class="circle"></div>
          <input type="text" placeholder="Вариант 3">
          <p class="q_del">&#10060;</p>
        </li>
      </ul>
      <div class="form_footer">
        Добавить вариант ответа
      </div>
      <div class="form_footer">
          Добавить вопрос
        </div>
    </div>
  </div>
</template>
