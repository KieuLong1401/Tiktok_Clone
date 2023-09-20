import { useState, useEffect } from 'react'

import styles from './Search.module.scss'

import HeadlessTippy from '@tippyjs/react/headless'
import { default as PopperWrapper } from '../../../Popper/Wrapper'
import AccountItem from '../../../AccountItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faCircleNotch, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Search() {
    const [searchResult, setSearchResult] = useState([])
    const [visible, setVisible] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const show = () => setVisible(true)
    const hide = () => setVisible(false)

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3])
        }, 3000)
    }, [])

    return (
        <HeadlessTippy
            visible={visible && searchResult.length > 0 && inputValue}
            onClickOutside={hide}
            interactive
            appendTo={document.querySelector(`.${styles.searchBar}`)}
            render={(attrs) => (
                <PopperWrapper>
                    <div className={styles.searchResult} tabIndex='-1' {...attrs}>
                        <div className={styles.accountTitle}>Accounts</div>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </div>
                </PopperWrapper>
            )}>
            <div className={styles.searchBar}>
                <input
                    type='text'
                    placeholder='Search'
                    spellCheck={false}
                    onFocus={show}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                {inputValue && (
                    <>
                        <button className={styles.closeBtn} onClick={() => setInputValue('')}>
                            <FontAwesomeIcon icon={faCircleXmark} className='icon' />
                        </button>
                        <FontAwesomeIcon
                            icon={faCircleNotch}
                            className={'icon' + ' ' + styles.loadingIcon}
                        />
                    </>
                )}
                <button className={styles.searchBtn}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
                </button>
            </div>
        </HeadlessTippy>
    )
}

export default Search
