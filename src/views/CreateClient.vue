<template>
  <div id="register-client-form-container">
    <h1 id="register-client-title" >Cadastrar cliente</h1>
    <form id="register-client-form" @submit.prevent="submitForm">
      <label>Nome:</label>
      <input type="text" v-model="name" required>
      <label>Documento:</label>
      <input type="text" v-model="document" required>
      <label>Telefone:</label>
      <input type="text" v-model="phone" required>
      <label>Email:</label>
      <input type="text" v-model="email" required>
      <label>Ativo:</label>
      <input id="simple-box" type="checkbox" v-model="active" required>
      <label>Products:</label>
      <select v-model="selectedOption">
        <option v-for="option in options" :key="option.value">
          {{ option.label }}
        </option>
      </select>
      <!-- <input type="text" v-model="tag" @keydown.enter.prevent="handeInputTag">
      <div class="pill" v-for="tag in tags" :key="tag" @click="deleteTag(tag)">
        #{{ tag }}
      </div> -->
      <button id="register-button">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import { ref, toRefs } from 'vue';
import { useRouter } from 'vue-router'
import {formatClientDataObject} from '../service/utils'
export default {
  name: 'CreateClient',
  setup() {
    const name = ref('')
    const document = ref('')
    const phone = ref('')
    const email = ref('')
    const active = ref(false)
    const tag = ref('')
    // const tags = ref([])
    const submitFormData = {
      name, document, phone, email, active
    }
    
    // const router = useRouter()
    const submitForm = async () => {
      const formData = formatClientDataObject(submitFormData)
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/save-user`, {
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
    // const handeInputTag = () => {
    //   // check if the current tag is already inside the tags array
    //   if (!tags.value.includes(tag.value)) {
    //     tag.value = tag.value.replace(/\s/) // remove the spaces in tag 
    //     tags.value = [...tags.value, tag.value] // input tag in the last index of tags array
    //   }
    //   tag.value = '' // clear the tag value after inserting
    // }

    // // delete the selected tag
    // const deleteTag = (tag) => {
    //   tags.value = tags.value.filter(item => item !== tag)
    // }

    return {
      ...toRefs(submitFormData),
      // tags,
      tag,
      submitForm,
      // handeInputTag,
      // deleteTag
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
</style>