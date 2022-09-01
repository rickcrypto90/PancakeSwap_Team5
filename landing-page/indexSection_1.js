// BUNNY ANIMATION

gsap.to(".bunny-img", { repeat: -1, yoyo: true, y: 7, x: 4, duration: 1.5, ease: "power1.inOut" })
document.querySelectorAll(".star").forEach((element, index) => {
    gsap.timeline({
        repeat: -1,
        yoyo: true,
        delay: index / 2
    })
        .to(
            element,
            {
                opacity: 1,
                duration: 1
            }
        )
})

// CLOSE PHISHING BUTTON
const closePhishing = document.querySelectorAll(".phishing-close");
localStorage.getItem("phishing-close") ? document.querySelector(".phishing-div").remove()
    :
    closePhishing.forEach(element=> {element.addEventListener("click", () => {
        document.querySelector(".phishing-div").remove();
        localStorage.setItem("phishing-close", true);
    })})
// TIMER LOTTERY
const second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;


let lottery = "Sep 06, 2022 00:00:00";
let countDown = new Date(lottery).getTime();
let x = setInterval(function () {

    let now = new Date().getTime(),
        distance = countDown - now;

    let hours = Math.floor((distance % (day)) / (hour) + ((distance / (day)) * 24)),
        minutes = Math.floor((distance % (hour)) / (minute)),
        seconds = Math.floor((distance % (minute)) / second);
    document.querySelector("#countdown").innerHTML = `${hours} h ${minutes} m  ${seconds} s`
    //do something later when date is reached
    //seconds
}, 0)
// DROPDOWN
let array = document.querySelectorAll(".nav-left-inner-links-outer-block-link");
array.forEach((element, index) => {
    
    element.addEventListener("mouseover", () => {
        document.querySelector(`.drop-${index}`).style.visibility = "visible"


    })
    element.addEventListener("mouseout", () => {
        document.querySelector(`.drop-${index}`).style.visibility = "hidden"


    })
    document.querySelector(`.drop-${index}`).addEventListener("mouseover", () => {
        document.querySelector(`.drop-${index}`).style.visibility = "visible"


    })
}

)
document.querySelector(".nav-right-languages-inner").addEventListener("mouseover", () => {
    document.querySelector(`.nav-right-languages-inner-dropdown`).style.opacity = "1"
    document.querySelector(`.nav-right-languages-inner-dropdown`).style.maxHeight = "200px"
    

    document.querySelector(`.nav-right-languages-inner-dropdown`).style.overflowY = "auto"

})
document.querySelector(".nav-right-languages-inner").addEventListener("mouseout", () => {
    document.querySelector(`.nav-right-languages-inner-dropdown`).style.opacity = "0"
    document.querySelector(`.nav-right-languages-inner-dropdown`).style.maxHeight = "0px"
    

})
let lotteryAmount = []
for(let i = 0; i < 6; i++) {
    let number = Math.floor(Math.random() *5)
    lotteryAmount.push(number)
}
document.querySelector('.lotteryamount').innerHTML = `Win ${parseInt(lotteryAmount.join("")).toLocaleString("it-IT")}$ in Lottery`

