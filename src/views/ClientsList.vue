
<template>
  <table class="table table-bordered table-striped table-responsive">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Documento</th>
        <th>Telefone</th>
        <th>E-mail</th>
        <th>Ativo</th>
        <th>ID</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.document }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.email }}</td>
        <td :class="{ 'active': item.active, 'inactive': !item.active }" @click="toggleActive(item)">
          <i class="fa fa-toggle-on" v-if="item.active">
          </i>
          <i class="fa fa-toggle-off" v-else>
          </i>
        </td>
        <td>{{ item.id }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    // Chamar o método getData()
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/get-users`)
        const data = await response.json();
        this.data = data;
      } catch(error) {
        console.log(error)
      }
    },
    async toggleActive(item) {
      console.log({item})
      try {
        await fetch(`${import.meta.env.VITE_BASE_URL}/update-user-status`, {
          method: 'PATCH',    
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            id: item.id,
            active: !item.active
          })
        })
        const users = await fetch(`${import.meta.env.VITE_BASE_URL}/get-users`)
        const usersData = await users.json();
        this.data = usersData;
        window.location.reload()
      } catch(error) {
        console.log(error)
      }
    },
  },
};
</script>
