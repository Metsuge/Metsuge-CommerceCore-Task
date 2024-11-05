import React from 'react';
import styles from "./Header.module.scss"

interface Props {
  rightPosition: number | undefined;
  leftPosition: number | undefined;
}
const Header = ({ rightPosition, leftPosition }: Props) => {
  if (leftPosition) {
    leftPosition = leftPosition - 25;
    // 25 is margin from overview component
  }

  return (
    <div className={styles.header}>
      <div className={styles.logo} style={{ marginLeft: rightPosition + 'px' }}>
        <svg width="187" height="40" viewBox="0 0 187 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.9454 17.828C29.4391 18.3364 29.0515 18.95 28.81 19.6249C28.5685 20.3 28.4792 21.0199 28.5482 21.7333L28.5242 21.7093C28.5952 22.5492 28.4817 23.3943 28.1917 24.1859C27.9017 24.9773 27.4422 25.6961 26.8453 26.2921C26.2482 26.888 25.5282 27.3468 24.7351 27.6361C23.9423 27.9256 23.0956 28.0389 22.2543 27.968L22.2784 27.992C21.272 27.8985 20.2613 28.1171 19.3839 28.618C18.5066 29.1189 17.8053 29.8777 17.3759 30.7911C16.9465 31.7044 16.8096 32.7276 16.984 33.7215C17.1586 34.7152 17.6358 35.6311 18.3508 36.3441C19.0658 37.0572 19.9837 37.5328 20.9794 37.706C21.9752 37.8793 23.0001 37.7417 23.9146 37.3123C24.8292 36.8827 25.5887 36.1821 26.0897 35.3059C26.5907 34.4296 26.8088 33.4205 26.7143 32.416L26.7397 32.44C26.6686 31.6003 26.782 30.7551 27.072 29.9635C27.362 29.172 27.8216 28.4532 28.4185 27.8572C29.0156 27.2613 29.7357 26.8025 30.5285 26.5132C31.3216 26.2237 32.1681 26.1104 33.0095 26.1813L32.9841 26.1573C33.8061 26.2311 34.6336 26.0965 35.3897 25.7661C36.1458 25.4357 36.8061 24.9201 37.3094 24.2672C37.8127 23.6143 38.1429 22.8449 38.269 22.0308C38.3952 21.2165 38.3135 20.3837 38.0314 19.6093C37.7493 18.8351 37.2759 18.1444 36.6552 17.6013C36.0345 17.0583 35.2865 16.6804 34.4805 16.5028C33.6746 16.3252 32.8367 16.3535 32.0446 16.5851C31.2525 16.8168 30.5319 17.2443 29.9494 17.828H29.9454Z" fill="black" />
          <path d="M20.0918 24.848L20.0664 24.824C20.7814 24.8959 21.5035 24.8083 22.1806 24.5675C22.8575 24.3267 23.4725 23.9388 23.9808 23.4317C24.4891 22.9247 24.8783 22.3111 25.1199 21.6355C25.3617 20.9599 25.45 20.2392 25.3785 19.5253L25.4039 19.5493C25.3329 18.7095 25.4464 17.8644 25.7362 17.0728C26.0262 16.2813 26.4858 15.5625 27.0828 14.9665C27.6798 14.3707 28.3999 13.9119 29.1928 13.6225C29.9858 13.333 30.8324 13.2198 31.6738 13.2907L31.6484 13.2667C32.6548 13.3611 33.6658 13.1432 34.5437 12.6428C35.4216 12.1425 36.1234 11.384 36.5535 10.4708C36.9836 9.55767 37.1211 8.53429 36.9472 7.54028C36.7733 6.54627 36.2964 5.63003 35.5815 4.91651C34.8668 4.203 33.9489 3.72695 32.9531 3.55332C31.9573 3.37968 30.9322 3.5169 30.0173 3.94626C29.1025 4.3756 28.3428 5.0762 27.8415 5.95248C27.3402 6.82875 27.1219 7.83804 27.2165 8.84268L27.1924 8.81735C27.2636 9.6572 27.1504 10.5025 26.8605 11.2941C26.5707 12.0857 26.111 12.8046 25.5141 13.4007C24.917 13.9965 24.1968 14.4553 23.4038 14.7447C22.6107 15.034 21.764 15.1471 20.9226 15.076L20.9466 15.1013C20.2316 15.0295 19.5094 15.1171 18.8325 15.3579C18.1555 15.5985 17.5406 15.9865 17.0322 16.4936C16.5238 17.0007 16.1347 17.6143 15.893 18.2899C15.6513 18.9655 15.563 19.6861 15.6345 20.4L15.6105 20.376C15.6813 21.2157 15.5676 22.0608 15.2776 22.8523C14.9875 23.6436 14.528 24.3624 13.9311 24.9583C13.3341 25.5541 12.6141 26.0128 11.8213 26.3024C11.0284 26.5919 10.1819 26.7053 9.34062 26.6347L9.36466 26.6587C8.35823 26.5643 7.34713 26.7821 6.46928 27.2825C5.59145 27.7829 4.8896 28.5413 4.45949 29.4545C4.02936 30.3677 3.89189 31.3911 4.06584 32.3851C4.23979 33.3791 4.71669 34.2953 5.43147 35.0088C6.14627 35.7224 7.06415 36.1984 8.05993 36.372C9.05572 36.5456 10.0809 36.4084 10.9957 35.9791C11.9105 35.5497 12.6703 34.8492 13.1716 33.9729C13.6729 33.0965 13.8911 32.0873 13.7966 31.0827L13.8219 31.1067C13.7509 30.2668 13.8644 29.4217 14.1544 28.6301C14.4442 27.8387 14.9039 27.1199 15.5008 26.5239C16.0979 25.928 16.8179 25.4692 17.6108 25.1799C18.4038 24.8904 19.2504 24.7771 20.0918 24.848Z" fill="black" />
          <path d="M11.1398 22.172C11.6461 21.6638 12.0337 21.0502 12.275 20.3751C12.5162 19.7 12.6052 18.98 12.5356 18.2667L12.561 18.2907C12.4899 17.4507 12.6034 16.6052 12.8935 15.8135C13.1837 15.0218 13.6435 14.3028 14.2408 13.7068C14.8381 13.1108 15.5585 12.6522 16.3518 12.3629C17.145 12.0736 17.992 11.9607 18.8335 12.032L18.8081 12.008C19.8142 12.1021 20.8249 11.8841 21.7024 11.3838C22.5798 10.8835 23.2812 10.1252 23.7112 9.21233C24.141 8.29945 24.2783 7.27645 24.1044 6.28281C23.9305 5.28917 23.4536 4.37327 22.7392 3.66002C22.0247 2.94677 21.107 2.47087 20.1117 2.29725C19.1163 2.12361 18.0914 2.2607 17.177 2.68979C16.2624 3.11889 15.5028 3.81911 15.0016 4.69498C14.5003 5.57085 14.2819 6.57973 14.3762 7.58402L14.3522 7.56002C14.4233 8.39982 14.3097 9.24498 14.0197 10.0365C13.7298 10.828 13.2703 11.5468 12.6733 12.1428C12.0763 12.7387 11.3562 13.1974 10.5632 13.4868C9.77031 13.7763 8.92366 13.8896 8.08236 13.8187L8.1064 13.8427C7.28436 13.7691 6.45701 13.9039 5.70102 14.2344C4.94503 14.565 4.28486 15.0807 3.78168 15.7338C3.2785 16.3867 2.94861 17.156 2.82254 17.9702C2.69649 18.7844 2.77836 19.6172 3.06055 20.3914C3.34275 21.1656 3.81617 21.8562 4.43691 22.3991C5.05766 22.9422 5.80566 23.3199 6.6116 23.4975C7.41753 23.675 8.25533 23.6466 9.04737 23.415C9.8394 23.1832 10.56 22.7558 11.1425 22.172H11.1398Z" fill="black" />
          <path d="M52.5161 8.87335H56.4832V28.144H52.5161V8.87335Z" fill="black" />
          <path d="M58.73 21.5453C58.7246 20.1605 59.1309 18.8051 59.8976 17.6509C60.6643 16.4968 61.7569 15.5957 63.0371 15.062C64.3172 14.5281 65.7272 14.3856 67.0885 14.6524C68.4499 14.9192 69.7013 15.5832 70.6843 16.5605C71.6672 17.5377 72.3375 18.7843 72.6103 20.1421C72.883 21.5 72.7458 22.9081 72.2162 24.1881C71.6866 25.468 70.7883 26.5624 69.6352 27.3323C68.482 28.1023 67.1259 28.5133 65.7385 28.5133C64.8177 28.5239 63.9039 28.3509 63.0507 28.0048C62.1974 27.6587 61.4219 27.1463 60.7694 26.4976C60.1168 25.8488 59.6004 25.0767 59.2503 24.2264C58.9001 23.3761 58.7232 22.4647 58.73 21.5453ZM68.78 21.5453C68.7634 20.9484 68.5709 20.3696 68.2267 19.8812C67.8824 19.3929 67.4015 19.0167 66.8442 18.7997C66.2868 18.5827 65.6779 18.5344 65.0933 18.6611C64.5086 18.7877 63.9743 19.0835 63.5572 19.5116C63.1402 19.9396 62.8586 20.4809 62.7481 21.0679C62.6375 21.6547 62.7026 22.2611 62.9354 22.8112C63.1682 23.3613 63.5583 23.8307 64.0567 24.1607C64.5554 24.4907 65.1404 24.6667 65.7385 24.6667C66.1482 24.6776 66.5557 24.6036 66.9355 24.4495C67.3151 24.2953 67.6586 24.0644 67.9443 23.7712C68.23 23.4779 68.4519 23.1287 68.5956 22.7456C68.7395 22.3625 68.8023 21.9539 68.78 21.5453Z" fill="black" />
          <path d="M88.5579 14.9454V27.4787C88.5579 31.9134 85.0931 33.788 81.5761 33.788C80.3379 33.8806 79.098 33.6308 77.9924 33.0664C76.887 32.5019 75.9585 31.6444 75.3089 30.588L78.6936 28.6347C78.9667 29.1854 79.4017 29.6396 79.9404 29.9368C80.4792 30.2339 81.0961 30.3598 81.7084 30.2974C82.0997 30.3515 82.4983 30.3171 82.8746 30.1967C83.2507 30.0763 83.595 29.873 83.882 29.6019C84.1689 29.3307 84.391 28.9987 84.5321 28.6302C84.673 28.2618 84.7291 27.8664 84.6963 27.4734V26.2667C84.2318 26.834 83.6406 27.2848 82.9699 27.5828C82.2993 27.8808 81.5681 28.0178 80.8348 27.9827C79.0901 27.9278 77.4353 27.1974 76.2206 25.9459C75.0059 24.6946 74.3267 23.0204 74.3267 21.278C74.3267 19.5356 75.0059 17.8615 76.2206 16.6102C77.4353 15.3587 79.0901 14.6283 80.8348 14.5734C81.5681 14.5383 82.2993 14.6752 82.9699 14.9732C83.6406 15.2712 84.2318 15.722 84.6963 16.2894V14.9427L88.5579 14.9454ZM84.6977 21.28C84.7244 20.6419 84.559 20.0103 84.2231 19.4667C83.8872 18.923 83.3959 18.4922 82.8126 18.2296C82.2293 17.967 81.5807 17.8847 80.9501 17.9932C80.3195 18.1018 79.7359 18.3962 79.2743 18.8387C78.8128 19.2811 78.4945 19.8512 78.3603 20.4758C78.2261 21.1003 78.2822 21.7507 78.5216 22.3431C78.7608 22.9355 79.1722 23.443 79.7028 23.8C80.2333 24.1571 80.8588 24.3475 81.4986 24.3467C81.9155 24.3758 82.3337 24.3174 82.7266 24.1752C83.1194 24.0331 83.478 23.8103 83.7794 23.5215C84.0807 23.2326 84.3182 22.8839 84.4764 22.4978C84.6345 22.1118 84.71 21.697 84.6977 21.28Z" fill="black" />
          <path d="M90.8045 21.5453C90.799 20.1605 91.2052 18.8051 91.9721 17.6509C92.7388 16.4968 93.8314 15.5957 95.1115 15.062C96.3917 14.5281 97.8016 14.3856 99.163 14.6524C100.524 14.9192 101.776 15.5832 102.759 16.5605C103.742 17.5377 104.412 18.7843 104.685 20.1421C104.957 21.5 104.82 22.9081 104.291 24.1881C103.761 25.468 102.863 26.5624 101.71 27.3323C100.556 28.1023 99.2004 28.5133 97.813 28.5133C96.8921 28.5239 95.9783 28.3509 95.1251 28.0048C94.2719 27.6587 93.4964 27.1463 92.8439 26.4976C92.1912 25.8488 91.6749 25.0767 91.3248 24.2264C90.9745 23.3761 90.7977 22.4647 90.8045 21.5453ZM100.854 21.5453C100.838 20.9484 100.645 20.3696 100.301 19.8812C99.9568 19.3929 99.476 19.0167 98.9187 18.7997C98.3613 18.5827 97.7522 18.5344 97.1677 18.6611C96.5831 18.7877 96.0488 19.0835 95.6316 19.5116C95.2146 19.9396 94.9331 20.4809 94.8225 21.0679C94.7119 21.6547 94.7771 22.2611 95.0099 22.8112C95.2427 23.3613 95.6327 23.8307 96.1312 24.1607C96.6298 24.4907 97.2147 24.6667 97.813 24.6667C98.2227 24.6776 98.6302 24.6036 99.0098 24.4495C99.3895 24.2953 99.7331 24.0644 100.019 23.7712C100.305 23.4779 100.526 23.1287 100.67 22.7456C100.814 22.3625 100.877 21.9539 100.854 21.5453Z" fill="black" />
          <path d="M106.672 11.408C106.672 10.9381 106.811 10.4787 107.073 10.088C107.334 9.69723 107.706 9.39268 108.141 9.21285C108.576 9.03301 109.054 8.98596 109.516 9.07764C109.978 9.16932 110.402 9.39561 110.735 9.72791C111.068 10.0602 111.294 10.4835 111.386 10.9445C111.478 11.4053 111.431 11.8831 111.251 12.3172C111.071 12.7514 110.766 13.1225 110.374 13.3836C109.983 13.6447 109.523 13.784 109.052 13.784C108.422 13.7777 107.821 13.5255 107.376 13.0812C106.931 12.6369 106.678 12.0362 106.672 11.408ZM107.072 14.9453H111.041V28.1453H107.067L107.072 14.9453Z" fill="black" />
          <path d="M128.17 21.5453C128.216 22.4177 128.088 23.2905 127.795 24.1136C127.502 24.9367 127.048 25.6937 126.461 26.3413C125.874 26.9888 125.164 27.5141 124.372 27.8869C123.581 28.2596 122.723 28.4725 121.849 28.5133C121.114 28.5533 120.379 28.4296 119.698 28.1511C119.017 27.8724 118.406 27.446 117.91 26.9027V33.424H113.943V14.9453H117.91V16.1853C118.406 15.6424 119.017 15.2163 119.698 14.938C120.38 14.6596 121.114 14.536 121.849 14.576C122.724 14.6167 123.581 14.8295 124.373 15.2023C125.165 15.5751 125.875 16.1004 126.462 16.7481C127.049 17.3959 127.503 18.1532 127.796 18.9765C128.089 19.7997 128.216 20.6728 128.17 21.5453ZM124.203 21.5453C124.187 20.9276 123.99 20.3281 123.634 19.8219C123.279 19.3157 122.782 18.9253 122.206 18.6997C121.63 18.474 121 18.4229 120.394 18.5531C119.789 18.6831 119.236 18.9884 118.804 19.4308C118.372 19.8733 118.08 20.4331 117.965 21.0404C117.85 21.6476 117.917 22.2751 118.157 22.8445C118.398 23.414 118.801 23.8999 119.317 24.2416C119.833 24.5832 120.438 24.7655 121.057 24.7653C121.482 24.7843 121.906 24.7132 122.302 24.5569C122.698 24.4008 123.056 24.1628 123.353 23.8588C123.65 23.5547 123.879 23.1915 124.025 22.7928C124.172 22.3941 124.232 21.9689 124.203 21.5453Z" fill="black" />
          <path d="M140.412 24.184C140.412 27.22 137.768 28.5133 134.912 28.5133C133.758 28.6176 132.6 28.3741 131.586 27.814C130.573 27.254 129.751 26.4033 129.226 25.372L132.663 23.4187C132.802 23.8953 133.101 24.3101 133.509 24.5935C133.917 24.8769 134.412 25.012 134.907 24.976C135.858 24.976 136.335 24.6853 136.335 24.1587C136.335 22.7053 129.829 23.472 129.829 18.9053C129.829 16.0267 132.262 14.576 135.013 14.576C136.046 14.5433 137.07 14.7881 137.977 15.2848C138.884 15.7816 139.641 16.512 140.168 17.4L136.784 19.2213C136.636 18.8756 136.388 18.5811 136.073 18.3745C135.758 18.168 135.389 18.0587 135.013 18.06C134.325 18.06 133.901 18.3267 133.901 18.7987C133.907 20.304 140.412 19.3 140.412 24.184Z" fill="black" />
          <path d="M154.903 14.9454V28.1454H150.936V26.904C150.477 27.4518 149.896 27.8834 149.239 28.1634C148.582 28.4434 147.869 28.5638 147.156 28.5147C144.484 28.5147 142.213 26.6147 142.213 23.048V14.9454H146.18V22.468C146.147 22.7824 146.183 23.1003 146.286 23.3994C146.387 23.6986 146.554 23.9719 146.774 24.2003C146.993 24.4287 147.258 24.6067 147.554 24.722C147.847 24.8374 148.164 24.8872 148.481 24.868C149.935 24.868 150.94 24.024 150.94 22.1494V14.9494L154.903 14.9454Z" fill="black" />
          <path d="M177.65 20.04V28.144H173.683V20.3826C173.683 19.0626 173.048 18.2186 171.779 18.2186C170.457 18.2186 169.716 19.1426 169.716 20.7V28.144H165.75V20.3826C165.75 19.0626 165.116 18.2186 163.845 18.2186C162.523 18.2186 161.783 19.1426 161.783 20.7V28.144H157.816V14.944H161.783V16.1573C162.194 15.619 162.734 15.1921 163.352 14.9157C163.972 14.6392 164.651 14.522 165.327 14.5746C166.005 14.5414 166.681 14.6845 167.289 14.9897C167.895 15.2948 168.412 15.7518 168.79 16.316C169.23 15.7257 169.812 15.2564 170.482 14.9518C171.153 14.6473 171.89 14.5176 172.625 14.5746C175.661 14.576 177.65 16.74 177.65 20.04Z" fill="black" />
          <path d="M181.005 14.864C182.631 14.864 183.949 13.5483 183.949 11.9254C183.949 10.3024 182.631 8.98669 181.005 8.98669C179.38 8.98669 178.061 10.3024 178.061 11.9254C178.061 13.5483 179.38 14.864 181.005 14.864Z" fill="black" />
        </svg>
      </div>
      <div className={styles.icon} style={{ left: leftPosition + 'px' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.53695 5.95049H5.00571C3.94763 5.95049 3.06935 6.76826 2.99386 7.82404L2.00609 21.6552C1.96632 22.2136 2.15995 22.7634 2.54146 23.1732C2.92355 23.5829 3.45778 23.8157 4.01794 23.8157H19.9837C20.5439 23.8157 21.0781 23.5829 21.4602 23.1732C21.8417 22.7634 22.0353 22.2136 21.9956 21.6552L21.0078 7.82404C20.9323 6.76826 20.054 5.95049 18.9959 5.95049H17.4757V5.66234C17.4757 2.6385 15.0247 0.1875 12.0008 0.1875C9.08764 0.1875 6.39517 2.50768 6.52599 5.66234C6.53002 5.758 6.53349 5.85425 6.53695 5.95049ZM17.4757 7.67938V12.0016C17.4757 12.4788 17.0884 12.8661 16.6112 12.8661C16.134 12.8661 15.7468 12.4788 15.7468 12.0016V7.67938H8.25489V12.0016C8.25489 12.4788 7.86761 12.8661 7.39044 12.8661C6.91326 12.8661 6.52599 12.4788 6.52599 12.0016C6.52599 12.0016 6.60091 9.9817 6.57613 7.67938H5.00571C4.85472 7.67938 4.7291 7.79637 4.71873 7.94678L3.73036 21.7779C3.72459 21.8581 3.75227 21.9364 3.80702 21.9952C3.86177 22.0534 3.93784 22.0869 4.01794 22.0869H19.9837C20.0638 22.0869 20.1399 22.0534 20.1946 21.9952C20.2494 21.9364 20.2771 21.8581 20.2713 21.7779L19.2829 7.94678C19.2726 7.79637 19.1469 7.67938 18.9959 7.67938H17.4757ZM15.7468 5.95049V5.66234C15.7468 3.59343 14.0697 1.9164 12.0008 1.9164C9.93192 1.9164 8.25489 3.59343 8.25489 5.66234V5.95049H15.7468Z" fill="#333333" />
        </svg>

      </div>
    </div>
  )
}

export default Header