import React from 'react';
import { Svg } from './HandsStyles';

const Hands: React.FC = () => {
  return (
    <Svg viewBox="0 0 155 155" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M92.4095 39.5347L91.6645 41.0108C92.3198 39.7216 93.4605 38.7471 94.8361 38.3014C95.6045 38.0484 96.422 37.9814 97.2213 38.1049C97.8381 38.1772 98.4363 38.3567 98.9913 38.6343C100.276 39.2894 101.247 40.4287 101.69 41.8007C102.134 43.1726 102.013 44.6649 101.355 45.9475L94.8894 58.6013C95.5419 57.3091 96.6907 56.3361 98.0732 55.9055C98.8351 55.6416 99.65 55.5691 100.446 55.6955C101.194 55.7923 101.916 56.0399 102.565 56.423C105.005 58.0383 105.82 61.2416 104.449 63.8268L84.6375 102.574C84.2242 103.34 83.7691 104.084 83.2755 104.801L83.2619 104.813C80.6301 108.886 76.695 111.947 72.1003 113.497C71.1742 113.775 70.4082 114.429 69.9894 115.3L67.96 119.25L67.4451 120.25C67.2083 120.674 66.93 121.072 66.6128 121.439C64.0667 124.708 56.7985 132.326 55.26 131.539L36.4553 110.654C34.9676 109.896 34.4344 106.838 34.8237 104.804C34.8882 104.437 35.0015 104.08 35.1614 103.743L35.4619 103.155C36.795 100.572 37.0223 97.5586 36.0923 94.8053C34.5254 90.1651 32.3994 82.4666 32.974 76.1672C33.8686 66.4314 35.5292 54.3473 33.9486 49.476C33.905 49.3532 33.8729 49.2269 33.8532 49.0984C32.6158 44.5277 37.3411 43.0552 40.4787 44.6706C43.704 46.3288 44.5315 53.5614 45.283 60.0584C45.5111 62.1414 45.9808 64.1912 46.6831 66.1656C47.102 67.3218 48.0823 68.1848 49.2824 68.4534C50.4831 68.7214 51.7375 68.3581 52.6093 67.4905C53.4507 66.6513 54.2082 65.7325 54.8712 64.7458C55.514 63.7951 56.0983 62.8055 56.6185 61.782L70.4096 34.7739L70.4232 34.7617L72.2971 31.0987C73.337 29.041 75.5709 27.8728 77.8544 28.1935C78.4685 28.2615 79.0641 28.4455 79.6102 28.7345C81.788 29.8495 82.9566 32.2773 82.4701 34.6743C82.3755 35.1571 82.2129 35.6241 81.9867 36.0612L83.404 33.2728L83.4175 33.2606L85.2909 29.597C86.3308 27.5393 88.5653 26.3717 90.8482 26.6918C91.4631 26.7557 92.0599 26.9398 92.6046 27.2334C93.8891 27.8884 94.8602 29.0277 95.3037 30.3997C95.7472 31.7717 95.6267 33.2628 94.9688 34.5465L92.4095 39.5347Z"
        fill="#1C92E1"
      />
      <path
        d="M92.2336 39.4486L88.9293 45.9128C89.5846 44.6237 90.7258 43.6486 92.1015 43.2029C92.8698 42.9511 93.6873 42.884 94.4866 43.0076C95.1028 43.0793 95.7017 43.2582 96.256 43.5364C97.5434 44.1922 98.5149 45.3344 98.9564 46.7104C99.398 48.0853 99.2715 49.5796 98.6066 50.8618L92.1542 63.5034C92.8078 62.2112 93.956 61.2388 95.3385 60.807C96.0999 60.5437 96.9153 60.4718 97.7114 60.5982C98.4576 60.6914 99.1761 60.9435 99.8166 61.3373C102.266 62.9391 103.089 66.1451 101.714 68.7289L83.2755 104.801L83.2619 104.813L81.9029 107.477C81.9029 107.477 77.4411 116.178 69.365 118.4C68.8324 118.56 68.3492 118.853 67.9599 119.25C67.664 119.526 67.4206 119.852 67.2418 120.214L66.6128 121.439C64.0666 124.708 56.7985 132.326 55.26 131.539L36.4553 110.654C34.9676 109.896 34.4344 106.838 34.8236 104.804C34.8881 104.437 35.0014 104.08 35.1613 103.743L35.4619 103.155C36.795 100.572 37.0223 97.5587 36.0922 94.8054C34.5253 90.1652 32.3994 82.4666 32.974 76.1673C33.8686 66.4315 35.5292 54.3474 33.9485 49.476C33.905 49.3533 33.8728 49.227 33.8531 49.0985C35.1654 48.7958 36.5424 48.9632 37.7441 49.5721C40.9694 51.2304 41.7974 58.4636 42.5477 64.9605C42.7682 67.0448 43.2384 69.0952 43.9478 71.0677C44.3643 72.2273 45.3444 73.0926 46.5469 73.3613C47.7481 73.6299 49.0038 73.2644 49.874 72.3926C51.5086 70.7175 52.8626 68.7904 53.8833 66.6841L54.8711 64.7459L69.5619 36.0008C69.7931 35.558 70.078 35.1463 70.4095 34.774L70.4231 34.7618C71.6221 33.4812 73.3687 32.8645 75.1062 33.1072C75.724 33.1719 76.324 33.352 76.8762 33.6366C79.5518 35.0069 80.6148 38.2837 79.252 40.9639L82.4701 34.6744L82.5562 34.4997C82.7875 34.0569 83.0718 33.6446 83.4039 33.2729L83.4175 33.2607C84.6165 31.9801 86.3626 31.3628 88.1005 31.6061C88.7186 31.6661 89.3198 31.8452 89.87 32.1349C91.1544 32.7899 92.1255 33.9292 92.569 35.3012C93.0125 36.6732 92.892 38.1655 92.2336 39.4486Z"
        fill="#63BBF4"
      />
      <path
        d="M128.021 66.0249C130.031 68.2577 129.851 71.6968 127.619 73.7067L122.229 78.56C123.301 77.5948 124.713 77.0958 126.153 77.173C126.962 77.209 127.751 77.4354 128.455 77.8332C129.006 78.1171 129.499 78.4991 129.911 78.9626C131.921 81.1948 131.741 84.634 129.508 86.6444L118.958 96.1434C120.03 95.1787 121.442 94.6797 122.882 94.7576C123.691 94.7935 124.48 95.0193 125.184 95.4171C125.85 95.7688 126.433 96.2589 126.893 96.8548C128.612 99.2275 128.227 102.521 126.008 104.434L93.6698 133.552C93.6698 133.552 86.4076 140.091 78.0666 139.281C77.0994 139.211 76.1463 139.546 75.4374 140.209L71.3006 143.934C69.8102 145.268 67.5228 145.148 66.1794 143.666L46.7682 122.107C45.7047 120.925 45.5354 119.188 46.351 117.822C46.5332 117.509 46.7648 117.226 47.0366 116.986L47.5356 116.537C49.6978 114.594 50.9847 111.861 51.1035 108.956C51.2952 104.075 52.059 96.1165 54.8469 90.4344C59.1578 81.6734 64.7439 68.9094 65.0123 63.7882C65.019 63.6604 65.0393 63.5205 65.046 63.3927C65.5626 58.6824 70.463 59.0033 72.8283 61.6302C75.2547 64.325 73.711 73.4491 72.0949 79.7838C71.5667 81.8118 71.2724 83.8951 71.2178 85.9903C71.1979 87.2222 71.8078 88.3796 72.8353 89.0593C73.8628 89.7402 75.1664 89.8497 76.2927 89.3504C78.4164 88.3674 80.3674 87.0475 82.0695 85.4424L107.67 62.3913C109.376 60.8398 111.88 60.5479 113.897 61.6645C114.447 61.9478 114.941 62.3304 115.352 62.7933C117.362 65.0261 117.182 68.4652 114.949 70.4757L120.34 65.6223C122.045 64.072 124.548 63.7795 126.566 64.896C127.117 65.1794 127.61 65.5619 128.021 66.0249Z"
        fill="#1C92E1"
      />
      <path
        d="M123.979 69.6641C125.989 71.8969 125.809 75.3366 123.576 77.3464L118.187 82.1992C119.259 81.234 120.671 80.7356 122.111 80.8128C122.919 80.8487 123.708 81.0752 124.413 81.473C124.964 81.7563 125.457 82.1389 125.869 82.6024C127.878 84.8346 127.698 88.2737 125.466 90.2836L114.916 99.7832C115.988 98.8179 117.4 98.3195 118.84 98.3974C119.649 98.4333 120.437 98.6591 121.142 99.0569C121.808 99.408 122.391 99.8987 122.851 100.494C124.569 102.867 124.185 106.161 121.966 108.074L93.6698 133.552C93.6698 133.552 86.4077 140.09 78.0666 139.281C77.0995 139.211 76.1463 139.546 75.4375 140.209L71.3006 143.934C69.8102 145.268 67.5228 145.148 66.1794 143.665L46.7682 122.107C45.7048 120.925 45.5355 119.188 46.351 117.822C46.5332 117.509 46.7649 117.226 47.0366 116.986L47.5356 116.537C49.6979 114.594 50.9848 111.861 51.1035 108.956C51.2953 104.075 52.0591 96.1164 54.8469 90.4343C59.1578 81.6733 64.7439 68.9093 65.0123 63.7881C65.019 63.6603 65.0393 63.5204 65.046 63.3926C66.4847 63.5268 67.8195 64.1967 68.7858 65.27C71.2122 67.9648 69.6686 77.0889 68.0531 83.423C67.5242 85.4516 67.2305 87.5343 67.176 89.6295C67.1561 90.8614 67.766 92.0188 68.7929 92.6991C69.8209 93.3795 71.124 93.4895 72.2509 92.9896C74.374 92.0072 76.325 90.6872 78.0276 89.0816L103.628 66.0305C105.333 64.4796 107.837 64.1877 109.854 65.3042C110.405 65.587 110.898 65.9702 111.31 66.4331C113.32 68.6659 113.14 72.105 110.908 74.1149L116.297 69.2621C118.003 67.7118 120.506 67.4187 122.523 68.5358C123.074 68.8192 123.567 69.2017 123.979 69.6641Z"
        fill="#63BBF4"
      />
      <path
        d="M92.5717 13.2335C91.7095 12.7288 90.6013 13.0163 90.0937 13.8765L88.8252 16.0362C88.4632 16.5955 88.4365 17.3075 88.7555 17.8926C89.0751 18.477 89.6891 18.8389 90.3557 18.8362C91.0217 18.8329 91.6323 18.4641 91.9463 17.8764L93.2149 15.7167C93.4594 15.3023 93.5282 14.8081 93.408 14.3423C93.2879 13.8764 92.9867 13.4774 92.5717 13.2335Z"
        fill="#09619B"
      />
      <path
        d="M83.0292 9.69972C82.5483 9.70155 82.088 9.89487 81.7498 10.2362C81.411 10.5781 81.2217 11.0401 81.2241 11.5204L81.2349 13.9722C81.2386 14.6201 81.5864 15.2172 82.1484 15.5387C82.711 15.8597 83.4023 15.8571 83.9618 15.5309C84.5214 15.2047 84.8643 14.6044 84.8618 13.9566L84.8504 11.5053C84.8486 11.0245 84.6552 10.5642 84.3133 10.2254C83.9726 9.88668 83.51 9.69788 83.0292 9.69972Z"
        fill="#09619B"
      />
      <path
        d="M72.9549 16.3974L74.2382 18.4863C74.7619 19.3371 75.8752 19.6035 76.727 19.0834C76.8217 19.0261 76.9103 18.9608 76.9918 18.8863C77.6419 18.2998 77.7796 17.3326 77.3197 16.5874L76.0339 14.5007C75.5085 13.648 74.3911 13.3832 73.5384 13.9086C72.6857 14.4351 72.4209 15.5525 72.9469 16.4046L72.9549 16.3974Z"
        fill="#09619B"
      />
      <path
        d="M145.464 74.559C146.129 73.9598 146.258 72.9651 145.767 72.2165C145.276 71.4679 144.312 71.1899 143.498 71.5616L141.217 72.5975C140.336 73.0309 139.96 74.0855 140.368 74.9778C140.775 75.8701 141.818 76.2768 142.722 75.8951L145.003 74.8592C145.171 74.7834 145.326 74.6817 145.464 74.559Z"
        fill="#09619B"
      />
      <path
        d="M142.374 81.6592C142.322 82.1372 142.462 82.6164 142.763 82.9919C143.063 83.3667 143.501 83.6071 143.979 83.6592L146.416 83.9267C147.06 83.9969 147.692 83.7186 148.075 83.1962C148.458 82.6739 148.534 81.9861 148.273 81.3936C148.012 80.801 147.454 80.3927 146.81 80.3214L144.374 80.0538C143.896 80.0017 143.416 80.1417 143.042 80.4424C142.666 80.7436 142.426 81.1818 142.374 81.6592Z"
        fill="#09619B"
      />
      <path
        d="M138.434 87.5994C137.828 88.3927 137.976 89.5277 138.767 90.1374L140.71 91.6362C141.403 92.1703 142.378 92.1332 143.029 91.5485C143.112 91.4752 143.186 91.3939 143.253 91.3057C143.859 90.513 143.71 89.378 142.919 88.7682L140.977 87.2701C140.183 86.659 139.045 86.8069 138.434 87.5994Z"
        fill="#09619B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M72.5139 145.282L76.6508 141.557C76.982 141.236 77.4305 141.066 77.8914 141.086C86.9241 141.963 94.5624 135.188 94.8831 134.899L127.221 105.782C130.151 103.241 130.636 98.8746 128.333 95.7532C127.445 94.5964 126.226 93.7374 124.838 93.2897L130.721 87.9921C132.648 86.2583 133.502 83.6284 132.964 81.0943C132.426 78.559 130.575 76.5038 128.111 75.7036L128.832 75.0543C131.809 72.3741 132.049 67.788 129.368 64.8114C126.689 61.8353 122.103 61.5944 119.126 64.2746L118.403 64.926C117.885 62.4735 116.133 60.4646 113.773 59.6192C111.413 58.7733 108.784 59.2126 106.826 60.7791C106.825 58.8179 106.015 56.9436 104.589 55.5971C103.164 54.2501 101.247 53.5496 99.2883 53.6591L102.877 46.6003C104.313 43.7724 103.746 40.3394 101.476 38.1235C100.956 37.6102 100.357 37.1833 99.7014 36.8604C98.5649 36.2766 97.2937 36.0072 96.0181 36.0803L96.4579 35.2141C97.2402 33.6989 97.4469 31.9525 97.0412 30.2963C96.3686 27.3179 93.8981 25.0827 90.8676 24.71C87.8364 24.3366 84.8979 25.9069 83.5227 28.6328L83.0878 29.4857C81.672 27.3105 79.2029 26.058 76.6114 26.2002C74.0204 26.343 71.703 27.8588 70.5344 30.1754L54.9424 60.8879C54.0123 62.8133 52.7826 64.5783 51.3008 66.1191C50.8563 66.583 50.1975 66.773 49.5751 66.6164C48.9943 66.4849 48.5222 66.0634 48.326 65.5007C47.6871 63.6524 47.2502 61.7395 47.0229 59.7965L46.999 59.5913L46.9986 59.5881C46.1531 52.5013 45.279 45.1759 41.2079 43.1063C38.7495 41.7962 35.7522 42.0446 33.5434 43.7419C31.7711 45.3533 31.2151 47.9112 32.1581 50.1133C33.3328 53.7375 32.4556 62.6367 31.6811 70.4853L31.6197 71.1111L31.6197 71.1117C31.457 72.7707 31.2964 74.408 31.1592 75.9811C30.567 82.4358 32.5975 90.0841 34.4005 95.365C35.1719 97.6469 34.9935 100.143 33.9064 102.292L32.9036 104.259C31.8926 106.259 32.2203 108.674 33.7266 110.332L64.8322 144.878C66.8426 147.111 70.2817 147.292 72.5139 145.282ZM114.015 64.0173C115.355 65.5056 115.234 67.7989 113.746 69.139L90.8398 89.7637C90.096 90.4335 90.0359 91.5798 90.7057 92.3237C91.376 93.0682 92.5224 93.1283 93.2662 92.4585L121.562 66.9805C123.051 65.6404 125.344 65.7605 126.684 67.2489C128.011 68.7418 127.892 71.0246 126.415 72.37L98.119 97.8481C97.3752 98.5178 97.3151 99.6642 97.9854 100.409C98.6552 101.153 99.8016 101.213 100.545 100.543L123.451 79.9182C124.94 78.5781 127.233 78.6977 128.573 80.186C129.913 81.6744 129.793 83.9677 128.304 85.3078L104.051 107.145C103.307 107.816 103.247 108.962 103.917 109.707C104.587 110.45 105.733 110.51 106.478 109.84L120.181 97.5015C120.931 96.8274 121.928 96.4959 122.932 96.5867C123.937 96.6775 124.857 97.183 125.474 97.9811C126.588 99.6063 126.295 101.809 124.795 103.087L92.4568 132.205C92.3908 132.264 85.7014 138.201 78.2368 137.478C76.7649 137.361 75.3111 137.862 74.2244 138.862L70.0875 142.587C69.3437 143.257 68.1973 143.197 67.527 142.452L48.1263 120.905C47.4565 120.162 47.5166 119.015 48.2605 118.345L48.7595 117.896C51.2793 115.623 52.7806 112.432 52.926 109.041C53.095 104.763 53.7828 96.7634 56.4877 91.2509C58.1515 87.8743 66.4602 70.6854 66.8175 63.8781C66.8838 62.6592 67.2837 61.9138 68.009 61.6538C69.2945 61.3798 70.6265 61.8357 71.476 62.8387C72.6734 64.1685 72.6723 70.2664 70.3526 79.3522C69.7875 81.5105 69.4704 83.7271 69.407 85.9565C69.3642 87.7943 70.2619 89.5268 71.7879 90.5518C73.337 91.595 75.311 91.7755 77.0237 91.0319C79.3269 89.9666 81.4445 88.539 83.2945 86.803L108.895 63.7519C110.383 62.4124 112.673 62.5312 114.015 64.0173ZM37.1252 103.952L36.1476 105.886C35.8113 106.551 35.9196 107.355 36.4214 107.906L44.7114 117.113C44.9993 116.564 45.3796 116.07 45.8352 115.652L46.3342 115.203C48.1297 113.585 49.1991 111.313 49.3039 108.898C49.5244 103.323 50.3849 95.4604 53.2363 89.653C58.0266 79.9186 62.9658 68.1168 63.1978 63.6896C63.1288 61.2946 64.5695 59.114 66.7999 58.2383C69.4708 57.4562 72.3518 58.3053 74.1714 60.4118C77.397 63.9941 75.3647 74.3779 73.8721 80.253C73.3757 82.1429 73.0954 84.0828 73.0372 86.035C73.0184 86.6394 73.3135 87.2102 73.8185 87.5429C74.3429 87.8995 75.015 87.96 75.595 87.7024C77.5338 86.7943 79.3157 85.583 80.8731 84.1137L101.448 65.5878C101.468 65.4602 101.503 65.335 101.552 65.216L102.769 62.8273C103.73 61.0964 103.205 58.9179 101.56 57.8162C100.659 57.2623 99.5606 57.1319 98.5544 57.4582C97.655 57.7431 96.9067 58.3745 96.4737 59.2122L96.4538 59.2546L96.4471 59.2607L91.1159 69.7502C91.0144 69.9488 90.8781 70.1274 90.7122 70.2768C90.0632 70.8634 89.0879 70.9028 88.3929 70.3703C87.6991 69.838 87.484 68.8858 87.8822 68.1062L93.2201 57.623L93.2489 57.5657L99.6556 44.9676C100.379 43.5509 100.096 41.8282 98.955 40.7188C98.7019 40.4687 98.4107 40.2607 98.0929 40.1024C97.2271 39.6557 96.2181 39.5757 95.2924 39.881C94.3905 40.1682 93.6391 40.8023 93.2048 41.6434L93.1935 41.6681L93.1744 41.6853L82.335 63.0816C82.234 63.2809 82.0965 63.4605 81.93 63.6093C81.2815 64.1977 80.305 64.2382 79.6094 63.7063C78.9139 63.1745 78.6988 62.2211 79.0969 61.4415L89.9456 40.0257L89.9709 40.0029L89.982 39.9929L93.2396 33.5662C93.6277 32.8114 93.7274 31.941 93.5195 31.1185C93.292 30.0658 92.6019 29.1727 91.6412 28.6863C89.8516 27.7903 87.675 28.5049 86.7641 30.2867L83.4964 36.7269L76.5578 51.1867C76.1244 52.0896 75.0413 52.4694 74.1391 52.0355C73.2362 51.602 72.8563 50.519 73.2897 49.6161L80.2362 35.1391L80.2498 35.1269L80.2549 35.1078C80.8427 33.9509 80.7676 32.5688 80.06 31.4815C79.3512 30.3942 78.117 29.7676 76.8216 29.8373C75.5262 29.9069 74.3659 30.6624 73.7781 31.8193L58.1815 62.5316C57.0759 64.8092 55.6143 66.8959 53.8517 68.7141C53.1142 69.4194 52.1971 69.9079 51.2002 70.1254C52.1256 71.2053 53.1466 72.2003 54.2502 73.0986C55.0257 73.7316 55.1421 74.8743 54.5091 75.6498C53.876 76.4265 52.7339 76.5423 51.9572 75.9092C48.7995 73.5669 46.3597 70.3883 44.9134 66.7317L44.878 66.6218C44.1608 64.5513 43.6713 62.4088 43.4187 60.2317L43.3948 60.0265C42.7661 54.7537 41.9038 47.5346 39.5631 46.3441C38.4077 45.7158 37.0012 45.7749 35.9026 46.4972C35.3431 47.0009 35.2233 47.8403 35.6053 48.9852C37.0111 53.3461 36.134 62.243 35.2852 70.8488L35.2491 71.2151C35.0787 72.9481 34.9101 74.6629 34.765 76.3117C34.2121 82.4206 36.4496 90.1426 37.8347 94.1927C38.918 97.4089 38.6625 100.926 37.1252 103.952Z"
        fill="#09619B"
      />
      <path
        d="M98.3657 117.089L90.2807 124.368C89.5368 125.038 89.4767 126.184 90.1471 126.929C90.8168 127.673 91.9632 127.733 92.7071 127.063L100.792 119.783C101.536 119.114 101.596 117.967 100.926 117.223C100.256 116.479 99.1095 116.419 98.3657 117.089Z"
        fill="#09619B"
      />
      <path
        d="M84.9225 129.193C84.1467 129.708 83.2169 129.935 82.2917 129.837C81.3033 129.802 80.4692 130.567 80.4169 131.554C80.3657 132.542 81.1147 133.388 82.1014 133.457C83.9736 133.629 85.8397 133.077 87.3174 131.916C88.0441 131.259 88.1086 130.141 87.4631 129.406C86.8115 128.662 85.6886 128.569 84.9225 129.193Z"
        fill="#09619B"
      />
      <path
        d="M53.3609 118.589C52.6164 119.26 52.5563 120.406 53.2261 121.15L54.4396 122.498C55.1094 123.241 56.2557 123.301 57.0002 122.631C57.7441 121.961 57.8041 120.815 57.1344 120.071L55.9209 118.723C55.2511 117.98 54.1047 117.919 53.3609 118.589L53.3609 118.589Z"
        fill="#09619B"
      />
      <path
        d="M59.4244 125.323C58.6799 125.994 58.6198 127.14 59.2896 127.884L67.7823 137.316C68.4526 138.06 69.599 138.121 70.3434 137.45C71.0873 136.78 71.1474 135.634 70.477 134.89L61.9844 125.458C61.3146 124.714 60.1682 124.654 59.4244 125.323L59.4244 125.323Z"
        fill="#09619B"
      />
    </Svg>
  );
};

export default Hands;