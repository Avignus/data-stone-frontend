<template>
  <div class="navbar-wrapper">
    <header>
      <h1>Cadastro de produtos e clientes</h1>  
      <nav>
        <router-link :to="{ name: 'create-client' }">Cadastrar cliente</router-link>          
        <router-link :to="{ name: 'create-product' }">Cadastrar produto</router-link>
        <router-link :to="{ name: 'clients-list' }">Listar clientes</router-link>
        
      </nav>
    </header>
  </div>
</template>