let connection = `
<div class="sc-de7e8801-0 sc-2382db41-3 kZEPZp hIAkVp snipcss-Sz9Q3 snip-div">
  <div class="sc-2382db41-0 iZtpYs snip-div">
    <div class="sc-de7e8801-1 sc-1080dffc-0 sc-2382db41-1 dUUCVU bHahRd kCFpxD snip-div">
      <h2 color="text" font-size="16px" class="sc-118b6623-0 sc-82ba446f-0 emDKWM fxrqCO snip-h2">
        Connect Wallet
      </h2>
    </div>
    <button class="sc-ee37452c-0 elea-dO sc-6498c20f-0 jodCDD" aria-label="Close the dialog" scale="md">
      <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 exdUOd">
        <path fill="currentColor" d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z">
        </path>
      </svg>
    </button>
  </div>
  <div class="sc-de7e8801-1 sc-1080dffc-0 sc-2382db41-2 cAfWiC bHahRd cLxufJ snip-div">
    <div class="sc-de7e8801-1 sc-7cd93fd2-0 djgcgT vFfcp snip-div">
      <div class="sc-de7e8801-1 sc-9f27ee41-0 dUUCVU hEooQz snip-div">
        <div class="sc-de7e8801-1 dUUCVU snip-div">
          <button class="sc-ee37452c-0 ksfaWt sc-c5fd6c38-0 bAGrii" id="wallet-connect-metamask" width="100%" scale="md">
            <svg viewBox="0 0 40 40" width="40px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 jLPtRd">
              <path d="M36.0112 3.33337L22.1207 13.6277L24.7012 7.56091L36.0112 3.33337Z" fill="#E17726">
              </path>
              <path d="M4.00261 3.33337L17.7558 13.7238L15.2989 7.56091L4.00261 3.33337Z" fill="#E27625">
              </path>
              <path d="M31.0149 27.2023L27.3227 32.8573L35.2287 35.0397L37.4797 27.3258L31.0149 27.2023Z" fill="#E27625">
              </path>
              <path d="M2.53386 27.3258L4.77116 35.0397L12.6772 32.8573L8.9987 27.2023L2.53386 27.3258Z" fill="#E27625">
              </path>
              <path d="M12.2518 17.6496L10.0419 20.9712L17.8793 21.3281L17.6048 12.8867L12.2518 17.6496Z" fill="#E27625">
              </path>
              <path d="M27.762 17.6494L22.3129 12.7905L22.1207 21.3279L29.9581 20.9711L27.762 17.6494Z" fill="#E27625">
              </path>
              <path d="M12.6772 32.8574L17.3989 30.5652L13.336 27.3809L12.6772 32.8574Z" fill="#E27625">
              </path>
              <path d="M22.6009 30.5652L27.3226 32.8574L26.6637 27.3809L22.6009 30.5652Z" fill="#E27625">
              </path>
              <path d="M27.3226 32.8575L22.6009 30.5653L22.9715 33.6399L22.9303 34.9301L27.3226 32.8575Z" fill="#D5BFB2">
              </path>
              <path d="M12.6772 32.8575L17.0694 34.9301L17.042 33.6399L17.3989 30.5653L12.6772 32.8575Z" fill="#D5BFB2">
              </path>
              <path d="M17.1518 25.3495L13.2262 24.1965L15.9988 22.92L17.1518 25.3495Z" fill="#233447">
              </path>
              <path d="M22.848 25.3495L24.001 22.92L26.801 24.1965L22.848 25.3495Z" fill="#233447">
              </path>
              <path d="M12.6773 32.8573L13.3635 27.2023L8.99876 27.3258L12.6773 32.8573Z" fill="#CC6228">
              </path>
              <path d="M26.6364 27.2023L27.3227 32.8573L31.0149 27.3258L26.6364 27.2023Z" fill="#CC6228">
              </path>
              <path d="M29.9581 20.9709L22.1207 21.3278L22.8482 25.3495L24.0011 22.92L26.8012 24.1965L29.9581 20.9709Z" fill="#CC6228">
              </path>
              <path d="M13.2263 24.1965L15.9989 22.92L17.1519 25.3495L17.8793 21.3278L10.0419 20.9709L13.2263 24.1965Z" fill="#CC6228">
              </path>
              <path d="M10.0419 20.9709L13.3361 27.3809L13.2263 24.1965L10.0419 20.9709Z" fill="#E27525">
              </path>
              <path d="M26.8011 24.1965L26.6638 27.3809L29.958 20.9709L26.8011 24.1965Z" fill="#E27525">
              </path>
              <path d="M17.8793 21.3278L17.1519 25.3494L18.0715 30.0985L18.2637 23.8396L17.8793 21.3278Z" fill="#E27525">
              </path>
              <path d="M22.1205 21.3278L21.7499 23.8258L21.9283 30.0985L22.848 25.3494L22.1205 21.3278Z" fill="#E27525">
              </path>
              <path d="M22.848 25.3496L21.9284 30.0987L22.601 30.5654L26.6638 27.381L26.8011 24.1967L22.848 25.3496Z" fill="#F5841F">
              </path>
              <path d="M13.2262 24.1967L13.336 27.381L17.3989 30.5654L18.0714 30.0987L17.1518 25.3496L13.2262 24.1967Z" fill="#F5841F">
              </path>
              <path d="M22.9303 34.93L22.9715 33.6398L22.6284 33.3378H17.3714L17.042 33.6398L17.0694 34.93L12.6772 32.8574L14.2145 34.1202L17.3302 36.2751H22.6696L25.7853 34.1202L27.3226 32.8574L22.9303 34.93Z" fill="#C0AC9D">
              </path>
              <path d="M22.601 30.5653L21.9284 30.0986H18.0715L17.3989 30.5653L17.0421 33.6399L17.3715 33.3379H22.6285L22.9716 33.6399L22.601 30.5653Z" fill="#161616">
              </path>
              <path d="M36.5875 14.3003L37.7542 8.61779L36.011 3.33337L22.6009 13.2846L27.7618 17.6493L35.0365 19.7768L36.6424 17.8964L35.9424 17.3886L37.0679 16.3728L36.2169 15.7003L37.3287 14.863L36.5875 14.3003Z" fill="#763E1A">
              </path>
              <path d="M2.24573 8.61779L3.42615 14.3003L2.67123 14.863L3.78302 15.7003L2.93202 16.3728L4.05753 17.3886L3.35752 17.8964L4.96343 19.7768L12.2518 17.6493L17.399 13.2846L4.00263 3.33337L2.24573 8.61779Z" fill="#763E1A">
              </path>
              <path d="M35.0365 19.777L27.7619 17.6495L29.958 20.9712L26.6638 27.3811L31.0149 27.3262H37.4797L35.0365 19.777Z" fill="#F5841F">
              </path>
              <path d="M12.2517 17.6495L4.96332 19.777L2.53386 27.3262H8.99869L13.336 27.3811L10.0419 20.9712L12.2517 17.6495Z" fill="#F5841F">
              </path>
              <path d="M22.1205 21.3276L22.6009 13.2843L24.701 7.56067H15.2988L17.3988 13.2843L17.8792 21.3276L18.0577 23.8531L18.0714 30.0984H21.9283L21.9421 23.8531L22.1205 21.3276Z" fill="#F5841F">
              </path>
            </svg>
            <div font-size="14px" color="text" class="sc-118b6623-0 fHiGVA snip-div">
              Metamask
            </div>
          </button>
        </div>
        <div class="sc-de7e8801-1 dUUCVU snip-div">
          <button class="sc-ee37452c-0 ksfaWt sc-c5fd6c38-0 bAGrii" id="wallet-connect-coinbase wallet" width="100%" scale="md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0, 0, 400,400" width="40px" color="text" class="sc-8a800401-0 jLPtRd">
              <g stroke="none" fill-rule="evenodd">
                <path d="M193.4 60.265C87.303 66.651 25.782 181.12 79.826 271.586c57.163 95.688 198.154 89.201 246.382-11.336C371.654 165.512 297.595 53.993 193.4 60.265m47.221 95.946c1.213.75 2.418 1.955 3.168 3.168l1.211 1.958v77.326l-1.211 1.958c-.75 1.213-1.955 2.418-3.168 3.168L238.663 245h-77.326l-1.958-1.211c-1.213-.75-2.418-1.955-3.168-3.168L155 238.663l-.119-37.831c-.08-25.344.018-38.306.297-39.267.685-2.365 2.559-4.562 4.876-5.717l2.127-1.06 38.241.106 38.241.106 1.958 1.211" fill="#fbfbfc">
                </path>
                <path d="M183.6.43C41.847 12.741-42.613 163.705 21.396 290.354c49.819 98.572 170.31 138.107 268.958 88.25 98.572-49.819 138.107-170.31 88.25-268.958C348.052 49.197 290.688 9.389 222 .97c-6.325-.775-31.6-1.13-38.4-.54M218 60.975c81.04 11.263 135.239 87.02 119.351 166.825-15.844 79.589-97.673 129.334-175.893 106.929-74.141-21.237-117.409-99.181-96.187-173.271C81.09 106.232 129.39 66.081 186.8 60.433c5.76-.567 25.716-.22 31.2.542m-57.4 94.781c-1.92.838-3.855 2.682-4.648 4.427-.974 2.145-1.175 76.834-.213 79.13.828 1.974 2.657 3.923 4.444 4.735 2.145.974 76.834 1.175 79.13.213 1.974-.828 3.923-2.657 4.735-4.444.974-2.145 1.175-76.834.213-79.13-.828-1.974-2.657-3.923-4.444-4.735-2.115-.96-77.043-1.146-79.217-.196" fill="#0454fc">
                </path>
                <path d="M181.5 155.1c10.175.059 26.825.059 37 0 10.175-.06 1.85-.108-18.5-.108s-28.675.048-18.5.108M154.992 200c0 20.35.048 28.675.108 18.5.059-10.175.059-26.825 0-37-.06-10.175-.108-1.85-.108 18.5m90 0c0 20.35.048 28.675.108 18.5.059-10.175.059-26.825 0-37-.06-10.175-.108-1.85-.108 18.5M181.5 245.1c10.175.059 26.825.059 37 0 10.175-.06 1.85-.108-18.5-.108s-28.675.048-18.5.108" fill="#5286fc">
                </path>
                <path d="M192.7 60.282a5.661 5.661 0 001.8 0c.495-.095.09-.173-.9-.173s-1.395.078-.9.173m12.8 0a5.661 5.661 0 001.8 0c.495-.095.09-.173-.9-.173s-1.395.078-.9.173M60.109 193.6c0 .99.078 1.395.173.9a5.661 5.661 0 000-1.8c-.095-.495-.173-.09-.173.9m279.6 0c0 .99.078 1.395.173.9a5.661 5.661 0 000-1.8c-.095-.495-.173-.09-.173.9m-279.6 12.8c0 .99.078 1.395.173.9a5.661 5.661 0 000-1.8c-.095-.495-.173-.09-.173.9m279.6 0c0 .99.078 1.395.173.9a5.661 5.661 0 000-1.8c-.095-.495-.173-.09-.173.9m-238.926 92.5c1.658 1.766 2.017 2.084 2.017 1.783 0-.064-.855-.919-1.9-1.9L99 297l1.783 1.9m198.017.1c-.972.99-1.677 1.8-1.567 1.8.11 0 .995-.81 1.967-1.8.972-.99 1.677-1.8 1.567-1.8-.11 0-.995.81-1.967 1.8m-106.1 40.882a5.661 5.661 0 001.8 0c.495-.095.09-.173-.9-.173s-1.395.078-.9.173m12.8 0a5.661 5.661 0 001.8 0c.495-.095.09-.173-.9-.173s-1.395.078-.9.173" fill="#84acfc">
                </path>
                <path d="M100.786 101.1l-2.186 2.3 2.3-2.186c2.137-2.032 2.483-2.414 2.186-2.414-.062 0-1.097 1.035-2.3 2.3M298.8 101c1.195 1.21 2.263 2.2 2.373 2.2.11 0-.778-.99-1.973-2.2-1.195-1.21-2.263-2.2-2.373-2.2-.11 0 .778.99 1.973 2.2" fill="#7cacfc">
                </path>
              </g>
            </svg>
            <div font-size="14px" color="text" class="sc-118b6623-0 fHiGVA snip-div">
              Coinbase Wallet
            </div>
          </button>
        </div>
        <div class="sc-de7e8801-1 dUUCVU snip-div">
          <button class="sc-ee37452c-0 ksfaWt sc-c5fd6c38-0 bAGrii" id="wallet-connect-walletconnect" width="100%" scale="md">
            <svg viewBox="0 0 40 40" width="40px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 jLPtRd">
              <path d="M8.68096 12.4756C14.9323 6.39698 25.0677 6.39698 31.3191 12.4756L32.0714 13.2071C32.384 13.511 32.384 14.0038 32.0714 14.3077L29.4978 16.8103C29.3415 16.9622 29.0881 16.9622 28.9318 16.8103L27.8965 15.8036C23.5354 11.563 16.4647 11.563 12.1036 15.8036L10.9948 16.8817C10.8385 17.0336 10.5851 17.0336 10.4288 16.8817L7.85517 14.3791C7.54261 14.0752 7.54261 13.5824 7.85517 13.2785L8.68096 12.4756ZM36.6417 17.6511L38.9322 19.8783C39.2448 20.1823 39.2448 20.675 38.9322 20.979L28.6039 31.022C28.2913 31.3259 27.7846 31.3259 27.472 31.022C27.472 31.022 27.472 31.022 27.472 31.022L20.1416 23.8942C20.0634 23.8182 19.9367 23.8182 19.8586 23.8942C19.8586 23.8942 19.8586 23.8942 19.8586 23.8942L12.5283 31.022C12.2157 31.3259 11.709 31.3259 11.3964 31.022C11.3964 31.022 11.3964 31.022 11.3964 31.022L1.06775 20.9788C0.755186 20.6749 0.755186 20.1821 1.06775 19.8782L3.35833 17.6509C3.6709 17.347 4.17767 17.347 4.49024 17.6509L11.8208 24.7789C11.8989 24.8549 12.0256 24.8549 12.1038 24.7789C12.1038 24.7789 12.1038 24.7789 12.1038 24.7789L19.4339 17.6509C19.7465 17.347 20.2533 17.347 20.5658 17.6509C20.5658 17.6509 20.5658 17.6509 20.5658 17.6509L27.8964 24.7789C27.9745 24.8549 28.1012 24.8549 28.1794 24.7789L35.5098 17.6511C35.8223 17.3471 36.3291 17.3471 36.6417 17.6511Z" fill="#3389FB">
              </path>
            </svg>
            <div font-size="14px" color="text" class="sc-118b6623-0 fHiGVA snip-div">
              WalletConnect
            </div>
          </button>
        </div>
        <button class="sc-ee37452c-0 ksfaWt sc-c5fd6c38-0 bAGrii" width="100%" scale="md">
          <svg viewBox="0 0 24 24" width="40px" color="textSubtle" xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 eYBtsC">
            <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z">
            </path>
          </svg>
          <div font-size="14px" color="text" class="sc-118b6623-0 fHiGVA snip-div">
            More
          </div>
        </button>
      </div>
    </div>
    <div class="sc-de7e8801-1 izRJVO snip-div">
      <p color="textSubtle" font-size="16px" class="sc-118b6623-0 gHpos snip-p">
        Haven’t got a crypto wallet yet?
      </p>
      <a class="sc-ee37452c-0 dAAOan snip-a" href="https://docs.pancakeswap.finance/get-started/connection-guide" width="100%" target="_blank" rel="noreferrer noopener" scale="md">
        Learn How to Connect
      </a>
    </div>
  </div>
</div>


`
let setting = `<div class="sc-de7e8801-0 sc-2382db41-3 kZEPZp hIAkVp" draggable="false" style="max-width: 420px; user-select: none; touch-action: pan-x;">
<div class="sc-2382db41-0 eHwgEU">
  <div class="sc-de7e8801-1 sc-1080dffc-0 sc-2382db41-1 dUUCVU bHahRd kCFpxD">
    <h2 color="text" font-size="16px" class="sc-118b6623-0 sc-82ba446f-0 emDKWM fxrqCO">Settings</h2>
  </div>
  <button class="sc-ee37452c-0 elea-dO sc-6498c20f-0 jodCDD" aria-label="Close the dialog" scale="md">
    <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 exdUOd">
      <path fill="currentColor" d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"></path>
    </svg>
  </button>
</div>
<div class="sc-de7e8801-1 sc-1080dffc-0 sc-2382db41-2 izRJVO bHahRd cLxufJ">
  <div class="sc-de7e8801-1 sc-1080dffc-0 sc-6fa1b10a-0 dUUCVU bHahRd eJMZsd">
    <div class="sc-de7e8801-1 sc-1080dffc-0 jAfYRQ gcGTlB">
      <div font-size="18px" color="secondary" class="sc-118b6623-0 dnmBKn">Global</div>
      <div class="sc-de7e8801-1 sc-1080dffc-0 gBIRXf bQofKN">
        <div color="text" font-size="16px" class="sc-118b6623-0 bXycjW">Dark mode</div>
        <div scale="md" class="sc-4f954c25-2 dLafqe">
          <input scale="md" type="checkbox" class="sc-4f954c25-1 kikPQT" checked="">
          <div scale="md" class="sc-4f954c25-0 bqyozG">
            <div height="100%" class="sc-de7e8801-1 sc-1080dffc-0 cnObvC hJzGid">
              <svg viewBox="0 0 24 24" color="secondary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 bSdZTl">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z"></path>
              </svg>
            </div>
          </div>
          <div width="100%" height="100%" class="sc-de7e8801-1 sc-1080dffc-0 heggQB igTJWs">
            <svg viewBox="0 0 24 24" color="backgroundAlt" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 iahEnC">
              <path d="M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z"></path>
              <path d="M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z"></path>
              <path d="M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z"></path>
              <path d="M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z"></path>
              <path d="M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z"></path>
              <path d="M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path>
              <path d="M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z"></path>
              <path d="M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z"></path>
            </svg>
            <svg viewBox="0 0 24 24" color="backgroundAlt" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 iahEnC">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="sc-de7e8801-1 sc-1080dffc-0 gBIRXf bBjjPN">
        <div class="sc-de7e8801-1 sc-1080dffc-0 dUUCVU cdKJAR">
          <div color="text" font-size="16px" class="sc-118b6623-0 bXycjW">Subgraph Health Indicator</div>
          <div class="sc-de7e8801-1 kfpxoh">
            <div class="sc-33f7e757-0 DmODg">
              <svg viewBox="0 0 24 24" color="textSubtle" width="16px" xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 bmlywH">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div scale="md" class="sc-4f954c25-2 enaAag">
          <input scale="md" id="toggle-subgraph-health-button" type="checkbox" class="sc-4f954c25-1 kikPQT">
          <div scale="md" class="sc-4f954c25-0 bqyozG"></div>
        </div>
      </div>
      <div class="sc-de7e8801-1 sc-1080dffc-0 dUUCVU gcGTlB">
        <div class="sc-de7e8801-1 sc-1080dffc-0 bqKGfi cdKJAR">
          <div color="text" font-size="16px" class="sc-118b6623-0 bXycjW">Default Transaction Speed (GWEI)</div>
          <div class="sc-de7e8801-1 kfpxoh">
            <div class="sc-33f7e757-0 DmODg">
              <svg viewBox="0 0 24 24" color="textSubtle" width="16px" xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 bmlywH">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="sc-de7e8801-1 sc-1080dffc-0 dUUCVU bTfSja">
          <button class="sc-ee37452c-0 bPhvhB" scale="sm">Standard (5)</button>
          <button class="sc-ee37452c-0 cnIgEn" scale="sm">Fast (6)</button>
          <button class="sc-ee37452c-0 bmPNCL" scale="sm">Instant (7)</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>`;

