/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

function Regisration() {
    const [userName, setUserName] = useState("");
    
    const onChangeUserName = function(event) {
        // event.preventDefault();

        setUserName(event.target.value);

        // const data = {
        //     name: event.target.username.value,
        //     phone: event.target.phone.value,
        //     email: event.target.email.value,
        //     city: event.target.city.value,
        //     subscibe: event.target.subscibe.value,
        //     gender: event.target.gender.value
        // };

        // fetch("https://google.com", {
        //     method: "POST",
        //     body: JSON.stringify(data),
        // });
    };

    return (
        <form
            css={css `
                max-width: 300px;
                box-shadow: 0 0 5px 2px #0000004a;
                margin: 100px auto;
                padding: 10px;

                input,
                select {
                    width: 100%;
                    box-sizing: border-box;
                    margin-bottom: 10px;
                }
            `}>
            <div>USER VALUE: {userName}</div>

            <input onChange={onChangeUserName} name="username" type="text" placeholder="Enter user name:" value={userName} />
            <input name="phone" type="text" placeholder="Enter user phone:" />
            <input name="email" type="text" placeholder="Enter user email:" />

            <select name="city">
                <option>Select city</option>
                <option>Kyiv</option>
                <option>Dnipro</option>
                <option>Odessa</option>
                <option>Kharkiv</option>
                <option>Lviv</option>
            </select>

            <label
                css={css `
                display: flex;
                width: 100px;
            `}>
                Subscibe
                <input name="subscibe" type="checkbox" />
            </label>

            <div 
                css={css `
                    display: flex;
                    margin-bottom: 15px;

                    label {
                        display: flex;
                        align-items: center;
                        width: 70px;
                    }

                    input {
                        mangin: 0;
                    }
                `}>
                <label>
                    Male
                    <input name="gender" value="male" type="radio" />
                </label>
                <label>
                    Female
                    <input name="gender" value="female" type="radio" />
                </label>
            </div>

            <button>Confirm</button>
        </form>
    );
}
export default Regisration;