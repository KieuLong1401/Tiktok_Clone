import styles from './Menu.module.scss'

import Tippy from '@tippyjs/react/headless'
import { default as PopperWrapper } from '../Wrapper'
import MenuItems from './MenuItems'
import Header from './Header'
import { useState } from 'react'

function Menu({ children, items = [] }) {
    const [menuHistory, setMenuHistory] = useState([{ data: items }])
    const currentMenu = menuHistory[menuHistory.length - 1]

    const renderItems = () => {
        return currentMenu.data.map((item, index) => (
            <MenuItems
                key={index}
                data={item}
                onClick={() => {
                    const isParent = !!item.child
                    if (isParent) {
                        setMenuHistory((pre) => [...pre, item.child])
                    } else {
                        switch (item.type) {
                            case 'lang':
                                console.log(item.code)
                                break
                        }
                    }
                }}
            />
        ))
    }

    return (
        <Tippy
            onHide={() => setMenuHistory((pre) => pre.slice(0, 1))}
            interactive
            placement='bottom-end'
            delay={[null, 600]}
            render={(attrs) => (
                <div className={styles.wrapper} {...attrs}>
                    <PopperWrapper className={styles.list}>
                        {menuHistory.length > 1 && (
                            <Header
                                title={currentMenu.headerTitle || ''}
                                onBack={() => {
                                    setMenuHistory((pre) => pre.slice(0, menuHistory.length - 1))
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}>
            {children}
        </Tippy>
    )
}

export default Menu
