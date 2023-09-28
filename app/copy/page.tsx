import React from 'react';

type Props = {};

const page = (props: Props) => {
  return (
  <>

<header class="fixed left-0 top-0 w-full z-9999 py-7 lg:py-0" :class="{ 'bg-dark/70 backdrop-blur-lg shadow !py-4 lg:!py-0 transition duration-100 before:absolute before:w-full before:h-[1px] before:bottom-0 before:left-0 before:features-row-border' : stickyMenu }" @scroll.window="stickyMenu = (window.scrollY > 0) ? true : false">
<div class="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 lg:flex items-center justify-between relative">
<div class="w-full lg:w-1/4 flex items-center justify-between">
<a href="index.html">
<img src="images/logo.svg" alt="Logo" />
</a>

<button class="lg:hidden block" @click="navigationOpen = !navigationOpen">
<span class="block relative cursor-pointer w-5.5 h-5.5">
<span class="du-block absolute right-0 w-full h-full">
<span class="block relative top-0 left-0 bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-[0]" :class="{ '!w-full delay-300': !navigationOpen }"></span>
<span class="block relative top-0 left-0 bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-150" :class="{ '!w-full delay-400': !navigationOpen }"></span>
<span class="block relative top-0 left-0 bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-200" :class="{ '!w-full delay-500': !navigationOpen }"></span>
</span>
<span class="du-block absolute right-0 w-full h-full rotate-45">
<span class="block bg-white rounded-sm ease-in-out duration-200 delay-300 absolute left-2.5 top-0 w-0.5 h-full" :class="{ '!h-0 delay-[0]': !navigationOpen }"></span>
<span class="block bg-white rounded-sm ease-in-out duration-200 delay-400 absolute left-0 top-2.5 w-full h-0.5" :class="{ '!h-0 dealy-200': !navigationOpen }"></span>
</span>
</span>
</button>

</div>
<div class="w-full lg:w-3/4 h-0 lg:h-auto invisible lg:visible lg:flex items-center justify-between" :class="{ '!visible bg-dark shadow-lgrelative !h-auto max-h-[400px] overflow-y-scroll rounded-md mt-4 p-7.5': navigationOpen }">
<nav>
<ul class="flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-2">
<li class="nav__menu lg:py-7" :class="{ 'lg:!py-4' : stickyMenu }">
<a href="/#home" class="relative text-white/80 text-sm py-1.5 px-4 border border-transparent hover:text-white hover:nav-gradient" :class="{'!text-white nav-gradient' :page === 'home'}">Home</a>
</li>
<li class="nav__menu lg:py-7" :class="{ 'lg:!py-4' : stickyMenu }">
<a href="/#features" class="relative text-white/80 text-sm py-1.5 px-4 border border-transparent hover:text-white hover:nav-gradient">Features</a>
</li>
<li class="nav__menu lg:py-7" :class="{ 'lg:!py-4' : stickyMenu }">
<a href="/#pricing" class="relative text-white/80 text-sm py-1.5 px-4 border border-transparent hover:text-white hover:nav-gradient">Pricing</a>
</li>
<li class="group relative lg:py-7" :class="{ 'lg:!py-4' : stickyMenu }" x-data="{ dropdown: false }">
<a href="#" class="relative text-white/80 text-sm py-1.5 px-4 border border-transparent hover:text-white hover:nav-gradient flex items-center justify-between gap-3" @click.prevent="dropdown = !dropdown" :class="{ '!text-white nav-gradient': page === 'about' || page === 'pricing' || page === 'blog-grid' || page === 'blog-single' || page === 'signin' || page === 'signup' || page === '404' }">
Pages
<svg class="fill-current w-3 h-3 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
</svg>
</a>

<ul class="dropdown" :class="{ 'flex': dropdown }">
<li>
<a href="about.html" class="flex text-sm text-white/70 hover:text-white py-2 px-4 rounded-md hover:bg-white/5" :class="{ '!text-white bg-white/5': page === 'about' }">About Us</a>
</li>
<li>
<a href="pricing.html" class="flex text-sm text-white/70 hover:text-white py-2 px-4 rounded-md hover:bg-white/5" :class="{ '!text-white bg-white/5': page === 'pricing' }">Pricing Table</a>
</li>
<li>
<a href="blog-grid.html" class="flex text-sm text-white/70 hover:text-white py-2 px-4 rounded-md hover:bg-white/5" :class="{ '!text-white bg-white/5': page === 'blog-grid' }">Blog Grid</a>
</li>
<li>
<a href="blog-single.html" class="flex text-sm text-white/70 hover:text-white py-2 px-4 rounded-md hover:bg-white/5" :class="{ '!text-white bg-white/5': page === 'blog-single' }">Blog Single</a>
</li>
<li>
<a href="signin.html" class="flex text-sm text-white/70 hover:text-white py-2 px-4 rounded-md hover:bg-white/5" :class="{ '!text-white bg-white/5': page === 'signin' }">Sign In</a>
</li>
<li>
<a href="signup.html" class="flex text-sm text-white/70 hover:text-white py-2 px-4 rounded-md hover:bg-white/5" :class="{ '!text-white bg-white/5': page === 'signup' }">Sign Up</a>
</li>
<li>
<a href="404.html" class="flex text-sm text-white/70 hover:text-white py-2 px-4 rounded-md hover:bg-white/5" :class="{ '!text-white bg-white/5': page === '404' }">Error Page</a>
</li>
</ul>

</li>
<li class="nav__menu lg:py-7" :class="{ 'lg:!py-4' : stickyMenu }">
<a href="/#support" class="relative text-white/80 text-sm py-1.5 px-4 border border-transparent hover:text-white hover:nav-gradient">Support</a>
</li>
</ul>
</nav>
<div class="flex items-center gap-6 mt-7 lg:mt-0">
<a href="signin.html" class="text-white text-sm hover:text-opacity-75">Sign in</a>
<a href="signup.html" class="button-border-gradient relative rounded-lg text-white text-sm flex items-center gap-1.5 py-2 px-4.5 shadow-button hover:button-gradient-hover hover:shadow-none">
Sign up
<svg class="mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4002 7.60002L9.2252 2.35002C9.0002 2.12502 8.6502 2.12502 8.4252 2.35002C8.2002 2.57502 8.2002 2.92502 8.4252 3.15002L12.6252 7.42502H2.0002C1.7002 7.42502 1.4502 7.67502 1.4502 7.97502C1.4502 8.27502 1.7002 8.55003 2.0002 8.55003H12.6752L8.4252 12.875C8.2002 13.1 8.2002 13.45 8.4252 13.675C8.5252 13.775 8.6752 13.825 8.8252 13.825C8.9752 13.825 9.1252 13.775 9.2252 13.65L14.4002 8.40002C14.6252 8.17502 14.6252 7.82503 14.4002 7.60002Z" fill="white" />
</svg>
</a>
</div>
</div>
</div>
</header>

<main>

<section id="home" class="relative overflow-hidden z-10 pt-35 md:pt-40 xl:pt-45">

<div class="max-w-7xl mx-auto">
<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden -mx-28">
<div class="absolute -z-1 -top-[128%] sm:-top-[107%] xl:-top-[73%] left-1/2 -translate-x-1/2 -u-z-10 hero-circle-gradient w-full h-[1282px] rounded-full max-w-[1282px]">
</div>
<div class="absolute -z-1 -top-[112%] sm:-top-[93%] xl:-top-[62%] left-1/2 -translate-x-1/2 -u-z-10 hero-circle-gradient w-full h-[1046px] rounded-full max-w-[1046px]">
</div>
<div class="absolute top-0 left-1/2 -translate-x-1/2 -u-z-10">
<img src="images/blur-02.svg" alt="blur" class="max-w-none">
</div>
<div class="absolute top-0 left-1/2 -translate-x-1/2 -u-z-10">
<img src="images/blur-01.svg" alt="blur" class="max-w-none">
</div>
</div>
</div>

<div class="mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0 relative z-1">
<div class="text-center">
<a href="/#" class="hero-subtitle-gradient hover:hero-subtitle-hover relative mb-5 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
<img src="images/icon-title.svg" alt="icon">
<span class="hero-subtitle-text">
Your Ultimate Creative Companion!
</span>
</a>
<h1 class="text-white mb-6 text-3xl font-extrabold sm:text-5xl xl:text-heading-1">
Elevate Your Content with Our AI-Powered Writing Tool
</h1>
<p class="max-w-[500px] mx-auto mb-9 font-medium md:text-lg">
Highly customizable Tailwind CSS template for AI - Tool, Startup, Software, App and Product Sites. Comes
with everything you need - pages, features, sections, components and more that you can easily customize.
</p>
<a href="#" class="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80">
Start Your Free Trial
</a>
</div>
</div>
<div class="mt-17" data-wow-delay="0.1s">
<img class="mx-auto" src="images/hero.svg" alt="hero" />
</div>
</section>


<section id="features" class="overflow-hidden pt-17.5 lg:pt-22.5 xl:pt-27.5 scroll-mt-17">
<div class="max-w-[1222px] mx-auto px-4 sm:px-8 xl:px-0">

<div class="wow fadeInUp text-center">
<span class="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
<img src="images/icon-title.svg" alt="icon">
<span class="hero-subtitle-text"> Some of Main Features </span>
</span>
<h2 class="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
Key Features of Our Tool
</h2>
<p class="max-w-[714px] mx-auto mb-5 font-medium">
Our AI writing tool is designed to empower you with exceptional
writing capabilities, making the writing process more efficient,
accurate, and enjoyable.
</p>
</div>
<div class="relative">
<div class="features-row-border rotate-90 w-1/2 h-[1px] absolute top-1/2 left-1/2 -translate-y-1/2 lg:-translate-x-1/3 lg:left-1/4 hidden lg:block">
</div>
<div class="features-row-border rotate-90 w-1/2 h-[1px] absolute top-1/2 right-1/2 -translate-y-1/2 lg:right-[8.3%] hidden lg:block">
</div>

<div class="flex flex-wrap justify-center">

<div class="w-full sm:w-1/2 lg:w-1/3">
<div class="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
<span class="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
<span class="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
<img src="images/icon-01.svg" alt="icon" />
</span>
<h4 class="font-semibold text-lg text-white mb-4">
Intelligent Writing Assistance
</h4>
<p class="font-medium">
Our AI writing tool analyzes your content, suggests
improvements,
</p>
</div>
</div>

<div class="w-full sm:w-1/2 lg:w-1/3">
<div class="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
<span class="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
<span class="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
<img src="images/icon-02.svg" alt="icon" />
</span>
<h4 class="font-semibold text-lg text-white mb-4">
Grammar and Spell Check
</h4>
<p class="font-medium">
Say goodbye to embarrassing typos and grammar mistakes
</p>
</div>
</div>

<div class="w-full sm:w-1/2 lg:w-1/3">
<div class="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
<span class="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
<span class="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
<img src="images/icon-03.svg" alt="icon" />
</span>
<h4 class="font-semibold text-lg text-white mb-4">
Plagiarism Detection
</h4>
<p class="font-medium">
Originality is key, and our AI writing tool helps you
maintain it
</p>
</div>
</div>
</div>
<div class="features-row-border w-full h-[1px]"></div>

<div class="flex flex-wrap justify-center">

<div class="w-full sm:w-1/2 lg:w-1/3">
<div class="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
<span class="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 rotate-180"></span>
<span class="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
<img src="images/icon-04.svg" alt="icon" />
</span>
<h4 class="font-semibold text-lg text-white mb-4">
Voice to Text Conversion
</h4>
<p class="font-medium">
Transform your spoken words into written text easily &
effortlessly
</p>
</div>
</div>

<div class="w-full sm:w-1/2 lg:w-1/3">
<div class="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
<span class="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 rotate-180"></span>
<span class="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
<img src="images/icon-05.svg" alt="icon" />
</span>
<h4 class="font-semibold text-lg text-white mb-4">
Style and Tone Adaptation
</h4>
<p class="font-medium">
Whether you need a professional, or positive tone it has
everyone
</p>
</div>
</div>

<div class="w-full sm:w-1/2 lg:w-1/3">
<div class="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
<span class="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 rotate-180"></span>
<span class="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
<img src="images/icon-06.svg" alt="icon" />
</span>
<h4 class="font-semibold text-lg text-white mb-4">
Content Generation
</h4>
<p class="font-medium">
Need inspiration or assistance with generating content?
</p>
</div>
</div>
</div>
</div>
</div>
</section>


<section class="pt-12.5">
<div class="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
<div class="grid sm:grid-cols-12 gap-7.5" data-highlighter>

<div class="sm:col-span-12">
<div class="relative rounded-3xl features-box-border">
<div class="relative overflow-hidden rounded-3xl p-10 xl:p-15 box-hover">
<div class="flex items-center justify-between relative z-20">
<div class="max-w-[477px] w-full">
<span class="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
<img src="images/icon-title.svg" alt="icon">
<span class="hero-subtitle-text">
AI-Powered Writing Tool
</span>
</span>
<h3 class="text-white mb-4.5 font-bold text-heading-4">
Intelligent Writing Assistance
</h3>
<p class="font-medium mb-10">
Our AI writing tool is designed to empower you with
exceptional writing capabilities, making the writing
process...
</p>
<a href="#" class="features-button-gradient relative inline-flex items-center gap-1.5 rounded-full py-3 px-6 text-white text-sm ease-in duration-300 hover:shadow-button">
Learn more
<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3992 5.60002L8.22422 0.350024C7.99922 0.125024 7.64922 0.125024 7.42422 0.350024C7.19922 0.575024 7.19922 0.925025 7.42422 1.15002L11.6242 5.42503H0.999219C0.699219 5.42503 0.449219 5.67502 0.449219 5.97502C0.449219 6.27502 0.699219 6.55003 0.999219 6.55003H11.6742L7.42422 10.875C7.19922 11.1 7.19922 11.45 7.42422 11.675C7.52422 11.775 7.67422 11.825 7.82422 11.825C7.97422 11.825 8.12422 11.775 8.22422 11.65L13.3992 6.40002C13.6242 6.17502 13.6242 5.82502 13.3992 5.60002Z" fill="white" />
</svg>
</a>
</div>
<div class="max-w-[428px] w-full hidden sm:block">
<img src="images/big-icon.svg" alt="icon" />
</div>
</div>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden -mx-28">
<span class="absolute right-0 bottom-0"><img src="images/shape-01.png" alt="shape" /></span>
<span class="absolute left-0 top-0"><img src="images/shape-02.svg" alt="shape" /></span>
<span class="absolute left-1/2 -translate-x-1/2 bottom-0">
<img src="images/blur-03.svg" alt="blur" class="max-w-none">
</span>
<span class="absolute left-1/2 -translate-x-1/2 bottom-0">
<img src="images/blur-04.svg" alt="blur" class="max-w-none">
</span>
<span class="absolute left-1/2 -translate-x-1/2 bottom-0">
<img src="images/blur-05.svg" alt="blur" class="max-w-none">
</span>
<span class="absolute right-0 top-0">
<img src="images/shape-03.svg" alt="shape" class="max-w-none" />
</span>
</div>
</div>
</div>
</div>

<div class="sm:col-span-7">
<div class="relative rounded-3xl features-box-border">
<div class="relative overflow-hidden rounded-3xl px-11 pt-12.5 pb-14 box-hover box-hover-small">
<div class="relative z-20">
<span class="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-13.5 mx-auto">
<img src="images/icon-05.svg" alt="icon" />
</span>
<h3 class="text-white mb-4.5 font-semibold text-heading-6">
Empowering Writing Excellence
</h3>
<p class="font-medium">
Our AI writing tool is designed to empower you with
exceptional writing capabilities, making the writing
process...
</p>
</div>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute left-0 bottom-0">
<img src="images/blur-06.svg" alt="blur" class="max-w-none">
</span>
<span class="absolute right-0 top-0">
<img src="images/blur-07.svg" alt="blur" class="max-w-none">
</span>
<span class="absolute right-[16%] top-[16%]"><img src="images/shape-04.svg" alt="shape" /></span>
<span class="absolute left-0 bottom-0">
<img src="images/blur-08.svg" alt="blur" class="max-w-none">
</span>
<span class="absolute left-0 bottom-0">
<img src="images/blur-09.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>
</div>
</div>

<div class="sm:col-span-5">
<div class="relative rounded-3xl features-box-border">
<div class="relative overflow-hidden rounded-3xl px-11 pt-12.5 pb-14 box-hover box-hover-small">
<div class="relative z-20">
<span class="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-13.5 mx-auto">
<img src="images/icon-07.svg" alt="icon" />
</span>
<h3 class="text-white mb-4.5 font-semibold text-heading-6">
Grammar and Spell Check
</h3>
<p class="font-medium">
Our AI writing tool is designed to empower you with
exceptional writing capabilities.
</p>
</div>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-[14%] top-[17%]"><img src="images/shape-05.svg" alt="shape" /></span>
<span class="absolute left-0 bottom-0">
<img src="images/blur-10.svg" alt="blur" class="max-w-none">
</span>
<span class="absolute top-0 right-0">
<img src="images/blur-11.svg" alt="blur" class="max-w-none">
</span>
<span class="absolute top-0 right-0">
<img src="images/blur-12.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section id="pricing" class="relative z-20 overflow-hidden pt-22.5 lg:pt-27.5 xl:pt-32.5 scroll-mt-17">
<div class="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">

<div class="relative top-18">
<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden -my-55">
<div class="absolute left-1/2 -translate-x-1/2 top-0">
<img src="images/blur-13.svg" alt="blur" class="max-w-none">
</div>
<div class="absolute left-1/2 -translate-x-1/2 top-0">
<img src="images/blur-14.svg" alt="blur" class="max-w-none">
</div>
<div class="absolute left-1/2 -translate-x-1/2 top-0">
<img src="images/blur-15.svg" alt="blur" class="max-w-none">
</div>
</div>
<div class="max-w-[830px] w-full h-[830px] rounded-full bg-dark absolute left-1/2 -translate-x-1/2 top-0 pricing-circle">
</div>
<div class="max-w-[482px] w-full h-60 overflow-hidden absolute -z-1 -top-30 left-1/2 -translate-x-1/2">
<div class="stars"></div>
<div class="stars2"></div>
</div>
</div>

<div class="flex justify-center gap-7.5 relative -z-1">
<div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
<div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
<div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
<div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
<div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
<div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
<div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
<div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
</div>

<div class="wow fadeInUp mb-17.5 -mt-24 text-center z-10 relative">
<span class="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
<img src="images/icon-title.svg" alt="icon">
<span class="hero-subtitle-text"> Get access </span>
</span>
<h2 class="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
Our Pricing Plan
</h2>
<p class="max-w-[714px] mx-auto font-medium">
Our AI writing tool is designed to empower you with exceptional
writing capabilities, making the writing process more efficient,
accurate, and enjoyable.
</p>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5">

<div class="wow fadeInUp rounded-3xl bg-dark relative z-20 overflow-hidden pt-12.5 pb-10 px-8 xl:px-10 pricing-item-border">
<span class="absolute right-9 top-9"><img src="images/pricing-icon-01.svg" alt="icon" /></span>
<h3 class="font-semibold text-heading-6 text-white mb-5.5">
Starter
</h3>
<div class="flex items-center gap-3.5">
<h2 class="font-bold text-custom-1 pricing-gradient-text">
$10
</h2>
<p class="font-medium">
/month <br/>
(billed annually)
</p>
</div>
<div class="my-10 w-full h-[1px] pricing-gradient-divider"></div>
<ul class="flex flex-col gap-4">
<li class="flex items-center gap-5">
<img src="images/pricing-icon-04.svg" alt="icon" />
<span class="font-medium">Subscription with levels</span>
</li>
<li class="flex items-center gap-5">
<img src="images/pricing-icon-04.svg" alt="icon" />
<span class="font-medium">Advanced features included</span>
</li>
<li class="flex items-center gap-5">
<img src="images/pricing-icon-04.svg" alt="icon" />
<span class="font-medium">Shared workspaces & tools</span>
</li>
<li class="flex items-center gap-5">
<img src="images/pricing-icon-04.svg" alt="icon" />
<span class="font-medium">Premium versions functionality</span>
</li>
<li class="flex items-center gap-5">
<img src="images/pricing-icon-04.svg" alt="icon" />
<span class="font-medium">Customizing the outputs</span>
</li>
<li class="flex items-center gap-5">
<img src="images/pricing-icon-04.svg" alt="icon" />
<span class="font-medium">Priority customer support</span>
</li>
</ul>
<a href="/#" class="mt-11 flex items-center justify-center gap-1.5 font-medium text-white p-3 rounded-lg transition-all ease-in-out duration-300 relative pricing-button-gradient hover:shadow-button">
Get the plan
<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.8992 7.5999L9.72422 2.3499C9.49922 2.1249 9.14922 2.1249 8.92422 2.3499C8.69922 2.5749 8.69922 2.9249 8.92422 3.1499L13.1242 7.4249H2.49922C2.19922 7.4249 1.94922 7.6749 1.94922 7.9749C1.94922 8.2749 2.19922 8.5499 2.49922 8.5499H13.1742L8.92422 12.8749C8.69922 13.0999 8.69922 13.4499 8.92422 13.6749C9.02422 13.7749 9.17422 13.8249 9.32422 13.8249C9.47422 13.8249 9.62422 13.7749 9.72422 13.6499L14.8992 8.3999C15.1242 8.1749 15.1242 7.8249 14.8992 7.5999Z" fill="white" />
</svg>
</a>
<p class="mt-4 text-sm text-center">
No extra hidden charge
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute left-0 bottom-0 -z-1">
<img src="images/blur-16.svg" alt="blur" class="max-w-none">
</span>
<span class="absolute left-0 top-0 -z-1">
<img src="images/blur-17.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>

<div class="wow fadeInUp rounded-3xl bg-dark relative z-20 overflow-hidden pt-12.5 pb-10 px-8 xl:px-10 pricing-item-border">
<span class="absolute right-9 top-9"><img src="images/pricing-icon-02.svg" alt="icon" /></span>
<h3 class="font-semibold text-heading-6 text-white mb-5.5">
Medium
</h3>
<div class="flex items-center gap-3.5">
<h2 class="font-bold text-custom-1 pricing-gradient-text">
$59
</h2>
<p class="font-medium">
/month <br/>
(billed annually)
</p>
</div>
<div class="my-10 w-full h-[1px] pricing-gradient-divider"></div>
<ul class="flex flex-col gap-4">
<li class="flex items-center gap-5">
<img src="images/pricing-icon-04.svg" alt="icon" />
<span class="font-medium">Subscription with levels</span>
</li>
<li class="flex items-center gap-5">
<img src="images/pricing-icon-04.svg" alt="icon" />
<span class="font-medium">Advanced features included</span>
</li>
<li class="flex items-center gap-5">
<img src="images/pricing-icon-04.svg" alt="icon" />
<span class="font-medium">Shared workspaces & tools</span>
</li>
<li class="flex items-center gap-5">
<img src="images/pricing-icon-04.svg" alt="icon" />
<span class="font-medium">Premium versions functionality</span>
</li>
<li class="flex items-center gap-5">
<img src="images/pricing-icon-04.svg" alt="icon" />
<span class="font-medium">Customizing the outputs</span>
</li>
<li class="flex items-center gap-5">
<img src="images/pricing-icon-04.svg" alt="icon" />
<span class="font-medium">Priority customer support</span>
</li>
</ul>
<a href="/#" class="mt-11 flex items-center justify-center gap-1.5 font-medium text-white p-3 rounded-lg transition-all ease-in-out duration-300 relative pricing-button-gradient hover:shadow-button">
Get the plan
<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.8992 7.5999L9.72422 2.3499C9.49922 2.1249 9.14922 2.1249 8.92422 2.3499C8.69922 2.5749 8.69922 2.9249 8.92422 3.1499L13.1242 7.4249H2.49922C2.19922 7.4249 1.94922 7.6749 1.94922 7.9749C1.94922 8.2749 2.19922 8.5499 2.49922 8.5499H13.1742L8.92422 12.8749C8.69922 13.0999 8.69922 13.4499 8.92422 13.6749C9.02422 13.7749 9.17422 13.8249 9.32422 13.8249C9.47422 13.8249 9.62422 13.7749 9.72422 13.6499L14.8992 8.3999C15.1242 8.1749 15.1242 7.8249 14.8992 7.5999Z" fill="white" />
</svg>
</a>
<p class="mt-4 text-sm text-center">
No extra hidden charge
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute left-0 bottom-0 -z-1">
<img src="images/blur-16.svg" alt="blur" class="max-w-none">
</span>
<span class="absolute left-0 top-0 -z-1">
<img src="images/blur-17.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>

<div class="wow fadeInUp rounded-3xl bg-dark relative z-20 overflow-hidden pt-12.5 pb-10 px-8 xl:px-10 pricing-item-border">
<span class="absolute right-9 top-9"><img src="images/pricing-icon-03.svg" alt="icon" /></span>
<h3 class="font-semibold text-heading-6 text-white mb-5.5">
Business
</h3>
<div class="flex items-center gap-3.5">
<h2 class="font-bold text-custom-1 pricing-gradient-text">
$289
</h2>
<p class="font-medium">
/month <br/>
(billed annually)
</p>
</div>
<div class="my-10 w-full h-[1px] pricing-gradient-divider"></div>
<ul class="flex flex-col gap-4">
<li class="flex items-center gap-5">
<img src="images/pricing-icon-04.svg" alt="icon" />
<span class="font-medium">Subscription with levels</span>
</li>
<li class="flex items-center gap-5">
<img src="images/pricing-icon-04.svg" alt="icon" />
<span class="font-medium">Advanced features included</span>
</li>
<li class="flex items-center gap-5">
<img src="images/pricing-icon-04.svg" alt="icon" />
<span class="font-medium">Shared workspaces & tools</span>
</li>
<li class="flex items-center gap-5">
<img src="images/pricing-icon-04.svg" alt="icon" />
<span class="font-medium">Premium versions functionality</span>
</li>
<li class="flex items-center gap-5">
<img src="images/pricing-icon-04.svg" alt="icon" />
<span class="font-medium">Customizing the outputs</span>
</li>
<li class="flex items-center gap-5">
<img src="images/pricing-icon-04.svg" alt="icon" />
<span class="font-medium">Priority customer support</span>
</li>
</ul>
<a href="/#" class="mt-11 flex items-center justify-center gap-1.5 font-medium text-white p-3 rounded-lg transition-all ease-in-out duration-300 relative pricing-button-gradient hover:shadow-button">
Get the plan
<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.8992 7.5999L9.72422 2.3499C9.49922 2.1249 9.14922 2.1249 8.92422 2.3499C8.69922 2.5749 8.69922 2.9249 8.92422 3.1499L13.1242 7.4249H2.49922C2.19922 7.4249 1.94922 7.6749 1.94922 7.9749C1.94922 8.2749 2.19922 8.5499 2.49922 8.5499H13.1742L8.92422 12.8749C8.69922 13.0999 8.69922 13.4499 8.92422 13.6749C9.02422 13.7749 9.17422 13.8249 9.32422 13.8249C9.47422 13.8249 9.62422 13.7749 9.72422 13.6499L14.8992 8.3999C15.1242 8.1749 15.1242 7.8249 14.8992 7.5999Z" fill="white" />
</svg>
</a>
<p class="mt-4 text-sm text-center">
No extra hidden charge
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute left-0 bottom-0 -z-1">
<img src="images/blur-16.svg" alt="blur" class="max-w-none">
</span>
<span class="absolute left-0 top-0 -z-1">
<img src="images/blur-17.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>
</div>
</div>
</section>


<section x-data="{ 'showContent': false, 'scrollContent': false, }" class="relative z-20 overflow-hidden pt-22.5 lg:pt-27.5 xl:pt-32.5 2xl:pt-45 pb-20">
<div class="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">

<div class="wow fadeInUp mb-15 text-center">
<span class="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
<img src="images/icon-title.svg" alt="icon">
<span class="hero-subtitle-text"> Wall of love </span>
</span>
<h2 class="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
What Our User Says
</h2>
<p class="max-w-[714px] mx-auto font-medium">
Our AI writing tool is designed to empower you with exceptional
writing capabilities, making the writing process more efficient,
accurate, and enjoyable.
</p>
</div>
<div @scroll.window="scrollContent = (scrollY > $el.offsetTop - 500) ? true : false" :class="{ 'max-h-[855px] overflow-hidden' :!showContent }" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5">

<div class="space-y-7.5">

<div class="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
<div class="flex items-center gap-4.5">
<div class="max-w-[48px] w-full h-12 rounded-full">
<img src="images/user-01.png" alt="user" />
</div>
<div>
<h5 class="text-white text-sm font-medium">
Machel Pildium
</h5>
<p class="font-medium text-sm">@machel</p>
</div>
</div>
<div class="user-divider relative my-6 w-full h-[1px]"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's.
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-0 bottom-0 -z-1">
<img src="images/blur-18.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>

<div class="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
<div class="flex items-center gap-4.5">
<div class="max-w-[48px] w-full h-12 rounded-full">
<img src="images/user-02.png" alt="user" />
</div>
<div>
<h5 class="text-white text-sm font-medium">
Wilson Bator
</h5>
<p class="font-medium text-sm">@wilson</p>
</div>
</div>
<div class="user-divider relative my-6 w-full h-[1px]"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's.
</p>
<p class="mt-6">
Lorem Ipsum is simply dummy text of the printing and
typesetting industry.
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-0 bottom-0 -z-1">
<img src="images/blur-18.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>

<div class="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
<div class="flex items-center gap-4.5">
<div class="max-w-[48px] w-full h-12 rounded-full">
<img src="images/user-03.png" alt="user" />
</div>
<div>
<h5 class="text-white text-sm font-medium">
Roger George
</h5>
<p class="font-medium text-sm">@roger</p>
</div>
</div>
<div class="user-divider relative my-6 w-full h-[1px]"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's.
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-0 bottom-0 -z-1">
<img src="images/blur-18.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>

<div class="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
<div class="flex items-center gap-4.5">
<div class="max-w-[48px] w-full h-12 rounded-full">
<img src="images/user-04.png" alt="user" />
</div>
<div>
<h5 class="text-white text-sm font-medium">
Adison Dias
</h5>
<p class="font-medium text-sm">@adison</p>
</div>
</div>
<div class="user-divider relative my-6 w-full h-[1px]"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's.
</p>
<p class="mt-6">
Lorem Ipsum is simply dummy text of the printing and
typesetting industry.
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-0 bottom-0 -z-1">
<img src="images/blur-18.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>

<div class="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
<div class="flex items-center gap-4.5">
<div class="max-w-[48px] w-full h-12 rounded-full">
<img src="images/user-05.png" alt="user" />
</div>
<div>
<h5 class="text-white text-sm font-medium">
Abram Lipshutz
</h5>
<p class="font-medium text-sm">@abram</p>
</div>
</div>
<div class="user-divider relative my-6 w-full h-[1px]"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's.
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-0 bottom-0 -z-1">
<img src="images/blur-18.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>

<div class="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
<div class="flex items-center gap-4.5">
<div class="max-w-[48px] w-full h-12 rounded-full">
<img src="images/user-06.png" alt="user" />
</div>
<div>
<h5 class="text-white text-sm font-medium">
Jaylon Press
</h5>
<p class="font-medium text-sm">@jaylon</p>
</div>
</div>
<div class="user-divider relative my-6 w-full h-[1px]"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's.
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-0 bottom-0 -z-1">
<img src="images/blur-18.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>

<div class="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
<div class="flex items-center gap-4.5">
<div class="max-w-[48px] w-full h-12 rounded-full">
<img src="images/user-07.png" alt="user" />
</div>
<div>
<h5 class="text-white text-sm font-medium">
Zain Franci
</h5>
<p class="font-medium text-sm">@zain</p>
</div>
</div>
<div class="user-divider relative my-6 w-full h-[1px]"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's.
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-0 bottom-0 -z-1">
<img src="images/blur-18.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>

<div class="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
<div class="flex items-center gap-4.5">
<div class="max-w-[48px] w-full h-12 rounded-full">
<img src="images/user-08.png" alt="user" />
</div>
<div>
<h5 class="text-white text-sm font-medium">
Cristofer Carder
</h5>
<p class="font-medium text-sm">@cristofer</p>
</div>
</div>
<div class="user-divider relative my-6 w-full h-[1px]"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's.
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-0 bottom-0 -z-1">
<img src="images/blur-18.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>

<div class="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
<div class="flex items-center gap-4.5">
<div class="max-w-[48px] w-full h-12 rounded-full">
<img src="images/user-09.png" alt="user" />
</div>
<div>
<h5 class="text-white text-sm font-medium">
Dulce Rosser
</h5>
<p class="font-medium text-sm">@dulce</p>
</div>
</div>
<div class="user-divider relative my-6 w-full h-[1px]"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's.
</p>
<p class="mt-6">
Lorem Ipsum is simply dummy text of the printing and
typesetting industry.
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-0 bottom-0 -z-1">
<img src="images/blur-18.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>
</div>

<div class="space-y-7.5 hidden sm:block">

<div class="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
<div class="flex items-center gap-4.5">
<div class="max-w-[48px] w-full h-12 rounded-full">
<img src="images/user-04.png" alt="user" />
</div>
<div>
<h5 class="text-white text-sm font-medium">
Adison Dias
</h5>
<p class="font-medium text-sm">@adison</p>
</div>
</div>
<div class="user-divider relative my-6 w-full h-[1px]"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's.
</p>
<p class="mt-6">
Lorem Ipsum is simply dummy text of the printing and
typesetting industry.
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-0 bottom-0 -z-1">
<img src="images/blur-18.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>

<div class="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
<div class="flex items-center gap-4.5">
<div class="max-w-[48px] w-full h-12 rounded-full">
<img src="images/user-05.png" alt="user" />
</div>
<div>
<h5 class="text-white text-sm font-medium">
Abram Lipshutz
</h5>
<p class="font-medium text-sm">@abram</p>
</div>
</div>
<div class="user-divider relative my-6 w-full h-[1px]"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's.
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-0 bottom-0 -z-1">
<img src="images/blur-18.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>

<div class="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
<div class="flex items-center gap-4.5">
<div class="max-w-[48px] w-full h-12 rounded-full">
<img src="images/user-06.png" alt="user" />
</div>
<div>
<h5 class="text-white text-sm font-medium">
Jaylon Press
</h5>
<p class="font-medium text-sm">@jaylon</p>
</div>
</div>
<div class="user-divider relative my-6 w-full h-[1px]"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's.
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-0 bottom-0 -z-1">
<img src="images/blur-18.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>

<div class="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
<div class="flex items-center gap-4.5">
<div class="max-w-[48px] w-full h-12 rounded-full">
<img src="images/user-07.png" alt="user" />
</div>
<div>
<h5 class="text-white text-sm font-medium">
Zain Franci
</h5>
<p class="font-medium text-sm">@zain</p>
</div>
</div>
<div class="user-divider relative my-6 w-full h-[1px]"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's.
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-0 bottom-0 -z-1">
<img src="images/blur-18.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>

<div class="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
<div class="flex items-center gap-4.5">
<div class="max-w-[48px] w-full h-12 rounded-full">
<img src="images/user-08.png" alt="user" />
</div>
<div>
<h5 class="text-white text-sm font-medium">
Cristofer Carder
</h5>
<p class="font-medium text-sm">@cristofer</p>
</div>
</div>
<div class="user-divider relative my-6 w-full h-[1px]"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's.
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-0 bottom-0 -z-1">
<img src="images/blur-18.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>

<div class="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
<div class="flex items-center gap-4.5">
<div class="max-w-[48px] w-full h-12 rounded-full">
<img src="images/user-09.png" alt="user" />
</div>
<div>
<h5 class="text-white text-sm font-medium">
Dulce Rosser
</h5>
<p class="font-medium text-sm">@dulce</p>
</div>
</div>
<div class="user-divider relative my-6 w-full h-[1px]"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's.
</p>
<p class="mt-6">
Lorem Ipsum is simply dummy text of the printing and
typesetting industry.
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-0 bottom-0 -z-1">
<img src="images/blur-18.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>

<div class="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
<div class="flex items-center gap-4.5">
<div class="max-w-[48px] w-full h-12 rounded-full">
<img src="images/user-01.png" alt="user" />
</div>
<div>
<h5 class="text-white text-sm font-medium">
Machel Pildium
</h5>
<p class="font-medium text-sm">@machel</p>
</div>
</div>
<div class="user-divider relative my-6 w-full h-[1px]"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's.
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-0 bottom-0 -z-1">
<img src="images/blur-18.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>

<div class="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
<div class="flex items-center gap-4.5">
<div class="max-w-[48px] w-full h-12 rounded-full">
<img src="images/user-02.png" alt="user" />
</div>
<div>
<h5 class="text-white text-sm font-medium">
Wilson Bator
</h5>
<p class="font-medium text-sm">@wilson</p>
</div>
</div>
<div class="user-divider relative my-6 w-full h-[1px]"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's.
</p>
<p class="mt-6">
Lorem Ipsum is simply dummy text of the printing and
typesetting industry.
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-0 bottom-0 -z-1">
<img src="images/blur-18.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>

<div class="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
<div class="flex items-center gap-4.5">
<div class="max-w-[48px] w-full h-12 rounded-full">
<img src="images/user-03.png" alt="user" />
</div>
<div>
<h5 class="text-white text-sm font-medium">
Roger George
</h5>
<p class="font-medium text-sm">@roger</p>
</div>
</div>
<div class="user-divider relative my-6 w-full h-[1px]"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's.
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-0 bottom-0 -z-1">
<img src="images/blur-18.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>
</div>

<div class="space-y-7.5 hidden lg:block">

<div class="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
<div class="flex items-center gap-4.5">
<div class="max-w-[48px] w-full h-12 rounded-full">
<img src="images/user-07.png" alt="user" />
</div>
<div>
<h5 class="text-white text-sm font-medium">
Zain Franci
</h5>
<p class="font-medium text-sm">@zain</p>
</div>
</div>
<div class="user-divider relative my-6 w-full h-[1px]"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's.
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-0 bottom-0 -z-1">
<img src="images/blur-18.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>

<div class="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
<div class="flex items-center gap-4.5">
<div class="max-w-[48px] w-full h-12 rounded-full">
<img src="images/user-08.png" alt="user" />
</div>
<div>
<h5 class="text-white text-sm font-medium">
Cristofer Carder
</h5>
<p class="font-medium text-sm">@cristofer</p>
</div>
</div>
<div class="user-divider relative my-6 w-full h-[1px]"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's.
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-0 bottom-0 -z-1">
<img src="images/blur-18.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>

<div class="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
<div class="flex items-center gap-4.5">
<div class="max-w-[48px] w-full h-12 rounded-full">
<img src="images/user-09.png" alt="user" />
</div>
<div>
<h5 class="text-white text-sm font-medium">
Dulce Rosser
</h5>
<p class="font-medium text-sm">@dulce</p>
</div>
</div>
<div class="user-divider relative my-6 w-full h-[1px]"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's.
</p>
<p class="mt-6">
Lorem Ipsum is simply dummy text of the printing and
typesetting industry.
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-0 bottom-0 -z-1">
<img src="images/blur-18.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>

<div class="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
<div class="flex items-center gap-4.5">
<div class="max-w-[48px] w-full h-12 rounded-full">
<img src="images/user-01.png" alt="user" />
</div>
<div>
<h5 class="text-white text-sm font-medium">
Machel Pildium
</h5>
<p class="font-medium text-sm">@machel</p>
</div>
</div>
<div class="user-divider relative my-6 w-full h-[1px]"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's.
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-0 bottom-0 -z-1">
<img src="images/blur-18.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>

<div class="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
<div class="flex items-center gap-4.5">
<div class="max-w-[48px] w-full h-12 rounded-full">
<img src="images/user-02.png" alt="user" />
</div>
<div>
<h5 class="text-white text-sm font-medium">
Wilson Bator
</h5>
<p class="font-medium text-sm">@wilson</p>
</div>
</div>
<div class="user-divider relative my-6 w-full h-[1px]"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's.
</p>
<p class="mt-6">
Lorem Ipsum is simply dummy text of the printing and
typesetting industry.
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-0 bottom-0 -z-1">
<img src="images/blur-18.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>

<div class="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
<div class="flex items-center gap-4.5">
<div class="max-w-[48px] w-full h-12 rounded-full">
<img src="images/user-03.png" alt="user" />
</div>
<div>
<h5 class="text-white text-sm font-medium">
Roger George
</h5>
<p class="font-medium text-sm">@roger</p>
</div>
</div>
<div class="user-divider relative my-6 w-full h-[1px]"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's.
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-0 bottom-0 -z-1">
<img src="images/blur-18.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>

<div class="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
<div class="flex items-center gap-4.5">
<div class="max-w-[48px] w-full h-12 rounded-full">
<img src="images/user-04.png" alt="user" />
</div>
<div>
<h5 class="text-white text-sm font-medium">
Adison Dias
</h5>
<p class="font-medium text-sm">@adison</p>
</div>
</div>
<div class="user-divider relative my-6 w-full h-[1px]"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's.
</p>
<p class="mt-6">
Lorem Ipsum is simply dummy text of the printing and
typesetting industry.
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-0 bottom-0 -z-1">
<img src="images/blur-18.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>

<div class="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
<div class="flex items-center gap-4.5">
<div class="max-w-[48px] w-full h-12 rounded-full">
<img src="images/user-05.png" alt="user" />
</div>
<div>
<h5 class="text-white text-sm font-medium">
Abram Lipshutz
</h5>
<p class="font-medium text-sm">@abram</p>
</div>
</div>
<div class="user-divider relative my-6 w-full h-[1px]"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's.
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-0 bottom-0 -z-1">
<img src="images/blur-18.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>

<div class="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
<div class="flex items-center gap-4.5">
<div class="max-w-[48px] w-full h-12 rounded-full">
<img src="images/user-06.png" alt="user" />
</div>
<div>
<h5 class="text-white text-sm font-medium">
Jaylon Press
</h5>
<p class="font-medium text-sm">@jaylon</p>
</div>
</div>
<div class="user-divider relative my-6 w-full h-[1px]"></div>
<p>
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's.
</p>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute right-0 bottom-0 -z-1">
<img src="images/blur-18.svg" alt="blur" class="max-w-none">
</span>
</div>
</div>
</div>
</div>
<div :class="[ showContent ? 'sticky -u-mt-52 transition-opacity duration-300 opacity-0' : '', scrollContent ? '!opacity-100' : '' ]" class="inset-x-0 bottom-20 flex justify-center bg-gradient-to-t from-dark pt-32 pb-8 pointer-events-none absolute">
<button :class="[ showContent ? 'transition-transform translate-y-4' : '', scrollContent ? 'translate-y-0' : '' ]" @click="showContent = !showContent" type="button" class="button-border-gradient hover:button-gradient-hover relative top-20 text-sm text-white font-semibold px-4.5 py-3 rounded-lg pointer-events-auto flex mx-auto -mt-7.5 ease-in duration-300">
<span x-text="showContent ? 'Okay, I get the point' : 'Show more...'"></span>
</button>
</div>
</div>
</section>


<section class="py-19">
<div class="max-w-[1104px] mx-auto px-4 sm:px-8 xl:px-0">
<div class="relative overflow-hidden z-10">
<span class="max-w-[128px] w-full h-[37px] block inset-0 pointer-events-none absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-dark/0 to-dark/100"></span>
<span class="max-w-[128px] w-full h-[37px] block inset-0 pointer-events-none absolute z-10 left-auto top-1/2 -translate-y-1/2 bg-gradient-to-r from-dark/0 to-dark/100"></span>
<div class="swiper clients-carousel">
<div class="swiper-wrapper items-center select-none !ease-linear">
<div class="swiper-slide !w-auto">
<a href="/#">
<img src="images/client-01.svg" alt="client" />
</a>
</div>
<div class="swiper-slide !w-auto">
<a href="/#">
<img src="images/client-02.svg" alt="client" />
</a>
</div>
<div class="swiper-slide !w-auto">
<a href="/#">
<img src="images/client-03.svg" alt="client" />
</a>
</div>
<div class="swiper-slide !w-auto">
<a href="/#">
<img src="images/client-04.svg" alt="client" />
</a>
</div>
<div class="swiper-slide !w-auto">
<a href="/#">
<img src="images/client-05.svg" alt="client" />
</a>
</div>
<div class="swiper-slide !w-auto">
<a href="/#">
<img src="images/client-06.svg" alt="client" />
</a>
</div>
<div class="swiper-slide !w-auto">
<a href="/#">
<img class="mt-3" src="images/client-07.svg" alt="client" />
</a>
</div>
<div class="swiper-slide !w-auto">
<a href="/#">
<img src="images/client-01.svg" alt="client" />
</a>
</div>
<div class="swiper-slide !w-auto">
<a href="/#">
<img src="images/client-02.svg" alt="client" />
</a>
</div>
<div class="swiper-slide !w-auto">
<a href="/#">
<img src="images/client-03.svg" alt="client" />
</a>
</div>
<div class="swiper-slide !w-auto">
<a href="/#">
<img src="images/client-04.svg" alt="client" />
</a>
</div>
<div class="swiper-slide !w-auto">
<a href="/#">
<img src="images/client-05.svg" alt="client" />
</a>
</div>
<div class="swiper-slide !w-auto">
<a href="/#">
<img src="images/client-06.svg" alt="client" />
</a>
</div>
<div class="swiper-slide !w-auto">
<a href="/#">
<img class="mt-3" src="images/client-07.svg" alt="client" />
</a>
</div>
<div class="swiper-slide !w-auto">
<a href="/#">
<img src="images/client-01.svg" alt="client" />
</a>
</div>
<div class="swiper-slide !w-auto">
<a href="/#">
<img src="images/client-02.svg" alt="client" />
</a>
</div>
<div class="swiper-slide !w-auto">
<a href="/#">
<img src="images/client-03.svg" alt="client" />
</a>
</div>
<div class="swiper-slide !w-auto">
<a href="/#">
<img src="images/client-04.svg" alt="client" />
</a>
</div>
<div class="swiper-slide !w-auto">
<a href="/#">
<img src="images/client-05.svg" alt="client" />
</a>
</div>
<div class="swiper-slide !w-auto">
<a href="/#">
<img src="images/client-06.svg" alt="client" />
</a>
</div>
<div class="swiper-slide !w-auto">
<a href="/#">
<img class="mt-3" src="images/client-07.svg" alt="client" />
</a>
</div>
</div>
</div>
</div>
</div>
</section>


<section id="support" class="scroll-mt-17">
<div class="max-w-[1104px] mx-auto px-4 sm:px-8 xl:px-0">
<div class="relative z-999 overflow-hidden rounded-[30px] bg-dark pt-25 px-4 sm:px-20 lg:px-27.5">

<div class="flex justify-center gap-7.5 absolute left-1/2 -translate-x-1/2 -top-[16%] max-w-[690px] w-full -z-1 opacity-40">
<div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border bottom-12">
</div>
<div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border bottom-7">
</div>
<div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border bottom-3">
</div>
<div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border">
</div>
<div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border">
</div>
<div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border">
</div>
<div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border bottom-2">
</div>
<div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border bottom-5">
</div>
<div class="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border bottom-8">
</div>
</div>

<div class="max-w-[482px] w-full h-60 overflow-hidden absolute -z-1 -top-30 left-1/2 -translate-x-1/2">
<div class="stars"></div>
<div class="stars2"></div>
</div>

<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute left-1/2 top-0 -translate-x-1/2 -z-1">
<img src="images/blur-19.svg" alt="blur" class="max-w-none">
</span>
<span class="absolute left-1/2 top-0 -translate-x-1/2 -z-1">
<img src="images/blur-20.svg" alt="blur" class="max-w-none">
</span>
<span class="absolute left-1/2 top-0 -translate-x-1/2 -z-1">
<img src="images/blur-21.svg" alt="blur" class="max-w-none">
</span>
</div>

<div class="wow fadeInUp mb-16 text-center relative z-999">
<span class="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
<img src="images/icon-title.svg" alt="icon">
<span class="hero-subtitle-text"> Need Any Help? </span>
</span>
<h2 class="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
Contact With Us
</h2>
<p class="max-w-[714px] mx-auto font-medium">
Our AI writing tool is designed to empower you with exceptional
writing capabilities, making the writing process more efficient,
accurate, and enjoyable.
</p>
</div>

<div class="form-box-gradient relative overflow-hidden rounded-[25px] bg-dark p-6 sm:p-8 xl:p-15">
<form class="relative z-10">
<div class="-mx-4 xl:-mx-10 flex flex-wrap">
<div class="w-full px-4 xl:px-5 md:w-1/2">
<div class="mb-9.5">
<label for="name" class="text-white mb-2.5 block font-medium">
Name
</label>
<input id="name" type="text" name="name" placeholder="Enter your Name" class="rounded-lg border border-white/[0.12] bg-white/[0.05] focus:border-purple w-full py-3 px-6 outline-none" />
</div>
</div>
<div class="w-full px-4 xl:px-5 md:w-1/2">
<div class="mb-9.5">
<label for="email" class="text-white mb-2.5 block font-medium">
Email
</label>
<input id="email" type="email" name="email" placeholder="Enter your Email" class="rounded-lg border border-white/[0.12] bg-white/[0.05] focus:border-purple w-full py-3 px-6 outline-none" />
</div>
</div>
<div class="w-full px-4 xl:px-5">
<div class="mb-10">
<label for="message" class="text-white mb-2.5 block font-medium">
Message
</label>
<textarea id="message" name="message" placeholder="Type your message" rows="6" class="rounded-lg border border-white/[0.12] bg-white/[0.05] focus:border-purple w-full py-5 px-6 outline-none"></textarea>
</div>
</div>
<div class="w-full px-4 xl:px-5">
<div class="text-center">
<a href="#" class="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80">
Send Message
</a>
</div>
</div>
</div>
</form>
</div>
</div>
</div>
</section>


<section class="py-20 lg:py-25">
<div class="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">

<div class="wow fadeInUp mb-16 text-center">
<span class="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
<img src="images/icon-title.svg" alt="icon">
<span class="hero-subtitle-text"> Read Our Latest Blogs </span>
</span>
<h2 class="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
Latest Blogs & News
</h2>
<p class="max-w-[714px] mx-auto font-medium">
Our AI writing tool is designed to empower you with exceptional
writing capabilities, making the writing process more efficient,
accurate, and enjoyable.
</p>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5">

<div class="wow fadeInUp group">
<div class="mb-6 overflow-hidden rounded-xl">
<img src="images/blog-01.png" alt="image" class="ease-linear w-full duration-500 scale-100 group-hover:scale-125" />
</div>
<div class="flex flex-wrap gap-2.5 items-center mb-4.5">
<span class="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full bg-white/[0.07] border border-white/10 hover:border-white/25 ease-out duration-300">
Design
</span>
<span class="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full bg-white/[0.07] border border-white/10 hover:border-white/25 ease-out duration-300">
Engineering
</span>
</div>
<h4>
<a href="blog-single.html" class="text-white font-semibold text-xl ease-in duration-300 hover:opacity-80">
Revolution in Content Creation and Communication
</a>
</h4>
<p class="font-medium mt-4">
Lorem ipsum dolor sit amet, consectetur adipisc elit sed do
eiusmod tempor incididunt ut labore et dolore magna oliumosd
aliqua...
</p>
<div class="flex items-center gap-4.5 flex-wrap mt-6">
<div class="flex items-center gap-2 flex-wrap cursor-pointer ease-in duration-300 hover:text-white">
<svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 8.75C7.65625 8.75 5.78125 6.90625 5.78125 4.65625C5.78125 2.40625 7.65625 0.5625 10 0.5625C12.3438 0.5625 14.2188 2.40625 14.2188 4.65625C14.2188 6.90625 12.3438 8.75 10 8.75ZM10 1.96875C8.4375 1.96875 7.1875 3.1875 7.1875 4.65625C7.1875 6.125 8.4375 7.34375 10 7.34375C11.5625 7.34375 12.8125 6.125 12.8125 4.65625C12.8125 3.1875 11.5625 1.96875 10 1.96875Z" fill />
<path d="M16.5938 19.4688C16.2188 19.4688 15.875 19.1562 15.875 18.75V17.8438C15.875 14.5938 13.25 11.9688 10 11.9688C6.75 11.9688 4.125 14.5938 4.125 17.8438V18.75C4.125 19.125 3.8125 19.4688 3.40625 19.4688C3 19.4688 2.6875 19.1562 2.6875 18.75V17.8438C2.6875 13.8125 5.96875 10.5625 9.96875 10.5625C13.9688 10.5625 17.25 13.8437 17.25 17.8438V18.75C17.2813 19.125 16.9688 19.4688 16.5938 19.4688Z" fill />
</svg>
<span class="text-sm font-medium">Alex Demo</span>
</div>
<div class="flex items-center gap-2 flex-wrap cursor-pointer ease-in duration-300 hover:text-white">
<svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 3.3125H15.875V2.625C15.875 2.25 15.5625 1.90625 15.1562 1.90625C14.75 1.90625 14.4375 2.21875 14.4375 2.625V3.3125H5.53125V2.625C5.53125 2.25 5.21875 1.90625 4.8125 1.90625C4.40625 1.90625 4.09375 2.21875 4.09375 2.625V3.3125H2.5C1.4375 3.3125 0.53125 4.1875 0.53125 5.28125V16.1563C0.53125 17.2188 1.40625 18.125 2.5 18.125H17.5C18.5625 18.125 19.4687 17.25 19.4687 16.1563V5.25C19.4687 4.1875 18.5625 3.3125 17.5 3.3125ZM1.96875 9.125H4.625V12.2188H1.96875V9.125ZM6.03125 9.125H9.3125V12.2188H6.03125V9.125ZM9.3125 13.625V16.6875H6.03125V13.625H9.3125ZM10.7187 13.625H14V16.6875H10.7187V13.625ZM10.7187 12.2188V9.125H14V12.2188H10.7187ZM15.375 9.125H18.0312V12.2188H15.375V9.125ZM2.5 4.71875H4.125V5.375C4.125 5.75 4.4375 6.09375 4.84375 6.09375C5.25 6.09375 5.5625 5.78125 5.5625 5.375V4.71875H14.5V5.375C14.5 5.75 14.8125 6.09375 15.2187 6.09375C15.625 6.09375 15.9375 5.78125 15.9375 5.375V4.71875H17.5C17.8125 4.71875 18.0625 4.96875 18.0625 5.28125V7.71875H1.96875V5.28125C1.96875 4.96875 2.1875 4.71875 2.5 4.71875ZM1.96875 16.125V13.5938H4.625V16.6563H2.5C2.1875 16.6875 1.96875 16.4375 1.96875 16.125ZM17.5 16.6875H15.375V13.625H18.0312V16.1563C18.0625 16.4375 17.8125 16.6875 17.5 16.6875Z" fill />
</svg>
<span class="text-sm font-medium">25 Mar, 2025</span>
</div>
</div>
</div>

<div class="wow fadeInUp group">
<div class="mb-6 overflow-hidden rounded-xl">
<img src="images/blog-02.png" alt="image" class="ease-linear w-full duration-500 scale-100 group-hover:scale-125" />
</div>
<div class="flex flex-wrap gap-2.5 items-center mb-4.5">
<span class="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full bg-white/[0.07] border border-white/10 hover:border-white/25 ease-out duration-300">
Development
</span>
<span class="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full bg-white/[0.07] border border-white/10 hover:border-white/25 ease-out duration-300">
Security
</span>
</div>
<h4>
<a href="blog-single.html" class="text-white font-semibold text-xl ease-in duration-300 hover:opacity-80">
How AI Writing Tools Empower Writers to Speed up there Writing
</a>
</h4>
<p class="font-medium mt-4">
Lorem ipsum dolor sit amet, consectetur adipisc elit sed do
eiusmod tempor incididunt ut labore et dolore magna oliumosd
aliqua...
</p>
<div class="flex items-center gap-4.5 flex-wrap mt-6">
<div class="flex items-center gap-2 flex-wrap cursor-pointer ease-in duration-300 hover:text-white">
<svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 8.75C7.65625 8.75 5.78125 6.90625 5.78125 4.65625C5.78125 2.40625 7.65625 0.5625 10 0.5625C12.3438 0.5625 14.2188 2.40625 14.2188 4.65625C14.2188 6.90625 12.3438 8.75 10 8.75ZM10 1.96875C8.4375 1.96875 7.1875 3.1875 7.1875 4.65625C7.1875 6.125 8.4375 7.34375 10 7.34375C11.5625 7.34375 12.8125 6.125 12.8125 4.65625C12.8125 3.1875 11.5625 1.96875 10 1.96875Z" fill />
<path d="M16.5938 19.4688C16.2188 19.4688 15.875 19.1562 15.875 18.75V17.8438C15.875 14.5938 13.25 11.9688 10 11.9688C6.75 11.9688 4.125 14.5938 4.125 17.8438V18.75C4.125 19.125 3.8125 19.4688 3.40625 19.4688C3 19.4688 2.6875 19.1562 2.6875 18.75V17.8438C2.6875 13.8125 5.96875 10.5625 9.96875 10.5625C13.9688 10.5625 17.25 13.8437 17.25 17.8438V18.75C17.2813 19.125 16.9688 19.4688 16.5938 19.4688Z" fill />
</svg>
<span class="text-sm font-medium">Hendary Jonson</span>
</div>
<div class="flex items-center gap-2 flex-wrap cursor-pointer ease-in duration-300 hover:text-white">
<svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 3.3125H15.875V2.625C15.875 2.25 15.5625 1.90625 15.1562 1.90625C14.75 1.90625 14.4375 2.21875 14.4375 2.625V3.3125H5.53125V2.625C5.53125 2.25 5.21875 1.90625 4.8125 1.90625C4.40625 1.90625 4.09375 2.21875 4.09375 2.625V3.3125H2.5C1.4375 3.3125 0.53125 4.1875 0.53125 5.28125V16.1563C0.53125 17.2188 1.40625 18.125 2.5 18.125H17.5C18.5625 18.125 19.4687 17.25 19.4687 16.1563V5.25C19.4687 4.1875 18.5625 3.3125 17.5 3.3125ZM1.96875 9.125H4.625V12.2188H1.96875V9.125ZM6.03125 9.125H9.3125V12.2188H6.03125V9.125ZM9.3125 13.625V16.6875H6.03125V13.625H9.3125ZM10.7187 13.625H14V16.6875H10.7187V13.625ZM10.7187 12.2188V9.125H14V12.2188H10.7187ZM15.375 9.125H18.0312V12.2188H15.375V9.125ZM2.5 4.71875H4.125V5.375C4.125 5.75 4.4375 6.09375 4.84375 6.09375C5.25 6.09375 5.5625 5.78125 5.5625 5.375V4.71875H14.5V5.375C14.5 5.75 14.8125 6.09375 15.2187 6.09375C15.625 6.09375 15.9375 5.78125 15.9375 5.375V4.71875H17.5C17.8125 4.71875 18.0625 4.96875 18.0625 5.28125V7.71875H1.96875V5.28125C1.96875 4.96875 2.1875 4.71875 2.5 4.71875ZM1.96875 16.125V13.5938H4.625V16.6563H2.5C2.1875 16.6875 1.96875 16.4375 1.96875 16.125ZM17.5 16.6875H15.375V13.625H18.0312V16.1563C18.0625 16.4375 17.8125 16.6875 17.5 16.6875Z" fill />
</svg>
<span class="text-sm font-medium">12 Feb, 2025</span>
</div>
</div>
</div>

<div class="wow fadeInUp group">
<div class="mb-6 overflow-hidden rounded-xl">
<img src="images/blog-03.png" alt="image" class="ease-linear w-full duration-500 scale-100 group-hover:scale-125" />
</div>
<div class="flex flex-wrap gap-2.5 items-center mb-4.5">
<span class="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full bg-white/[0.07] border border-white/10 hover:border-white/25 ease-out duration-300">
Products
</span>
<span class="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full bg-white/[0.07] border border-white/10 hover:border-white/25 ease-out duration-300">
Blog and articles
</span>
</div>
<h4>
<a href="blog-single.html" class="text-white font-semibold text-xl ease-in duration-300 hover:opacity-80">
Revolution in Content Creation and Communication
</a>
</h4>
<p class="font-medium mt-4">
Lorem ipsum dolor sit amet, consectetur adipisc elit sed do
eiusmod tempor incididunt ut labore et dolore magna oliumosd
aliqua...
</p>
<div class="flex items-center gap-4.5 flex-wrap mt-6">
<div class="flex items-center gap-2 flex-wrap cursor-pointer ease-in duration-300 hover:text-white">
<svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 8.75C7.65625 8.75 5.78125 6.90625 5.78125 4.65625C5.78125 2.40625 7.65625 0.5625 10 0.5625C12.3438 0.5625 14.2188 2.40625 14.2188 4.65625C14.2188 6.90625 12.3438 8.75 10 8.75ZM10 1.96875C8.4375 1.96875 7.1875 3.1875 7.1875 4.65625C7.1875 6.125 8.4375 7.34375 10 7.34375C11.5625 7.34375 12.8125 6.125 12.8125 4.65625C12.8125 3.1875 11.5625 1.96875 10 1.96875Z" fill />
<path d="M16.5938 19.4688C16.2188 19.4688 15.875 19.1562 15.875 18.75V17.8438C15.875 14.5938 13.25 11.9688 10 11.9688C6.75 11.9688 4.125 14.5938 4.125 17.8438V18.75C4.125 19.125 3.8125 19.4688 3.40625 19.4688C3 19.4688 2.6875 19.1562 2.6875 18.75V17.8438C2.6875 13.8125 5.96875 10.5625 9.96875 10.5625C13.9688 10.5625 17.25 13.8437 17.25 17.8438V18.75C17.2813 19.125 16.9688 19.4688 16.5938 19.4688Z" fill />
</svg>
<span class="text-sm font-medium">Piter Mecraow</span>
</div>
<div class="flex items-center gap-2 flex-wrap cursor-pointer ease-in duration-300 hover:text-white">
<svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 3.3125H15.875V2.625C15.875 2.25 15.5625 1.90625 15.1562 1.90625C14.75 1.90625 14.4375 2.21875 14.4375 2.625V3.3125H5.53125V2.625C5.53125 2.25 5.21875 1.90625 4.8125 1.90625C4.40625 1.90625 4.09375 2.21875 4.09375 2.625V3.3125H2.5C1.4375 3.3125 0.53125 4.1875 0.53125 5.28125V16.1563C0.53125 17.2188 1.40625 18.125 2.5 18.125H17.5C18.5625 18.125 19.4687 17.25 19.4687 16.1563V5.25C19.4687 4.1875 18.5625 3.3125 17.5 3.3125ZM1.96875 9.125H4.625V12.2188H1.96875V9.125ZM6.03125 9.125H9.3125V12.2188H6.03125V9.125ZM9.3125 13.625V16.6875H6.03125V13.625H9.3125ZM10.7187 13.625H14V16.6875H10.7187V13.625ZM10.7187 12.2188V9.125H14V12.2188H10.7187ZM15.375 9.125H18.0312V12.2188H15.375V9.125ZM2.5 4.71875H4.125V5.375C4.125 5.75 4.4375 6.09375 4.84375 6.09375C5.25 6.09375 5.5625 5.78125 5.5625 5.375V4.71875H14.5V5.375C14.5 5.75 14.8125 6.09375 15.2187 6.09375C15.625 6.09375 15.9375 5.78125 15.9375 5.375V4.71875H17.5C17.8125 4.71875 18.0625 4.96875 18.0625 5.28125V7.71875H1.96875V5.28125C1.96875 4.96875 2.1875 4.71875 2.5 4.71875ZM1.96875 16.125V13.5938H4.625V16.6563H2.5C2.1875 16.6875 1.96875 16.4375 1.96875 16.125ZM17.5 16.6875H15.375V13.625H18.0312V16.1563C18.0625 16.4375 17.8125 16.6875 17.5 16.6875Z" fill />
</svg>
<span class="text-sm font-medium">10 Jan, 2025</span>
</div>
</div>
</div>
</div>
</div>
</section>


<section>
<div class="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
<div class="cta-box-gradient bg-dark rounded-[30px] relative overflow-hidden px-4 py-20 lg:py-25 z-999">

<span class="absolute bottom-0 left-0 -z-1"><img src="images/grid.svg" alt="grid" /></span>
<div class="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
<span class="absolute left-1/2 bottom-0 -translate-x-1/2 -z-1">
<img src="images/blur-22.svg" alt="blur" class="max-w-none">
</span>
<span class="absolute left-1/2 bottom-0 -translate-x-1/2 -z-1">
<img src="images/blur-23.svg" alt="blur" class="max-w-none">
</span>
<span class="absolute left-1/2 bottom-0 -translate-x-1/2 -z-1">
<img src="images/blur-24.svg" alt="blur" class="max-w-none">
</span>
</div>

<div class="max-w-[482px] w-full h-60 overflow-hidden absolute -z-1 -bottom-25 left-1/2 -translate-x-1/2">
<div class="stars"></div>
<div class="stars2"></div>
</div>
<div class="wow fadeInUp text-center">
<span class="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
<img src="images/icon-title.svg" alt="icon">
<span class="hero-subtitle-text">
Try our tool for Free
</span>
</span>
<h2 class="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
What are you waiting for?
</h2>
<p class="max-w-[714px] mx-auto font-medium mb-9">
Our AI writing tool is designed to empower you with exceptional
writing capabilities, making the writing process more efficient,
accurate, and enjoyable.
</p>
<a href="#" class="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80">
Get Started for Free
</a>
</div>
</div>
</div>
</section>


<section class="pt-17.5 sm:pt-22.5 xl:pt-27.5 pb-11">
<div class="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
<div class="flex flex-wrap items-center justify-between gap-10">
<div class="max-w-[352px] w-full">
<h3 class="font-semibold text-heading-5 text-white mb-2">
News & Update
</h3>
<p class="font-medium">
Keep up to date with everything about our tool
</p>
</div>
<div class="max-w-[534px] w-full">
<form>
<div class="flex items-center gap-4">
<div class="max-w-[395px] w-full">
<input id="email" type="email" name="email" placeholder="Enter your Email" class="rounded-lg border border-white/[0.12] bg-white/[0.05] focus:border-purple w-full py-3 px-6 outline-none" />
</div>
<a href="/#" class="button-border-gradient relative rounded-lg text-white text-sm flex items-center gap-1.5 py-3.5 px-7 shadow-button hover:button-gradient-hover hover:shadow-none">
Subscribe
</a>
</div>
</form>
</div>
</div>
</div>
</section>

</main>


<footer class="relative z-10 pb-17.5 lg:pb-22.5 xl:pb-27.5">

<div class="absolute bottom-0 left-0 w-full flex flex-col gap-3 -z-1 opacity-50">
<div class="w-full h-[1.24px] footer-bg-gradient"></div>
<div class="w-full h-[2.47px] footer-bg-gradient"></div>
<div class="w-full h-[3.71px] footer-bg-gradient"></div>
<div class="w-full h-[4.99px] footer-bg-gradient"></div>
<div class="w-full h-[6.19px] footer-bg-gradient"></div>
<div class="w-full h-[7.42px] footer-bg-gradient"></div>
<div class="w-full h-[8.66px] footer-bg-gradient"></div>
<div class="w-full h-[9.90px] footer-bg-gradient"></div>
<div class="w-full h-[13px] footer-bg-gradient"></div>
</div>
<div class="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 relative pt-17.5">
<div class="w-full h-[1px] footer-divider-gradient absolute top-0 left-0"></div>
<div class="flex flex-wrap justify-between">
<div class="mb-10 max-w-[571px] w-full">
<a class="mb-8.5 inline-block" href="index.html">
<img src="images/logo.svg" alt="Logo" />
</a>
<p class="mb-12 xl:w-4/5">
AI writing tool is designed to empower you with exceptional writing
capabilities.
</p>
<div class="flex items-center gap-5">
<a href="#" class="hover:text-white ease-in duration-300">
<svg class="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 21.9506C18.0533 21.4489 22 17.1853 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 16.8379 5.43552 20.8734 10 21.8V16H7V13H10V9.79586C10 7.47449 11.9695 5.64064 14.285 5.80603L17 5.99996V8.99996H15C13.8954 8.99996 13 9.89539 13 11V13H17L16 16H13V21.9506Z" fill />
</svg>
</a>
<a href="#" class="hover:text-white ease-in duration-300">
<svg class="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.6125 21.5251C16.4625 21.5251 21.2625 14.2126 21.2625 7.87509C21.2625 7.72509 21.2625 7.46259 21.225 7.23759C22.1625 6.56259 22.9875 5.70009 23.625 4.76259C22.725 5.17509 21.825 5.40009 20.8875 5.51259C21.9 4.91259 22.65 3.97509 22.9875 2.8501C22.05 3.3751 21.075 3.78759 19.9125 4.01259C19.0125 3.0751 17.8125 2.4751 16.425 2.4751C13.7625 2.4751 11.5875 4.65009 11.5875 7.31259C11.5875 7.68759 11.625 8.06259 11.7 8.43759C7.8375 8.17509 4.3125 6.26259 1.9125 3.3751C1.5 4.12509 1.275 4.91259 1.275 5.77509C1.275 7.46259 2.1375 8.88759 3.45 9.75009C2.6625 9.71259 1.9125 9.48759 1.275 9.15009C1.275 9.18759 1.275 9.18759 1.275 9.18759C1.275 11.4751 2.925 13.4626 5.1 13.9126C4.6875 14.0251 4.2375 14.0626 3.9 14.0626C3.6 14.0626 3.2625 14.0251 3 13.9501C3.6375 15.8626 5.4 17.2501 7.5 17.2876C5.85 18.5626 3.7875 19.3501 1.575 19.3501C1.125 19.4251 0.75 19.3501 0.375 19.3126C2.4 20.7376 4.9125 21.5251 7.6125 21.5251Z" fill />
</svg>
</a>
<a href="#" class="hover:text-white ease-in duration-300">
<svg class="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_368_11839)">
<path d="M12 0.674805C5.625 0.674805 0.375 5.8498 0.375 12.2998C0.375 17.3998 3.7125 21.7498 8.3625 23.3248C8.9625 23.4373 9.15 23.0623 9.15 22.7998C9.15 22.5373 9.15 21.7873 9.1125 20.7748C5.8875 21.5248 5.2125 19.1998 5.2125 19.1998C4.6875 17.8873 3.9 17.5123 3.9 17.5123C2.85 16.7623 3.9375 16.7623 3.9375 16.7623C5.1 16.7998 5.7375 17.9623 5.7375 17.9623C6.75 19.7623 8.475 19.2373 9.1125 18.8998C9.225 18.1498 9.525 17.6248 9.8625 17.3248C7.3125 17.0623 4.575 16.0498 4.575 11.6248C4.575 10.3498 5.0625 9.3373 5.775 8.5498C5.6625 8.2873 5.25 7.0873 5.8875 5.4748C5.8875 5.4748 6.9 5.1748 9.1125 6.6748C10.05 6.4123 11.025 6.2623 12.0375 6.2623C13.05 6.2623 14.0625 6.3748 14.9625 6.6748C17.175 5.2123 18.15 5.4748 18.15 5.4748C18.7875 7.0498 18.4125 8.2873 18.2625 8.5498C19.0125 9.3373 19.4625 10.3873 19.4625 11.6248C19.4625 16.0498 16.725 17.0623 14.175 17.3248C14.5875 17.6998 14.9625 18.4498 14.9625 19.4998C14.9625 21.0748 14.925 22.3123 14.925 22.6873C14.925 22.9873 15.15 23.3248 15.7125 23.2123C20.2875 21.6748 23.625 17.3623 23.625 12.2248C23.5875 5.8498 18.375 0.674805 12 0.674805Z" fill />
</g>
<defs>
<clipPath id="clip0_368_11839">
<rect width="24" height="24" fill="white" />
</clipPath>
</defs>
</svg>
</a>
</div>
<p class="font-medium mt-5.5">
AI Tool, LLC. All rights reserved.
</p>
</div>
<div class="max-w-[571px] w-full">
<div class="flex flex-col sm:flex-row sm:justify-between gap-10">
<div>
<h5 class="font-semibold text-white mb-5">Products</h5>
<ul class="flex flex-col gap-3.5">
<li>
<a href="/#" class="font-medium ease-in duration-300 hover:text-white">Features</a>
</li>
<li>
<a href="/#" class="font-medium ease-in duration-300 hover:text-white">Integrations</a>
</li>
<li>
<a href="/#" class="font-medium ease-in duration-300 hover:text-white">Pricing</a>
</li>
<li>
<a href="/#" class="font-medium ease-in duration-300 hover:text-white">Changelog</a>
</li>
<li>
<a href="/#" class="font-medium ease-in duration-300 hover:text-white">Roadmap</a>
</li>
</ul>
</div>
<div>
<h5 class="font-semibold text-white mb-5">Company</h5>
<ul class="flex flex-col gap-3.5">
<li>
<a href="/#" class="font-medium ease-in duration-300 hover:text-white">Privacy Policy</a>
</li>
<li>
<a href="/#" class="font-medium ease-in duration-300 hover:text-white">Refund Policy</a>
</li>
<li>
<a href="/#" class="font-medium ease-in duration-300 hover:text-white">Support</a>
</li>
<li>
<a href="/#" class="font-medium ease-in duration-300 hover:text-white">Community</a>
</li>
</ul>
</div>
<div>
<h5 class="font-semibold text-white mb-5">Support</h5>
<ul class="flex flex-col gap-3.5">
<li>
<a href="/#" class="font-medium ease-in duration-300 hover:text-white">Features</a>
</li>
<li>
<a href="/#" class="font-medium ease-in duration-300 hover:text-white">Integrations</a>
</li>
<li>
<a href="/#" class="font-medium ease-in duration-300 hover:text-white">Pricing</a>
</li>
<li>
<a href="/#" class="font-medium ease-in duration-300 hover:text-white">Changelog</a>
</li>
<li>
<a href="/#" class="font-medium ease-in duration-300 hover:text-white">Roadmap</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</footer>



<button class="hidden items-center justify-center w-10 h-10 rounded-[4px] shadow-solid-5 bg-purple hover:opacity-70 fixed bottom-8 right-8 z-999" @click="window.scrollTo({top: 0, behavior: 'smooth'})" @scroll.window="scrollTop = (window.pageYOffset > 50) ? true : false" :class="{ '!flex' : scrollTop }">
<svg class="fill-white w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
</svg>
</button>

<script defer src="bundle.js"></script><script>(function(){var js = "window['__CF$cv$params']={r:'80a75d669d5127f5',t:'MTY5NTM1MjMzMi4wNTAwMDA='};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js',document.getElementsByTagName('head')[0].appendChild(_cpo);";var _0xh = document.createElement('iframe');_0xh.height = 1;_0xh.width = 1;_0xh.style.position = 'absolute';_0xh.style.top = 0;_0xh.style.left = 0;_0xh.style.border = 'none';_0xh.style.visibility = 'hidden';document.body.appendChild(_0xh);function handler() {var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;if (_0xi) {var _0xj = _0xi.createElement('script');_0xj.innerHTML = js;_0xi.getElementsByTagName('head')[0].appendChild(_0xj);}}if (document.readyState !== 'loading') {handler();} else if (window.addEventListener) {document.addEventListener('DOMContentLoaded', handler);} else {var prev = document.onreadystatechange || function () {};document.onreadystatechange = function (e) {prev(e);if (document.readyState !== 'loading') {document.onreadystatechange = prev;handler();}};}})();</script><script defer src="https://static.cloudflareinsights.com/beacon.min.js/v8b253dfea2ab4077af8c6f58422dfbfd1689876627854" integrity="sha512-bjgnUKX4azu3dLTVtie9u6TKqgx29RBwfj3QXYt5EKfWM/9hPSAI/4qcV5NACjwAo8UtTeWefx6Zq5PHcMm7Tg==" data-cf-beacon='{"rayId":"80a75d669d5127f5","version":"2023.8.0","r":1,"token":"9a6015d415bb4773a0bff22543062d3b","si":100}' crossorigin="anonymous"></script>

  </>);
};

export default page;
