import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="w-full flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="w-8 h-8">
                <svg className="fill-current w-full h-full text-white" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.27123 31.7308C6.15656 31.4465 4.24734 30.8211 2.71312 29.2869C1.17891 27.7527 0.553493 25.8434 0.269182 23.7288C-0.000177735 21.7253 -9.5205e-05 19.2016 3.7763e-06 16.1752V15.8248C-9.5205e-05 12.7984 -0.000177735 10.2747 0.269182 8.27123C0.553493 6.15656 1.17891 4.24734 2.71312 2.71312C4.24734 1.17891 6.15656 0.553493 8.27123 0.269182C10.2747 -0.000177735 12.7984 -9.5205e-05 15.8248 3.7763e-06H16.1752C19.2016 -9.5205e-05 21.7253 -0.000177735 23.7288 0.269182C25.8434 0.553493 27.7527 1.17891 29.2869 2.71312C30.8211 4.24734 31.4465 6.15656 31.7308 8.27123C32.0002 10.2747 32.0001 12.7984 32 15.8249V16.1751C32.0001 19.2016 32.0002 21.7253 31.7308 23.7288C31.4465 25.8434 30.8211 27.7527 29.2869 29.2869C27.7527 30.8211 25.8434 31.4465 23.7288 31.7308C21.7253 32.0002 19.2016 32.0001 16.1751 32H15.8249C12.7984 32.0001 10.2747 32.0002 8.27123 31.7308ZM4.4995 4.4995C2.52632 6.47267 2.52632 9.64845 2.52632 16C2.52632 22.3516 2.52632 25.5273 4.4995 27.5005C6.47267 29.4737 9.64845 29.4737 16 29.4737C22.3516 29.4737 25.5273 29.4737 27.5005 27.5005C29.4737 25.5273 29.4737 22.3516 29.4737 16C29.4737 9.64845 29.4737 6.47267 27.5005 4.4995C25.5273 2.52632 22.3516 2.52632 16 2.52632C9.64845 2.52632 6.47267 2.52632 4.4995 4.4995Z"/>
                    <path d="M14.2685 10.3785L12.3549 12.2642C10.2655 14.3231 10.2655 17.6769 12.3549 19.7358L14.2685 21.6216L11.4808 24.4359C9.73016 26.2032 6.73685 24.9515 6.73685 22.4521V9.54795C6.73685 7.04856 9.73016 5.79686 11.4808 7.56419L14.2685 10.3785Z" />
                    <path d="M21.5386 17.9364L24.4958 20.8505C24.9871 21.3347 25.2631 21.9914 25.2631 22.6761C25.2631 24.9763 22.441 26.1283 20.7905 24.5018L14.1281 17.9364C13.0428 16.867 13.0428 15.1331 14.1281 14.0636L20.7905 7.49825C22.441 5.87178 25.2631 7.02371 25.2631 9.3239C25.2631 10.0087 24.9871 10.6654 24.4958 11.1495L21.5386 14.0636C20.4534 15.1331 20.4534 16.867 21.5386 17.9364Z"/>
                </svg>
            </Link>
            {/* Links */}
            <div className="flex items-center space-x-4 sm:space-x-8">
                <a 
                    href="https://github.com/krzysztofpiotrmusial"
                    target="_blank" rel="noreferrer"
                    className="font-medium text-sm text-portfolio-secondary hover:text-portfolio-primary"
                >
                    GitHub
                </a>
                <a 
                    href="https://linkedin.com/in/krzysztofpiotrmusial"
                    target="_blank" rel="noreferrer"
                    className="font-medium text-sm text-portfolio-secondary hover:text-portfolio-primary"
                >
                    <p>LinkedIn</p>
                </a>
                <a 
                    href="mailto:krzysztofpiotrmusial@gmail.com"
                    target="_blank" rel="noreferrer"
                    className="font-medium text-sm text-indigo-300 hover:text-indigo-200 flex items-center space-x-1"
                >
                    <div className="w-5 h-5">
                        <svg className="fill-current w-full h-full" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9917 5H5.65835C5.44169 5 5.23335 5.00833 5.03335 5.03333C2.79169 5.225 1.66669 6.55 1.66669 8.99167V12.325C1.66669 15.6583 3.00002 16.3167 5.65835 16.3167H5.99169C6.17502 16.3167 6.41669 16.4417 6.52502 16.5833L7.52502 17.9167C7.96668 18.5083 8.68335 18.5083 9.12502 17.9167L10.125 16.5833C10.25 16.4167 10.45 16.3167 10.6584 16.3167H10.9917C13.4333 16.3167 14.7584 15.2 14.95 12.95C14.975 12.75 14.9833 12.5417 14.9833 12.325V8.99167C14.9833 6.33333 13.65 5 10.9917 5ZM5.41669 11.6667C4.95002 11.6667 4.58335 11.2917 4.58335 10.8333C4.58335 10.375 4.95835 10 5.41669 10C5.87502 10 6.25002 10.375 6.25002 10.8333C6.25002 11.2917 5.87502 11.6667 5.41669 11.6667ZM8.32502 11.6667C7.85835 11.6667 7.49169 11.2917 7.49169 10.8333C7.49169 10.375 7.86668 10 8.32502 10C8.78335 10 9.15835 10.375 9.15835 10.8333C9.15835 11.2917 8.79168 11.6667 8.32502 11.6667ZM11.2417 11.6667C10.775 11.6667 10.4084 11.2917 10.4084 10.8333C10.4084 10.375 10.7834 10 11.2417 10C11.7 10 12.075 10.375 12.075 10.8333C12.075 11.2917 11.7 11.6667 11.2417 11.6667Z" />
                            <path opacity="50%" d="M18.3166 5.65832V8.99166C18.3166 10.6583 17.8 11.7917 16.7666 12.4167C16.5166 12.5667 16.225 12.3667 16.225 12.075L16.2333 8.99166C16.2333 5.65832 14.325 3.74999 10.9916 3.74999L5.91665 3.75832C5.62498 3.75832 5.42498 3.46666 5.57498 3.21666C6.19998 2.18332 7.33331 1.66666 8.99165 1.66666H14.325C16.9833 1.66666 18.3166 2.99999 18.3166 5.65832Z" />
                        </svg>
                    </div>
                    <p>Contact</p>
                </a>
            </div>
        </div>
    )
}

export default Header