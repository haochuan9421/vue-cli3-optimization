<template>
  <div class="wrap">
    <el-table :data="tableData" v-loading="loading" border header-row-class-name="table-header" style="width:100%">
      <el-table-column align="center" prop="name" label="name" min-width="120"></el-table-column>
      <el-table-column align="center" prop="phone" label="phone" min-width="150"></el-table-column>
      <el-table-column align="center" prop="email" label="email" min-width="150"></el-table-column>
      <el-table-column align="center" label="city" min-width="150">
        <template slot-scope="scope">
          <span>{{scope.row.address.city}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="company" min-width="150">
        <template slot-scope="scope">
          <span>{{scope.row.company.name}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="website" label="website" min-width="150"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      loading: true
    }
  },
  computed: {
    ...mapState({
      'tableData': state => state.contacts.list
    })
  },
  mounted () {
    this.getTableData().finally(() => {
      this.loading = false
    })
  },
  methods: {
    ...mapActions('contacts', {
      'getTableData': 'getList'
    })
  }
}
</script>

<style>
.wrap{
  padding: 30px 100px;
}
.el-table .table-header th{
  background-color: #edf4fb;
}
</style>