(function wallet(){document.querySelector(".connect-wallet").addEventListener("click", first)
function first(e){
    document.querySelector(".settings").innerHTML= connection
    document.querySelector(".settings").style.visibility="visible"
    document.querySelector(".nav-fixed-small").style.visibility="hidden"
    document.querySelector(".nav-fixed-small").setAttribute.visibility="hidden"
    
    e.stopImmediatePropagation();
    this.removeEventListener("click", first);
    document.onclick = hide;
}
function hide(){
    document.querySelector(".settings").style.visibility="hidden"
    document.querySelector(".nav-fixed-small").style.visibility="visible"
    document.querySelector(".connect-wallet").addEventListener("click", first)
}})();


(function settings(){document.querySelector(".nav-right-settings").addEventListener("click", first)
function first(e){
    document.querySelector(".settings").innerHTML= setting
    document.querySelector(".settings").style.visibility="visible"
    document.querySelector(".nav-fixed-small").style.visibility="hidden"
    document.querySelector(".nav-fixed-small").setAttribute.visibility="hidden"
    
    e.stopImmediatePropagation();
    this.removeEventListener("click", first);
    document.onclick = hide;
}
function hide(){
    document.querySelector(".settings").style.visibility="hidden"
    document.querySelector(".nav-fixed-small").style.visibility="visible"
    document.querySelector(".nav-right-settings").addEventListener("click", first)
}})()
;
