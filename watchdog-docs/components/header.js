const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `

    <style>
        /* Dropdown Button */
        .dropbtn {
        background-color: #002d72;
        color: white;
        font-size: 5px;
        border: none;
        }

        /* The container <div> - needed to position the dropdown content */
        .dropdown {
          position: relative;
          display: inline-block;
        }

        /* Dropdown Content (Hidden by Default) */
        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #0041A5;
          color: white;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          z-index: 1;
        }

        /* Links inside the dropdown */
        .dropdown-content a {
          color: white;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
        }

        /* Change color of dropdown links on hover */
        .dropdown-content a:hover {
            background-color: dodgerblue;

}

        /* Show the dropdown menu on hover */
        .dropdown:hover .dropdown-content {display: block;}

        /* Change the background color of the dropdown button when the dropdown content is shown */
        .dropdown:hover .dropbtn {background-color: #0041A5 ;
        }

        /* Style the search box inside the navigation bar */
        .banner input[type=text] {
          float: right;
          padding: 6px;
          border: none;
          margin-top: 8px;
          margin-right: 16px;
          font-size: 17px;
        }

        header {
            text-align: left; 
            background-color: #002d72; 
            padding: 10px
        }

    </style>

class Header extends HTMLElement {
  constructor() {
    super();
  }
}

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(headerTemplate.content);
  }
}

    <header>
        <div class="dropdown">
            <button class="dropbtn"><img style="" alt="Menu" src="../images/Menu.svg" /></button>
            <div class="dropdown-content">
                <a href="../about/index.html">About Watchdog</a>
                <a href="../whats-new/index.html">What's New</a>
                <a href="../faq/index.html">Blackbook FAQ</a>
                <a href="../form-guides/index.html">Form Guides</a>
                <a href="../privacy/index.html">Watchdog Privacy Policy</a>
                <a href="../terms-conditions/index.html">Watchdog Terms & Conditions</a>
            </div>
        <a href="https://watchdog.grv.org.au/"><img style="padding-left: 10px" alt="Watchdog Logo" src="../images/watchdog_logo-white.svg" />
            </a>
        </div>
    </header>

customElements.define('header-component', Header);