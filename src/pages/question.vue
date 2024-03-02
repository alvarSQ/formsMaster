<template>
    <div class="form_wrapper">
        <div class="form_container">
            <div class="navbar-content">
                <h2>Для чего вы используете Findmykids?</h2>
                <p>1 из 6</p>
            </div>
            <ul>
                <li class="form_lists"><label>
                        <input class="form_radio" type="radio" name="question">
                        Присматриваю за своим ребенком </label>
                </li>
                <li class="form_lists"><label><input class="form_radio" type="radio" name="question">Присматриваю за
                        своим ребенком </label></li>
                <li class="form_lists"><label class="navbar-content"><input class="form_radio" type="radio"
                            name="question">
                        <input type="text" placeholder="Свой вариант"></label></li>
            </ul>
            <button class="form_footer">
                Ответить
            </button>
            <div class="navbar-content">
                <button class="form_footer">
                    Назад
                </button>
                <button class="form_footer">
                    Вперед
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {}
}
</script>