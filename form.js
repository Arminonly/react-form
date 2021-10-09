import React from 'react'

export default function Form() {
  return (
    <div className="content">
      <div className="form">
        <div>
          <p>
            Форма это способ взаимодействия между пользователем и программой
          </p>
          <p>
            {' '}
            Пользователь вводит свои данные в форму и программа делает
            какие-либо манипуляции с этими данными
          </p>
        </div>
        <div>
          <ul>
            <li>
              Формы:&nbsp;
              <a
                href="https://ru.reactjs.org/docs/forms.html"
                target="_blank"
                rel="noreferrer"
              >
                React
              </a>
            </li>
            <li>
              <a
                href="https://ant.design/components/form/"
                target="_blank"
                rel="noreferrer"
              >
                Ant Design
              </a>
            </li>
            <li>
              {' '}
              Мой пример на&nbsp;
              <a
                href="https://github.com/Arminonly/react-form.git"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div>
          <form>
            <fieldset>
              <legend>Personal name</legend>
              First name <input type="text"/>
              <br />
              last name <input type="text"/>
              <br />
              date of birth <input type="text"/><br />
              <input type="submit" value='submit' />
              <br />
            </fieldset>
          </form>
        </div>
        <div>
            <form>
                <input list ='blablabla' />
                <datalist id='blablabla' >
                    <option value='chrome' />
                    <option value='opera' />
                    <option value='safari' />
                </datalist>
            </form>
        </div>
      </div>
    </div>
  )
}
