<template>
  <div>
    <section class="pb-20">
      <nav class="flex justify-between items-center py-8 px-4 xl:px-10">
        <a class="text-lg font-semibold" href="#">
          <img class="h-20 animate-bounce hover:animate-none" src="zeus-assets/logo/iredi_logo.png" alt="" />
        </a>
        <div class="lg:hidden">
          <button
            class="navbar-burger flex items-center p-3 hover:bg-gray-50 rounded"
          >
            <svg
              class="block h-4 w-4"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul
          class="hidden lg:flex lg:ml-auto lg:mr-12 lg:items-center lg:w-auto lg:space-x-12"
        >
          <li><a class="inline-block py-3 px-8 text-sm leading-normal font-medium  text-white bg-orange-400 hover:bg-blue-500 rounded-full transition duration-200" href="#Who">Qui sommes-nous ?</a></li>
          <li><a class="inline-block py-3 px-8 text-sm leading-normal font-medium  text-white bg-orange-400 hover:bg-blue-500 rounded-full duration-200" href="#Services">Nos services</a></li>
          <li><a class="inline-block py-3 px-8 text-sm leading-normal font-medium  text-white bg-orange-400 hover:bg-blue-500 rounded-full duration-200" href="#Adresse">Nous contactez</a></li>
        </ul>
        <div class="hidden lg:block">
         
        </div>
      </nav>
      <div class="container px-4 mx-auto pt-12">
        <div class="flex flex-wrap items-center -mx-4">
          <div class="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <span class="font-semibold text-lg text-blue-400"
              >Quoi de neuf</span
            >
            <h2 class="mt-4 mb-4 lg:mb-2 text-5xl lg:text-5xl font-semibold">
              L'Institut de Recherche en Économie du Développement et en
              Informatique
            </h2>
            <div class="max-w-lg mb-6 lg:mb-6">
              <p class="text-xl text-gray-500">
                lance la première édition de formation de vacances accélérée en
                initiation de informatique et du bureautique à partir du 16 juin
                2022
              </p>
            </div>
            <div class="flex flex-wrap">
              <a
                class="inline-block px-6 py-4 mb-3 mr-4 text-sm font-medium leading-normal bg-orange-400 hover:bg-orange-500 text-white rounded transition duration-200"
                href="#"
                >Lire la suite</a
              >
            </div>
          </div>
          <div class="relative w-full md:w-1/2 px-4">
            <img
              class="hidden lg:block lg:absolute top-0 right-0 z-10 lg:mt-28"
              src="zeus-assets/icons/dots/yellow-dot-right-shield.svg"
              alt=""
            />
            <img
              class="relative"
              src="zeus-assets/images/z-picture.png"
              alt=""
            />
            <img
              class="hidden lg:block lg:absolute bottom-0 lg:left-0 lg:ml-6 lg:mb-20"
              src="zeus-assets/icons/dots/blue-dot-left-bars.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50"
      >
        <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav
          class="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto"
        >
          <div class="flex items-center mb-8">
            <a class="mr-auto text-lg font-semibold leading-none" href="#">
              <img
                class="h-7"
                src="zeus-assets/logo/logo-zeus-red.svg"
                alt=""
                width="auto"
              />
            </a>
            <button class="navbar-close">
              <svg
                class="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewbox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li class="mb-1">
                <a
                  class="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                  href="#"
                  >About</a
                >
              </li>
              <li class="mb-1">
                <a
                  class="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                  href="#"
                  >Company</a
                >
              </li>
              <li class="mb-1">
                <a
                  class="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                  href="#"
                  >Services</a
                >
              </li>
              <li class="mb-1">
                <a
                  class="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                  href="#"
                  >Testimonials</a
                >
              </li>
            </ul>
          </div>
          <div class="mt-auto">
            <div class="pt-6">
              <a
                class="block py-3 text-center text-sm leading-normal bg-red-50 hover:bg-red-100 text-red-300 font-semibold rounded transition duration-200"
                href="#"
                >Contact Us</a
              >
            </div>
            <p class="mt-6 mb-4 text-sm text-center text-gray-500">
              <span>© 2021 All rights reserved.</span>
            </p>
          </div>
        </nav>
      </div>
    </section>

    <section id="Who" class="relative py-20">
      <img
        class="hidden lg:block absolute top-0 left-0 mt-20"
        src="zeus-assets/icons/dots/blue-dot-left-bars.svg"
        alt=""
      />
      <img
        class="hidden lg:block absolute top-0 right-0 mt-52"
        src="zeus-assets/icons/dots/yellow-dot-right-shield.svg"
        alt=""
      />
      <div class="container px-5 mx-auto">
        <div class="max-w-3xl mx-auto mb-12 lg:mb-20 text-center">
          <span class="text-lg text-blue-400 font-semibold"
            >Qui sommes nous ?</span
          >
          <h2 class="animate-bounce mt-8 mb-10 text-4xl font-semibold font-heading">IREDI</h2>
          <p class="text-xl text-gray-500">
            Institut de Recherche en Economie de Développement et en
            Informatique. Nous mettons à la disposition de la population des
            d'outils de collecte de données,d'analyse,de traitement et de prise
            de décision. L’institut rassemble une équipe de jeunes expérimentés
            et talentueux issus des domaines variés.
          </p>
        </div>
        <div class="flex flex-wrap -m-3">
          <div class="w-full lg:w-1/2 p-3">
            <div class="p-6 border rounded-xl">
              <div class="flex flex-wrap items-center -mx-5">
                <div class="w-full md:w-1/3 px-5 mb-4 lg:mb-0">
                  <img
                    class="w-full md:w-40 h-52 object-cover rounded-xl"
                    src="https://images.unsplash.com/photo-1544717305-f9c88f2897bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                    alt=""
                  />
                </div>
                <div class="w-full md:w-2/3 px-5">
                  <h3 class="text-2xl font-semibold font-heading mb-1">
                    A. S. Durand LOKOSSOU
                  </h3>
                  <p class="mb-6 text-gray-500">CEO &amp; Founder</p>
                  <p class="text-gray-500">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 p-3">
            <div class="p-6 border rounded-xl">
              <div class="flex flex-wrap items-center -mx-5">
                <div class="w-full md:w-1/3 px-5 mb-4 lg:mb-0">
                  <img
                    class="w-full md:w-40 h-52 object-cover rounded-xl"
                    src="zeus-assets/images/profile/SONON_FIDELE.png"
                    alt=""
                  />
                </div>
                <div class="w-full md:w-2/3 px-5">
                  <h3 class="text-2xl font-semibold font-heading mb-1">
                    Fidèle SONON
                  </h3>
                  <p class="mb-6 text-gray-500">CEO &amp; Founder</p>
                  <p class="text-gray-500">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 p-3">
            <div class="p-6 border rounded-xl">
              <div class="flex flex-wrap items-center -mx-5">
                <div class="w-full md:w-1/3 px-5 mb-4 lg:mb-0">
                  <img
                    class="w-full md:w-40 h-52 object-cover rounded-xl"
                    src="zeus-assets/images/profile/LOKOSSOU_M_F_D.png"
                    alt=""
                  />
                </div>
                <div class="w-full md:w-2/3 px-5">
                  <h3 class="text-2xl font-semibold font-heading mb-1">
                    Mahussi F.D.L
                  </h3>
                  <p class="mb-6 text-gray-500">
                    Responsable &amp; Projet, Développement et BI
                  </p>
                  <p class="text-gray-500">
                    Master BI, 5 ans d'expériances, Franck coordornne les
                    projets de de conception et de développement d'applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 p-3">
            <div class="p-6 border rounded-xl">
              <div class="flex flex-wrap items-center -mx-5">
                <div class="w-full md:w-1/3 px-5 mb-4 lg:mb-0">
                  <img
                    class="w-full md:w-40 h-52 object-cover rounded-xl"
                    src="https://images.unsplash.com/photo-1544717301-9cdcb1f5940f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                    alt=""
                  />
                </div>
                <div class="w-full md:w-2/3 px-5">
                  <h3 class="text-2xl font-semibold font-heading mb-1">
                    Isabelle K. LOKOSSOU
                  </h3>
                  <p class="mb-6 text-gray-500">CEO &amp; Founder</p>
                  <p class="text-gray-500">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="Services" class="py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto mb-12 lg:mb-6 text-center">
          <span class="text-lg text-blue-400 font-semibold"
            >Quelles sont nos services ?</span
          >
        </div>
        <div class="flex flex-wrap -mx-4">
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-12 lg:mb-20">
            <div class="flex">
              <span
                width="20"
                height="20"
                viewbox="0 0 20 20"
                class="flex-shrink-0 flex items-center justify-center w-12 h-12 mr-6 bg-blue-400 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </span>
              <div>
                <h3 class="mb-4 text-2xl font-semibold font-heading">
                  Développement d'applications
                </h3>

                <p class="text-base text-gray-500 leading-loose">
                  Spécialisé dans le développement d'applications web,mobile et
                  desktop, nous disposons des solutions prêtes à être déploiées:
                </p>
                <div class="flex p-4 border-b">
                  <svg
                    class="mr-4 mt-1"
                    width="20"
                    height="20"
                    viewbox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                      fill="#45C1FF"
                    ></path>
                  </svg>
                  <h3 class="font-semibold font-heading">Best Bill</h3>
                </div>
                <div class="flex p-4 border-b">
                  <svg
                    class="mr-4 mt-1"
                    width="20"
                    height="20"
                    viewbox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                      fill="#45C1FF"
                    ></path>
                  </svg>
                  <h3 class="font-semibold font-heading">E-School</h3>
                </div>
                <div class="flex p-4">
                  <svg
                    class="mr-4 mt-1"
                    width="20"
                    height="20"
                    viewbox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                      fill="#45C1FF"
                    ></path>
                  </svg>
                  <h3 class="font-semibold font-heading">REVIS IMMO</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-12 lg:mb-20">
            <div class="flex">
              <span
                class="flex-shrink-0 flex items-center justify-center w-12 h-12 mr-6 bg-red-400 rounded-full"
              >
                <svg
                  width="20"
                  height="20"
                  viewbox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4235 7.4478V5.3008C13.4235 2.7878 11.3855 0.7498 8.87249 0.7498C6.35949 0.7388 4.31349 2.7668 4.30249 5.2808V5.3008V7.4478"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.6832 19.2496H5.04224C2.94824 19.2496 1.25024 17.5526 1.25024 15.4576V11.1686C1.25024 9.07359 2.94824 7.37659 5.04224 7.37659H12.6832C14.7772 7.37659 16.4752 9.07359 16.4752 11.1686V15.4576C16.4752 17.5526 14.7772 19.2496 12.6832 19.2496Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8.86304 12.2028V14.4238"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
              <div>
                <h3 class="mb-4 text-2xl font-semibold font-heading">
                  Business Intelligence
                </h3>
                <p class="text-base text-gray-500 leading-loose">
                  5 ans d'expertise en Business Intelligence (BI), IREDI vous
                  accompagne dans la mise en œuvre de vos projets de Business
                  Intelligence. Transformez et organisez les données de votre
                  entreprise en informations pertinentes.
                </p>
                <div class="flex p-4 border-b">
                  <svg
                    class="mr-4 mt-1"
                    width="20"
                    height="20"
                    viewbox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                      fill="#45C1FF"
                    ></path>
                  </svg>
                  <h3 class="font-semibold font-heading">
                    ETL et flux de données
                  </h3>
                </div>
                <div class="flex p-4 border-b">
                  <svg
                    class="mr-4 mt-1"
                    width="20"
                    height="20"
                    viewbox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                      fill="#45C1FF"
                    ></path>
                  </svg>
                  <h3 class="font-semibold font-heading">
                    Modelisation de base de donnée
                  </h3>
                </div>
                <div class="flex p-4">
                  <svg
                    class="mr-4 mt-1"
                    width="20"
                    height="20"
                    viewbox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                      fill="#45C1FF"
                    ></path>
                  </svg>
                  <h3 class="font-semibold font-heading">
                    Datawarehouse & Datamart
                  </h3>
                </div>

                <div class="flex p-4">
                  <svg
                    class="mr-4 mt-1"
                    width="20"
                    height="20"
                    viewbox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                      fill="#45C1FF"
                    ></path>
                  </svg>
                  <h3 class="font-semibold font-heading">
                    Tableaux de bord (TB)
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-12 lg:mb-20">
            <div class="flex">
              <span
                class="flex-shrink-0 flex items-center justify-center w-12 h-12 mr-6 bg-teal-400 rounded-full"
              >
                <svg
                  width="18"
                  height="21"
                  viewbox="0 0 18 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.98457 19.606C8.98457 19.606 16.6566 17.283 16.6566 10.879C16.6566 4.474 16.9346 3.974 16.3196 3.358C15.7036 2.742 9.99057 0.75 8.98457 0.75C7.97857 0.75 2.26557 2.742 1.65057 3.358C1.03457 3.974 1.31257 4.474 1.31257 10.879C1.31257 17.283 8.98457 19.606 8.98457 19.606Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M6.38599 9.87463L8.27799 11.7696L12.176 7.86963"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
              <div>
                <h3 class="mb-4 text-2xl font-semibold font-heading">
                  Securité Informatique
                </h3>
                <p class="text-base text-gray-500 leading-loose">
                  IREDI est l’entreprise de référence pour la sécurisation de
                  vos données et de vos postes de travail. De nombreuses
                  entreprises nous font déjà confiance et sont pleinement
                  satisfaites des outils mis en œuvre pour protéger leur
                  société.Assurer la sécurité de vos données, c'est vous
                  garantire:
                </p>
                <div class="flex p-4 border-b">
                  <svg
                    class="mr-4 mt-1"
                    width="20"
                    height="20"
                    viewbox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                      fill="#45C1FF"
                    ></path>
                  </svg>
                  <h3 class="font-semibold font-heading">La confidentialité</h3>
                </div>

                <div class="flex p-4 border-b">
                  <svg
                    class="mr-4 mt-1"
                    width="20"
                    height="20"
                    viewbox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                      fill="#45C1FF"
                    ></path>
                  </svg>
                  <h3 class="font-semibold font-heading">
                    L' intégrité des données et
                  </h3>
                </div>
                <div class="flex p-4 border-b">
                  <svg
                    class="mr-4 mt-1"
                    width="20"
                    height="20"
                    viewbox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                      fill="#45C1FF"
                    ></path>
                  </svg>
                  <h3 class="font-semibold font-heading">
                    La disponibilité des données
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-12 lg:mb-20">
            <div class="flex">
              <span
                class="flex-shrink-0 flex items-center justify-center w-12 h-12 mr-6 bg-blue-400 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
              </span>
              <div>
                <h3 class="mb-4 text-2xl font-semibold font-heading">Data</h3>
                <p class="text-base text-gray-500 leading-loose">
                  Fort de son expertise dans la conception, la gestion et la
                  conduite d'opérations de collecte de données à grande échelle,
                  IREDI propose des services de production de données de haute
                  qualité. expérience couvre le domaine des enquêtes auprès des
                  ménages et d'autres collectes de données. Doté d'une solide
                  expertise dans les méthodes et outils avancés de collecte de
                  données, l'institut est également doté d'équipements à la fine
                  pointe de la technologie pour mettre en œuvre divers types de
                  projets de collecte de données.
                </p>
              </div>
            </div>
          </div>

          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-6 lg:mb-0">
            <div class="flex">
              <span
                class="flex-shrink-0 flex items-center justify-center w-12 h-12 mr-6 bg-orange-600 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke="white"
                    stroke-linejoin="round"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </span>
              <div>
                <h3 class="mb-4 text-2xl font-semibold font-heading">
                  Data analytics
                </h3>
                <p class="text-base text-gray-500 leading-loose">
                  Dans le cadre de sa mission d'accompagnement de ses
                  partenaires dans leurs processus décisionnels data-driven,
                  IREDI propose une large gamme de services de traitement,
                  d'analyse et de visualisation de données. Notre expertise
                  comprend le traitement et la visualisation des données d'une
                  part et la maîtrise des méthodes d'analyse statistique et
                  économétrique approfondies d'autre part.
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-6 lg:mb-0">
            <div class="flex">
              <span
                class="flex-shrink-0 flex items-center justify-center w-12 h-12 mr-6 bg-yellow-400 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                  stock="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
                  />
                </svg>
              </span>
              <div>
                <h3 class="mb-4 text-2xl font-semibold font-heading">
                  Recherche
                </h3>
                <p class="text-base text-gray-500 leading-loose">
                  L'Institut initie et mène des projets de recherche en
                  collaboration avec son réseau de chercheurs affiliés et de
                  centres de recherche partenaires qui apportent des réponses
                  innovantes aux problématiques des pays en développement. Les
                  questions de recherche que nous traitons relèvent des domaines
                  de l'économie du développement et en informatique. De plus,
                  nous rendons nos principaux résultats de recherche accessibles
                  au public pour stimuler le débat public.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="Consumers" class="py-2">
      <div class="container px-4 mx-auto">
        <div class="max-w-3xl mx-auto mb-12 lg:mb-6 text-center">
          <span class="text-lg text-blue-400 font-semibold"
            >Ils nous font confiance</span
          >
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="w-full md:w-1/3 lg:w-1/6 p-4">
            <div class="bg-gray-50 rounded-xl py-10">
              <img
                class="h-20 w-20 mx-auto"
                src="zeus-assets/logo/logo_namur.png"
                alt="logo Université de NAMUR"
              />
            </div>
          </div>
          <div class="w-full md:w-1/3 lg:w-1/6 p-4">
            <div class="bg-gray-50 rounded-xl py-12">
              <img
                class="h-6 mx-auto"
                src="zeus-assets/logo/dropbox-gray.svg"
                alt=""
              />
            </div>
          </div>
          <div class="w-full md:w-1/3 lg:w-1/6 p-4">
            <div class="bg-gray-50 rounded-xl py-12">
              <img
                class="h-6 mx-auto"
                src="zeus-assets/logo/spotify-gray.svg"
                alt=""
              />
            </div>
          </div>
          <div class="w-full md:w-1/3 lg:w-1/6 p-4">
            <div class="bg-gray-50 rounded-xl py-12">
              <img
                class="h-6 mx-auto"
                src="zeus-assets/logo/amazon-gray.svg"
                alt=""
              />
            </div>
          </div>
          <div class="w-full md:w-1/3 lg:w-1/6 p-4">
            <div class="bg-gray-50 rounded-xl py-12">
              <img
                class="h-6 mx-auto"
                src="zeus-assets/logo/netflix-gray.svg"
                alt=""
              />
            </div>
          </div>
          <div class="w-full md:w-1/3 lg:w-1/6 p-4">
            <div class="bg-gray-50 rounded-xl py-12">
              <img
                class="h-6 mx-auto"
                src="zeus-assets/logo/stripe-gray.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>

 

    <section id="Adresse" class="py-2">
      <div class="container px-4 mx-auto mb-12 md:mb-24">
        <div class="flex flex-wrap items-center -m-4">
          <div class="w-full md:w-1/3 px-4 text-center p-4">
            <svg
              class="mb-8 mx-auto"
              width="48"
              height="48"
              viewbox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="47"
                height="47"
                rx="23.5"
                fill="white"
                stroke="#DEE4E9"
              ></rect>
              <path
                d="M29.5 22C29.5 26.5 24 31.5 24 31.5C24 31.5 18.5 26.5 18.5 22C18.5 20.5413 19.0795 19.1424 20.1109 18.1109C21.1424 17.0795 22.5413 16.5 24 16.5C25.4587 16.5 26.8576 17.0795 27.8891 18.1109C28.9205 19.1424 29.5 20.5413 29.5 22V22Z"
                stroke="#838EA4"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M24 24.5C25.3807 24.5 26.5 23.3807 26.5 22C26.5 20.6193 25.3807 19.5 24 19.5C22.6193 19.5 21.5 20.6193 21.5 22C21.5 23.3807 22.6193 24.5 24 24.5Z"
                stroke="#838EA4"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <p class="text-gray-500">1686, ATROKPOCODJI</p>
            <p class="text-gray-500">Rue en face du séminaire</p>
          </div>
          <div class="w-full md:w-1/3 px-4 text-center p-4">
            <svg
              class="mb-8 mx-auto"
              width="48"
              height="48"
              viewbox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="47"
                height="47"
                rx="23.5"
                fill="white"
                stroke="#DEE4E9"
              ></rect>
              <path
                d="M30.5 30.5H17.5C16.948 30.5 16.5 30.052 16.5 29.5V18.5C16.5 17.948 16.948 17.5 17.5 17.5H30.5C31.052 17.5 31.5 17.948 31.5 18.5V29.5C31.5 30.052 31.052 30.5 30.5 30.5Z"
                stroke="#838EA4"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M18.5 20.5L24 25L29.5 20.5"
                stroke="#838EA4"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <p class="text-gray-500">contact@iredimon.org</p>
          </div>
          <div class="w-full md:w-1/3 px-4 text-center p-4">
            <svg
              class="mb-8 mx-auto"
              width="48"
              height="48"
              viewbox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="47"
                height="47"
                rx="23.5"
                fill="white"
                stroke="#DEE4E9"
              ></rect>
              <path
                d="M26.514 25.764L25.292 27.292C23.3984 26.1794 21.8205 24.6015 20.708 22.708L22.236 21.486C22.4151 21.3426 22.5417 21.144 22.596 20.9211C22.6502 20.6982 22.6292 20.4636 22.536 20.254L21.143 17.117C21.0431 16.8922 20.8666 16.7101 20.645 16.6034C20.4234 16.4966 20.1711 16.472 19.933 16.534L17.281 17.221C17.0336 17.2858 16.8186 17.439 16.6765 17.6517C16.5345 17.8643 16.4752 18.1216 16.51 18.375C16.9753 21.6887 18.5068 24.7609 20.8729 27.127C23.2391 29.4932 26.3112 31.0247 29.625 31.49C29.8782 31.5249 30.1355 31.4657 30.348 31.3236C30.5605 31.1815 30.7135 30.9664 30.778 30.719L31.466 28.068C31.5279 27.8299 31.5033 27.5776 31.3966 27.356C31.2898 27.1343 31.1078 26.9579 30.883 26.858L27.746 25.465C27.5364 25.372 27.302 25.351 27.0792 25.405C26.8564 25.4591 26.6577 25.5853 26.514 25.764V25.764Z"
                stroke="#838EA4"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <p class="text-gray-500">+229 96 86 72 86</p>
          </div>
        </div>
      </div>
      <div
        class="h-112 w-full bg-no-repeat bg-cover"
        style="background-image: url('zeus-assets/images/map-long.png')"
      ></div>
      <div class="container px-4 mx-auto">
        <div
          class="max-w-3xl -mt-64 lg:-mt-32 mx-auto p-6 lg:py-20 lg:px-20 bg-white rounded-xl text-center"
        >
          <span class="text-xl text-blue-400 font-semibold"
            >Nous conatctez</span
          >
          <h2 class="mt-8 mb-14 text-4xl font-semibold font-heading">
           Formulaire de contact
          </h2>
          <form action="#">
            <div class="relative flex flex-wrap mb-6">
              <input
                class="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                type="text"
                placeholder="John Des"
              />
              <span
                class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs"
                >Nom</span
              >
            </div>
            <div class="relative flex flex-wrap mb-6">
              <input
                class="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                type="email"
                placeholder="e.g johndoes@iredimonde.com"
              />
              <span
                class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs"
                >Adresse mail</span
              >
            </div>
            <div class="relative flex flex-wrap mb-6">
              <textarea
                class="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded resize-none"
                id="1"
                type="message"
                cols="30"
                rows="10"
                placeholder="Message..."
              ></textarea>
              <span
                class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs"
                >Message</span
              >
            </div>
            <button
              class="w-full inline-block px-6 py-4 text-sm text-white bg-red-400 hover:bg-red-300 rounded transition duration-200"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
   <section class="pt-0">
        <div class="relative">
        <img
          class="relative w-full h-112 object-cover"
          src="zeus-assets/images/map.png"
          alt=""
        />
      </div>
    </section>
    

    <section class="py-12 lg:py-20">
      <div class="container mx-auto px-4 mb-12 md:mb-20">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
            <a
              class="inline-block mb-5 text-gray-900 text-lg font-semibold"
              href="#"
            >
              <img class="h-20" src="zeus-assets/logo/iredi_logo.png" alt="" />
            </a>
            <p class="mb-6 max-w-sm text-base text-gray-500">
              L'Institut de Recherche en Économie du Développement et en Informatique
            </p>
            <div class="flex">
              <a
                class="flex justify-center items-center w-10 h-10 mr-4 bg-gray-50 rounded-full"
                href="#"
              >
                <svg
                  class="text-gray-500"
                  width="7"
                  height="12"
                  viewbox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.0898 11.8182V6.51068H5.90537L6.17776 4.44164H4.0898V3.12086C4.0898 2.52201 4.25864 2.1139 5.13515 2.1139L6.25125 2.11345V0.26283C6.05824 0.238228 5.39569 0.181824 4.62456 0.181824C3.01431 0.181824 1.9119 1.14588 1.9119 2.91594V4.44164H0.0908203V6.51068H1.9119V11.8182H4.0898Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                class="flex justify-center items-center w-10 h-10 mr-4 bg-gray-50 rounded-full"
                href="#"
              >
                <svg
                  class="text-gray-500"
                  width="13"
                  height="11"
                  viewbox="0 0 13 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.5455 2.09728C12.0904 2.29892 11.6022 2.43566 11.0892 2.49671C11.613 2.18304 12.014 1.6855 12.204 1.09447C11.7127 1.38496 11.1703 1.59589 10.5924 1.71023C10.1296 1.21655 9.47138 0.909058 8.74128 0.909058C7.34059 0.909058 6.20489 2.04475 6.20489 3.44467C6.20489 3.64322 6.2273 3.83714 6.27057 4.02257C4.16298 3.91671 2.29411 2.90696 1.0433 1.37259C0.824652 1.74653 0.700269 2.18225 0.700269 2.64736C0.700269 3.52734 1.14837 4.30379 1.82825 4.75805C1.41259 4.74415 1.02166 4.62981 0.67942 4.43975V4.47142C0.67942 5.69983 1.55399 6.72504 2.71362 6.95837C2.50116 7.01554 2.27712 7.04722 2.04534 7.04722C1.88156 7.04722 1.72318 7.031 1.56788 7.00009C1.89081 8.00831 2.8272 8.74148 3.93663 8.76158C3.06902 9.44146 1.97504 9.84552 0.786814 9.84552C0.582087 9.84552 0.38043 9.83316 0.181885 9.81076C1.30445 10.5316 2.63716 10.9519 4.06952 10.9519C8.73514 10.9519 11.2854 7.0874 11.2854 3.73595L11.2769 3.4076C11.7752 3.05219 12.2063 2.60564 12.5455 2.09728Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                class="flex justify-center items-center w-10 h-10 mr-4 bg-gray-50 rounded-full"
                href="#"
              >
                <svg
                  class="text-gray-500"
                  width="14"
                  height="14"
                  viewbox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.06713 0.454529H9.9328C11.9249 0.454529 13.5456 2.07519 13.5455 4.06715V9.93282C13.5455 11.9248 11.9249 13.5454 9.9328 13.5454H4.06713C2.07518 13.5454 0.45459 11.9249 0.45459 9.93282V4.06715C0.45459 2.07519 2.07518 0.454529 4.06713 0.454529ZM9.9329 12.3839C11.2845 12.3839 12.3841 11.2844 12.3841 9.93282H12.384V4.06714C12.384 2.71563 11.2844 1.61601 9.93282 1.61601H4.06715C2.71564 1.61601 1.61609 2.71563 1.61609 4.06714V9.93282C1.61609 11.2844 2.71564 12.384 4.06715 12.3839H9.9329ZM3.57148 7.00005C3.57148 5.10947 5.10951 3.5714 7.00005 3.5714C8.8906 3.5714 10.4286 5.10947 10.4286 7.00005C10.4286 8.89056 8.8906 10.4285 7.00005 10.4285C5.10951 10.4285 3.57148 8.89056 3.57148 7.00005ZM4.75203 6.99998C4.75203 8.23951 5.76054 9.24788 7.00004 9.24788C8.23955 9.24788 9.24806 8.23951 9.24806 6.99998C9.24806 5.76036 8.23963 4.75191 7.00004 4.75191C5.76046 4.75191 4.75203 5.76036 4.75203 6.99998Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                class="flex justify-center items-center w-10 h-10 bg-gray-50 rounded-full"
                href="#"
              >
                <svg
                  class="text-gray-500"
                  width="12"
                  height="12"
                  viewbox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8 0H1.2C0.54 0 0 0.54 0 1.2V10.8C0 11.46 0.54 12 1.2 12H10.8C11.46 12 12 11.46 12 10.8V1.2C12 0.54 11.46 0 10.8 0ZM3.6 10.2H1.8V4.8H3.6V10.2ZM2.7 3.78C2.1 3.78 1.62 3.3 1.62 2.7C1.62 2.1 2.1 1.62 2.7 1.62C3.3 1.62 3.78 2.1 3.78 2.7C3.78 3.3 3.3 3.78 2.7 3.78ZM10.2 10.2H8.4V7.02C8.4 6.54002 7.98 6.12 7.5 6.12C7.02 6.12 6.6 6.54002 6.6 7.02V10.2H4.8V4.8H6.6V5.52C6.9 5.04 7.56 4.68 8.1 4.68C9.24 4.68 10.2 5.64 10.2 6.78V10.2Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="w-full lg:w-2/3 px-4">
            <div class="flex flex-wrap justify-between -mx-4">
              <div class="w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
                <h3 class="mb-6 text-base font-medium">Company</h3>
                <ul class="text-sm">
                  <li class="mb-4">
                    <a class="text-gray-500 hover:text-gray-600" href="#"
                      >About Us</a
                    >
                  </li>
                  <li class="mb-4">
                    <a class="text-gray-500 hover:text-gray-600" href="#"
                      >Careers</a
                    >
                  </li>
                  <li class="mb-4">
                    <a class="text-gray-500 hover:text-gray-600" href="#"
                      >Press</a
                    >
                  </li>
                  <li>
                    <a class="text-gray-500 hover:text-gray-600" href="#"
                      >Blog</a
                    >
                  </li>
                </ul>
              </div>
              <div class="w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
                <h3 class="mb-6 text-base font-medium">Pages</h3>
                <ul class="text-sm">
                  <li class="mb-4">
                    <a class="text-gray-500 hover:text-gray-600" href="#"
                      >Login</a
                    >
                  </li>
                  <li class="mb-4">
                    <a class="text-gray-500 hover:text-gray-600" href="#"
                      >Register</a
                    >
                  </li>
                  <li class="mb-4">
                    <a class="text-gray-500 hover:text-gray-600" href="#"
                      >Add list</a
                    >
                  </li>
                  <li>
                    <a class="text-gray-500 hover:text-gray-600" href="#"
                      >Contact</a
                    >
                  </li>
                </ul>
              </div>
              <div class="w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
                <h3 class="mb-6 text-base font-medium">Legal</h3>
                <ul class="text-sm">
                  <li class="mb-4">
                    <a class="text-gray-500 hover:text-gray-600" href="#"
                      >Terms</a
                    >
                  </li>
                  <li class="mb-4">
                    <a class="text-gray-500 hover:text-gray-600" href="#"
                      >About Us</a
                    >
                  </li>
                  <li class="mb-4">
                    <a class="text-gray-500 hover:text-gray-600" href="#"
                      >Team</a
                    >
                  </li>
                  <li>
                    <a class="text-gray-500 hover:text-gray-600" href="#"
                      >Privacy</a
                    >
                  </li>
                </ul>
              </div>
              <div class="w-1/2 lg:w-1/4 px-4">
                <h3 class="mb-6 text-base font-medium">Resources</h3>
                <ul class="text-sm">
                  <li class="mb-4">
                    <a class="text-gray-500 hover:text-gray-600" href="#"
                      >Blog</a
                    >
                  </li>
                  <li class="mb-4">
                    <a class="text-gray-500 hover:text-gray-600" href="#"
                      >Service</a
                    >
                  </li>
                  <li class="mb-4">
                    <a class="text-gray-500 hover:text-gray-600" href="#"
                      >Product</a
                    >
                  </li>
                  <li>
                    <a class="text-gray-500 hover:text-gray-600" href="#"
                      >Pricing</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center text-sm text-gray-500 pt-8 px-4 border-t">
        All rights reserved © IREDI Corporation 2021
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
