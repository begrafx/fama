import React from 'react';

const Dribbble = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M50 0C22.397 0 0 22.397 0 50C0 77.603 22.397 100 50 100C77.5488 100 100 77.603 100 50C100 22.397 77.5488 0 50 0ZM83.026 23.0477C88.9913 30.3145 92.5705 39.5879 92.679 49.6204C91.269 49.3492 77.1692 46.4751 62.961 48.2646C62.6356 47.5597 62.3644 46.8004 62.0391 46.0412C61.1714 43.9805 60.1952 41.8655 59.2191 39.859C74.9458 33.4599 82.1041 24.2408 83.026 23.0477ZM50 7.37527C60.846 7.37527 70.7701 11.4425 78.308 18.1128C77.5488 19.1974 71.0954 27.82 55.9111 33.5141C48.9154 20.6616 41.1605 10.141 39.9675 8.5141C43.167 7.75488 46.5293 7.37527 50 7.37527ZM31.833 11.3883C32.9718 12.9067 40.564 23.4816 47.6681 36.0629C27.7115 41.3774 10.0868 41.269 8.18872 41.269C10.9544 28.0369 19.9024 17.0282 31.833 11.3883ZM7.26681 50.0542C7.26681 49.6204 7.26681 49.1866 7.26681 48.7527C9.11063 48.8069 29.8265 49.0781 51.1388 42.679C52.3861 45.0651 53.5249 47.5054 54.6095 49.9458C54.0672 50.1085 53.4707 50.2712 52.9284 50.4338C30.9111 57.538 19.1974 76.9523 18.2213 78.5792C11.4425 71.0412 7.26681 61.0087 7.26681 50.0542ZM50 92.7332C40.1302 92.7332 31.0195 89.3709 23.8069 83.731C24.5662 82.1584 33.243 65.4555 57.321 57.0499C57.4295 56.9957 57.4837 56.9957 57.5922 56.9414C63.6117 72.5054 66.0521 85.5748 66.7028 89.3167C61.551 91.5401 55.9111 92.7332 50 92.7332ZM73.807 85.4122C73.3731 82.8091 71.0955 70.3362 65.5098 54.9892C78.9046 52.8742 90.6182 56.3449 92.0824 56.833C90.2386 68.7093 83.4056 78.9588 73.807 85.4122Z"
      fill="#EA4C89"
    />
  </svg>
);

const Github = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 0C8.95 0 0 8.95 0 20C0 28.85 5.725 36.325 13.675 38.975C14.675 39.15 15.05 38.55 15.05 38.025C15.05 37.55 15.025 35.975 15.025 34.3C10 35.225 8.7 33.075 8.3 31.95C8.075 31.375 7.1 29.6 6.25 29.125C5.55 28.75 4.55 27.825 6.225 27.8C7.8 27.775 8.925 29.25 9.3 29.85C11.1 32.875 13.975 32.025 15.125 31.5C15.3 30.2 15.825 29.325 16.4 28.825C11.95 28.325 7.3 26.6 7.3 18.95C7.3 16.775 8.075 14.975 9.35 13.575C9.15 13.075 8.45 11.025 9.55 8.275C9.55 8.275 11.225 7.75 15.05 10.325C16.65 9.875 18.35 9.65 20.05 9.65C21.75 9.65 23.45 9.875 25.05 10.325C28.875 7.725 30.55 8.275 30.55 8.275C31.65 11.025 30.95 13.075 30.75 13.575C32.025 14.975 32.8 16.75 32.8 18.95C32.8 26.625 28.125 28.325 23.675 28.825C24.4 29.45 25.025 30.65 25.025 32.525C25.025 35.2 25 37.35 25 38.025C25 38.55 25.375 39.175 26.375 38.975C34.275 36.325 40 28.825 40 20C40 8.95 31.05 0 20 0Z"
      fill="#1B1F23"
    />
  </svg>
);

const Facebook = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M30.0001 3.33325H25.0001C22.7899 3.33325 20.6703 4.21123 19.1075 5.77403C17.5447 7.33683 16.6667 9.45645 16.6667 11.6666V16.6666H11.6667V23.3333H16.6667V36.6666H23.3334V23.3333H28.3334L30.0001 16.6666H23.3334V11.6666C23.3334 11.2246 23.509 10.8006 23.8216 10.4881C24.1341 10.1755 24.5581 9.99992 25.0001 9.99992H30.0001V3.33325Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Twitter = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M38.3333 4.99991C36.7373 6.12571 34.9702 6.98676 33.1 7.54991C32.0962 6.39577 30.7622 5.57773 29.2784 5.20646C27.7945 4.83518 26.2325 4.92857 24.8035 5.474C23.3744 6.01943 22.1474 6.99058 21.2883 8.25611C20.4292 9.52163 19.9795 11.0205 20 12.5499V14.2166C17.071 14.2925 14.1688 13.6429 11.5517 12.3257C8.93456 11.0084 6.68385 9.06431 4.99999 6.66658C4.99999 6.66658 -1.66668 21.6666 13.3333 28.3332C9.90087 30.6632 5.81192 31.8315 1.66666 31.6666C16.6667 39.9999 35 31.6666 35 12.4999C34.9985 12.0357 34.9538 11.5726 34.8667 11.1166C36.5677 9.43907 37.768 7.3211 38.3333 4.99991V4.99991Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28.3333 3.33325H11.6666C7.06427 3.33325 3.33331 7.06421 3.33331 11.6666V28.3333C3.33331 32.9356 7.06427 36.6666 11.6666 36.6666H28.3333C32.9357 36.6666 36.6666 32.9356 36.6666 28.3333V11.6666C36.6666 7.06421 32.9357 3.33325 28.3333 3.33325Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26.6668 18.95C26.8725 20.3371 26.6356 21.7537 25.9897 22.9984C25.3439 24.243 24.3221 25.2524 23.0695 25.8828C21.817 26.5132 20.3976 26.7327 19.0131 26.5099C17.6287 26.2871 16.3497 25.6335 15.3582 24.6419C14.3667 23.6504 13.713 22.3715 13.4903 20.987C13.2675 19.6026 13.4869 18.1832 14.1174 16.9306C14.7478 15.6781 15.7571 14.6562 17.0018 14.0104C18.2464 13.3646 19.6631 13.1277 21.0501 13.3333C22.465 13.5432 23.7749 14.2025 24.7863 15.2139C25.7977 16.2253 26.457 17.5351 26.6668 18.95Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M29.1667 10.8333H29.1833"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Icons = {
  Dribbble,
  Github,
  Facebook,
  Twitter,
  Instagram,
};

export default Icons;
