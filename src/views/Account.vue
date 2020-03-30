<template>
  <div>
    <!-- 搜索 -->
    <!--  -->
    <TableBox
      @tooles="handleTooles"
      :tableData="tableData"
      :tableHead="tableHead"
    />

    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <!-- 这里是修改用户的form表单 -->
      <el-form ref="form" :model="form" label-width="80px" :disabled="disabled">
        <el-form-item label="账户名称">
          <el-input v-model="form.username"></el-input> </el-form-item
        ><el-form-item label="账户权限">
          <el-select v-model="form.role" placeholder="请选择用户权限">
            <el-option label="管理员" value="1"></el-option>
            <el-option label="普通账号" value="2"></el-option>
          </el-select> </el-form-item
        ><el-form-item label="账户密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { deleteUser, editUser } from "../api/index";
import TableBox from "../components/filterTable/table";
export default {
  name: "Account",
  components: {
    TableBox
  },
  data() {
    return {
      tableHead: [
        { label: "账户名", prop: "username" },
        { label: "权限等级", prop: "role" },
        { label: "操作", prop: false }
      ],
      tableData: [
        {
          uid: "YJ1IJOII4C",
          token: "eyJ1Ijoii4ciLCJwIjoiY240NTY0NjVhc2Q5MzgifQ==",
          username: "admin",
          loginState: true,
          role: "1"
        },
        {
          uid: "YJ1IJOII4CBB",
          token: "eyJ1Ijoii4cBBiLCJwIjoiY240NTY0NjVhc2Q5MzgifQ==",
          username: "kefu",
          loginState: true,
          role: "2"
        }
      ],
      //控制表格是否显示
      dialogVisible: false,
      form: { uid: "", username: "", role: "", password: "" },
      //是否禁用form表单项  disabled
      disabled: false,
      index: 0
    };
  },
  methods: {
    //C弹出框确认事件
    dialogSubmit() {
      //走接口要区分是编辑还是删除
      if (this.disabled) {
        deleteUser(this.form).then(res => {
          if (res) {
            this.$message.success("删除成功");
            this.tableData.splice(this.index, 1);
          } else {
            this.$message.error("请求失败");
          }
          //关掉弹窗
          this.dialogVisible = false;
        });
      } else {
        editUser(this.form).then(res => {
          if (res) {
            this.$message.success("修改成功");
            this.tableData[this.index].username = this.form.username;
            this.tableData[this.index].role = this.form.role;
          } else {
            this.$message.error("请求失败");
          }
          this.dialogVisible = false;
        });
      }
    },
    //接受表格传过来的数据
    handleTooles(data) {
      //把值存起来，赋给弹窗里的form表单
      this.form.username = data.row.username;
      this.form.role = data.row.role;
      this.form.uid = data.row.uid;
      this.ndex = data.index;
      this.disabled = data.type === "edit" ? false : true;
      //唤起弹窗
      this.dialogVisible = true;
    }
  }
};
</script>

<style>
</style>