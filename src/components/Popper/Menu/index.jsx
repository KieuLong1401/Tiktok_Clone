import styles from './Menu.module.scss'

import Tippy from '@tippyjs/react/headless'
import Header from './Header'
import MenuItems from './MenuItems'
import { useState } from 'react'
import { default as PopperWrapper } from '../Wrapper'

import PropTypes from 'prop-types'

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
            hideOnClick={false}
            placement='bottom-end'
            delay={[null, 600]}
            offset={[20, 12]}
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
                        <div className={styles.menuItemsWrapper}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}>
            {children}
        </Tippy>
    )
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array.isRequired,
}

export default Menu
