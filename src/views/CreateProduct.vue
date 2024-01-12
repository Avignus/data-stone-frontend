<template>
  <div id="register-client-form-container">
    <h1 id="register-client-title" >Cadastrar produto</h1>
    <form id="register-client-form" @submit.prevent="submitForm">
      <label>Nome:</label>
      <input type="text" v-model="name" required>
      <label>Ativo:</label>
      <input id="simple-box" type="checkbox" v-model="active" required>
      <!-- <select class="select-active" v-model="active">
        <option class="select-active-options" v-for="option in options" :key="option.value" :value="option.value">
          {{ option.value === true ? 'Sim' : 'Não' }}
        </option>
      </select> -->
      <button id="register-button">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import { ref, toRefs } from 'vue';
// import { useRouter } from 'vue-router'
import {formatClientDataObject} from '../service/utils'
export default {
  name: 'CreateProduct',
  setup() {
    const name = ref('')
    const active = ref(null)

    const options = [{label: "Sim", value: true}, {label: "Não", value: false}]
    
    const submitFormData = {
      name, active, id: {
        value: "40"
      }
    }
    console.log(submitFormData);
    // const router = useRouter()
    const submitForm = async () => {
      const formData = formatClientDataObject(submitFormData)
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/save-product`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data = await response.json()
      console.log(data);
      // router.push({ name: 'home' })
    } 


    return {
      ...toRefs(submitFormData),
      submitForm,
      options
    }
}}
</script>

<style scoped>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left
}

input,
textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee
}

textarea {
  height: 130px;
}

label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 20px;
}

label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: -2px;
  padding: 3px;
  padding-right: 40px;
  left: -20px;
  transform: rotateZ(-1.5deg);
}

button {
  display: block;
  margin-top: 30px;
  background: #5322a8;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
  color: white;
  cursor: pointer;
}

.pill {
  display: inline-block;
  margin: 10px 10px 0px;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
}
.select-active {
  height: 50px;
}
.select-active-options {
  height: 50px;
}
</style>