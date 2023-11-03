import styles from './Menu.module.scss'

import Tippy from '@tippyjs/react/headless'
import Header from './Header'
import MenuItems from './MenuItems'
import { useState } from 'react'
import { default as PopperWrapper } from '../Wrapper'

import PropTypes from 'prop-types'

function Menu({ className, children, items = [], placement }) {
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

    const renderResult = (attrs) => (
        <div className={`${styles.wrapper} ${className}`} {...attrs}>
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
    )

    const resetMenu = () => {
        setMenuHistory((pre) => pre.slice(0, 1))
    }

    return (
        <Tippy
            onHide={resetMenu}
            interactive
            hideOnClick={false}
            placement={placement || 'bottom-end'}
            delay={[null, 600]}
            offset={[20, 12]}
            render={renderResult}>
            {children}
        </Tippy>
    )
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array.isRequired,
}

export default Menu
