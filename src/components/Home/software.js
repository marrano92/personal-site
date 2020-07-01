import React from "react"

import ImageSoftware from "../../images/software.webp"

const Software = () => {

    return (
        <div
            className="softwareDiv container grid pt-32 pb-40 lg:pt-8 lg:pb-8 xl:pt-24 xl:pb-40 md:pl-8 md:pr-8 md:pt-16 largeContainer">
            <div
                className="titleSoftware grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                <div className="pr-0 lg:pr-6 xl:pr-8 md:pr-0">
                    <div className="section-heading" data-wow-duration=".45s" data-wow-delay=".75s"
                         style={{
                             visibility: 'visible',
                             animationDuration: '0.45s',
                             animationDelay: '0.75s',
                             animationName: 'fadeInUp'
                         }}><h2>Con cosa sviluppo</h2>
                        <p>Lavoro con diversi Linguaggi di programmazione, diversi software e diversi framework,
                            qui sotto trovate un piccolo elenco di quelli che utilizzo più spesso. </p></div>
                    <ul className="program-list  pt-16 lg:pt-8 xl:pt-8 md:pt-4">
                        <li>
                            <svg width="100%" className="softwareLogos laravel pl-2 pr-2 pt-2"
                                 xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 110 30"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <use xlinkHref="#A" x=".5" y=".5"/>
                                <symbol id="A" overflow="visible">
                                    <path
                                        d="M26.21 28.714a.65.65 0 0 1-.559-.316L20.737 20.2l-9.192 2.5a.65.65 0 0 1-.726-.326L.077 2.182a.65.65 0 0 1 .486-.95L9.683.006a.65.65 0 0 1 .646.308l11 18.374 12.794-3.48-4.266-6.025a.65.65 0 0 1 .363-1.008l5.985-1.415a.65.65 0 0 1 .657.225l5.18 6.468a.65.65 0 0 1-.337 1.034l-5.44 1.484 4.763 6.7a.65.65 0 0 1-.316.99l-14.295 5.013a.65.65 0 0 1-.207.04zm-4.172-8.87l4.455 7.43 12.983-4.545-4.534-6.392zM1.664 2.387l10.053 18.92 8.343-2.264L9.435 1.35zM31.497 9.22l4 5.626 4.962-1.35-4.317-5.376zm17.387-1.964h1.3v13.94H48.89zm14 3.883v10.057h-1.277v-1.74c-.495.62-1.118 1.128-1.826 1.488a5.1 5.1 0 0 1-5.859-1.049 5.19 5.19 0 0 1-1.511-3.766 5.1 5.1 0 0 1 1.525-3.716 4.97 4.97 0 0 1 3.679-1.543c.78-.01 1.55.17 2.242.527a5.1 5.1 0 0 1 1.761 1.58v-1.84zm-5.17 1a3.91 3.91 0 0 0-3.449 2.021c-.723 1.258-.723 2.805 0 4.063.343.625.848 1.146 1.462 1.508a3.82 3.82 0 0 0 1.97.54 4.04 4.04 0 0 0 2.012-.536c.613-.337 1.12-.84 1.462-1.45a4.14 4.14 0 0 0 .513-2.07 4 4 0 0 0-1.15-2.918 3.81 3.81 0 0 0-2.821-1.161zm7.592-1h1.322v1.47a4.79 4.79 0 0 1 1.25-1.297 2.46 2.46 0 0 1 1.368-.43 2.36 2.36 0 0 1 1.15.343l-.678 1.1a1.8 1.8 0 0 0-.7-.175 1.87 1.87 0 0 0-1.249.531 3.36 3.36 0 0 0-.92 1.649q-.23.86-.23 3.474v3.403h-1.322zm16.2 0v10.057H80.23v-1.74c-.495.62-1.118 1.128-1.826 1.488a5.1 5.1 0 0 1-5.859-1.049 5.19 5.19 0 0 1-1.511-3.766c-.02-1.395.53-2.74 1.527-3.716a4.97 4.97 0 0 1 3.679-1.543c.78-.01 1.55.17 2.242.527a5.1 5.1 0 0 1 1.761 1.58v-1.84zm-5.17 1a3.91 3.91 0 0 0-3.449 2.021c-.723 1.258-.723 2.805 0 4.063.343.625.848 1.146 1.462 1.508a3.82 3.82 0 0 0 1.97.54 4.04 4.04 0 0 0 2.012-.536c.613-.337 1.12-.84 1.462-1.45a4.14 4.14 0 0 0 .513-2.07 4 4 0 0 0-1.149-2.928 3.81 3.81 0 0 0-2.819-1.161zm7.133-1h1.38l3.376 7.33 3.34-7.33h1.38l-4.6 10.058h-.23zm19.907 6.72l1.1.573a5.94 5.94 0 0 1-1.239 1.702 4.92 4.92 0 0 1-1.582.984 5.52 5.52 0 0 1-1.989.338q-2.46 0-3.85-1.6a5.44 5.44 0 0 1-1.38-3.647c-.013-1.238.402-2.443 1.175-3.4a4.8 4.8 0 0 1 3.987-1.904 4.96 4.96 0 0 1 4.107 1.95q1.092 1.38 1.1 3.45H95.75c-.015 1.067.387 2.097 1.12 2.872a3.57 3.57 0 0 0 2.674 1.12 4.3 4.3 0 0 0 1.495-.267 3.99 3.99 0 0 0 1.235-.708 6.03 6.03 0 0 0 1.101-1.442zm0-2.7a4.28 4.28 0 0 0-.754-1.653 3.57 3.57 0 0 0-1.308-.998c-.533-.25-1.115-.38-1.704-.38a3.68 3.68 0 0 0-2.545.952q-.777.7-1.175 2.07zm3.64-7.892h1.295v13.94h-1.295z"
                                        stroke="none" fill="#ef533f" fillRule="nonzero"/>
                                </symbol>
                            </svg>
                        </li>
                        <li>
                            <svg className="php" width="63%" viewBox="0 0 256 134" xmlns="http://www.w3.org/2000/svg"
                                 preserveAspectRatio="xMinYMin meet">
                                <g fillRule="evenodd">
                                    <ellipse fill="white" cx={128} cy="66.63" rx={128} ry="66.63"/>
                                    <path fill="#1d1d1d"
                                          d="M35.945 106.082l14.028-71.014H82.41c14.027.877 21.041 7.89 21.041 20.165 0 21.041-16.657 33.315-31.562 32.438H56.11l-3.507 18.411H35.945zm23.671-31.561L64 48.219h11.397c6.137 0 10.52 2.63 10.52 7.89-.876 14.905-7.89 17.535-15.78 18.412h-10.52zM100.192 87.671l14.027-71.013h16.658l-3.507 18.41h15.78c14.028.877 19.288 7.89 17.535 16.658l-6.137 35.945h-17.534l6.137-32.438c.876-4.384.876-7.014-5.26-7.014H124.74l-7.89 39.452h-16.658zM153.425 106.082l14.027-71.014h32.438c14.028.877 21.042 7.89 21.042 20.165 0 21.041-16.658 33.315-31.562 32.438h-15.781l-3.507 18.411h-16.657zm23.67-31.561l4.384-26.302h11.398c6.137 0 10.52 2.63 10.52 7.89-.876 14.905-7.89 17.535-15.78 18.412h-10.521z"
                                          fill="#232531"/>
                                </g>
                            </svg>
                        </li>
                        <li>
                            <svg className="softwareLogos git pr-1" width="70%" viewBox="0 0 256 108"
                                 xmlns="http://www.w3.org/2000/svg"
                                 preserveAspectRatio="xMinYMin meet">
                                <path
                                    d="M152.984 37.214c-5.597 0-9.765 2.748-9.765 9.362 0 4.983 2.747 8.443 9.463 8.443 5.693 0 9.56-3.355 9.56-8.65 0-6-3.46-9.155-9.258-9.155zm-11.19 46.701c-1.325 1.625-2.645 3.353-2.645 5.39 0 4.067 5.186 5.291 12.31 5.291 5.9 0 13.938-.414 13.938-5.9 0-3.261-3.867-3.462-8.753-3.768l-14.85-1.013zm30.113-46.394c1.828 2.34 3.764 5.597 3.764 10.276 0 11.292-8.851 17.904-21.667 17.904-3.259 0-6.209-.406-8.038-.914l-3.359 5.39 9.969.61c17.602 1.122 27.975 1.632 27.975 15.157 0 11.702-10.272 18.311-27.975 18.311-18.413 0-25.433-4.68-25.433-12.716 0-4.578 2.035-7.015 5.596-10.378-3.358-1.419-4.476-3.961-4.476-6.71 0-2.24 1.118-4.273 2.952-6.208 1.83-1.93 3.864-3.865 6.306-6.103-4.984-2.442-8.75-7.732-8.75-15.262 0-11.697 7.733-19.731 23.295-19.731 4.376 0 7.022.402 9.362 1.017h19.84v8.644l-9.361.713zM199.166 19.034c-5.8 0-9.157-3.36-9.157-9.161 0-5.793 3.356-8.95 9.157-8.95 5.9 0 9.258 3.157 9.258 8.95 0 5.801-3.357 9.161-9.258 9.161zM186.04 80.171v-8.033l5.19-.71c1.425-.205 1.627-.509 1.627-2.038V39.48c0-1.116-.304-1.832-1.325-2.134l-5.492-1.935 1.118-8.238h21.061V69.39c0 1.63.098 1.833 1.629 2.039l5.188.71v8.032H186.04zM255.267 76.227c-4.376 2.135-10.785 4.068-16.586 4.068-12.106 0-16.682-4.878-16.682-16.38V37.264c0-.61 0-1.017-.817-1.017h-7.12V27.19c8.955-1.02 12.513-5.496 13.632-16.585h9.666v14.45c0 .71 0 1.017.815 1.017h14.343v10.173H237.36v24.313c0 6.002 1.426 8.34 6.917 8.34 2.852 0 5.799-.71 8.24-1.626l2.75 8.954"
                                    fill="#2F2707"/>
                                <path
                                    d="M104.529 49.53L58.013 3.017a6.86 6.86 0 0 0-9.703 0l-9.659 9.66 12.253 12.252a8.145 8.145 0 0 1 8.383 1.953 8.157 8.157 0 0 1 1.936 8.434L73.03 47.125c2.857-.984 6.154-.347 8.435 1.938a8.161 8.161 0 0 1 0 11.545 8.164 8.164 0 0 1-13.324-8.88L57.129 40.716l-.001 28.98a8.248 8.248 0 0 1 2.159 1.544 8.164 8.164 0 0 1 0 11.547c-3.19 3.19-8.36 3.19-11.545 0a8.164 8.164 0 0 1 2.672-13.328v-29.25a8.064 8.064 0 0 1-2.672-1.782c-2.416-2.413-2.997-5.958-1.759-8.925l-12.078-12.08L2.011 49.314a6.863 6.863 0 0 0 0 9.706l46.516 46.514a6.862 6.862 0 0 0 9.703 0l46.299-46.297a6.866 6.866 0 0 0 0-9.707"
                                    fill="#DE4C36"/>
                            </svg>
                        </li>
                        <li>
                            <svg className="gatsby" width="100%" viewBox="0 0 106.1 28"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill="white"
                                      d="M62.9 12h2.8v10h-2.8v-1.3c-1 1.5-2.3 1.6-3.1 1.6-3.1 0-5.1-2.4-5.1-5.3 0-3 2-5.3 4.9-5.3.8 0 2.3.1 3.2 1.6V12zm-5.2 5c0 1.6 1.1 2.8 2.8 2.8 1.6 0 2.8-1.2 2.8-2.8s-1.1-2.8-2.8-2.8c-1.6 0-2.8 1.2-2.8 2.8zm13.5-2.6V22h-2.8v-7.6h-1.1V12h1.1V8.6h2.8V12h1.9v2.4zm8.5 0c-.7-.6-1.3-.7-1.6-.7-.7 0-1.1.3-1.1.8 0 .3.1.6.9.9l.7.2c.8.3 2 .6 2.5 1.4.3.4.5 1 .5 1.7 0 .9-.3 1.8-1.1 2.5s-1.8 1.1-3 1.1c-2.1 0-3.2-1-3.9-1.7l1.5-1.7c.6.6 1.4 1.2 2.2 1.2s1.4-.4 1.4-1.1c0-.6-.5-.9-.9-1l-.6-.2c-.7-.3-1.5-.6-2.1-1.2-.5-.5-.8-1.1-.8-1.9 0-1 .5-1.8 1-2.3.8-.6 1.8-.7 2.6-.7.7 0 1.9.1 3.2 1.1zm6.1-1.1c1-1.4 2.4-1.6 3.2-1.6 2.9 0 4.9 2.3 4.9 5.3s-2 5.3-5 5.3c-.6 0-2.1-.1-3.2-1.6V22H83V5.2h2.8zm-.3 3.7c0 1.6 1.1 2.8 2.8 2.8 1.6 0 2.8-1.2 2.8-2.8s-1.1-2.8-2.8-2.8-2.8 1.2-2.8 2.8zm13 3.5L93.7 12H97l3.1 5.7 2.8-5.7h3.2l-8 15.3h-3.2zM54 13.7h-7v2.8h3.7c-.6 1.9-2 3.2-4.6 3.2-2.9 0-5-2.4-5-5.3S43.1 9 46 9c1.6 0 3.2.8 4.2 2.1l2.3-1.5C51 7.5 48.6 6.3 46 6.3c-4.4 0-8 3.6-8 8.1s3.4 8.1 8 8.1 8-3.6 8-8.1c.1-.3 0-.5 0-.7z"/>
                                <path fill="white"
                                      d="M25 14h-7v2h4.8c-.7 3-2.9 5.5-5.8 6.5L5.5 11c1.2-3.5 4.6-6 8.5-6 3 0 5.7 1.5 7.4 3.8l1.5-1.3C20.9 4.8 17.7 3 14 3 8.8 3 4.4 6.7 3.3 11.6l13.2 13.2C21.3 23.6 25 19.2 25 14zm-22 .1c0 2.8 1.1 5.5 3.2 7.6s4.9 3.2 7.6 3.2z"
                                />
                                <path fill="#1d1d1d"
                                      d="M14 0C6.3 0 0 6.3 0 14s6.3 14 14 14 14-6.3 14-14S21.7 0 14 0zM6.2 21.8C4.1 19.7 3 16.9 3 14.2L13.9 25c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9L3.3 11.6C4.4 6.7 8.8 3 14 3c3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3C19.7 6.5 17 5 14 5c-3.9 0-7.2 2.5-8.5 6L17 22.5c2.9-1 5.1-3.5 5.8-6.5H18v-2h7c0 5.2-3.7 9.6-8.6 10.7z"
                                />
                            </svg>
                        </li>
                        <li>
                            <svg
                                className="javascript pl-12 pr-12 md:pr-6 md:pl-6 lg:pt-0 lg:pr-8 lg:pl-8 xl:pr-10 xl:pl-10"
                                width="100%" viewBox="0 0 256 256"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="xMinYMin meet">
                                <path d="M0 0h256v256H0V0z" fill="white"/>
                                <path fill="#1d1d1d"
                                      d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"/>
                            </svg>
                        </li>
                        <li>
                            <svg version="1.1" className="react pr-2 pl-1" width="100%"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="-144.1 342.6 230.3 97" xmlSpace="preserve">
                                <path className="st0" fill="white"
                                      d="M-144.1 390.9c0 8.1 8 15.8 20.5 20-2.5 12.6-.4 22.8 6.4 26.7 7.1 4.1 17.6 1.3 27.5-7.5 9.7 8.4 19.6 11.7 26.4 7.7 7.1-4.1 9.2-14.9 6.6-27.9 13.1-4.3 20.4-10.8 20.4-19.1 0-8-8-14.8-20.3-19.1 2.8-13.5.4-23.5-6.7-27.6-6.9-4-16.8-.5-26.7 8.1-10.3-9.1-20.1-11.9-27.3-7.8-6.9 4-8.9 14.3-6.3 27.2-12.2 4.4-20.5 11.4-20.5 19.3z"/>
                                <path className="st1" fill="white"
                                      d="M-59.2 376.1c-1-.3-2-.7-3.1-1 .2-.7.3-1.4.5-2.1 2.3-11.3.8-20.5-4.4-23.5-5-2.9-13.2.1-21.4 7.3-.8.7-1.6 1.4-2.4 2.2-.5-.5-1-1-1.6-1.5-8.6-7.7-17.3-10.9-22.5-7.9-5 2.9-6.5 11.5-4.4 22.2.2 1.1.4 2.1.7 3.2-1.2.3-2.4.7-3.5 1.1-10.1 3.5-16.6 9.1-16.6 14.8 0 5.9 7 11.9 17.5 15.5.9.3 1.7.6 2.6.8-.3 1.1-.5 2.3-.8 3.4-2 10.6-.4 18.9 4.5 21.8 5.1 3 13.8-.1 22.2-7.4.7-.6 1.3-1.2 2-1.8.8.8 1.7 1.6 2.6 2.4 8.1 7 16.2 9.8 21.2 7 5.1-3 6.8-12 4.6-22.9-.2-.8-.4-1.7-.6-2.6l1.8-.6c11-3.6 18.1-9.5 18.1-15.5 0-5.7-6.7-11.3-17-14.9z"/>
                                <path className="st0" fill="#1d1d1d"
                                      d="M-61.6 402.7c-.5.2-1.1.3-1.6.5-1.3-4.2-3-8.2-4.8-12.1 1.8-3.9 3.4-7.9 4.7-12 1 .3 1.9.6 2.8.9 8.9 3 14.3 7.6 14.3 11-.1 3.7-5.9 8.5-15.4 11.7zm-3.9 7.8c.9 4.2 1.1 8.4.5 12.6-.6 3.1-1.7 5.1-3.1 5.9-3 1.7-9.5-.5-16.4-6.5-.8-.7-1.6-1.4-2.4-2.2 2.9-3.2 5.6-6.6 8-10.2 4.4-.4 8.7-1 13-2 0 .9.2 1.6.4 2.4zm-39.8 18.3c-2.9 1-5.3 1.1-6.7.3-3-1.7-4.3-8.5-2.6-17.5.2-1.1.4-2.1.7-3.2 4.3.9 8.6 1.5 12.9 1.9 2.5 3.6 5.3 7 8.2 10.2-.6.6-1.2 1.1-1.8 1.7-3.1 2.7-6.8 5-10.7 6.6zm-13.8-26.1c-4.1-1.3-7.8-3.3-11.2-5.9-2.4-2-3.6-4.1-3.6-5.7 0-3.5 5.2-7.9 13.9-11 1.1-.4 2.2-.7 3.3-1 1.3 4.1 2.8 8.2 4.7 12.1-1.8 4-3.4 8.1-4.7 12.3-.9-.3-1.7-.6-2.4-.8zm4.6-31.6c-1.8-9.2-.6-16.1 2.4-17.9 3.2-1.9 10.3.8 17.8 7.4.5.4 1 .9 1.4 1.3-2.9 3.2-5.7 6.6-8.2 10.1-4.3.4-8.6 1-12.8 2-.2-.9-.4-1.9-.6-2.9zm41.3 10.2c-.9-1.6-1.9-3.2-2.9-4.8 3.1.4 6 .9 8.7 1.5-.9 2.8-1.9 5.6-3.1 8.2-.8-1.6-1.7-3.2-2.7-4.9zM-90 364.9c2 2.2 3.9 4.4 5.6 6.8-3.8-.2-7.5-.2-11.3 0 1.8-2.3 3.7-4.6 5.7-6.8zm-17 16.5c-.9 1.6-1.8 3.3-2.7 5-1.1-2.7-2.2-5.5-3-8.3 2.9-.6 5.8-1.1 8.7-1.5a38.8 38.8 0 0 0-3 4.8zm3 24.4c-3-.3-5.9-.8-8.8-1.4.9-2.9 1.9-5.7 3.1-8.5.9 1.7 1.8 3.3 2.7 5 1 1.7 2 3.3 3 4.9zm14.1 11.6c-2-2.2-4-4.5-5.8-6.9 1.8.1 3.7.1 5.6.1 2 0 3.9 0 5.8-.1-1.8 2.4-3.6 4.7-5.6 6.9zm19.5-21.6c1.2 2.8 2.3 5.6 3.2 8.4-3 .7-5.9 1.2-8.9 1.5 1-1.6 2-3.2 2.9-4.9 1-1.6 1.9-3.3 2.8-5zm-6.3 3c-1.5 2.5-3 5-4.6 7.4-2.8.2-5.8.3-8.8.3-3 0-5.9-.1-8.7-.3-1.7-2.4-3.2-4.9-4.7-7.4s-2.8-5.1-4.1-7.7c1.3-2.6 2.6-5.2 4.1-7.7 1.5-2.5 3-5 4.6-7.4 5.8-.4 11.6-.4 17.5 0 1.6 2.4 3.2 4.9 4.6 7.4 1.5 2.5 2.8 5.1 4.1 7.7-1.2 2.6-2.6 5.2-4 7.7zm8.4-45.7c3.2 1.9 4.5 9.3 2.4 19.1-.1.6-.3 1.3-.4 1.9-4.2-1-8.5-1.6-12.8-2-2.5-3.5-5.2-6.9-8.1-10.1.7-.7 1.5-1.4 2.2-2 7.1-6.2 13.7-8.6 16.7-6.9z"/>
                                <path className="st1" fill="white"
                                      d="M-90.1 382.6c4.7 0 8.6 3.8 8.6 8.6 0 4.7-3.8 8.6-8.6 8.6-4.7 0-8.6-3.8-8.6-8.6.1-4.8 3.9-8.6 8.6-8.6m76.9 8.7h-8.9v13h-4v-32.5h12c6.3 0 10.8 3 10.8 9.2v1.1c0 4.4-2.3 7.2-5.8 8.4l7.7 13.8h-4.5l-7.3-13zm-1.1-3.6c4.1 0 7-1.9 7-5.6v-1c0-3.8-2.9-5.7-7-5.7h-7.8v12.3h7.8zm20 7.3c0 3.7 2.3 6.6 6.3 6.6 3.3 0 5.3-1.7 5.6-4.2h3.8c-.4 4.3-4.1 7.4-9.3 7.4-6.2 0-10.1-4-10.1-10.7v-1.5c0-6.6 3.8-10.7 10-10.7 6 0 9.5 3.9 9.5 10.2v2.5H5.7v.4zm0-3.8v.2h11.9v-.5c0-3.2-1.7-5.9-5.7-5.9-3.2-.2-6 2.3-6.2 5.5v.7zm38.1-.3v13.5H40v-2.3c-1.8 1.8-4.3 2.8-6.9 2.7-4 0-7-2.3-7-6.4 0-4.8 3.8-6.6 8.7-6.6 1.7 0 3.4.1 5.1.3v-1.7c0-3.2-1.4-5.3-4.6-5.3-2.6-.1-4.8 1.8-4.9 4.4v.4h-3.8c0-4 3.1-7.9 8.6-7.9 5.8-.2 8.6 3.2 8.6 8.9zm-13.9 7.3c0 2.2 1.6 3.4 4.3 3.4 2.3-.1 4.4-1.1 5.9-2.8v-3.6c-1.6-.2-3.3-.3-4.9-.3-3.3-.1-5.3 1-5.3 3.3zm39.3-7.8h-3.5c-.1-3-2.6-5.4-5.6-5.4h-.2c-4.1 0-6.4 2.9-6.4 7.4v1.8c0 4.5 2.3 7.4 6.4 7.4 2.9.2 5.5-2 5.7-4.9v-.1h3.6c-.5 5.1-4.3 8.2-9.3 8.2-6.2 0-10.2-3.8-10.2-10.7v-1.5c0-6.9 4-10.7 10.2-10.7 5.2-.1 9 3.2 9.3 8.5zm16.9 13.8c-1.4.5-2.8.7-4.3.6-3.8 0-6.3-2.2-6.3-6.9v-12.5h-4v-3.2h4v-7.7h3.8v7.7h6.5v3.2h-6.5l-.1 11.8c0 3.1 1.4 4.1 3.7 4.1 1 0 2.1-.2 3-.6l.2 3.5z"/>
                            </svg>
                        </li>
                        <li>
                            <svg version="1.1"
                                 className="softwareLogos qlik-sense pl-8 pr-8 md:pr-6 md:pl-6 m lg:pr-7 lg:pl-7 xl:pr-7 xl:pl-7"
                                 width="100%"
                                 xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 2365 1538" xmlSpace="preserve">
                                <path className="st0" d="M1155.9,993.7H46.4c-11.6,0-27.8,4.6-25.5-11.6c0-16.2,16.2-13.9,27.8-13.9h2214.3c9.3,0,16.2,0,25.5,4.6
	c4.6,2.3,6.9,6.9,6.9,11.6c0,4.6-4.6,9.3-11.6,9.3L1155.9,993.7z"/>
                                <path className="st1" d="M1190.7,456.3c-11.6,11.6-25.5,23.2-37.1,34.7c-9.3,9.3-13.9,20.8-13.9,34.7v78.8c0,16.2-6.9,23.2-20.8,23.2
	h-71.8c-16.2,0-23.2-6.9-23.2-23.2V111.2c0-18.5,4.6-23.2,23.2-23.2h64.9c23.2,0,27.8,4.6,27.8,27.8v217.7c0,6.9-4.6,18.5,4.6,20.8
	c6.9,2.3,11.6-6.9,16.2-13.9c30.1-30.1,60.2-62.5,88-95c11.6-13.9,25.5-18.5,44-18.5h92.7c4.6,0,11.6-2.3,13.9,4.6
	c2.3,6.9-2.3,9.3-6.9,13.9c-32.4,34.7-64.9,67.2-97.3,101.9c-20.8,20.8-20.8,25.5-6.9,51c41.7,67.2,81.1,136.7,122.8,203.8
	c4.6,6.9,11.6,11.6,6.9,20.8s-13.9,4.6-20.8,4.6h-81.1c-18.5,0-30.1-6.9-39.4-23.2l-83.4-139C1195.3,463.3,1193,458.6,1190.7,456.3
	L1190.7,456.3z M743.6,359v238.6c0,25.5-4.6,30.1-30.1,30.1h-64.9c-20.8,0-25.5-4.6-25.5-25.5V113.5c0-20.8,4.6-25.5,25.5-25.5h67.2
	c20.8,0,25.5,4.6,25.5,27.8C743.6,194.6,743.6,275.6,743.6,359z M945.1,426.2v171.4c0,25.5-4.6,30.1-27.8,30.1h-64.9
	c-18.5,0-25.5-6.9-25.5-25.5V252.5c0-20.8,4.6-25.5,25.5-25.5h67.2c18.5,0,25.5,6.9,25.5,25.5V426.2z M887.2,85.7H922
	c13.9,0,18.5,6.9,18.5,18.5v51c0,13.9-6.9,18.5-18.5,18.5h-76.4c-13.9,0-18.5-6.9-18.5-20.8v-51c0-11.6,6.9-18.5,20.8-18.5
	C861.8,85.7,875.6,85.7,887.2,85.7L887.2,85.7z"/>
                                <path className="st2" d="M2302.5,618.4c-27.8-23.2-53.3-46.3-81.1-69.5c-9.3-6.9-11.6-11.6-4.6-23.2c34.7-62.5,51-127.4,46.3-199.2
	C2251.5,143.6,2096.3,0,1908.7,0c-9.3,0-23.2,0-37.1,2.3c-203.8,20.8-347.4,222.4-303.4,423.9c53.3,243.2,324.3,354.4,535.1,220
	c9.3-4.6,13.9-4.6,20.8,2.3l90.3,76.4c16.2,11.6,23.2,11.6,37.1-2.3c18.5-20.8,37.1-44,55.6-64.9
	C2321,641.6,2318.7,632.3,2302.5,618.4L2302.5,618.4z M1911,569.8c-120.4,0-215.4-97.3-215.4-217.7c0-115.8,97.3-213.1,215.4-213.1
	s215.4,97.3,215.4,215.4C2128.7,470.2,2029.1,569.8,1911,569.8L1911,569.8z"/>
                                <path className="st1" d="M556,560.5c-16.2-13.9-30.1-27.8-46.3-39.4c-9.3-6.9-11.6-13.9-4.6-25.5c25.5-41.7,37.1-88,37.1-136.7
	c0-13.9,0-27.8-4.6-44C514.3,166.8,368.4,64.9,220.1,92.7C69.6,120.4-27.7,268.7,7,416.9c41.7,178.4,238.6,266.4,400.7,173.7
	c9.3-4.6,13.9-4.6,20.8,2.3c18.5,16.2,37.1,32.4,57.9,51c11.6,9.3,20.8,9.3,30.1-2.3c13.9-16.2,27.8-32.4,44-48.6
	C567.6,579.1,567.6,569.8,556,560.5L556,560.5z M271.1,511.9c-85.7,0-155.2-69.5-155.2-150.6c0-88,67.2-157.5,155.2-159.8
	c85.7,0,155.2,71.8,155.2,155.2C426.3,442.4,356.8,511.9,271.1,511.9z M1911,215.4c76.4,0,139,62.5,139,139s-62.5,139-139,139
	c-76.4,0-139-62.5-139-139C1772,275.6,1834.6,215.4,1911,215.4z M352.2,1496.3c-23.2,13.9-51,20.8-83.4,20.8
	c-27.8,0-51-4.6-71.8-13.9c-20.8-9.3-37.1-23.2-51-39.4s-23.2-34.7-30.1-57.9c-6.9-20.8-9.3-44-9.3-67.2c0-23.2,2.3-46.3,9.3-67.2
	c6.9-20.8,16.2-41.7,30.1-57.9c13.9-16.2,30.1-30.1,51-39.4c20.8-9.3,44-13.9,71.8-13.9c27.8,0,51,4.6,71.8,13.9
	c20.8,9.3,37.1,23.2,51,39.4c13.9,16.2,23.2,37.1,30.1,57.9c6.9,20.8,9.3,44,9.3,67.2c0,25.5-4.6,51-13.9,74.1
	c-9.3,23.2-20.8,44-39.4,62.5l46.3,34.7l-23.2,27.8L352.2,1496.3z M349.9,1445.3c6.9-6.9,23.2-30.1,30.1-48.6
	c6.9-18.5,9.3-39.4,9.3-60.2c0-16.2-2.3-34.7-6.9-51c-4.6-16.2-11.6-32.4-20.8-46.3c-9.3-13.9-23.2-23.2-37.1-32.4
	c-16.2-9.3-32.4-11.6-53.3-11.6c-20.8,0-39.4,4.6-53.3,11.6c-16.2,9.3-27.8,18.5-37.1,32.4s-16.2,27.8-20.8,46.3
	c-4.6,16.2-6.9,34.7-6.9,51c0,16.2,2.3,34.7,6.9,51c4.6,16.2,11.6,32.4,20.8,46.3c9.3,13.9,20.8,25.5,37.1,32.4
	c16.2,9.3,32.4,11.6,53.3,11.6c16.2,0,32.4-2.3,48.6-9.3C317.4,1468.5,342.9,1452.3,349.9,1445.3z M528.2,1162.8v345.1h-41.7v-345.1
	H528.2z M593.1,1213.7v-51h41.7v51H593.1z M634.8,1257.7v250.2h-41.7v-250.2H634.8z M741.3,1162.8v203.8l113.5-108.9h55.6
	l-99.6,90.3l106.5,157.5h-51l-85.7-129.7l-39.4,34.7v95h-41.7v-342.8L741.3,1162.8z M1248.6,1220.7c-16.2-11.6-34.7-16.2-57.9-16.2
	c-9.3,0-18.5,0-27.8,2.3c-9.3,2.3-18.5,4.6-25.5,9.3c-6.9,4.6-13.9,11.6-16.2,18.5c-4.6,6.9-6.9,16.2-6.9,27.8s2.3,18.5,9.3,25.5
	c6.9,6.9,13.9,11.6,25.5,16.2c11.6,4.6,23.2,6.9,34.7,9.3c11.6,2.3,25.5,4.6,39.4,9.3c13.9,2.3,27.8,6.9,39.4,11.6
	c11.6,4.6,25.5,9.3,34.7,18.5c11.6,6.9,18.5,16.2,25.5,27.8s9.3,25.5,9.3,41.7c0,18.5-4.6,34.7-11.6,46.3
	c-9.3,13.9-18.5,23.2-32.4,32.4c-13.9,9.3-27.8,13.9-44,18.5c-16.2,4.6-32.4,4.6-46.3,4.6c-18.5,0-37.1-2.3-55.6-6.9
	c-16.2-4.6-32.4-11.6-46.3-20.8s-23.2-23.2-30.1-37.1c-6.9-16.2-11.6-32.4-11.6-53.3h44c0,13.9,2.3,27.8,9.3,37.1
	c4.6,11.6,13.9,18.5,23.2,25.5c9.3,6.9,20.8,11.6,32.4,13.9c11.6,2.3,25.5,4.6,37.1,4.6c9.3,0,20.8,0,30.1-2.3
	c11.6-2.3,20.8-4.6,27.8-9.3c9.3-4.6,16.2-11.6,20.8-18.5c4.6-6.9,6.9-18.5,6.9-30.1s-2.3-20.8-9.3-27.8
	c-6.9-6.9-13.9-13.9-25.5-18.5c-11.6-4.6-23.2-9.3-34.7-11.6c-13.9-2.3-25.5-6.9-39.4-9.3c-13.9-2.3-27.8-6.9-39.4-11.6
	c-13.9-4.6-25.5-9.3-34.7-16.2c-11.6-6.9-18.5-16.2-25.5-25.5c-6.9-11.6-9.3-23.2-9.3-39.4s4.6-32.4,11.6-44
	c6.9-11.6,16.2-23.2,27.8-32.4c11.6-9.3,25.5-13.9,39.4-18.5c13.9-4.6,30.1-6.9,46.3-6.9c18.5,0,34.7,2.3,48.6,6.9
	c16.2,4.6,27.8,11.6,39.4,20.8c11.6,9.3,20.8,20.8,27.8,34.7c6.9,13.9,9.3,30.1,11.6,48.6h-44
	C1274,1250.8,1264.8,1232.3,1248.6,1220.7L1248.6,1220.7z M1558.9,1503.3c-18.5,13.9-41.7,20.8-69.5,20.8c-20.8,0-37.1-2.3-51-9.3
	c-13.9-6.9-27.8-16.2-37.1-27.8c-9.3-11.6-18.5-25.5-23.2-41.7c-6.9-16.2-9.3-32.4-9.3-51c0-18.5,2.3-37.1,9.3-51
	c4.6-16.2,13.9-30.1,23.2-41.7c11.6-11.6,23.2-20.8,37.1-27.8c13.9-6.9,30.1-9.3,46.3-9.3c23.2,0,41.7,4.6,55.6,13.9
	c13.9,9.3,25.5,20.8,34.7,34.7c9.3,13.9,13.9,30.1,18.5,46.3c2.3,16.2,4.6,32.4,4.6,48.6h-187.6c0,11.6,0,20.8,4.6,30.1
	c2.3,9.3,6.9,18.5,13.9,25.5s13.9,13.9,25.5,18.5c9.3,4.6,20.8,6.9,34.7,6.9c16.2,0,32.4-4.6,41.7-11.6
	c11.6-6.9,18.5-20.8,20.8-37.1h39.4C1589.1,1468.5,1577.5,1489.4,1558.9,1503.3L1558.9,1503.3z M1549.7,1343.4
	c-4.6-9.3-9.3-16.2-13.9-23.2c-6.9-6.9-13.9-11.6-23.2-13.9c-9.3-4.6-18.5-4.6-27.8-4.6c-11.6,0-20.8,2.3-27.8,4.6
	c-9.3,4.6-16.2,9.3-20.8,16.2c-6.9,6.9-11.6,13.9-13.9,23.2l-6.9,27.8h143.6C1554.3,1359.6,1552,1350.4,1549.7,1343.4L1549.7,1343.4
	z M1679.4,1269.3v39.4c16.2-30.1,44-46.3,81.1-46.3c16.2,0,30.1,2.3,41.7,6.9c11.6,4.6,20.8,11.6,25.5,18.5
	c6.9,6.9,11.6,18.5,13.9,27.8c2.3,11.6,4.6,23.2,4.6,37.1v164.5h-41.7v-169.1c0-16.2-4.6-27.8-13.9-37.1
	c-9.3-9.3-20.8-13.9-37.1-13.9c-11.6,0-23.2,2.3-32.4,6.9c-9.3,4.6-16.2,9.3-23.2,16.2c-6.9,6.9-11.6,16.2-13.9,25.5
	c-2.3,9.3-4.6,20.8-4.6,30.1v141.3h-41.7v-247.8H1679.4z M1941.1,1463.9c4.6,6.9,9.3,11.6,16.2,13.9c6.9,2.3,13.9,6.9,20.8,6.9
	c6.9,2.3,16.2,2.3,23.2,2.3c6.9,0,13.9,0,20.8-2.3c6.9,0,13.9-2.3,18.5-4.6c6.9-2.3,11.6-6.9,13.9-11.6c4.6-4.6,4.6-11.6,4.6-18.5
	c0-11.6-4.6-18.5-11.6-23.2c-6.9-4.6-18.5-9.3-30.1-13.9c-11.6-2.3-25.5-6.9-39.4-9.3c-13.9-2.3-27.8-6.9-39.4-11.6
	s-23.2-11.6-30.1-20.8c-6.9-9.3-11.6-20.8-11.6-37.1c0-11.6,2.3-23.2,9.3-32.4c4.6-9.3,13.9-16.2,20.8-20.8
	c9.3-4.6,18.5-9.3,30.1-11.6c11.6-2.3,23.2-4.6,32.4-4.6c13.9,0,27.8,2.3,39.4,4.6c11.6,2.3,23.2,6.9,32.4,11.6
	c9.3,6.9,16.2,13.9,20.8,23.2c4.6,9.3,9.3,23.2,9.3,37.1H2050c0-6.9-2.3-13.9-6.9-20.8c-4.6-4.6-6.9-9.3-13.9-13.9
	c-4.6-2.3-11.6-4.6-18.5-6.9s-13.9-2.3-20.8-2.3s-11.6,0-18.5,2.3c-6.9,0-11.6,2.3-16.2,4.6c-4.6,2.3-9.3,4.6-11.6,9.3
	c-2.3,4.6-4.6,9.3-4.6,16.2s2.3,13.9,6.9,18.5c4.6,4.6,11.6,9.3,18.5,11.6c6.9,2.3,16.2,4.6,25.5,6.9l27.8,6.9
	c9.3,2.3,20.8,4.6,30.1,9.3c9.3,2.3,18.5,6.9,25.5,13.9c6.9,4.6,13.9,11.6,18.5,20.8s6.9,18.5,6.9,30.1c0,16.2-2.3,27.8-9.3,37.1
	c-6.9,9.3-13.9,18.5-25.5,23.2c-9.3,6.9-20.8,9.3-34.7,13.9c-11.6,2.3-25.5,4.6-37.1,4.6c-13.9,0-27.8-2.3-39.4-4.6
	c-11.6-2.3-23.2-6.9-32.4-13.9s-16.2-16.2-23.2-25.5c-6.9-11.6-9.3-23.2-9.3-39.4h41.7C1934.2,1450,1936.5,1456.9,1941.1,1463.9
	L1941.1,1463.9z M2325.6,1503.3c-18.5,13.9-41.7,20.8-69.5,20.8c-20.8,0-37.1-2.3-51-9.3s-27.8-16.2-37.1-27.8
	c-9.3-11.6-18.5-25.5-23.2-41.7c-4.6-16.2-6.9-32.4-9.3-53.3c0-18.5,2.3-37.1,9.3-51c4.6-16.2,13.9-30.1,23.2-41.7
	c11.6-11.6,23.2-20.8,37.1-27.8c13.9-6.9,30.1-9.3,46.3-9.3c23.2,0,41.7,4.6,55.6,13.9c13.9,9.3,25.5,20.8,34.7,34.7
	s13.9,30.1,18.5,46.3c2.3,16.2,4.6,32.4,4.6,48.6h-185.3c0,11.6,0,20.8,4.6,30.1c2.3,9.3,6.9,18.5,13.9,25.5
	c6.9,6.9,13.9,13.9,25.5,18.5c9.3,4.6,20.8,6.9,34.7,6.9c16.2,0,32.4-4.6,41.7-11.6c11.6-6.9,18.5-20.8,20.8-37.1h39.4
	C2358.1,1468.5,2344.2,1489.4,2325.6,1503.3L2325.6,1503.3z M2316.4,1343.4c-4.6-9.3-9.3-16.2-13.9-23.2
	c-6.9-6.9-13.9-11.6-23.2-13.9c-9.3-4.6-18.5-4.6-27.8-4.6c-11.6,0-20.8,2.3-27.8,4.6c-9.3,4.6-16.2,9.3-20.8,16.2
	c-6.9,6.9-11.6,13.9-13.9,23.2c-4.6,9.3-4.6,18.5-6.9,27.8h143.6C2323.3,1359.6,2321,1350.4,2316.4,1343.4L2316.4,1343.4z"/>
                            </svg>
                        </li>
                        <li>
                            <svg version={1.0} xmlns="http://www.w3.org/2000/svg"
                                 className="softwareLogos wordpress pl-2 pr-2 pt-4 lg:pt-2 xl:pt-4" width="100%"
                                 xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 540 122.523"
                                 xmlSpace="preserve">
                                <g id="Layer_1">
                                </g>
                                <g id="Layer_2">
                                    <g>
                                        <path fill="#00749A" d="M313.19,48.227h-21.257v2.255c6.649,0,7.718,1.425,7.718,9.857V75.54c0,8.431-1.068,9.975-7.718,9.975
			c-5.105-0.712-8.55-3.444-13.3-8.669l-5.462-5.937c7.362-1.308,11.28-5.938,11.28-11.164c0-6.53-5.58-11.518-16.031-11.518h-20.9
			v2.255c6.649,0,7.718,1.425,7.718,9.857V75.54c0,8.431-1.069,9.975-7.718,9.975v2.256h23.631v-2.256
			c-6.649,0-7.718-1.544-7.718-9.975v-4.274h2.018l13.182,16.505h34.557c16.981,0,24.344-9.024,24.344-19.832
			C337.534,57.133,330.172,48.227,313.19,48.227z M263.434,67.582V51.79h4.868c5.343,0,7.719,3.681,7.719,7.956
			c0,4.157-2.376,7.837-7.719,7.837H263.434z M313.547,84.09h-0.832c-4.274,0-4.868-1.068-4.868-6.531V51.79c0,0,5.225,0,5.7,0
			c12.35,0,14.605,9.024,14.605,16.031C328.152,75.064,325.896,84.09,313.547,84.09z"/>
                                        <path fill="#00749A" d="M181.378,71.978l8.194-24.227c2.376-7.006,1.307-9.024-6.293-9.024v-2.376h22.325v2.376
			c-7.481,0-9.262,1.781-12.231,10.45L179.834,89.79h-1.543l-12.114-37.17l-12.349,37.17h-1.544l-13.181-40.613
			c-2.85-8.669-4.75-10.45-11.638-10.45v-2.376h26.363v2.376c-7.007,0-8.908,1.662-6.413,9.024l7.956,24.227l11.994-35.627h2.257
			L181.378,71.978z"/>
                                        <path fill="#00749A" d="M221.752,89.314c-13.062,0-23.75-9.618-23.75-21.376c0-11.637,10.689-21.257,23.75-21.257
			c13.063,0,23.75,9.62,23.75,21.257C245.502,79.696,234.815,89.314,221.752,89.314z M221.752,50.365
			c-10.924,0-14.725,9.855-14.725,17.574c0,7.839,3.801,17.576,14.725,17.576c11.045,0,14.845-9.737,14.845-17.576
			C236.597,60.22,232.797,50.365,221.752,50.365z"/>
                                        <path fill="#464342" d="M366.864,85.396v2.375H339.67v-2.375c7.957,0,9.382-2.018,9.382-13.895V52.502
			c0-11.877-1.425-13.776-9.382-13.776v-2.376h24.581c12.231,0,19.002,6.294,19.002,14.727c0,8.194-6.771,14.606-19.002,14.606
			h-6.769v5.817C357.482,83.378,358.907,85.396,366.864,85.396z M364.251,40.625h-6.769v20.664h6.769
			c6.651,0,9.738-4.631,9.738-10.212C373.989,45.377,370.902,40.625,364.251,40.625z"/>
                                        <path fill="#464342" d="M464.833,76.609l-0.594,2.137c-1.068,3.919-2.376,5.344-10.807,5.344h-1.663
			c-6.174,0-7.243-1.425-7.243-9.856v-5.462c9.263,0,9.976,0.83,9.976,7.006h2.256V58.083h-2.256c0,6.175-0.713,7.006-9.976,7.006
			V51.79h6.53c8.433,0,9.738,1.425,10.807,5.344l0.595,2.255h1.899l-0.83-11.162h-34.914v2.255c6.649,0,7.719,1.425,7.719,9.857
			V75.54c0,7.713-0.908,9.656-6.151,9.933c-4.983-0.761-8.404-3.479-13.085-8.627l-5.463-5.937
			c7.363-1.308,11.282-5.938,11.282-11.164c0-6.53-5.581-11.518-16.031-11.518h-20.9v2.255c6.649,0,7.718,1.425,7.718,9.857V75.54
			c0,8.431-1.068,9.975-7.718,9.975v2.256h23.632v-2.256c-6.649,0-7.719-1.544-7.719-9.975v-4.274h2.019l13.181,16.505h48.806
			l0.713-11.161H464.833z M401.896,67.582V51.79h4.868c5.344,0,7.72,3.681,7.72,7.956c0,4.157-2.376,7.837-7.72,7.837H401.896z"/>
                                        <path fill="#464342" d="M488.939,89.314c-4.75,0-8.907-2.493-10.688-4.038c-0.594,0.595-1.662,2.376-1.899,4.038h-2.257V72.928
			h2.375c0.951,7.837,6.412,12.468,13.419,12.468c3.8,0,6.888-2.137,6.888-5.699c0-3.087-2.731-5.463-7.6-7.719l-6.769-3.206
			c-4.751-2.258-8.313-6.177-8.313-11.401c0-5.7,5.344-10.568,12.707-10.568c3.919,0,7.243,1.425,9.263,3.087
			c0.593-0.475,1.187-1.782,1.544-3.208h2.256v14.014h-2.494c-0.832-5.582-3.919-10.213-10.212-10.213
			c-3.325,0-6.414,1.9-6.414,4.87c0,3.087,2.494,4.749,8.195,7.362l6.53,3.206c5.701,2.731,7.956,7.127,7.956,10.689
			C503.426,84.09,496.895,89.314,488.939,89.314z"/>
                                        <path fill="#464342" d="M525.514,89.314c-4.751,0-8.908-2.493-10.688-4.038c-0.594,0.595-1.662,2.376-1.899,4.038h-2.257V72.928
			h2.375c0.95,7.837,6.412,12.468,13.419,12.468c3.8,0,6.888-2.137,6.888-5.699c0-3.087-2.731-5.463-7.601-7.719l-6.769-3.206
			c-4.75-2.258-8.313-6.177-8.313-11.401c0-5.7,5.344-10.568,12.707-10.568c3.919,0,7.243,1.425,9.263,3.087
			c0.593-0.475,1.187-1.782,1.542-3.208h2.257v14.014h-2.493c-0.832-5.582-3.919-10.213-10.212-10.213
			c-3.325,0-6.414,1.9-6.414,4.87c0,3.087,2.494,4.749,8.195,7.362l6.53,3.206c5.701,2.731,7.956,7.127,7.956,10.689
			C540,84.09,533.469,89.314,525.514,89.314z"/>
                                        <g>
                                            <path fill="#464342" d="M8.708,61.26c0,20.802,12.089,38.779,29.619,47.298L13.258,39.872
				C10.342,46.408,8.708,53.641,8.708,61.26z"/>
                                            <path fill="#464342" d="M96.74,58.608c0-6.495-2.333-10.993-4.334-14.494c-2.664-4.329-5.161-7.995-5.161-12.324
				c0-4.831,3.664-9.328,8.825-9.328c0.233,0,0.454,0.029,0.681,0.042c-9.35-8.566-21.807-13.796-35.489-13.796
				c-18.36,0-34.513,9.42-43.91,23.688c1.233,0.037,2.395,0.063,3.382,0.063c5.497,0,14.006-0.667,14.006-0.667
				c2.833-0.167,3.167,3.994,0.337,4.329c0,0-2.847,0.335-6.015,0.501L48.2,93.547l11.501-34.493l-8.188-22.434
				c-2.83-0.166-5.511-0.501-5.511-0.501c-2.832-0.166-2.5-4.496,0.332-4.329c0,0,8.679,0.667,13.843,0.667
				c5.496,0,14.006-0.667,14.006-0.667c2.835-0.167,3.168,3.994,0.337,4.329c0,0-2.853,0.335-6.015,0.501l18.992,56.494
				l5.242-17.517C95.011,68.328,96.74,63.107,96.74,58.608z"/>
                                            <path fill="#464342" d="M62.184,65.857l-15.768,45.819c4.708,1.384,9.687,2.141,14.846,2.141c6.12,0,11.989-1.058,17.452-2.979
				c-0.141-0.225-0.269-0.464-0.374-0.724L62.184,65.857z"/>
                                            <path fill="#464342" d="M107.376,36.046c0.226,1.674,0.354,3.471,0.354,5.404c0,5.333-0.996,11.328-3.996,18.824l-16.053,46.413
				c15.624-9.111,26.133-26.038,26.133-45.426C113.815,52.124,111.481,43.532,107.376,36.046z"/>
                                            <path fill="#464342" d="M61.262,0C27.483,0,0,27.481,0,61.26c0,33.783,27.483,61.263,61.262,61.263
				c33.778,0,61.265-27.48,61.265-61.263C122.526,27.481,95.04,0,61.262,0z M61.262,119.715c-32.23,0-58.453-26.223-58.453-58.455
				c0-32.23,26.222-58.451,58.453-58.451c32.229,0,58.45,26.221,58.45,58.451C119.712,93.492,93.491,119.715,61.262,119.715z"/>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </li>
                    </ul>
                </div>
                <div className="pl-0 lg:pl-8 md:pl-0">
                    <div className="imageSoftware">
                        <div className="image-holder hide_mobile"/>
                        <img src={ImageSoftware} alt="image description"
                             className="wow slideInRight cover-image"/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Software
