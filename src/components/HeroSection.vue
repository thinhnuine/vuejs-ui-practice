<template>
  <div class="hero-section h-[55vh] text-[#fff]">
    <nav class="hero-section__nav px-5 md:px-3 container mx-auto flex items-center justify-between pt-[20px]">
      <h1 class="text-2xl font-bold">Besnik.</h1>
      <div class="hidden md:block nav-section__link md:w-[40%]">
        <ul class="flex items-center justify-around text-[#fff]">
          <li><a href="#" class="opacity-90">Solution</a></li>
          <li><a href="#" class="opacity-90">Plans</a></li>
          <li><a href="#" class="opacity-90">Resource</a></li>
          <li><a href="#" class="opacity-90">Blog</a></li>
        </ul>
      </div>
      <button class="hidden md:block py-2.5 px-8 rounded-3xl border border-[#FFFAF9]/20 bg-[#fff]/20">Request Demo</button>
      <button class="block md:hidden py-1 px-2.5 rounded border border-[#FFFAF9]/20 bg-[#fff]/20">&#9776;</button>
    </nav>
  </div>
    
</template>

<style>
  .hero-section {
    background-image: url('../assets/images/hero-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
  }

</style>