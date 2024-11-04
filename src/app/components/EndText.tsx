import React from 'react'

import styles from "./EndText.module.scss"

const EndText = () => {
    return (
        <div id={styles.endTextMain}>
            <div id={styles.topText}>Why Choose LogoIpsum</div>

            <div id={styles.row1} className={styles.rows}>
                <div className={styles.icon}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.8473 16.8755C21.1896 16.8755 24.7223 13.3428 24.7223 9.00049C24.7223 4.6582 21.1896 1.12549 16.8473 1.12549C12.505 1.12549 8.97229 4.6582 8.97229 9.00049C8.97229 13.3428 12.505 16.8755 16.8473 16.8755ZM16.8473 9.37549C15.5612 9.37549 14.5148 8.32934 14.5148 7.04321C14.5148 5.8855 15.3649 4.92966 16.4723 4.74884V4.00049C16.4723 3.79346 16.6403 3.62549 16.8473 3.62549C17.0543 3.62549 17.2223 3.79346 17.2223 4.00049V4.74884C18.3297 4.92965 19.1798 5.8855 19.1798 7.04321C19.1798 7.25024 19.0118 7.41821 18.8048 7.41821C18.5978 7.41821 18.4298 7.25024 18.4298 7.04321C18.4298 6.17065 17.7199 5.46094 16.8473 5.46094C15.9747 5.46094 15.2648 6.17065 15.2648 7.04321C15.2648 7.91577 15.9747 8.62549 16.8473 8.62549C18.1334 8.62549 19.1798 9.67187 19.1798 10.958C19.1798 12.1157 18.3297 13.0716 17.2223 13.2524V14.0005C17.2223 14.2075 17.0543 14.3755 16.8473 14.3755C16.6403 14.3755 16.4723 14.2075 16.4723 14.0005V13.2524C15.3649 13.0716 14.5148 12.1157 14.5148 10.958C14.5148 10.751 14.6827 10.583 14.8898 10.583C15.0968 10.583 15.2648 10.751 15.2648 10.958C15.2648 11.8306 15.9747 12.5403 16.8473 12.5403C17.7199 12.5403 18.4298 11.8306 18.4298 10.958C18.4298 10.0854 17.7199 9.37549 16.8473 9.37549Z" fill="#333333" />
                        <path d="M26.9723 9.00051C26.9723 11.331 26.1832 13.5496 24.7327 15.345L24.7956 14.511C24.8112 14.3045 24.6564 14.1245 24.4499 14.1089C24.2458 14.0938 24.0631 14.2478 24.0475 14.4549L23.904 16.3635C23.8883 16.5701 24.0431 16.75 24.2497 16.7656L26.1584 16.9092C26.3623 16.9252 26.5455 16.7706 26.5607 16.5633C26.5763 16.3567 26.4215 16.1768 26.215 16.1612L25.0849 16.0763C26.7845 14.1033 27.7223 11.6211 27.7223 9.00051C27.7223 6.05593 26.5602 3.29689 24.4499 1.23146C24.3024 1.08693 24.0651 1.08889 23.9196 1.23733C23.7746 1.38528 23.7775 1.62258 23.9254 1.7676C25.8903 3.69045 26.9723 6.2593 26.9723 9.00051Z" fill="#333333" />
                        <path d="M30.5441 22.0682C29.9445 20.9937 28.7008 20.4859 27.5206 20.8318L20.3182 22.9481C19.9087 23.5783 18.5336 25.3585 16.0636 25.3585C15.5323 25.3585 14.9503 25.2759 14.317 25.0814C14.1188 25.0208 14.0074 24.8111 14.0685 24.6131C14.129 24.4156 14.3375 24.3028 14.5367 24.3646C17.3605 25.2302 18.9479 23.5832 19.5287 22.7817C19.2345 21.6328 18.3703 20.7017 17.1881 20.3462L12.1168 18.8211C12.0426 18.7991 11.9625 18.8004 11.8883 18.8253L7.75256 20.2299V28.1781C10.418 28.983 16.2076 30.5002 17.5997 30.8633C17.631 30.8716 17.6627 30.8755 17.6945 30.8755C17.7467 30.8755 17.7985 30.8646 17.8468 30.8431L29.3229 25.7325C29.9923 25.4344 30.5089 24.8648 30.7408 24.1695C30.9723 23.4742 30.9005 22.7083 30.5441 22.0682Z" fill="#333333" />
                        <path d="M6.62757 18.8052H1.50061C1.29358 18.8052 1.12561 18.9731 1.12561 19.1802V28.8762C1.12561 29.0833 1.29358 29.2512 1.50061 29.2512H6.62757C6.8346 29.2512 7.00257 29.0833 7.00257 28.8762V19.1802C7.00257 18.9731 6.8346 18.8052 6.62757 18.8052ZM4.54358 21.5359H3.5846C3.37757 21.5359 3.2096 21.3679 3.2096 21.1609C3.2096 20.9539 3.37757 20.7859 3.5846 20.7859H4.54358C4.75061 20.7859 4.91858 20.9539 4.91858 21.1609C4.91858 21.3679 4.75061 21.5359 4.54358 21.5359Z" fill="#333333" />
                    </svg>
                </div>
                <div className={styles.texts}>
                    <div className={styles.title}>90-Day Money Back Guarantee</div>
                    <div className={styles.description}>We love our products and we're confident you will too! If you're not in love with your LogoIpsum product, our easy return and refund policy is designed to make things as easy as possible for you.</div>

                </div>
            </div>

            <div id={styles.row2} className={styles.rows}>
                <div className={styles.icon}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4319_4332)">
                            <path d="M16 8.98438L19.5173 10.8337L18.8455 6.91699L21.6929 4.14209L17.7588 3.5708L16 0L14.2412 3.5708L10.3071 4.14209L13.1545 6.91699L12.4827 10.8337L16 8.98438Z" fill="#333333" />
                            <path d="M27.8835 9.94556L26.1248 6.38159L24.366 9.94556L20.4338 10.5168L23.2793 13.291L22.6074 17.2085L26.1248 15.3591L29.644 17.2085L28.9702 13.291L32 10.5168L27.8835 9.94556Z" fill="#333333" />
                            <path d="M3.02979 13.291L2.35596 17.2085L5.87524 15.3591L9.39258 17.2085L8.7207 13.291L11.5662 10.5168L7.63403 9.94556L5.87524 6.38159L4.11646 9.94556L0 10.5168L3.02979 13.291Z" fill="#333333" />
                            <path d="M20.6875 17.875C20.6875 15.2905 18.5845 13.1875 16 13.1875C13.4155 13.1875 11.3125 15.2905 11.3125 17.875C11.3125 20.4595 13.4155 22.5625 16 22.5625C18.5845 22.5625 20.6875 20.4595 20.6875 17.875Z" fill="#333333" />
                            <path d="M9.4375 29.125V32H22.5625V29.125C22.5625 25.5068 19.6182 22.5625 16 22.5625C12.3818 22.5625 9.4375 25.5068 9.4375 29.125Z" fill="#333333" />
                            <path d="M30.0625 31C30.0625 28.4155 27.9595 26.3125 25.375 26.3125C24.8901 26.3125 24.4316 26.4077 23.9915 26.5449C24.2568 27.3633 24.4375 28.2195 24.4375 29.125V32H30.0625V31Z" fill="#333333" />
                            <path d="M29.125 22.5625C29.125 20.4944 27.4431 18.8125 25.375 18.8125C23.3069 18.8125 21.625 20.4944 21.625 22.5625C21.625 22.6819 21.6492 22.7947 21.6602 22.9111C22.5847 23.7539 23.3303 24.7825 23.8093 25.959C24.2874 26.1804 24.8145 26.3125 25.375 26.3125C27.4431 26.3125 29.125 24.6306 29.125 22.5625Z" fill="#333333" />
                            <path d="M10.3398 22.9111C10.3508 22.7947 10.375 22.6819 10.375 22.5625C10.375 20.4944 8.69312 18.8125 6.625 18.8125C4.55688 18.8125 2.875 20.4944 2.875 22.5625C2.875 24.6306 4.55688 26.3125 6.625 26.3125C7.18555 26.3125 7.71265 26.1804 8.19067 25.9592C8.66968 24.7825 9.41528 23.7539 10.3398 22.9111Z" fill="#333333" />
                            <path d="M1.9375 31V32H7.5625V29.125C7.5625 28.2195 7.74316 27.3633 8.00854 26.5449C7.56836 26.4077 7.10986 26.3125 6.625 26.3125C4.04053 26.3125 1.9375 28.4155 1.9375 31Z" fill="#333333" />
                        </g>
                        <defs>
                            <clipPath id="clip0_4319_4332">
                                <rect width="32" height="32" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
                <div className={styles.texts}>
                    <div className={styles.title}>Over 75,000+ Happy Customer</div>
                    <div className={styles.description}>Everyone that tries LogoIpsum says it’s a must-have. We invest a lot of love and care into making our products, so you can enjoy seeing results when using it.</div>

                </div>
            </div>

            <div id={styles.row3} className={styles.rows}>
                <div className={styles.icon}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4048 3.00687C13.8766 2.92267 11.3222 3.61245 9.1169 5.0845C6.64003 6.73957 4.90906 9.18363 4.11177 11.9159C3.89159 11.889 3.62793 11.9008 3.31487 11.9894C2.146 12.321 1.26688 13.2788 0.871592 14.1224C0.358903 15.2217 0.142681 16.6755 0.370762 18.1764C0.597262 19.6726 1.22933 20.9059 2.0199 21.6716C2.81285 22.4376 3.70818 22.6867 4.59757 22.4997C5.92179 22.2171 6.57836 22.0056 6.39297 20.7719L5.49527 14.7916C5.67631 11.555 7.35194 8.50809 10.1545 6.63442C13.9058 4.12869 18.824 4.28918 22.4021 7.03604C24.8913 8.94449 26.3364 11.804 26.5032 14.8058L25.8755 18.9891C24.4754 22.8207 21.0044 25.4746 16.9879 25.8513H14.3134C13.6232 25.8513 13.0674 26.4071 13.0674 27.0965V27.7535C13.0674 28.4432 13.6232 28.999 14.3134 28.999H17.6856C18.3753 28.999 18.9287 28.4432 18.9287 27.7535V27.41C21.9574 26.6708 24.6011 24.8094 26.3226 22.2135L27.4029 22.5001C28.282 22.7282 29.188 22.4376 29.9806 21.672C30.7712 20.9059 31.4028 19.673 31.6297 18.1768C31.8586 16.6759 31.636 15.2244 31.1293 14.1228C30.6206 13.0211 29.8628 12.3214 28.988 12.0704C28.6216 11.9649 28.2239 11.9261 27.8828 11.9159C27.1618 9.44531 25.6775 7.1985 23.5382 5.55806C21.4349 3.9441 18.9331 3.08988 16.4048 3.00687Z" fill="#333333" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3513 13.7659C21.2427 13.7659 21.9653 14.4885 21.9673 15.3822C21.9653 16.2736 21.2427 16.9982 20.3513 16.9982C19.4576 16.9982 18.733 16.2736 18.733 15.3822C18.733 14.4889 19.458 13.7659 20.3513 13.7659ZM15.9992 13.7659C16.8926 13.7659 17.6151 14.4885 17.6151 15.3822C17.6151 16.2736 16.8926 16.9982 15.9992 16.9982C15.1051 16.9982 14.3825 16.2736 14.3825 15.3822C14.3825 14.4889 15.1051 13.7659 15.9992 13.7659ZM11.6487 13.7659C12.54 13.7659 13.2646 14.4885 13.2646 15.3822C13.2646 16.2736 12.54 16.9982 11.6487 16.9982C10.7553 16.9982 10.0323 16.2736 10.0323 15.3822C10.0323 14.4889 10.7553 13.7659 11.6487 13.7659ZM15.9992 6.82385C11.2597 6.82385 7.44043 10.5174 7.44043 15.3822C7.44043 17.7188 8.3239 19.7838 9.76314 21.2989L9.25243 23.5884C9.08404 24.3418 9.60661 24.8486 10.2837 24.4715L12.5195 23.2243C13.582 23.6856 14.7572 23.9406 15.9992 23.9406C20.7403 23.9406 24.5572 20.2494 24.5572 15.3822C24.5572 10.5174 20.7403 6.82385 15.9992 6.82385Z" fill="#333333" />
                    </svg>
                </div>
                <div className={styles.texts}>
                    <div className={styles.title}>Professional Customer Support</div>
                    <div className={styles.description}>Our customer service works 24/7 for your satisfaction. Feel free to reach out to us anytime.</div>

                </div>
            </div>
        </div>

    )
}

export default EndText