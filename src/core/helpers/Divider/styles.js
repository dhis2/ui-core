import classNames from '../../../utils/css'

import '../../../defaults/colors.css'

import '../../../defaults/common.css'
import common from '../../../defaults/common.json'

import styles from './styles.json'
import './styles.css'

const cx = classNames({
    ...common,
    ...styles,
})

export default cx
export const rx = (...args) => cx('reset', ...args)
