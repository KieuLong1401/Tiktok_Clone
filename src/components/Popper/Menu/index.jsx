import styles from './Menu.module.scss'

import Tippy from '@tippyjs/react/headless'
import { default as PopperWrapper } from '../Wrapper'
import MenuItems from './MenuItems'

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItems key={index} data={item} />)
    }

    return (
        <Tippy
            interactive
            placement='bottom-end'
            delay={[null, 600]}
            render={(attrs) => (
                <div className={styles.wrapper} {...attrs}>
                    <PopperWrapper className={styles.list}>{renderItems()}</PopperWrapper>
                </div>
            )}>
            {children}
        </Tippy>
    )
}

export default Menu
