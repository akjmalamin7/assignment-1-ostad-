(() => {
    const ADULT_AGE_THRESHOLD = 18;

    const cardItemsContainer = document.getElementById('portfolio');
    const inputField = document.getElementById('input');
    const socialNav = document.getElementById('social_icons');

    const numberRegex = /^\d+$/;

    let ageType = 'all';

    inputField.addEventListener('input', handleInput);
    /* portfolio card data */
    const cardData = [
        {
            id: 1,
            title: 'All Project',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            imgURL: "https://i.ibb.co/grN9Tvn/7.jpg",
            type: 'adult'
        },
        {
            id: 2,
            title: 'Teenage Project',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            imgURL: "https://i.ibb.co/PNCbTZs/1.jpg",
            type: 'teenage'
        },
        {
            id: 3,
            title: 'All Project',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            imgURL: "https://i.ibb.co/7VwkT1X/5.jpg",
            type: 'adult'
        },
        {
            id: 4,
            title: 'Teenage Project',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            imgURL: "https://i.ibb.co/PNCbTZs/1.jpg",
            type: 'teenage'
        },
        {
            id: 5,
            title: 'All Project',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            imgURL: "https://i.ibb.co/7VwkT1X/5.jpg",
            type: 'adult'
        }
    ]
    /* social icons */
    const socialIcons = [
        {
            icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 10.0391C16.5 13.2831 14.1199 15.9725 11.0129 16.4605V11.9306H12.5236L12.8113 10.0564H11.0129V8.84035C11.0129 8.3274 11.2643 7.82798 12.0692 7.82798H12.8865V6.23223C12.8865 6.23223 12.1445 6.10548 11.4354 6.10548C9.9545 6.10548 8.98708 7.00302 8.98708 8.62748V10.0559H7.34096V11.93H8.98708V16.46C5.88063 15.9714 3.5 13.2826 3.5 10.0391C3.5 6.44944 6.41038 3.53906 10 3.53906C13.5896 3.53906 16.5 6.4489 16.5 10.0391Z" fill="#616161"></path></svg>`,
            url: "https://facebook.com"
        },
        {
            icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.7375 4.12402H15.7319L11.3758 9.1014L16.5 15.8755H12.489L9.34513 11.768L5.75171 15.8755H3.75404L8.41238 10.5504L3.5 4.12402H7.61287L10.4518 7.87832L13.7375 4.12402ZM13.0371 14.6833H14.1416L7.01108 5.25394H5.82483L13.0371 14.6833Z" fill="#616161"></path></svg>`,
            url: 'https://twitter.com'
        },
        {
            icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 4.67108C11.7355 4.67108 11.9413 4.67758 12.6265 4.709C13.335 4.7415 14.0647 4.90292 14.5809 5.41913C15.102 5.94021 15.2585 6.66279 15.291 7.37346C15.3224 8.05867 15.3289 8.2645 15.3289 10C15.3289 11.7355 15.3224 11.9413 15.291 12.6265C15.259 13.3313 15.0938 14.0679 14.5809 14.5809C14.0598 15.102 13.3378 15.2585 12.6265 15.291C11.9413 15.3224 11.7355 15.3289 10 15.3289C8.2645 15.3289 8.05867 15.3224 7.37346 15.291C6.67417 15.259 5.92775 15.09 5.41913 14.5809C4.90075 14.0625 4.7415 13.3329 4.709 12.6265C4.67758 11.9413 4.67108 11.7355 4.67108 10C4.67108 8.2645 4.67758 8.05867 4.709 7.37346C4.74096 6.67146 4.90779 5.93046 5.41913 5.41913C5.93913 4.89913 6.66442 4.7415 7.37346 4.709C8.05867 4.67758 8.2645 4.67108 10 4.67108ZM10 3.5C8.23471 3.5 8.01317 3.50758 7.31983 3.539C6.31504 3.58504 5.31729 3.86454 4.59092 4.59092C3.86183 5.32 3.58504 6.31558 3.539 7.31983C3.50758 8.01317 3.5 8.23471 3.5 10C3.5 11.7653 3.50758 11.9868 3.539 12.6802C3.58504 13.6839 3.86562 14.6843 4.59092 15.4091C5.31946 16.1376 6.31667 16.415 7.31983 16.461C8.01317 16.4924 8.23471 16.5 10 16.5C11.7653 16.5 11.9868 16.4924 12.6802 16.461C13.6844 16.415 14.6833 16.1349 15.4091 15.4091C16.1387 14.6795 16.415 13.6844 16.461 12.6802C16.4924 11.9868 16.5 11.7653 16.5 10C16.5 8.23471 16.4924 8.01317 16.461 7.31983C16.415 6.31504 16.1349 5.31675 15.4091 4.59092C14.6816 3.86346 13.6817 3.5845 12.6802 3.539C11.9868 3.50758 11.7653 3.5 10 3.5Z" fill="#616161"></path><path d="M9.99998 6.66211C8.15669 6.66211 6.66223 8.15657 6.66223 9.99986C6.66223 11.8432 8.15669 13.3376 9.99998 13.3376C11.8433 13.3376 13.3377 11.8432 13.3377 9.99986C13.3377 8.15657 11.8433 6.66211 9.99998 6.66211ZM9.99998 12.1665C8.80344 12.1665 7.83332 11.1964 7.83332 9.99986C7.83332 8.80332 8.80344 7.83319 9.99998 7.83319C11.1965 7.83319 12.1666 8.80332 12.1666 9.99986C12.1666 11.1964 11.1965 12.1665 9.99998 12.1665Z" fill="#616161"></path><path d="M13.4699 7.31C13.9007 7.31 14.2499 6.96078 14.2499 6.53C14.2499 6.09922 13.9007 5.75 13.4699 5.75C13.0392 5.75 12.6899 6.09922 12.6899 6.53C12.6899 6.96078 13.0392 7.31 13.4699 7.31Z" fill="#616161"></path></svg>`,
            url: 'https://linkedin'
        },
        {
            icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2281 6.8509C16.0786 6.28811 15.6382 5.84448 15.0787 5.6939C14.0652 5.4209 10 5.4209 10 5.4209C10 5.4209 5.93479 5.4209 4.92079 5.6939C4.36179 5.84448 3.92142 6.28757 3.77192 6.8509C3.5 7.8714 3.5 10.0001 3.5 10.0001C3.5 10.0001 3.5 12.1289 3.77192 13.1494C3.92142 13.7122 4.36179 14.1558 4.92133 14.3064C5.93479 14.5794 10 14.5794 10 14.5794C10 14.5794 14.0652 14.5794 15.0792 14.3064C15.6382 14.1558 16.0786 13.7127 16.2286 13.1494C16.5 12.1289 16.5 10.0001 16.5 10.0001C16.5 10.0001 16.5 7.8714 16.2281 6.8509ZM8.67075 11.9334V8.06694L12.0681 10.0001L8.67075 11.9334Z" fill="#616161"></path></svg>`,
            url: 'https://youtube'
        }
    ]
    /* handle inputs */
    function handleInput(e) {
        if (numberRegex.test(e.target.value)) {
            const getInputValue = Number(e.target.value);

            if (getInputValue >= ADULT_AGE_THRESHOLD) {
                ageType = 'adult';
            } else if (ADULT_AGE_THRESHOLD >= getInputValue && getInputValue >= 0) {
                ageType = 'teenage';
            } else {
                ageType = 'all';
            }

            if (getInputValue < 0) {
                ageType = 'invalidData';
            }
        } else {
            ageType = 'invalidData';
        }

        if (e.target.value.length === 0) {
            ageType = 'all';
        }

        createPortfolioCard(ageType);
    }

    /* create portfolio card */
    function createPortfolioCard(types = 'all') {
        let cardItems = '';
        cardData.forEach((item, index) => {
            if (item.type === types || types === 'all') {
                cardItems += generateCardHTML(item)
            }

            if (types === 'invalidData') {
                cardItems =  generateErrorCardHTML();
            }
        });

        cardItemsContainer.innerHTML = cardItems;
    }

    /* generate Card html */
    function generateCardHTML(item) {
        return `
            <div class="col-6 col-md-4 col-lg-3 mb-4 adult_person">
                <a href="#" class="card border-0 d-block custom_card text-decoration-none">
                    <img class="d-block h-100 w-100" src=${item.imgURL} alt=${item.title}>
                    <div class="card_content">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                </a>
            </div>
        `;
    }
    /* generate error  card html */
    
    function generateErrorCardHTML() {
        return `
            <div class="alert alert-danger" role="alert">
                <h4 class="alert-heading">Invalid Input</h4>
                <p>Aww yeah, you successfully read this important alert message...</p>
                <hr>
                <p class="mb-0">Whenever you need to, be sure to use margin utilities...</p>
            </div>
        `;
    }
    /* create social nav */
    function renderSocialIcons(icons) {
        [...icons.children].forEach((item, index) => {
            item.children[0].innerHTML = socialIcons[index].icon;
            item.children[0].href = socialIcons[index].url;
        });
    }


    /* functions call */
    createPortfolioCard(ageType);
    renderSocialIcons(socialNav);
})()