import css from 'styled-jsx/css'
import { colors, theme } from '../../defaults/colors.js'

export default css`
    .base {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 48px;
        border-bottom: 1px solid rgba(32, 32, 32, 0.15);
    }

    .first {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .logo {
        box-sizing: border-box;
        width: 48px;
        height: 48px;
        margin: 0 12px 0 0;
        padding-top: 12px;
        border-right: 1px solid rgba(32, 32, 32, 0.15);
        text-align: center;
    }

    .logo svg,
    .logo a {
        width: 27px;
        height: 25px;
        cursor: pointer;
    }

    .logo a,
    .logo a:hover,
    .logo a:focus,
    .logo a:active,
    .logo a:visited {
        display: inline-block;
        background-color: transparent;
        cursor: pointer;
        user-select: none;
    }

    .title {
        overflow: hidden;
        color: #000;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.01em;
        white-space: nowrap;
    }

    .last {
        display: flex;
        flex-direction: row;
        margin-left: auto;
        user-select: none;
    }

    .notification {
        position: relative;
        margin: 8px 24px 0 0;
        cursor: pointer;
    }
    .notification .message {
        margin-top: 10px;
        cursor: inherit;
    }

    .notification .email {
        margin-right: 0;
        cursor: inherit;
    }

    .notification > .count {
        z-index: 1;
        position: absolute;
        top: -6px;
        right: -10px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: ${theme.secondary300};
        color: #fff;
        font-size: 9px;
        font-weight: 500;
        line-height: 16px;
        text-align: center;
        cursor: inherit;
    }

    .notification > .count i {
        width: 20px;
        height: 20px;
        cursor: inherit;
    }

    .apps {
        position: relative;
        width: 24px;
        height: 24px;
        margin: 8px 0 0 0;
    }

    .apps i {
        cursor: pointer;
    }

    .apps .contents {
        z-index: 10000;
        position: absolute;
        top: 28px;
        right: -6px;
        border-top: 4px solid transparent;
    }

    .search {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        height: 52px;
        margin: 8px;
    }

    .apps .settings {
        margin: 8px 8px 0 16px;
        color: #949394;
        font-size: 22px;
    }

    .modules {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: flex-start;
        align-items: flex-start;
        justify-content: flex-start;
        width: 30vw;
        min-width: 300px;
        max-width: 560px;

        min-height: 200px;
        max-height: 465px;
        margin: 0 8px 8px 8px;

        overflow: auto;
        overflow-x: hidden;
    }

    .app {
        display: inline-block;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 96px;
        margin: 8px;
        padding: 8px;
        border-radius: 12px;
        text-decoration: none;
        cursor: pointer;
    }
    .app:hover,
    .app:focus {
        background-color: ${theme.primary050};
        cursor: pointer;
    }
    .app:hover > .name {
        font-weight: 500;
        cursor: pointer;
    }

    .app > img {
        width: 48px;
        height: 48px;
        cursor: pointer;
    }

    .app > .name {
        margin-top: 14px;
        color: rgba(0, 0, 0, 0.87);
        font-size: 12px;
        letter-spacing: 0.01em;
        line-height: 14px;
        text-align: center;
        cursor: pointer;
    }

    .profile-alignment {
        width: 100%;
        padding: 8px 0;
    }
    .profile {
        position: relative;
        width: 36px;
        height: 36px;
        margin: 2px 12px 0 24px;
    }
    .profile .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        overflow: hidden;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.3);
        color: #fff;
        cursor: pointer;
    }
    .profile .icon > .initials {
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 1px;
        text-align: center;
        text-transform: uppercase;
    }

    .profile .icon > img {
        max-width: 100%;
        max-height: 100%;
    }

    .profile .contents {
        z-index: 10000;
        position: absolute;
        top: 34px;
        right: -6px;
        width: 310px;
        border-top: 4px solid transparent;
    }
    .header {
        display: flex;
        flex-direction: row;
        margin-left: 24px;
        padding-top: 20px;
    }
    .header > .icon {
        width: 48px;
        height: 48px;
    }

    .header > .details {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        color: #000;
        font-size: 14px;
        font-weight: 400;
    }

    .details > .name {
        margin-bottom: 3px;
        font-size: 16px;
        line-height: 19px;
    }

    .details > .email {
        margin-bottom: 6px;
        font-size: 14px;
        line-height: 16px;
    }

    .details > .edit_profile {
        color: rgba(0, 0, 0, 0.87);
        font-size: 12px;
        line-height: 14px;
        text-decoration: underline;
        cursor: pointer;
    }

    .blue {
        background-color: #2c6693;
    }
    .blue > .first > .title {
        color: #fff;
    }

    .blue > .last > .notification > i,
    .blue > .last > .apps > i:first-child {
        color: #fff;
        cursor: pointer;
    }
    .base.blue .profile > .icon > .initials {
        color: #fff;
        cursor: pointer;
    }
`
